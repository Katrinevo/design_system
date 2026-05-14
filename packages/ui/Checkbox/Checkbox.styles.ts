import styled from "styled-components";

export const Wrapper =
  styled.label`
    display: flex;
    align-items: center;
    gap: 16px;

    cursor: pointer;

    font-size: 24px;

    color:
      ${({ theme }) =>
        theme.colors.text};

    font-family:
      "JetBrains Mono",
      monospace;
  `;

export const Box =
  styled.div<{
    checked: boolean;
    multiple?: boolean;
  }>`
    width: 36px;
    height: 36px;

    border: 3px solid
      ${({ theme }) =>
        theme.colors.primaryDark};

    border-radius:
      ${({ multiple }) =>
        multiple
          ? "8px"
          : "50%"};

    background:
      ${({ checked, theme }) =>
        checked
          ? theme.colors.primaryDark
          : theme.colors.primary};

    display: flex;
    align-items: center;
    justify-content: center;

    color: white;
    font-size: 20px;
  `;