import React from "react";
import Container from "~/components/Container";
import ThemeText from "~/components/Theme/Text";
import { useTimelineDetailQuery } from "~/libs/post";
import type { RootStackScreenProps } from "~/@types/navigator";

const FeedDetailScreen: React.FC<
  RootStackScreenProps<"Feed-Detail-Screen">
> = ({ navigation, route: { params } }) => {
  const { data, isPending, error } = useTimelineDetailQuery({
    postId: params?.postId,
  });

  return (
    <Container>
      {/* {isPending && <LoadingComponent />} */}
      {/* {error && <ErrorComponent />} */}
      <ThemeText>{data?.body}</ThemeText>
    </Container>
  );
};

export default FeedDetailScreen;
