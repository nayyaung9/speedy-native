import React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TabHomeIcon, TabProfileIcon } from "~/components/Icons/Root";

// Screen Tabs
import TabHome from "./Home";
import TabProfile from "./Profile";

import { useTheme } from "~/utils/theme/ThemeManager";
import { StyleConstants } from "~/utils/theme/constants";
import type { ScreenTabsStackParamList } from "~/@types/navigator";

const Tab = createBottomTabNavigator<ScreenTabsStackParamList>();

const ScreenTabs = () => {
  const { colors } = useTheme();
  return (
    <Tab.Navigator
      initialRouteName={"Tab-Home"}
      screenOptions={({ route }) => ({
        animation: "shift",
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
        tabBarLabelPosition: "beside-icon",
        tabBarItemStyle: {
          height: 56,
        },
        tabBarIcon: ({ focused }) => {
          const activeColor = focused ? colors.primaryBrand : colors.disabled;
          if (route.name === "Tab-Home") {
            return <TabHomeIcon color={activeColor} />;
          } else if (route.name === "Tab-Profile") {
            return <TabProfileIcon color={activeColor} />;
          }
        },
      })}
    >
      <Tab.Screen name="Tab-Home" component={TabHome} />
      <Tab.Screen name="Tab-Profile" component={TabProfile} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    position: "absolute",
    bottom: StyleConstants.Spacing.Container * 2,
    marginHorizontal: StyleConstants.Spacing.Container * 2,
    height: 56,
    backgroundColor: "#fff",
    borderRadius: 100,
    justifyContent: "center",
    shadowColor: "#2c2c2c",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
});

export default ScreenTabs;
