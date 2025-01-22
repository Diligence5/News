import React from 'react';
import { SafeAreaView, StatusBar, Text, View, StyleSheet, TextInput, ScrollView } from 'react-native';
import { Formik } from 'formik';
import CustomButton from '../../components/CustomButton'; // Ensure this path is correct
import { Color, FontSizes } from '../../themes/theme';
import images from '../../../assets/images';
import strings from '../../localization/strings';

const AddAddressScreen: React.FC = () => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={Color.primary} barStyle="light-content" />
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Text style={styles.title}>{strings.add_address}</Text>
                <Formik
                    initialValues={{ wingFlatNo: '', area: '', locality: '', city: '', state: '', country: '', pincode: '' }}
                    onSubmit={(values) => {
                        console.log(values);
                        // Handle form submission
                    }}
                >
                    {({ handleChange, handleBlur, handleSubmit, values }) => (
                        <>
                            <TextInput
                                style={styles.input}
                                placeholder={strings.wing_flat_no}
                                onChangeText={handleChange('wingFlatNo')}
                                onBlur={handleBlur('wingFlatNo')}
                                value={values.wingFlatNo}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder={strings.area}
                                onChangeText={handleChange('area')}
                                onBlur={handleBlur('area')}
                                value={values.area}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder={strings.locality}
                                onChangeText={handleChange('locality')}
                                onBlur={handleBlur('locality')}
                                value={values.locality}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder={strings.city}
                                onChangeText={handleChange('city')}
                                onBlur={handleBlur('city')}
                                value={values.city}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder={strings.state}
                                onChangeText={handleChange('state')}
                                onBlur={handleBlur('state')}
                                value={values.state}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder={strings.country}
                                onChangeText={handleChange('country')}
                                onBlur={handleBlur('country')}
                                value={values.country}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder={strings.pincode}
                                onChangeText={handleChange('pincode')}
                                onBlur={handleBlur('pincode')}
                                value={values.pincode}
                            />
                            <CustomButton 
                                title={strings.save_address || 'Save Address'}
                                onPress={handleSubmit} 
                                loading={false} 
                            />
                        </>
                    )}
                </Formik>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.white,
    },
    scrollContainer: {
        padding: 20,
    },
    title: {
        fontSize: FontSizes.size24,
        fontFamily: 'FontFamily.bold',
        color: Color.black_text,
        marginBottom: 20,
    },
    input: {
        height: 50,
        borderColor: Color.border,
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        marginBottom: 15,
        fontSize: FontSizes.size16,
        fontFamily: 'FontFamily.regular',
    },
});

export default AddAddressScreen; 