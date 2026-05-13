import { Input } from "./";

export default {
  title: "Design System/Input",
  component: Input
};

export const Default = {
  args: {
    placeholder:
      "Input text..."
  }
};

export const Labeled = {
  args: {
    label: "Label",
    placeholder:
      "Input text..."
  }
};

export const WithError = {
  args: {
    label: "Label",
    placeholder:
      "Input text...",
    error:
      "Error message"
  }
};

export const DateMask = {
  args: {
    label: "Birth date",
    mask: "dd.mm.yy"
  }
};

export const PhoneMask = {
  args: {
    label: "Phone",
    mask:
      "(000) 000-0000"
  }
};