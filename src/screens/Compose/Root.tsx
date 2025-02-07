import React, { useReducer } from "react";
import { View } from "react-native";
import ThemeInput from "~/components/Theme/Input";
import Container from "~/components/Container";
import ComposeContext from "./Context/createContext";

import composeReducer from "./Context/reducer";
import composeInitialState from "./Context/initialState";

import { StyleConstants } from "~/utils/theme/constants";
import type { ComposeState } from "./Context/types";

const ComposeRoot = () => {
  const [composeState, composeDispatch] = useReducer(
    composeReducer,
    composeInitialState,
  );

  const onHandleInputChange =
    (field: keyof ComposeState) => (payload: string) => {
      composeDispatch({ type: "input", field, payload });
    };

  return (
    <Container>
      <ComposeContext.Provider
        value={{
          composeState,
          composeDispatch,
        }}
      >
        <View style={{ gap: StyleConstants.Spacing.Container }}>
          <ThemeInput
            label="Title"
            value={composeState.title}
            onChangeText={(value) => onHandleInputChange("title")(value)}
          />

          <ThemeInput
            label="Description"
            value={composeState.body}
            onChangeText={(value) => onHandleInputChange("body")(value)}
          />
        </View>
      </ComposeContext.Provider>
    </Container>
  );
};

export default ComposeRoot;
