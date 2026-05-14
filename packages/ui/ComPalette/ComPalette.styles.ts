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

    padding: 24px;

    font-family:
      "JetBrains Mono",
      monospace;
  `;

export const Search =
  styled.input`
    width: 100%;

    padding: 18px;

    box-sizing: border-box;

    border: 3px solid
      ${({ theme }) =>
        theme.colors.primaryDark};

    border-radius:
      ${({ theme }) =>
        theme.radius.md};

    margin-bottom: 20px;

    background: white;

    font-size: 18px;

    font-family:
      "JetBrains Mono",
      monospace;
  `;

export const CommandItem =
  styled.div`
    width: 100%;

    padding: 18px;
    
    box-sizing: border-box;

    margin-bottom: 12px;

    border: 2px solid
      ${({ theme }) =>
        theme.colors.primaryDark};

    border-radius: 18px;

    background: white;

    font-size: 18px;

    font-family:
      "JetBrains Mono",
      monospace;

    cursor: pointer;

    transition: .15s;

    &:hover {
      background:
        ${({ theme }) =>
          theme.colors.pressed};
    }
  `;