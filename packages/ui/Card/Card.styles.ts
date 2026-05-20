import styled from "styled-components";

export const CardWrapper =
  styled.div<{
    variant?: string;
  }>`
    width: 320px;
    height: 180px;

    padding: 24px;

    position: relative;

    border-radius:
      ${({ theme }) =>
        theme.radius.md};

    background:
      ${({ theme, variant }) =>
        variant === "outlined"
          ? "white"
          : theme.colors.primary};

    border:
      ${({ theme, variant }) =>
        variant === "filled"
          ? "none"
          : `3px solid ${theme.colors.primaryDark}`};

    box-shadow:
      ${({ theme, variant }) =>
        variant === "elevated"
          ? `8px 8px 0 ${theme.colors.primaryDark}`
          : "none"};
`;

export const CardTitle =
  styled.h3`
    position: absolute;

    left: 24px;
    bottom: 20px;

    margin: 0;

    color:
      ${({ theme }) =>
        theme.colors.text};

    font-family:
      "JetBrains Mono",
      monospace;

    font-size: 20px;
`;