import React from "react";
import Root from "./Root";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import type { TabProfileStackParamList } from "~/@types/navigator";

const Stack = createNativeStackNavigator<TabProfileStackParamList>();

const TabHome: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShadowVisible: false, headerShown: false }}>
      <Stack.Screen
        name="Tab-Profile-Root"
        component={Root}
      />
    </Stack.Navigator>
  );
};

export default TabHome;
