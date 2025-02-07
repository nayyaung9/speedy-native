import type { CompositeScreenProps, NavigatorScreenParams } from "@react-navigation/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { BottomTabScreenProps } from "@react-navigation/bottom-tabs";

export type AuthStackParamList = {
  "Register-Screen": undefined;
  "Login-Screen": undefined;
};
export type AuthStackScreenProps<T extends keyof AuthStackParamList> =
  NativeStackScreenProps<AuthStackParamList, T>;

export type RootStackParamList = {
  "Screen-Tabs": undefined;
  "Feed-Detail-Screen": { postId: App.Post["id"] };
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

export type ScreenTabsStackParamList = {
  "Tab-Home": NavigatorScreenParams<TabHomeStackParamList>;
  "Tab-Profile": NavigatorScreenParams<TabProfileStackParamList>;
};

export type ScreenTabsStackProps<T extends keyof ScreenTabsStackParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<ScreenTabsStackParamList, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >;

export type TabHomeStackParamList = {
  "Tab-Home-Root": undefined;
};
export type TabProfileStackParamList = {
  "Tab-Profile-Root": undefined;
};

