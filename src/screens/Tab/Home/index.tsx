import React from "react";
import Root from "./Root";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TabHomeStackParamList } from "~/@types/navigator";

const Stack = createNativeStackNavigator<TabHomeStackParamList>();

const TabHome: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShadowVisible: false }}>
      <Stack.Screen
        name="Tab-Home-Root"
        component={Root}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default TabHome;
