import React from "react";
import { ThemeProvider } from "styled-components/native";
import { theme } from "../../packages/themes/theme";
import type { DecoratorFunction } from "@storybook/react-native";

export const decorators: DecoratorFunction[] = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  ),
];