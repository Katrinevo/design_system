import React from "react";
import { Select }
from "./Dropdown.styles";
import {
 DropdownProps
} from "./Dropdown.types";

export const Dropdown:
React.FC<DropdownProps> = ({
  options
}) => (
  <Select>
    {options.map((o) => (
      <option key={o}>
        {o}
      </option>
    ))}
  </Select>
);