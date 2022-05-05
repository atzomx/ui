import React from "react";
export declare type ProviderProps = {
    children: React.ReactElement | JSX.Element | JSX.Element[];
};
export declare const ThemeChangeContext: React.Context<{
    isDark: boolean;
    toggleMode: () => void;
}>;
declare const ThemeProvider: ({ children }: ProviderProps) => JSX.Element;
export default ThemeProvider;
