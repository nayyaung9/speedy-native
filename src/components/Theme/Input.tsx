import React, { useRef, useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Animated,
  Pressable,
} from "react-native";
import ThemeText from "./Text";

import { useTheme } from "~/utils/theme/ThemeManager";
import { StyleConstants } from "~/utils/theme/constants";
import type { TextInputProps } from "react-native";

type InputProps = {
  label?: string;
  disabled?: boolean;
  error?: string | null;
  prependIcon?: React.ReactElement;
  appendIcon?: React.ReactElement;
  appendIconFunction?: () => void;
  appendDivider?: boolean;
  helperContainer?: React.ReactElement;
} & TextInputProps;

const ThemeInput: React.FC<InputProps> = ({
  label,
  onFocus,
  onBlur,
  disabled = false,
  error,
  prependIcon,
  appendIcon,
  appendIconFunction,
  appendDivider = false,
  helperContainer,
  ...rest
}) => {
  const { colors } = useTheme();
  const [focused, setFocused] = useState<boolean>(false);

  const labelPosition = useRef(new Animated.Value(rest?.value ? 1 : 0)).current;

  const handleFocus = () => {
    setFocused(true);
    Animated.timing(labelPosition, {
      toValue: 1,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const handleBlur = () => {
    if (!rest?.value) {
      Animated.timing(labelPosition, {
        toValue: 0,
        duration: 200,
        useNativeDriver: false,
      }).start();
    }
    setFocused(false);
  };

  const labelStyle = {
    left: StyleConstants.Spacing.M,
    top: labelPosition.interpolate({
      inputRange: [0, 1],
      outputRange: [18, 8],
    }),
    fontSize: labelPosition.interpolate({
      inputRange: [0, 1],
      outputRange: [14, 12],
    }),
    color: colors.grey,
  };

  return (
    <View>
      <View
        style={[
          styles.inputContainer,
          {
            borderWidth: 1,
            borderColor: focused
                  ? colors.primaryBrand
                  : colors.divider,
            height: 55,
            backgroundColor: disabled ? colors.divider : colors.white,
          },
        ]}
      >
        <Animated.Text style={[labelStyle, styles.label]}>
          {label}
        </Animated.Text>

        <TextInput
          style={[
            { color: disabled ? colors.grey : colors.black },
            styles.input,
            { paddingHorizontal: StyleConstants.Spacing.M },
          ]}
          autoCapitalize="none"
          textAlignVertical="bottom"
          onFocus={handleFocus}
          onBlur={handleBlur}
          autoComplete={"off"}
          autoCorrect={false}
          selectionColor={colors.primaryBrand}
          editable={disabled ? false : true}
          {...rest}
        />

        {appendIcon && (
          <Pressable
            children={appendIcon}
            onPress={appendIconFunction}
            style={[styles.appendIconContainer, appendDivider ? styles.appendDivider : null]}
          />
        )}
      </View>

      <View style={styles.inputInformationContainer}>
        {/* {error && Error Here} */}

        {helperContainer && <View>{helperContainer}</View>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    borderRadius: StyleConstants.Spacing.S,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    height: "100%",
    ...StyleConstants.Font.Variant.MediumRegular,
    paddingTop: StyleConstants.Spacing.M,
  },
  label: {
    position: "absolute",
    fontFamily: "RegularMedium",
  },
  appendIconContainer: {
    position: "absolute",
    right: StyleConstants.Spacing.S,
  },
  appendDivider: {
    borderLeftWidth: 1,
    borderLeftColor: "#E4E4E4",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 16,
  },
  inputInformationContainer: {
    marginTop: StyleConstants.Spacing.S,
  },
  errorContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: StyleConstants.Spacing.S - 4,
    marginBottom: StyleConstants.Spacing.M,
  },
});

export default ThemeInput;
