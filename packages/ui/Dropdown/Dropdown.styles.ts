import styled from "styled-components";

export const Select =
  styled.select`
    width: 300px;
    padding: 16px;

    border: 3px solid
      ${({ theme }) =>
        theme.colors.primaryDark};

    border-radius:
      ${({ theme }) =>
        theme.radius.md};

    background:
      ${({ theme }) =>
        theme.colors.primary};

    color:
      ${({ theme }) =>
        theme.colors.text};

    font-size: 20px;
    font-family:
      "JetBrains Mono",
      monospace;
  `;