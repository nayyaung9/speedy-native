import React, { createContext, useContext } from "react";
import { getColors } from "./themes";
import type { PropsWithChildren } from "react";
import type { ColorDefinitions, Theme } from "./themes";

type ContextType = {
  theme: Theme;
  colors: { [key in ColorDefinitions]: string };
};

const CURRENT_THEME = "light"; // Later implement with state and combine with dark mode.

const ManageThemeContext = createContext<ContextType>({
  theme: "light",
  colors: getColors("light"),
});

export const useTheme = () => useContext(ManageThemeContext);

const ThemeManager: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <ManageThemeContext.Provider
      value={{ theme: CURRENT_THEME, colors: getColors("light") }}>
      {children}
    </ManageThemeContext.Provider>
  );
};

export default ThemeManager;
