import { ImageSourcePropType } from 'react-native';

interface Images {
  icon_logo: ImageSourcePropType;
  icon_home: ImageSourcePropType;
  icon_my_needs: ImageSourcePropType;
  icon_my_response: ImageSourcePropType;
  icon_profile: ImageSourcePropType;
  icon_plus_bottom_tab: ImageSourcePropType;
  icon_ind_flag: ImageSourcePropType;
  icon_down_arrow: ImageSourcePropType;
  icon_cross: ImageSourcePropType;
  icon_succcess: ImageSourcePropType;
  icon_eye_close: ImageSourcePropType;
  icon_open_eye: ImageSourcePropType;
  icon_drop_down: ImageSourcePropType;
}

const images: Images = {
  icon_logo: require('./images/icon_logo.png'),
  icon_home: require('./images/icon_home.png'),
  icon_my_needs: require('./images/icon_my_needs.png'),
  icon_my_response: require('./images/icon_my_response.png'),
  icon_profile: require('./images/icon_profile.png'),
  icon_plus_bottom_tab: require('./images/icon_plus_bottom_tab.png'),
  icon_ind_flag: require('./images/icon_ind_flag.png'),
  icon_down_arrow: require('./images/icon_down_arrow.png'),
  icon_cross: require('./images/icon_cross.png'),
  icon_succcess: require('./images/icon_succcess.png'),
  icon_eye_close: require('./images/icon_eye_close.png'),
  icon_open_eye: require('./images/icon_open_eye.png'),
  icon_drop_down: require('./images/icon_drop_down.png'),
};
export default images;
