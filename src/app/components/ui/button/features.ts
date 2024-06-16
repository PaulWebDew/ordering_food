import { ButtonVariant } from "@/app/components/ui/button/types";
import clsx from "clsx";

export const getButtonStyle = (variant: ButtonVariant) => {
  return clsx(
    variant === "contained" &&
      "bg-primary text-white hover:brightness-90 active:brightness-75  text-sm ",
    variant === "text" &&
      "text-gray-600 font-semibold text-sm hover:text-gray-500 active:text-gray-400",

    variant === "outlined" &&
      "text-gray-700 hover:bg-gray-100 active:brightness-90 text-sm font-semibold border border-gray-500",
    "px-4  py-2 flex gap-2 items-center transition-all rounded-full w-full flex items-center justify-around",
  );
};
