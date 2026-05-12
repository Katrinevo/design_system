import styled from "styled-components";

export const Wrapper =
  styled.label`
    display: flex;
    align-items: center;
    gap: 16px;
    cursor: pointer;
    font-size: 24px;
    color: #0F4A8A;
    font-family:
      "JetBrains Mono",
      monospace;
  `;

export const Box =
  styled.div<{ checked: boolean }>`
    width: 36px;
    height: 36px;

    border: 3px solid #0F4A8A;

    border-radius:
      ${({ checked }) =>
        checked ? "10px" : "50%"};

    background:
      ${({ checked }) =>
        checked
          ? "#0F4A8A"
          : "#DCE6F2"};

    display:flex;
    align-items:center;
    justify-content:center;

    color:white;
    font-size:24px;
  `;