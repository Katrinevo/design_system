import styled from "styled-components";

export const Wrapper =
  styled.div`
    position: fixed;
    right: 32px;
    bottom: 32px;
  `;

export const Fab =
  styled.button<{ disabled?: boolean }>`
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

    box-shadow: 8px 8px 0
      ${({ theme }) =>
        theme.colors.primaryDark};

    cursor: pointer;

    &:active {
      transform:
        translate(4px,4px);

      box-shadow: 4px 4px 0
        ${({ theme }) =>
          theme.colors.primaryDark};
    }
`;

export const ActionList =
  styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;

    margin-bottom: 16px;
    align-items: flex-end;
  `;

export const ActionButton =
  styled.button`
    width: 52px;
    height: 52px;

    border-radius: 50%;

    border: 3px solid
      ${({ theme }) =>
        theme.colors.primaryDark};

    background:
      ${({ theme }) =>
        theme.colors.primary};

    color:
      ${({ theme }) =>
        theme.colors.text};

    font-size: 24px;

    box-shadow: 4px 4px 0
      ${({ theme }) =>
        theme.colors.primaryDark};

    cursor: pointer;
  `;