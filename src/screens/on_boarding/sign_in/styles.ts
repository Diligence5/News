import { StyleSheet } from 'react-native';
import { Color } from '../../../themes/theme';
import { FontSizes } from '../../../themes/theme';
import { FontFamily } from '../../../constants/FontFamily';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white,
    padding: 16
  },
  logoContainer: {
    marginBottom: 20,
    marginTop: 20,
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
  },
  title: {
    fontSize: FontSizes.size27,
    color: Color.black_text,
    marginBottom: 2,
    fontFamily: FontFamily.semi_bold
  },
  phoneTitle: {
    fontSize: FontSizes.size15,
    color: Color.black_text,
    marginBottom: 8,
    fontFamily: FontFamily.semi_bold
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Color.text_input_bg,
    borderRadius: 8,
    marginBottom: 20,
    padding: 12
  },
  countryPickerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    height: '100%',
  },
  flagIcon: {
    width: 24,
    height: 24,
    borderRadius: 24, // Changed to make it look like a circle
  },
  countryCodeText: {
    marginLeft: 8,
    fontSize: FontSizes.size14,
    color: Color.black_text,
    fontFamily: FontFamily.semi_bold,
  },
  arrowIcon: {

    marginLeft: 4,
  },

  phoneInput: {
    flex: 1,
    height: '100%',
    paddingHorizontal: 10,
    fontSize: FontSizes.size14,
    color: Color.placeholder,
    fontFamily: FontFamily.semi_bold,
  },
  button: {
    backgroundColor: Color.primary,
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: Color.white,
    fontSize: FontSizes.size16,
    fontFamily: FontFamily.bold
  },
  agreementContainer: {
    marginTop: 20,
    // textAlign: 'center',
  },
  agreementText: {
    color: Color.gray,
    fontSize: FontSizes.size14,
    fontFamily: FontFamily.regular,
  },
  linkText: {
    color: Color.primary,
    fontFamily: FontFamily.bold,
    fontSize: FontSizes.size14,
  },
});

export default styles
