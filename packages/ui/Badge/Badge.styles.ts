import styled from "styled-components";

export const Wrapper =
  styled.div<{
    variant?: string;
  }>`
    display: inline-block;

    padding: 8px 18px;

    border-radius: 999px;

    border: 3px solid
      ${({ theme }) =>
        theme.colors.primaryDark};

    background:
      ${({ variant, theme }) => {
        if (variant === "success")
          return "#D7F3DB";

        if (variant === "warning")
          return "#FFE7C2";

        if (variant === "error")
          return "#FFD6D6";

        return theme.colors.primary;
      }};

    color:
      ${({ theme }) =>
        theme.colors.text};

    font-family:
      "JetBrains Mono",
      monospace;
`;