import React, { useMemo } from "react";
import { ActivityIndicator, Pressable, StyleSheet, View } from "react-native";
import ThemeText from "./Text";
import { StyleConstants } from "~/utils/theme/constants";
import { useTheme } from "~/utils/theme/ThemeManager";
import type {
  GestureResponderEvent,
  PressableProps,
  StyleProp,
  ViewStyle,
} from "react-native";

export type ButtonVariant = "solid" | "outlined";
export type ButtonColor = "primary" | "primary_inverted";

interface Props {
  label: string;
  isLoading?: boolean;
  color?: ButtonColor;
  icon?: React.ReactElement;
  disabled?: boolean;
  variant?: ButtonVariant;
  onPress: () => void;
  buttonStyle?: StyleProp<ViewStyle>;
}

export type ButtonProps = Pick<
  PressableProps,
  | "disabled"
  | "onPress"
  | "testID"
  | "onLongPress"
  | "hitSlop"
  | "onHoverIn"
  | "onHoverOut"
  | "onPressIn"
  | "onPressOut"
  | "onFocus"
  | "onBlur"
> &
  Props;

const ThemeButton = ({
  label,
  isLoading,
  color = "primary",
  icon,
  variant = "solid",
  disabled = false,
  onPressIn: onPressInOuter,
  onPressOut: onPressOutOuter,
  onPress,
  buttonStyle,
}: ButtonProps) => {
  const { colors } = useTheme();
  const [state, setState] = React.useState({
    pressed: false,
    hovered: false,
    focused: false,
  });

  const onPressIn = React.useCallback(
    (e: GestureResponderEvent) => {
      setState((s) => ({
        ...s,
        pressed: true,
      }));
      onPressInOuter?.(e);
    },
    [setState, onPressInOuter],
  );

  const onPressOut = React.useCallback(
    (e: GestureResponderEvent) => {
      setState((s) => ({
        ...s,
        pressed: false,
      }));
      onPressOutOuter?.(e);
    },
    [setState, onPressOutOuter],
  );

  const onFocus = React.useCallback(() => {
    setState((s) => ({
      ...s,
      focused: true,
    }));
  }, [setState]);

  const { baseStyles, hoverStyles } = useMemo(() => {
    const baseStyles: ViewStyle[] = [];
    const hoverStyles: ViewStyle[] = [];

    if (variant === "solid") {
      if (!disabled) {
        baseStyles.push({
          backgroundColor: colors.primaryBrand,
        });
        hoverStyles.push({
          backgroundColor: "#1C7D55",
        });
      } else {
        baseStyles.push({
          backgroundColor: "rgba(38, 166, 113, 0.5)",
        });
      }
    }

    if (variant === "outlined") {
      if (!disabled) {
        baseStyles.push({
          borderWidth: 1,
          borderColor: colors.primaryBrand,
        });
        hoverStyles.push({
          backgroundColor: "rgba(255, 255, 255, 0.4)",
        });
      } else {
        baseStyles.push({
          backgroundColor: "rgba(38, 166, 113, 0.5)",
        });
      }
    }

    return {
      baseStyles,
      hoverStyles,
    };
  }, [color, variant, disabled]);

  const flattenedBaseStyles = StyleSheet.flatten([baseStyles, buttonStyle]);

  const renderButtonLabelColor = () => {
    switch (variant) {
      case "solid":
        return colors.white;
      case "outlined":
        return colors.primaryBrand;
      default:
        return colors.black;
    }
  };

  const children = useMemo(() => {
    if (isLoading) {
      return (
        <ActivityIndicator
          size={"small"}
          color={variant === "solid" ? "#fff" : colors.primaryBrand}
        />
      );
    }

    return (
      <View style={styles.buttonContainer}>
        {icon && icon}
        <ThemeText variant="ButtonLabel" color={renderButtonLabelColor()}>
          {label}
        </ThemeText>
      </View>
    );
  }, [isLoading, label]);

  return (
    <Pressable
      role="button"
      onPress={onPress}
      aria-label={label}
      aria-pressed={state.pressed}
      disabled={disabled}
      children={children}
      style={[
        styles.root,
        flattenedBaseStyles,
        ...(state.hovered || state.pressed ? hoverStyles : []),
      ]}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      onFocus={onFocus}
      accessible
      accessibilityLabel={label}
    />
  );
};

const styles = StyleSheet.create({
  root: {
    width: "100%",
    height: 42,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: StyleConstants.Spacing.S,
  },
});
export default ThemeButton;
