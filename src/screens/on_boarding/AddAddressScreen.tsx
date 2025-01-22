import React from 'react';
import { SafeAreaView, StatusBar, Text, View, StyleSheet, ScrollView } from 'react-native';
import { Formik } from 'formik';
import CustomButton from '../../components/CustomButton';
import CustomTextInput from '../../components/CustomTextInput';
import CustomViewForDropDown from '../../components/CustomViewForDropDown';
import { Color, FontSizes } from '../../themes/theme';
import { FontFamily } from '../../constants/FontFamily';
import strings from '../../localization/strings';

const AddAddressScreen: React.FC = () => {
    const handleDropdownPress = (field: string) => {
        console.log(`Dropdown pressed for: ${field}`);
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={Color.primary} barStyle="light-content" />
            <View style={styles.header}>
                <Text style={styles.headerTitle}>{strings.add_address}</Text>
            </View>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Formik
                    initialValues={{
                        wingFlatNo: '',
                        area: '',
                        locality: '',
                        city: '',
                        district: '',
                        state: '',
                        country: '',
                        pincode: ''
                    }}
                    onSubmit={(values) => {
                        console.log(values);
                    }}
                >
                    {({ handleChange, handleSubmit, values }) => (
                        <View style={styles.formContainer}>
                            <CustomTextInput
                                title={strings.wing_flat_no}
                                placeholder={strings.wing_flat_no}
                                textInputStyle={styles.textInput}
                                onChangeText={handleChange('wingFlatNo')}
                                value={values.wingFlatNo}
                            />
                            <CustomTextInput
                                title={strings.area}
                                placeholder={strings.area}
                                textInputStyle={styles.textInput}
                                onChangeText={handleChange('area')}
                                value={values.area}
                            />
                            <CustomTextInput
                                title={strings.locality}
                                placeholder={strings.locality}
                                textInputStyle={styles.textInput}
                                onChangeText={handleChange('locality')}
                                value={values.locality}
                            />
                            <CustomViewForDropDown
                                title={strings.city}
                                placeholder={strings.city}
                                onChangeText={handleChange('city')}
                                pressOnDropDown={() => handleDropdownPress('city')}
                                value={values.city}
                            />
                            <CustomViewForDropDown
                                title={strings.district}
                                placeholder={strings.district}
                                onChangeText={handleChange('district')}
                                pressOnDropDown={() => handleDropdownPress('district')}
                                value={values.district}
                            />
                            <CustomViewForDropDown
                                title={strings.state}
                                placeholder={strings.state}
                                onChangeText={handleChange('state')}
                                pressOnDropDown={() => handleDropdownPress('state')}
                                value={values.state}
                            />
                            <CustomViewForDropDown
                                title={strings.country}
                                placeholder={strings.country}
                                onChangeText={handleChange('country')}
                                pressOnDropDown={() => handleDropdownPress('country')}
                                value={values.country}
                            />
                            <CustomTextInput
                                title={strings.pincode}
                                placeholder={strings.pincode}
                                textInputStyle={styles.textInput}
                                onChangeText={handleChange('pincode')}
                                value={values.pincode}
                                keyboardType="numeric"
                            />
                            <CustomButton
                                title={strings.save_address}
                                onPress={handleSubmit}
                                loading={false}
                                buttonStyle={{ marginTop: 28 }}
                            />
                        </View>
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
    header: {
        backgroundColor: Color.primary,
        height: 56,
        justifyContent: 'center',
        paddingHorizontal: 16,
    },
    headerTitle: {
        color: Color.white,
        fontSize: FontSizes.size18,
        fontFamily: FontFamily.bold,
    },
    textInput: {
        color: Color.placeholder,
    },
    scrollContainer: {
        flexGrow: 1,
    },
    formContainer: {
        padding: 16,
    }
});

export default AddAddressScreen; 