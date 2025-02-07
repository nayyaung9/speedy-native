import React from "react";
import { ActivityIndicator, ScrollView, StyleSheet, View } from "react-native";
import Container from "~/components/Container";
import ThemeText from "~/components/Theme/Text";
import FeedItem from "~/components/Item";
import ThemeButton from "~/components/Theme/Button";

import { useTimeline } from "~/libs/post";
import { StyleConstants } from "~/utils/theme/constants";

import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { TabHomeStackParamList } from "~/@types/navigator";


const TabHomeScreen: React.FC<
  NativeStackScreenProps<TabHomeStackParamList, "Tab-Home-Root">
> = ({ navigation }) => {
  const { data, isPending, error } = useTimeline();

  return (
    <Container>
      <ThemeText variant="LargeRegular">Large Regular</ThemeText>
      <ThemeText variant="LargeSemiBold">Large Semi Bold</ThemeText>
      <ThemeText variant="MediumRegular">Medium Regular</ThemeText>
      <ThemeText variant="MediumSemiBold">Medium Semi Bold</ThemeText>
      <ThemeText variant="SmallRegular">Small Regular</ThemeText>
      <ThemeText variant="SmallCaption">Small Caption</ThemeText>

      <View style={styles.buttonContainer}>
        <ThemeButton label="Just Click me" onPress={() => null} />
      </View>

      <ScrollView contentContainerStyle={styles.timelineContainer}>
        {isPending && <ActivityIndicator />}
        {!isPending &&
          Array.isArray(data) &&
          data?.length >= 1 &&
          data.map((item, index) => <FeedItem item={item} key={index} />)}
        {/* {error && <ErrorComponent />} */}
      </ScrollView>
    </Container>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    paddingTop: StyleConstants.Spacing.Container,
  },
  timelineContainer: {
    flexGrow: 1,
    paddingTop: StyleConstants.Spacing.Container,
  },
});
export default TabHomeScreen;
