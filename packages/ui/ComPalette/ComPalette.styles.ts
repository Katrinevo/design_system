import styled from "styled-components";

export const Overlay =
  styled.div`
    width: 100%;
    min-height: 100vh;

    display: flex;
    justify-content: center;
    align-items: flex-start;

    padding-top: 80px;

    background:
      rgba(0,0,0,.15);
  `;

export const Palette =
  styled.div`
    width: 520px;

    background:
      ${({ theme }) =>
        theme.colors.primary};

    border: 3px solid
      ${({ theme }) =>
        theme.colors.primaryDark};

    border-radius:
      ${({ theme }) =>
        theme.radius.md};

    box-shadow: 8px 8px 0
      ${({ theme }) =>
        theme.colors.primaryDark};

    padding: 20px;
  `;

export const Search =
  styled.input`
    width: 100%;
    padding: 16px;

    border: 3px solid
      ${({ theme }) =>
        theme.colors.primaryDark};

    border-radius:
      ${({ theme }) =>
        theme.radius.md};

    margin-bottom: 16px;

    background:
      white;

    font-family:
      "JetBrains Mono",
      monospace;
  `;

export const CommandItem =
  styled.div`
    padding: 14px;
    margin-bottom: 8px;

    border-radius: 16px;

    cursor: pointer;

    font-family:
      "JetBrains Mono",
      monospace;

    &:hover {
      background:
        ${({ theme }) =>
          theme.colors.pressed};
    }
  `;