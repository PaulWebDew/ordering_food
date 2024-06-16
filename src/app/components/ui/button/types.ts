import React, { HTMLProps } from "react";

export type ButtonVariant = "text" | "outlined" | "contained";

export interface IButtonProps extends HTMLProps<HTMLDivElement> {
  afterIcon?: React.ReactNode;
  children: React.ReactNode;
  variant?: ButtonVariant;
  buttonClass?: string;
  loading?: boolean;
}
