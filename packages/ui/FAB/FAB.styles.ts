import styled from "styled-components";

export const Fab =
  styled.button<{ disabled?: boolean }>`
    position: fixed;
    right: 32px;
    bottom: 32px;

    width: 72px;
    height: 72px;

    border: 3px solid
      ${({ theme }) =>
        theme.colors.primaryDark};

    border-radius: 50%;

    background:
      ${({ theme, disabled }) =>
        disabled
          ? theme.colors.disabled
          : theme.colors.primary};

    color:
      ${({ theme }) =>
        theme.colors.text};

    font-size: 32px;
    font-family:
      "JetBrains Mono",
      monospace;

    cursor:
      ${({ disabled }) =>
        disabled
          ? "not-allowed"
          : "pointer"};

    box-shadow: 8px 8px 0
      ${({ theme }) =>
        theme.colors.primaryDark};

    transition: all .15s ease;

    &:hover {
      transform: scale(1.05);
    }

    &:active {
      transform:
        translate(4px, 4px);

      box-shadow: 4px 4px 0
        ${({ theme }) =>
          theme.colors.primaryDark};
    }
`;