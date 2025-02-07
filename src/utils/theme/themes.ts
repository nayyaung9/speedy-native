export type Theme = "light" | "dark";

export type ColorDefinitions =
  | "lightBrand"
  | "primaryBrand"
  | "white"
  | "background"
  | "grey"
  | "border"
  | "divider"
  | "disabled"
  | "black";

const themeColors: {
  [key in ColorDefinitions]: {
    light: string;
    dark: string;
  };
} = {
  lightBrand: {
    light: "#DDEEE7",
    dark: "",
  },
  primaryBrand: {
    light: "#26A671",
    dark: "",
  },
  white: {
    light: "#FFFFFF",
    dark: "",
  },
  background: {
    light: "#F5F4F0",
    dark: "",
  },
  grey: {
    light: "#6B6B6B",
    dark: "",
  },
  border: {
    light: "#EAEAEA",
    dark: "",
  },
  divider: {
    light: "#E4E4E4",
    dark: "",
  },
  disabled: {
    light: "#969696",
    dark: "",
  },
  black: {
    light: "#2C2C2C",
    dark: "",
  },
};

const getColors = (theme: Theme): { [key in ColorDefinitions]: string } => {
  const colors = {} as {
    [key in ColorDefinitions]: string;
  };
  const keys = Object.keys(themeColors) as ColorDefinitions[];
  keys.forEach(key => (colors[key] = themeColors[key][theme]));

  return colors;
};

export { themeColors, getColors };
