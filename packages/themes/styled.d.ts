import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
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
  }
}