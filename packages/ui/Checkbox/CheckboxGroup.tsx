import React from "react";
import { Checkbox }
from "./Checkbox";

import {
 CheckboxGroupProps
} from "./Checkbox.types";

export const CheckboxGroup:
React.FC<CheckboxGroupProps> = ({
 options
}) => {
 return (
  <>
   {options.map((o) => (
    <Checkbox
      key={o.id}
      label={o.label}
      checked={o.checked}
    />
   ))}
  </>
 );
};