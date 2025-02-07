import type { Asset } from "react-native-image-picker";

export type ComposeState = {
  title: string;
  body: string;
  userId: number;
};

export type ComposeAction =
  | {
    type: "input";
    field: keyof ComposeState;
    payload: string;
  }
  | {
    type: "otherFunction";
    payload: boolean;
  }