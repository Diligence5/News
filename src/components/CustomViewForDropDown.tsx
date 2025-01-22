import React, { forwardRef } from "react";
import {
    StyleSheet,
    Text,
    TextInput,
    TextInputProps as RNTextInputProps,
    View,
    StyleProp,
    ViewStyle,
    TextStyle,
    Image,
    TouchableOpacity,
    TouchableWithoutFeedback,
} from "react-native";
import { Color, FontSizes } from "../themes/theme";
import images from "../../assets/images";
import { FontFamily } from "../constants/FontFamily";

interface CustomTextInputProps extends RNTextInputProps {
    title?: string;
    placeholder?: string;
    onChangeText?: (text: string) => void;
    containerStyle?: StyleProp<ViewStyle>;
    textInputStyle?: StyleProp<TextStyle>;
    showPassword?: boolean;
    pressOnDropDown?: () => void;
    secureTextEntry?: boolean; // Add this to toggle text visibility
}

const CustomViewForDropDown = forwardRef<TextInput, CustomTextInputProps>(
    (
        {
            placeholder,
            title,
            onChangeText,
            containerStyle,
            textInputStyle,
            showPassword,
            pressOnDropDown,
            secureTextEntry,
            ...rest
        },
        ref
    ): React.JSX.Element => {
        return (
            <View style={StyleSheet.flatten([styles.container, containerStyle])}>
                {title && <Text style={styles.header_text_style}>{title}</Text>}
                <TouchableWithoutFeedback onPress={pressOnDropDown} >
                    <View
                        style={StyleSheet.flatten([styles.text_input_container, textInputStyle])}>
                        <TextInput
                            onPress={pressOnDropDown}
                            placeholder={placeholder}
                            editable={false}
                            style={styles.tex_input_style}
                            placeholderTextColor={Color.placeholder}
                            onChangeText={onChangeText}
                            selectionColor={Color.primary}
                            returnKeyLabel="done"
                            returnKeyType="done"
                            secureTextEntry={secureTextEntry} // Pass secureTextEntry for password field
                            {...rest} // Pass any additional props
                        />
                        <View style={{ alignSelf: "center" }} >
                            <Image
                                source={images.icon_drop_down}

                            />
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        );
    }
);
const styles = StyleSheet.create({
    container: {
        marginBottom: 4,
        marginTop: 10,
    },
    header_text_style: {
        fontFamily: FontFamily.semi_bold,
        fontSize: FontSizes.size14,
        color: Color.black_text,
    },
    text_input_container: {
        paddingHorizontal: 16,
        backgroundColor: Color.text_input_bg,
        borderColor: Color.placeholder,
        marginTop: 8,
        borderRadius: 8, // Optional: For rounded input
        flexDirection: 'row',
        height: 48,
    },
    tex_input_style: {
        fontSize: FontSizes.size14,
        fontFamily: FontFamily.medium,
        color: Color.primary,
        flex: 1,
    },

});
export default CustomViewForDropDown;
