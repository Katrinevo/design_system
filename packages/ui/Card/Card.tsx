import React from "react";
import {
  CardWrapper,
  CardTitle
} from "./Card.styles";
import { CardProps }
from "./Card.types";

export const Card:
React.FC<CardProps> = ({
  title,
  children
}) => (
  <CardWrapper>
    <CardTitle>{title}</CardTitle>
    {children}
  </CardWrapper>
);