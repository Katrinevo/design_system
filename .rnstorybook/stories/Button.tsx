import React from "react";
import styled from "styled-components";
import { ButtonProps } from "D:/design_system/packages/ui/Button/Button.types.ts";

const StyledButton = styled.button<{ disabled?: boolean }>`
  padding: 16px 24px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  color: white;

  background-color: ${({ disabled }) =>
    disabled ? "#A5B4FC" : "#4F46E5"};

  &:hover {
    background-color: ${({ disabled }) =>
      disabled ? "#A5B4FC" : "#4338CA"};
  }

  &:active {
    background-color: ${({ disabled }) =>
      disabled ? "#A5B4FC" : "#3730A3"};
  }
`;

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