import { SafeAreaView, StatusBar, Text, View, TextInput, TouchableOpacity, Image, Linking } from "react-native";
import { useDispatch } from "react-redux";
import { setAccessToken } from "../../../redux/slices/authSlice";
import { Color } from "../../../themes/theme";
import styles from "./styles";
import strings from "../../../localization/strings";
import images from "../../../../assets/images";
import { CountryPicker } from "react-native-country-codes-picker";
import { useMemo, useState } from "react";
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../../navigation/Routes'; // Adjust the import path as necessary
import { StackNavigationProp } from '@react-navigation/stack';
import OtpVerificationModel from '../../../components/OtpVerificationModel'; // Adjust the import path as necessary

type SignInScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

function SignInScreen(): React.JSX.Element {
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const [countryCode, setCountryCode] = useState('+91');
    const [selectedFlag, setSelectedFlag] = useState('🇮🇳');
    const [phoneNumber, setPhoneNumber] = useState('');
    const navigation = useNavigation<SignInScreenNavigationProp>();
    const [isModalVisible, setModalVisible] = useState(false);

    const handleLinkPress = (url: string) => {
        Linking.openURL(url);
    };

    const countryPicker = useMemo(() => (
        <CountryPicker
            show={show}
            pickerButtonOnPress={(item) => {
                setCountryCode(item.dial_code);
                setSelectedFlag(item.flag);
                setShow(false);
            }}
            style={{
                modal: {
                    height: 400,
                },
            }}
            lang="en"
            onBackdropPress={() => setShow(false)}
        />
    ), [show]);

    const renderTeMobileNumber = useMemo(() => {
        return (
            <View style={styles.inputContainer}>
                <TouchableOpacity
                    style={styles.countryPickerButton}
                    onPress={() => setShow(true)}
                >
                    <Text style={styles.flagIcon}>{selectedFlag}</Text>
                    <Text style={styles.countryCodeText}>{countryCode}</Text>
                    <Image source={images.icon_down_arrow} style={styles.arrowIcon} />
                </TouchableOpacity>
                <TextInput
                    style={styles.phoneInput}
                    placeholder={strings.phone_number}
                    placeholderTextColor={Color.placeholder}
                    keyboardType="phone-pad"
                    value={phoneNumber}
                    cursorColor={Color.primary}
                    onChangeText={setPhoneNumber}
                />
            </View>
        )
    }, [phoneNumber])

    const handleSignIn = () => {
        // Logic for signing in (e.g., API call)
        setModalVisible(true); // Show the OTP modal
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={Color.white} barStyle={"dark-content"} />
            <View style={styles.logoContainer}>
                <Image source={images.icon_logo} />
            </View>
            <Text style={styles.title}>{strings.login}</Text>
            <Text style={styles.phoneTitle}>{strings.phone_number}</Text>
            {renderTeMobileNumber}

            {countryPicker}

            <TouchableOpacity style={styles.button} onPress={handleSignIn}>
                <Text style={styles.buttonText}>{strings.sign_in}</Text>
            </TouchableOpacity>
            <OtpVerificationModel visible={isModalVisible} onClose={() => setModalVisible(false)} navigation={navigation} />
            <View style={styles.agreementContainer}>
                <Text style={styles.agreementText}>
                    {strings.agreement_text_part1}

                    <Text style={styles.linkText} onPress={() => handleLinkPress('https://example.com/terms')}>{strings.terms_of_service}</Text>

                    {strings.agreement_text_part2}

                    <Text onPress={() => handleLinkPress('https://example.com/privacy')} style={styles.linkText}>{strings.privacy_policy}</Text>

                    {strings.agreement_text_part3}
                </Text>
            </View>
        </SafeAreaView>
    )
}

export default SignInScreen;