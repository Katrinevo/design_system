import {
  CheckboxGroup
} from "./";

export default {
  title:
    "Design System/Checkbox",
  component:
    CheckboxGroup
};

export const SingleChoice = {
  args: {
    multiple: false,
    options: [
      {
        id: 1,
        label: "option 1",
        checked: false
      },
      {
        id: 2,
        label: "option 2",
        checked: true
      },
      {
        id: 3,
        label: "option 3",
        checked: false
      }
    ]
  }
};

export const MultiChoice = {
  args: {
    multiple: true,
    options: [
      {
        id: 1,
        label: "sub-option 1",
        checked: false
      },
      {
        id: 2,
        label: "sub-option 2",
        checked: true
      },
      {
        id: 3,
        label: "sub-option 3",
        checked: true
      }
    ]
  }
};