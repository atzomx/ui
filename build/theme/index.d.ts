import "@emotion/react";
import LightTheme from "./LightTheme";
import DarkTheme from "./DarkTheme";
declare type ThemeLocal = typeof LightTheme & typeof DarkTheme;
declare module "@emotion/react" {
    interface Theme extends ThemeLocal {
    }
}
declare const _default: {
    LightTheme: {
        type: string;
        isDark: boolean;
        primary: {
            main: string;
            light: string;
            dark: string;
            darker: string;
        };
        background: string;
        text: {
            secondary: string;
            main: string;
        };
        breakpoints: {
            in: string;
            sm: string;
            md: string;
            lg: string;
            xl: string;
            xxl: string;
        };
        spacing: (...spaces: number[]) => string;
        fade: (hex: string, alpha?: number) => string;
        black: string;
        ligthBlack: string;
        white: string;
        grey: string;
        ligthGrey: string;
    };
    DarkTheme: {
        type: string;
        isDark: boolean;
        primary: {
            main: string;
            light: string;
            dark: string;
            darker: string;
        };
        background: string;
        text: {
            secondary: string;
            main: string;
        };
        breakpoints: {
            in: string;
            sm: string;
            md: string;
            lg: string;
            xl: string;
            xxl: string;
        };
        spacing: (...spaces: number[]) => string;
        fade: (hex: string, alpha?: number) => string;
        black: string;
        ligthBlack: string;
        white: string;
        grey: string;
        ligthGrey: string;
    };
};
export default _default;
