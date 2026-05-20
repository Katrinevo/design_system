import styled from "styled-components";

export const TabsWrapper =
  styled.div`
    display: flex;
    gap: 12px;
  `;

export const Tab =
  styled.button<{
    active?: boolean;
    disabled?: boolean;
  }>`
    padding: 7px 70px;

    border: 3px solid
      ${({ theme }) =>
        theme.colors.primaryDark};

    border-radius:
      ${({ theme }) =>
        theme.radius.md};

    background:
      ${({ theme, active, disabled }) =>
        disabled
          ? theme.colors.disabled
          : active
          ? theme.colors.pressed
          : theme.colors.primary};

    color:
      ${({ theme }) =>
        theme.colors.text};

    font-family:
      "JetBrains Mono",
      monospace;

    font-size: 20px;

    box-shadow: 4px 4px 0
      ${({ theme }) =>
        theme.colors.primaryDark};

    cursor:
      ${({ disabled }) =>
        disabled
          ? "not-allowed"
          : "pointer"};

    opacity:
      ${({ disabled }) =>
        disabled ? 0.7 : 1};

    font-weight:
      ${({ active }) =>
        active ? 700 : 400};
  `;