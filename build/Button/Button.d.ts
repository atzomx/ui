/// <reference types="react" />
export declare type ButtonProps = {
    children: string | JSX.Element | JSX.Element[];
    variant: "primary" | "secondary";
};
declare const Button: ({ variant, children, ...props }: ButtonProps) => JSX.Element;
export default Button;
