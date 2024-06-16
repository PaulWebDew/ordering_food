import { ChangeEvent, HTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

export interface IInputProps extends HTMLAttributes<HTMLInputElement> {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  isError?: boolean;
  errorMessage?: string | FieldError;
  disabled?: boolean;
}
