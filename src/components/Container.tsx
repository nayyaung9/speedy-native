import React from "react";
import {
  StyleProp,
  StyleSheet,
  View,
  ViewProps,
  ViewStyle,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StyleConstants } from "~/utils/theme/constants";
import { useTheme } from "~/utils/theme/ThemeManager";

type Props = {
  containStyle?: StyleProp<ViewStyle>;
};
const Container: React.FC<Props & ViewProps> = ({ children, containStyle }) => {
  const { colors } = useTheme();
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        { paddingTop: insets.top, backgroundColor: colors.white },
        styles.root,
        containStyle,
      ]}
    >
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingHorizontal: StyleConstants.Spacing.Container,
  },
});

export default Container;
