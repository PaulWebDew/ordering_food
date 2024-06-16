import { forwardRef } from "react";

import { IInputProps } from "@/app/components/input/input.types";

export const Input = forwardRef<HTMLInputElement, IInputProps>(
  (props, forwardedRef) => {
    const {
      label,
      placeholder,
      value,
      type,
      isError,
      errorMessage,
      disabled,
      onChange,
      className,
      ...remindedProps
    } = props;

    const inputProps = {
      ...remindedProps,
    };

    const renderLabel = label && (
      <label className={"text-sm text-text_secondary w-max"}>{label}</label>
    );

    const renderInput = (
      <input
        disabled={disabled}
        className={`text-base px-4 py-3 w-full rounded-xl border-2 bg-gray-100  ${className}`}
        ref={forwardedRef}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        type={type}
        {...inputProps}
      />
    );
    const renderError = (
      <span className={"text-red-500 w-full"}>{errorMessage?.toString()}</span>
    );

    return (
      <div className={"flex flex-col w-full"}>
        {renderLabel}
        {renderInput}
        {isError && renderError}
      </div>
    );
  },
);

Input.displayName = "Input";
