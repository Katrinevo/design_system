import styled from "styled-components";

export const CardWrapper =
  styled.div`
    width: 320px;
    padding: 24px;

    background:
      ${({ theme }) => theme.colors.primary};

    border: 3px solid
      ${({ theme }) =>
        theme.colors.primaryDark};

    border-radius:
      ${({ theme }) => theme.radius.md};

    box-shadow: 8px 8px 0
      ${({ theme }) =>
        theme.colors.primaryDark};
`;

export const CardTitle =
  styled.h3`
    margin-bottom: 16px;
    color:
      ${({ theme }) =>
        theme.colors.text};

    font-family:
      "JetBrains Mono",
      monospace;
`;