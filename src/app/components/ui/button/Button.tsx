import React, { forwardRef } from "react";
import { IButtonProps } from "@/app/components/ui/button/types";
import { getButtonStyle } from "@/app/components/ui/button/features";
import clsx from "clsx";
import { Loading } from "@/app/components/ui/loading/Loading";

type Ref = HTMLDivElement;

export const Button = forwardRef<Ref, IButtonProps>(
  (
    {
      className,
      buttonClass,
      children,
      afterIcon,
      variant = "contained",
      loading,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        {...props}
        className={`flex items-center justify-center ${className}`}
      >
        <button className={clsx(getButtonStyle(variant), buttonClass)}>
          {loading ? (
            <Loading />
          ) : (
            <>
              {children}
              {afterIcon}
            </>
          )}
        </button>
      </div>
    );
  },
);
