import styled from "styled-components";

export const Wrapper =
  styled.div`
    position: relative;
    width: 300px;
  `;

export const Trigger =
  styled.button`
    width: 100%;
    padding: 16px;

    text-align: left;

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

    font-family:
      "JetBrains Mono",
      monospace;

    font-size: 20px;

    cursor: pointer;

    box-shadow: 4px 4px 0
      ${({ theme }) =>
        theme.colors.primaryDark};
  `;

export const Menu =
  styled.div`
    position: absolute;

    width: 100%;
    margin-top: 12px;

    padding: 8px;

    border: 3px solid
      ${({ theme }) =>
        theme.colors.primaryDark};

    border-radius:
      ${({ theme }) =>
        theme.radius.md};

    background:
      ${({ theme }) =>
        theme.colors.primary};

    box-shadow: 8px 8px 0
      ${({ theme }) =>
        theme.colors.primaryDark};

    display: flex;
    flex-direction: column;
    gap: 8px;
  `;

export const Option =
  styled.div`
    padding: 14px;

    border-radius: 18px;

    background: white;

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