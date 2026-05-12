import { Button } from "./Button";

export default {
  title: "Design System/Button",
  component: Button
};

export const Primary = {
  args: {
    title: "Primary Button"
  }
};

export const Disabled = {
  args: {
    title: "Disabled",
    disabled: true
  }
};

export const Loading = {
  args: {
    title: "Loading..."
  }
};