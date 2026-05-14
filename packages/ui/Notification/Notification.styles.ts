import styled from "styled-components";

export const Wrapper =
  styled.div<{
    type: string;
  }>`
    width: 300px;
    padding: 10px;

    border: 3px solid
      ${({ theme }) =>
        theme.colors.primaryDark};

    border-radius:
      ${({ theme }) =>
        theme.radius.md};

    background:
      ${({ theme }) =>
        theme.colors.primary};

    border-left-width: 12px;

    border-left-color:
      ${({ type }) => {
        if (type === "success")
          return "#276e41";
        if (type === "warning")
          return "#d97f35";
        if (type === "error")
          return "#b03535";

        return "#0F4A8A";
      }};
  `;

export const Title =
  styled.h4`
    margin: 0 0 8px 0;

    color:
      ${({ theme }) =>
        theme.colors.text};

    font-family:
      "JetBrains Mono",
      monospace;
  `;

export const Message =
  styled.p`
    margin: 0;

    color:
      ${({ theme }) =>
        theme.colors.text};

    font-family:
      "JetBrains Mono",
      monospace;
  `;