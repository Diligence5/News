import React from "react";
import { Image, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import HomeScreen from "../screens/home/HomeScreen";
import MyNeedsScreen from "../screens/my_needs/MyNeedsScreen";
import MyResponseScreen from "../screens/my_response/MyResponseScreen";
import ProfileScreen from "../screens/profile/ProfileScreen";
import { Color } from "../themes/theme";
import { FontFamily } from "../constants/FontFamily";
import images from "../../assets/images";
import strings from "../localization/strings";
import CreateNeedsScreen from "../screens/create_need/CreateNeedsScreen";

function BottomTab(props:any): React.JSX.Element {
    const Tab = createBottomTabNavigator();
    const insets = useSafeAreaInsets();
    const setTabBarTitle = (route: string) => {
        switch (route) {
            case "Home":
                return strings.home;
            case "MyNeeds":
                return strings.my_needs;
            case "MyResponse":
                return strings.my_response;
            case "Profile":
                return strings.profile;
            default:
                return '';
        }
    };

    return (
        <View style={{ flex: 1, paddingBottom: insets.bottom, backgroundColor: Color.white }}>
            <Tab.Navigator
                initialRouteName="Home"
                screenOptions={({ route }) => ({
                    tabBarLabelStyle: {
                        fontSize: 9,
                        fontFamily: FontFamily.medium,
                    },
                    tabBarActiveTintColor: Color.primary,
                    tabBarInactiveTintColor: Color.gray,
                    tabBarStyle: {
                        backgroundColor: Color.white,
                        height: 70,
                    },
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconSource;
                        switch (route.name) {
                            case "Home":
                                iconSource = images.icon_home;
                                break;
                            case "MyNeeds":
                                iconSource = images.icon_my_needs;
                                break;
                            case "MyResponse":
                                iconSource = images.icon_my_response;
                                break;
                            case "Profile":
                                iconSource = images.icon_profile;
                                break;
                            default:
                                iconSource = null;
                        }

                        return iconSource ? (
                            <Image
                                source={iconSource}
                                style={{
                                    width: size,
                                    height: size,
                                    tintColor: route.name === "CreateNeeds" ? undefined : color, // Disable tint for CreateNeeds
                                }}
                                resizeMode="contain"
                            />
                        ) : null;
                    },
                    title: setTabBarTitle(route.name),
                    tabBarIconStyle: { height: 20, width: 20, marginTop: 14, marginBottom: 6 }
                })}
            >
                <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
                <Tab.Screen name="MyNeeds" component={MyNeedsScreen} options={{ headerShown: false }} />
                <Tab.Screen
                    name="CreateNeeds"
                    component={() => null} // Prevent rendering in Tab
                    listeners={({ navigation }) => ({
                        tabPress: (e) => {
                            e.preventDefault(); // Prevent default tab behavior
                            props?.navigation.navigate("CreateNeeds"); // Navigate to the standalone screen
                        },
                    })}
                    options={{
                        headerShown: false,
                        tabBarIcon: () => (
                            <Image
                                source={images.icon_plus_bottom_tab} // Use your CreateNeeds icon
                                style={{ width: 50, height: 50, marginTop: 5, }}
                                resizeMode="contain"
                            />
                        ),
                    }}
                />
                <Tab.Screen name="MyResponse" component={MyResponseScreen} options={{ headerShown: false }} />
                <Tab.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
            </Tab.Navigator>
        </View>
    );
}

export default BottomTab;
