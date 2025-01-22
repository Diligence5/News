import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions,
} from 'react-native';
import CustomButton from './CustomButton';
import Modal from 'react-native-modal';
import { Color } from '../themes/theme';
import { FontFamily } from '../constants/FontFamily';

interface SuccessModalProps {
    visible: boolean;
    onClose: () => void;
    title: string;
    description: string;
    buttonText: string;
    icon?: any; // Pass an icon source for customization
    onButtonPress: () => void;
}

const { width } = Dimensions.get('window');

const SuccessModal: React.FC<SuccessModalProps> = ({
    visible,
    onClose,
    title,
    description,
    buttonText,
    icon,
    onButtonPress,
}) => {
    return (
        <Modal
            isVisible={visible}
            onBackdropPress={onClose}
            style={styles.modal}
        >
            <View style={styles.container}>
                {/* Optional icon */}
                {icon && (
                    <View style={styles.iconContainer}>
                        <Image source={icon} style={styles.icon} />
                    </View>
                )}
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.description}>{description}</Text>
                <CustomButton 
                    title={buttonText}
                    onPress={onButtonPress}
                    loading={false}
                    buttonStyle={styles.button}
                />
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modal: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        width:"100%",
        backgroundColor: Color.white,
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
    },
    iconContainer: {
        backgroundColor:  Color.white, // Light green background
        borderRadius: 50,
        padding: 15,
        marginBottom: 10,
    },
    icon: {
        width: 62,
        height: 62,
    },
    title: {
        fontSize: 20,
     fontFamily:FontFamily.bold,
        color: Color.black_text,
        marginBottom: 10,
        textAlign: 'center',
    },
    description: {
        fontSize: 16,
        color: Color.gray,
        marginBottom: 10,
        textAlign: 'center',
    },
    button: {
        marginTop: 10,
        color: Color.primary,
    },
});

export default SuccessModal;
