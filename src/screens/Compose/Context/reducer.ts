import type { ComposeState, ComposeAction } from "./types";

const composeReducer = (
  state: ComposeState,
  action: ComposeAction,
): ComposeState => {
  switch (action.type) {
    case "input":
      return { ...state, [action.field]: action.payload };
    case "otherFunction":
      return state; // Hehee
    default:
      throw new Error("Unexpected action");
  }
};

export default composeReducer;
