import React from "react";
import {
  Wrapper,
  Label,
  StyledInput,
  Error
} from "./Input.styles";

import {
  InputProps
} from "./Input.types";

export const Input:
React.FC<InputProps> = ({
  label,
  placeholder,
  error,
  mask
}) => {
  return (
    <Wrapper>
      {label && (
        <Label>{label}</Label>
      )}

      <StyledInput
        placeholder={
          mask || placeholder
        }
      />

      {error && (
        <Error>{error}</Error>
      )}
    </Wrapper>
  );
};