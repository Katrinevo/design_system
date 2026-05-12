import { Input } from "./";

export default {
 title: "Design System/Input",
 component: Input
};

export const Default = {
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