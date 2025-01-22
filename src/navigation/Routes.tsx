import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSelector } from "react-redux";
import SignInScreen from "../screens/on_boarding/sign_in/SignInScreen";
import OtpVerificationModel from "../components/OtpVerificationModel";
import BottomTab from "./BottomTab";
import CreateNeedsScreen from "../screens/create_need/CreateNeedsScreen";
import AddAddressScreen from "../screens/on_boarding/AddAddressScreen";

// Define the types for your Redux state and navigation
interface RootState {
    auth: {
        accessToken: string | null;
    };
}

// Define the RootStackParamList type for the stack navigator
export type RootStackParamList = {
    Login: undefined;
    OtpVerification: undefined;
    Signup: undefined;
    Tab: undefined;
    Notification: undefined;
    CreateNeeds: undefined; // Added for CreateNeedsScreen
    AddAddress: undefined; // Add this line
};

function Routes(): React.JSX.Element {
    const Stack = createNativeStackNavigator<RootStackParamList>();
    const accessToken = useSelector((state: RootState) => state.auth.accessToken);

    console.log("Access Token===", accessToken);

    const stackOption = {
        headerShown: false,
        animation: "slide_from_right" as const, // Ensure that the animation is a valid constant value
    };

    return (
        <NavigationContainer>
            <Stack.Navigator>
                {!accessToken ? (
                    <>
                        <Stack.Screen name="Login" component={SignInScreen} options={stackOption} />
                        <Stack.Screen
                            name="AddAddress"
                            component={AddAddressScreen}
                            options={stackOption}
                        />
                    </>
                ) : (
                    <>
                        <Stack.Screen name="Tab" component={BottomTab} options={stackOption} />
                        <Stack.Screen
                            name="CreateNeeds"
                            component={CreateNeedsScreen}
                            options={{
                                ...stackOption, // Use common options
                                animation: "none", // Override the animation for this screen
                            }}
                        />
                       
                    </>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;
