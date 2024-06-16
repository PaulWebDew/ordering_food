import React, { type FC } from "react";
import { ISectionHeadersProps } from "@/app/components/layout/types";

export const SectionHeaders: FC<ISectionHeadersProps> = ({
  subHeader,
  header,
}) => {
  return (
    <div className={"text-center"}>
      <h3 className={"uppercase text-gray-500 semibold leading-4"}>
        {subHeader}
      </h3>
      <h2 className={"text-primary font-bold text-4xl italic"}>{header}</h2>
    </div>
  );
};
