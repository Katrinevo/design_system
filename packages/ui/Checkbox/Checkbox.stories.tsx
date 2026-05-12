import type {
  Meta,
  StoryObj
} from "@storybook/react";

import { Checkbox }
from "./";

const meta: Meta<typeof Checkbox> = {
  title: "Design System/Checkbox",
  component: Checkbox
};

export default meta;

type Story =
  StoryObj<typeof Checkbox>;

export const SingleSelected:
Story = {
  args: {
    label: "option 2",
    checked: true
  }
};

export const MultiSelected:
Story = {
  args: {
    label: "sub-option 2",
    checked: true,
    multiple: true
  }
};