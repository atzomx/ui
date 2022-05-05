declare const theme: {
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
export default theme;
