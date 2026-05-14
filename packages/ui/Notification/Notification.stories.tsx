import { Notification }
from "./";

export default {
  title:
    "Design System/Notification",
  component:
    Notification
};

export const Info = {
  args: {
    title: "Info",
    message:
      "This is an info notification",
    type: "info"
  }
};

export const Success = {
  args: {
    title: "Success",
    message:
      "Saved successfully",
    type: "success"
  }
};

export const Warning = {
  args: {
    title: "Warning",
    message:
      "Please check your data",
    type: "warning"
  }
};

export const Error = {
  args: {
    title: "Error",
    message:
      "Something went wrong",
    type: "error"
  }
};