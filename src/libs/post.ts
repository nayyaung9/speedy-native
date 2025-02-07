import apiInstance from "./api";
import {
  MutationOptions,
  QueryFunction,
  useMutation,
  useQuery,
} from "@tanstack/react-query";
import { AxiosError } from "axios";

// #region Fetch Posts
export type TimelineQueryKey = ["Timeline-Posts"];

const fetchPosts: QueryFunction<App.Post[], TimelineQueryKey> = async () => {
  const { data } = await apiInstance({
    method: "get",
    url: "posts",
    params: {
      _page: 0,
      _limit: 5,
    },
  });

  return data;
};

export const useTimeline = () => {
  const queryKey: TimelineQueryKey = ["Timeline-Posts"];
  return useQuery({ queryKey, queryFn: fetchPosts });
};
// #endregion

// #region Timline Detail

export type TimelineDetailQueryKey = [
  "Timeline-Detail",
  { postId: App.Post["id"] },
];
const fetchPostDetail: QueryFunction<
  App.Post,
  TimelineDetailQueryKey
> = async ({ queryKey }) => {
  const { postId } = queryKey[1];

  const { data } = await apiInstance({
    method: "get",
    url: `posts/${postId}`,
  });

  return data;
};
export const useTimelineDetailQuery = ({
  ...queryParams
}: TimelineDetailQueryKey[1]) => {
  const queryKey: TimelineDetailQueryKey = [
    "Timeline-Detail",
    { ...queryParams },
  ];
  return useQuery({ queryKey, queryFn: fetchPostDetail });
};

// #endregion

// #region Create Post

export type MutationVarsPostCreateParams = {
  title: string;
  userId: string;
  body: string;
};
const createPostFunction = async (params: MutationVarsPostCreateParams) => {
  const { data } = await apiInstance({
    method: "post",
    url: "/create-post",
    body: params,
  });

  return data;
};
export const usePostCreate = (
  options: MutationOptions<
    { body: App.Post },
    AxiosError,
    MutationVarsPostCreateParams
  >,
) => {
  return useMutation({ mutationFn: createPostFunction, ...options });
};
// #endregion