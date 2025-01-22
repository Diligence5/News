// ES6 module syntax
import LocalizedStrings from 'react-native-localization';

// CommonJS syntax
// let LocalizedStrings  = require ('react-native-localization');

let strings = new LocalizedStrings({
  en: {
    login: 'Log in',
    home: 'Home',
    my_needs: 'My Needs',
    my_response: 'My Response',
    profile: 'Profile',
    phone_number: 'Phone Number',
    sign_in: 'Sign In',
    agreement_text_part1: 'By providing my phone number, I hereby agree and accept the ',
    terms_of_service: 'Terms of service',
    agreement_text_part2: ' and ',
    privacy_policy: 'Privacy policies',
    agreement_text_part3: ' in use of app.',
    add_address: 'Add Address',
    wing_flat_no: 'Wing-Flat No.',
    area: 'Area (Sub - Locality)',
    locality: 'Locality',
    city: 'City',
    state: 'State',
    country: 'Country',
    pincode: 'Pincode',
    save_address: 'Save Address',
  },
  it: {},
});

export default strings;
