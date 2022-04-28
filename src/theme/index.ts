import "@emotion/react";

import LightTheme from "./LightTheme";
import DarkTheme from "./DarkTheme";

type ThemeLocal = typeof LightTheme & typeof DarkTheme;

declare module "@emotion/react" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Theme extends ThemeLocal {}
}

export default {
  LightTheme,
  DarkTheme
};
