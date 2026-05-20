import React from "react";

export interface CardProps {
  title: string;
  children: React.ReactNode;

  variant?:
    | "filled"
    | "outlined"
    | "elevated";
}