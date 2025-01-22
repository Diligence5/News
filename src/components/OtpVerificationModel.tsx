import React, { useState, useRef, useEffect } from 'react';
import {
    SafeAreaView,
    StatusBar,
    Text,
    View,
    TouchableOpacity,
    StyleSheet,
    Image,
    TextInput,
    Dimensions,
} from 'react-native';
import CustomButton from './CustomButton';
import Modal from 'react-native-modal';
import { Color } from '../themes/theme';
import images from "../../assets/images";
import { FontSizes } from '../themes/theme';
import { FontFamily } from '../constants/FontFamily';
import SuccessModal from '../components/SuccessModal'; // Import SuccessModal

interface OtpVerificationScreenProps {
    visible: boolean;
    onClose: () => void;
    navigation: any;
}

const { width } = Dimensions.get('window');
const inputWidth = width * 0.15;

const OtpVerificationModel: React.FC<OtpVerificationScreenProps> = ({ visible, onClose, navigation }) => {
    const [otp, setOtp] = useState(['', '', '', '']);
    const inputRefs = useRef<(TextInput | null)[]>([]);
    const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
    const [isVerifying, setIsVerifying] = useState(false);
    const [isSuccessVisible, setIsSuccessVisible] = useState(false); // State for SuccessModal

    useEffect(() => {
        if (visible) {
            inputRefs.current[0]?.focus();
        } else {
            setOtp(['', '', '', '']);
        }
    }, [visible]);

    const handleVerify = () => {
        setIsVerifying(true);
        // Simulate verification process
        setTimeout(() => {
            setIsVerifying(false);
            setIsSuccessVisible(true); // Show SuccessModal
        }, 2000);
    };

    const handleResend = () => {
        // Handle resend OTP logic
    };

    const handleOtpChange = (text: string, index: number) => {
        const newOtp = [...otp];
        newOtp[index] = text;
        setOtp(newOtp);

        if (text && index < 3) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyPress = (e: any, index: number) => {
        if (e.nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    return (
        <>
            <Modal
                isVisible={visible && !isSuccessVisible} // Ensure OTP modal stays closed when SuccessModal is open
                onBackdropPress={onClose}
                style={styles.modal}
            >
                <SafeAreaView style={styles.container}>
                    <StatusBar backgroundColor={Color.white} barStyle={"dark-content"} />
                    <View style={styles.modalContent}>
                        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                            <Image source={images.icon_cross} style={styles.closeIcon} />
                        </TouchableOpacity>
                        <Text style={styles.title}>OTP Verification</Text>
                        <View style={styles.subtitleContainer}>
                            <Text style={styles.subtitle}>
                                Please enter OTP you have received on +91*******00
                            </Text>
                            <TouchableOpacity onPress={onClose}>
                                <Text style={styles.changeText}>Change</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.otpContainer}>
                            {otp.map((digit, index) => (
                                <TextInput
                                    key={index}
                                    style={[
                                        styles.otpInput,
                                        focusedIndex === index && styles.otpInputFocused,
                                    ]}
                                    keyboardType="number-pad"
                                    maxLength={1}
                                    value={digit}
                                    onChangeText={(text) => handleOtpChange(text, index)}
                                    onKeyPress={(e) => handleKeyPress(e, index)}
                                    ref={(ref) => (inputRefs.current[index] = ref)}
                                    onFocus={() => setFocusedIndex(index)}
                                    onBlur={() => setFocusedIndex(null)}
                                    cursorColor={Color.primary}
                                />
                            ))}
                        </View>
                        <CustomButton
                            title="Verify OTP"
                            onPress={()=>setIsSuccessVisible(true)} // Change to handleVerify
                            loading={isVerifying}
                        />
                        <TouchableOpacity onPress={handleResend}>
                            <Text style={styles.resendText}>Resend</Text>
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
            </Modal>

            {/* SuccessModal */}
            <SuccessModal
                visible={isSuccessVisible}
                onClose={() => setIsSuccessVisible(false)} // Close only the SuccessModal
                title="Success!"
                description="OTP verification successful"
                buttonText="Set Location"
                icon={images.icon_succcess} // Provide your tick icon
                onButtonPress={() => {
                    setIsSuccessVisible(false); // Close SuccessModal
                    onClose(); // Close the parent OTP modal
                    navigation.navigate('AddAddress');
                }}
            />
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        width: '100%',
        backgroundColor: Color.white,
        borderRadius: 12,
        padding: 20,
        alignItems: 'center',
        position: 'relative',
    },
    closeButton: {
        position: 'absolute',
        top: 10,
        right: 10,
    },
    closeIcon: {
        width: 20,
        height: 20,
    },
    title: {
        fontSize: FontSizes.size20,
        fontFamily: FontFamily.bold,
        color: Color.black_text,
        marginBottom: 15,
    },
    subtitleContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginBottom: 20,
    },
    subtitle: {
        fontSize: FontSizes.size14,
        fontFamily: FontFamily.regular,
        color: Color.gray,
        textAlign: 'center',
    },
    otpContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 20,
    },
    otpInput: {
        width: inputWidth,
        height: inputWidth,
        borderWidth: 1,
        borderColor: Color.border, // Default border color
        borderRadius: 10,
        textAlign: 'center',
        fontSize: FontSizes.size20,
        fontFamily: FontFamily.semi_bold,
        backgroundColor: Color.otp_input_bg, // Background color
    },
    otpInputFocused: {
        borderColor: Color.primary, // Focus border color
    },
    resendText: {
        color: Color.primary,
        fontSize: FontSizes.size14,
        fontFamily: FontFamily.medium,
        marginTop: 10,
        textAlign: 'center',
    },
    changeText: {
        color: Color.primary,
        fontSize: FontSizes.size14,
        fontFamily: FontFamily.medium,
        marginLeft: 5,
    },
    modal: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default OtpVerificationModel;
