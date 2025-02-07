import React from "react";
import { StyleSheet, View } from "react-native";
import ThemeText from "~/components/Theme/Text";
import type { AuthStackScreenProps } from "~/@types/navigator";

const RegisterScreen: React.FC<
  AuthStackScreenProps<"Register-Screen">
> = () => {
  return (
    <View style={styles.root}>
      <ThemeText>Register Screen</ThemeText>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default RegisterScreen;
