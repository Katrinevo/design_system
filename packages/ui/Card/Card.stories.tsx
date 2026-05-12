import type {
  Meta,
  StoryObj
} from "@storybook/react";

import { Button } from "./";

const meta: Meta<typeof Button> = {
  title: "Design System/Button",
  component: Button
};

export default meta;

type Story =
  StoryObj<typeof Button>;

export const Active: Story = {
  args: {
    title: "Button"
  }
};

export const Disabled: Story = {
  args: {
    title: "Button",
    disabled: true
  }
};