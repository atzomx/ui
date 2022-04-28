import { ThemeProvider } from "@emotion/react";
import { addDecorator } from "@storybook/react";
import { withThemes } from "@react-theming/storybook-addon";
import Themes from "../src/theme";

addDecorator(withThemes(ThemeProvider, [Themes.LightTheme, Themes.DarkTheme]));

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  options: {
    storySort: {
      order: ["Example", "Components"]
    }
  }
};
