import React from "react";
import styled from "styled-components/native";
import {
  TouchableOpacityProps
} from "react-native";

interface Props
  extends TouchableOpacityProps {
  title: string;
  disabled?: boolean;
}

const StyledButton =
  styled.TouchableOpacity<{
    disabled?: boolean;
  }>`
    background-color:
      ${({ theme, disabled }) =>
        disabled
          ? theme.colors.disabled
          : theme.colors.primary};

    padding: 18px 28px;

    border-radius: 24px;

    border-width: 3px;
    border-color:
      ${({ theme }) =>
        theme.colors.primaryDark};

    align-items: center;
  `;

const Text =
  styled.Text`
    font-family: "System";
    font-size: 20px;

    color:
      ${({ theme }) =>
        theme.colors.text};
  `;

export const Button:
React.FC<Props> = ({
  title,
  ...props
}) => (
  <StyledButton {...props}>
    <Text>{title}</Text>
  </StyledButton>
);