import React from "react";

import {
  Wrapper,
  Line
} from "./SkeletonLoader.styles";

import {
  SkeletonLoaderProps
} from "./SkeletonLoader.types";

const widths = [
  "100%",
  "82%",
  "93%",
  "65%"
];

export const SkeletonLoader:
React.FC<SkeletonLoaderProps> = ({
  lines = 4
}) => {
  return (
    <Wrapper>
      {widths
        .slice(0, lines)
        .map((w, i) => (
          <Line
            key={i}
            width={w}
          />
      ))}
    </Wrapper>
  );
};