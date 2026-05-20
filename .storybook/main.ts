import type { StorybookConfig }
from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: [
    "../packages/**/*.stories.@(ts|tsx)"
  ],

  addons: [

  ],

  framework: {
    name: "@storybook/react-vite",
    options: {}
  }
};

export default config;