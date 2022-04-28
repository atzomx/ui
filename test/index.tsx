import React, { FC } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { ThemeProvider } from "../src/ThemeProvider";
import "@testing-library/jest-dom/extend-expect";

const WrapperProvider: FC<{ children: React.ReactElement }> = ({
  children
}) => <ThemeProvider>{children}</ThemeProvider>;

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, "queries">
) => render(ui, { wrapper: WrapperProvider, ...options });

export * from "@testing-library/react";
export { customRender as render };
