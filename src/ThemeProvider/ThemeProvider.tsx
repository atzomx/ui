import React, { createContext, useState, useCallback } from "react";
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import Themes from "../theme";

export type ProviderProps = {
  children: React.ReactElement | JSX.Element | JSX.Element[];
};

export const ThemeChangeContext = createContext({
  isDark: false,
  toggleMode: () => {}
});

const ThemeProvider = ({ children }: ProviderProps) => {
  const [isDark, setDark] = useState(false);
  const toggleMode = useCallback(() => {
    setDark((prevMode) => !prevMode);
  }, []);

  return (
    <ThemeChangeContext.Provider
      value={{
        isDark,
        toggleMode
      }}
    >
      <EmotionThemeProvider
        theme={isDark ? Themes.DarkTheme : Themes.LightTheme}
      >
        {children}
      </EmotionThemeProvider>
    </ThemeChangeContext.Provider>
  );
};

export default ThemeProvider;
