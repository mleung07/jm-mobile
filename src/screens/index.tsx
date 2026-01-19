import { createStaticNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import HomeScreen from "./HomeScreen";
import LoginScreen from "./LoginScreen";

export const RootStack = createNativeStackNavigator({
  initialRouteName: "Login",
  screens: {
    Login: {
      screen: LoginScreen,
      options: { headerShown: false },
    },
    Home: {
      screen: HomeScreen,
      options: {
        title: "Home",
        headerBackVisible: false,
      },
    },
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function Screens() {
  return <Navigation />;
}
