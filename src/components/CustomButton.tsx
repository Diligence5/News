import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator, View, StyleSheet, ViewStyle } from 'react-native';
import { Color, FontSizes } from '../themes/theme';
import { FontFamily } from '../constants/FontFamily';

interface CustomButtonProps {
    title?: string;
    onPress: () => void;
    loading: boolean;
    buttonStyle?: ViewStyle;
}

const CustomButton: React.FC<CustomButtonProps> = ({ title, onPress, loading,buttonStyle }) => {
    return (
        <TouchableOpacity
            activeOpacity={0.7}
            style={[styles.button,buttonStyle, loading && styles.buttonDisabled]}
            onPress={onPress}
            disabled={loading}
        >
            <View style={styles.buttonContent}>
                {loading ? (
                    <ActivityIndicator size="small" color={Color.white} />
                ) : (
                    <Text style={styles.buttonText}>{title}</Text>
                )}
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: Color.primary,
        borderRadius: 12,
        height: 48,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonDisabled: {
        backgroundColor: Color.secondary,
    },
    buttonContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    buttonText: {
        fontFamily: FontFamily.bold,
        fontSize: FontSizes.size16,
        color: Color.white,
        lineHeight: 16,
        // textTransform:'capitalize'
    }
});

export default CustomButton;
