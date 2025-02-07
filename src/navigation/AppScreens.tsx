import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Auth Stacks
import RegisterScreen from "~/screens/Auth/Register/Root";
import LoginScreen from "~/screens/Auth/Login/Root";

// App Stacks
import ScreenTabs from "~/screens/Tab";
import FeedDetailScreen from "~/screens/Feed/Detail";

// types
import type {
  AuthStackParamList,
  RootStackParamList,
} from "~/@types/navigator";

const AuthStack = createNativeStackNavigator<AuthStackParamList>();
const AppStack = createNativeStackNavigator<RootStackParamList>();

const AuthScreens = () => {
  return (
    <AuthStack.Navigator
      initialRouteName={"Login-Screen"}
      screenOptions={{
        headerShown: false,
        headerShadowVisible: false,
      }}
    >
      <AuthStack.Screen name="Register-Screen" component={RegisterScreen} />
      <AuthStack.Screen name="Login-Screen" component={LoginScreen} />
    </AuthStack.Navigator>
  );
};

const AppScreens = () => {
  return (
    <AppStack.Navigator
      initialRouteName={"Screen-Tabs"}
      screenOptions={{
        headerShown: false,
        headerShadowVisible: false,
      }}
    >
      <AppStack.Screen name="Screen-Tabs" component={ScreenTabs} />
      <AppStack.Screen name="Feed-Detail-Screen" component={FeedDetailScreen} />
    </AppStack.Navigator>
  );
};

export { AuthScreens, AppScreens };
