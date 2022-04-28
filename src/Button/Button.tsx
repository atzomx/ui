import React from "react";
import { PrimaryButtonStyled, SecondaryButtonStyled } from "./Button.styled";

export type ButtonProps = {
  children: string | JSX.Element | JSX.Element[];
  variant: "primary" | "secondary";
};

const Button = ({ variant, children, ...props }: ButtonProps) => {
  const Component =
    variant === "primary" ? PrimaryButtonStyled : SecondaryButtonStyled;

  return <Component {...props}>{children}</Component>;
};

export default Button;
