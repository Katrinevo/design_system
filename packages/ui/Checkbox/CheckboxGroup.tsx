import React from "react";
import { Checkbox }
from "./Checkbox";

import {
  CheckboxGroupProps
} from "./Checkbox.types";

interface Props
  extends CheckboxGroupProps {
  multiple?: boolean;
}

export const CheckboxGroup:
React.FC<Props> = ({
  options,
  multiple = false
}) => (
  <>
    {options.map((o) => (
      <Checkbox
        key={o.id}
        label={o.label}
        checked={o.checked}
        multiple={multiple}
      />
    ))}
  </>
);