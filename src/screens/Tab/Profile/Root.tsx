import React from "react";
import { StyleSheet, View } from "react-native";
import ThemeText from "~/components/Theme/Text";
import Container from "~/components/Container";

import { StyleConstants } from "~/utils/theme/constants";
import { useTheme } from "~/utils/theme/ThemeManager";
import type { TabProfileStackParamList } from "~/@types/navigator";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

const TabProfileScreen: React.FC<
  NativeStackScreenProps<TabProfileStackParamList, "Tab-Profile-Root">
> = ({ navigation }) => {
  const { colors } = useTheme();

  return (
    <Container>
      <View style={styles.profileContainer}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: StyleConstants.Spacing.S,
          }}
        >
          <ThemeText variant="HeadingTwo">Nay Yaung Lin Lakk</ThemeText>
        </View>
        <ThemeText color={colors.grey}>nayyaung.developer@gmail.com</ThemeText>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: StyleConstants.Spacing.M,
    paddingHorizontal: StyleConstants.Spacing.Container,
  },
  profilePhotoContainer: {
    width: 48,
    height: 48,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  contentContainerStyle: {
    flexGrow: 1,
    paddingHorizontal: StyleConstants.Spacing.Container,
    paddingTop: StyleConstants.Spacing.L,
    paddingBottom: 150,
  },
  settingListContainer: {
    paddingTop: StyleConstants.Spacing.L,
  },
});

export default TabProfileScreen;
