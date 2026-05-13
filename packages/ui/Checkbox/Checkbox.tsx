import React from "react";
import {
  Wrapper,
  Box
} from "./Checkbox.styles";

interface Props {
  label: string;
  checked: boolean;
}

export const Checkbox:
React.FC<Props> = ({
  label,
  checked
}) => (
  <Wrapper>
    <Box checked={checked}>
      {checked ? "✓" : ""}
    </Box>
    {label}
  </Wrapper>
);