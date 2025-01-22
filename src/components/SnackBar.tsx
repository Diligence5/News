import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Snackbar } from 'react-native-paper';
import { Color, FontSizes } from '../themes/theme';
import { FontFamily } from '../constants/FontFamily';

interface SnackBarProps {
    visible: boolean;
    onDismiss: () => void;
    message: string;
    successColor?: string; // Fixed the type for successColor
}

const SnackBar: React.FC<SnackBarProps> = ({ visible, onDismiss, message, successColor }) => {
    return (
        <Snackbar
            visible={visible}
            onDismiss={onDismiss}
            style={[styles.snackbar, successColor ? { backgroundColor: successColor } : { backgroundColor: Color.red }]}
            duration={Snackbar.DURATION_SHORT}
        >
            <Text style={styles.message}>{message}</Text>
        </Snackbar>
    );
};

const styles = StyleSheet.create({
    snackbar: {
        borderRadius: 4, // Optional: Makes Snackbar look better
    },
    message: {
        fontFamily: FontFamily.medium,
        fontSize: FontSizes.size14,
        color: Color.white,
        lineHeight:14
    },
});

export default SnackBar;
