import React from "react";
import {
  Wrapper,
  Box
} from "./Checkbox.styles";

interface Props {
  label: string;
  checked: boolean;
  multiple?: boolean;
}

export const Checkbox:
React.FC<Props> = ({
  label,
  checked,
  multiple = false
}) => (
  <Wrapper>
    <Box
      checked={checked}
      multiple={multiple}
    >
      {checked ? "✓" : ""}
    </Box>

    {label}
  </Wrapper>
);