import React from "react";
import {
  Wrapper,
  Box
} from "./Checkbox.styles";
import { CheckboxProps }
from "./Checkbox.types";

export const Checkbox:
React.FC<CheckboxProps> = ({
  label,
  checked,
  onChange,
  multiple = false
}) => {
  return (
    <Wrapper onClick={onChange}>
      <Box checked={checked}>
        {checked ? "✓" : ""}
      </Box>
      {label}
    </Wrapper>
  );
};