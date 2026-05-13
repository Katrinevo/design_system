import { Tabs } from "./";

export default {
  title: "Design System/Tabs",
  component: Tabs
};

export const Default = {
  args: {
    tabs: [
      { id: 1, label: "Tab 1" },
      { id: 2, label: "Tab 2" },
      { id: 3, label: "Tab 3" }
    ]
  }
};

export const Active = {
  args: {
    tabs: [
      {
        id: 1,
        label: "Tab 1",
        active: true
      },
      { id: 2, label: "Tab 2" },
      { id: 3, label: "Tab 3" }
    ]
  }
};

export const Disabled = {
  args: {
    tabs: [
      { id: 1, label: "Tab 1" },
      {
        id: 2,
        label: "Tab 2",
        disabled: true
      }
    ]
  }
};