import React from "react";
import { AuthScreens, AppScreens } from "./AppScreens";
import { NavigationContainer } from "@react-navigation/native";

const Application = () => {
  const token = true;

  {/*
    For storing authentication tokens securely in my React Native apps, 
    I use MMKV Storage instead of AsyncStorage. https://github.com/mrousavy/react-native-mmkv

    🔹 Why MMKV?
    ✅ Faster than AsyncStorage
    ✅ Efficient key-value storage
    ✅ Encrypted storage support
    ✅ Low memory usage

    If you're still using AsyncStorage, consider switching! ⚡
  */}

  return (
    <NavigationContainer>
      {token ? <AppScreens /> : <AuthScreens />}
    </NavigationContainer>
  );
};

export default Application;
