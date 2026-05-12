import React from "react";
import { ButtonProps } from "./Button.types";
import { StyledButton } from "./Button.styles";

export const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  disabled = false
}) => {
  return (
    <StyledButton
      onClick={onPress}
      disabled={disabled}
    >
      {title}
    </StyledButton>
  );
};