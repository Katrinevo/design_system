import styled from "styled-components";

export const StyledButton =
  styled.button<{ disabled?: boolean }>`
    position: relative;

    padding: 18px 48px;

    border: 3px solid
      ${({ theme }) => theme.colors.primaryDark};

    border-radius:
      ${({ theme }) => theme.radius.md};

    background:
      ${({ theme, disabled }) =>
        disabled
          ? theme.colors.disabled
          : theme.colors.primary};

    color:
      ${({ theme }) => theme.colors.text};

    font-size: 32px;
    font-family: "JetBrains Mono",
      monospace;

    cursor: pointer;

    transition: all .15s ease;

    box-shadow: 8px 8px 0
      ${({ theme }) =>
        theme.colors.primaryDark};

    &:hover {
      font-weight: 700;
    }

    &:active {
      transform: translate(4px, 4px);

      box-shadow: 4px 4px 0
        ${({ theme }) =>
          theme.colors.primaryDark};

      background:
        ${({ theme }) =>
          theme.colors.pressed};
    }

    &:disabled {
      opacity: .7;
      cursor: not-allowed;
    }
`;