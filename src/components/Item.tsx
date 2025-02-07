import React from "react";
import { Pressable, StyleSheet } from "react-native";
import ThemeText from "./Theme/Text";

import { StyleConstants } from "~/utils/theme/constants";
import { useNavigation } from "@react-navigation/native";
import type { RootStackScreenProps } from "~/@types/navigator";

const FeedItem = ({ item }: { item: App.Post }) => {
  const navigation =
    useNavigation<RootStackScreenProps<"Feed-Detail-Screen">["navigation"]>();

  const onRouteToFeedDetail = (postId: App.Post["id"]) =>
    navigation.navigate("Feed-Detail-Screen", { postId });

  return (
    <Pressable onPress={() => onRouteToFeedDetail(item.id)} style={styles.root}>
      <ThemeText variant="LargeRegular">{item?.title}</ThemeText>
      <ThemeText>{item?.body}</ThemeText>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  root: {
    marginBottom: StyleConstants.Spacing.M,
  },
});

export default FeedItem;
