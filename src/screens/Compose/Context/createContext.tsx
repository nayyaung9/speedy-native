import { createContext } from "react";
import type { Dispatch } from "react";
import type { ComposeState, ComposeAction } from "./types";

type ContextType = {
  composeState: ComposeState;
  composeDispatch: Dispatch<ComposeAction>;
};
const ComposeContext = createContext<ContextType>({} as ContextType);

export default ComposeContext;
