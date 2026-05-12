import styled from "styled-components";

export const Wrapper =
  styled.div`
    display:flex;
    flex-direction:column;
    gap:8px;
    width:300px;
`;

export const Label =
  styled.label`
    color:
      ${({ theme }) =>
        theme.colors.text};

    font-family:
      "JetBrains Mono",
      monospace;
`;

export const StyledInput =
  styled.input`
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

    font-family:
      "JetBrains Mono",
      monospace;
`;

export const Error =
  styled.span`
    color: red;
    font-size: 14px;
  `;