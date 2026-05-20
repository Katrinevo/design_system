import "styled-components";
import "styled-components/native";

type ThemeType = {
  colors: {
    primary: string;
    primaryDark: string;
    pressed: string;
    disabled: string;
    text: string;
  };

  radius: {
    md: string;
  };

  spacing: {
    sm: string;
    md: string;
    lg: string;
  };
};

declare module "styled-components" {
  export interface DefaultTheme
    extends ThemeType {}
}

declare module "styled-components/native" {
  export interface DefaultTheme
    extends ThemeType {}
}