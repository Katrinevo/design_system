import type { StorybookConfig } from "@storybook/react-native";

const config: StorybookConfig = {
  stories: ["../packages/**/*.stories.@(ts|tsx)"],
  addons: [
    "@storybook/addon-ondevice-actions",
    "@storybook/addon-ondevice-controls",
  ],
};

export default config;