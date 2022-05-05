export declare const fade: (hex: string, alpha?: number) => string;
declare const theme: {
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
