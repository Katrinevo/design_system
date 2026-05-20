import { Badge }
from "./";

export default {
 title:
  "Design System/Badge",
 component:
  Badge
};

export const Default = {
 args: {
  text: "NEW"
 }
};

export const Success = {
 args: {
  text: "DONE",
  variant: "success"
 }
};

export const Warning = {
 args: {
  text: "BETA",
  variant: "warning"
 }
};

export const Error = {
 args: {
  text: "ERROR",
  variant: "error"
 }
};