import styled,
{
  keyframes
} from "styled-components";

const shimmer =
  keyframes`
    0% {
      opacity: .4;
    }

    50% {
      opacity: 1;
    }

    100% {
      opacity: .4;
    }
`;

export const Wrapper =
  styled.div`
    width: 320px;

    display: flex;
    flex-direction: column;
    gap: 14px;
  `;

export const Line =
  styled.div<{
    width: string;
  }>`
    width:
      ${({ width }) =>
        width};

    height: 28px;

    border-radius: 18px;

    background: #c9d8ea;

    animation:
      ${shimmer}
      1.2s infinite;
  `;