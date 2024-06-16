import React, { type FC } from "react";
import Image from "next/image";
import { MenuItem } from "@/app/components/menu/MenuItem";
import { SectionHeaders } from "@/app/components/layout/SectionHeaders";

export const HomeMenu: FC = () => {
  return (
    <section className={"relative flex flex-col"}>
      <div className={"mb-4"}>
        <div className={"h-48 w-48 absolute -left-12 -top-12 -z-10"}>
          <Image
            src={"/sallad1.png"}
            alt={"salad"}
            fill
            sizes={"(max-width: 800px) 50vw, 33vw"}
            priority={true}
            className={"object-contain"}
          />
        </div>
        <SectionHeaders header={"Menu"} subHeader={"Check out"} />
        <div className={"h-48 w-48 absolute -right-12 -top-24 -z-10"}>
          <Image
            src={"/sallad2.png"}
            alt={"salad"}
            fill
            sizes={"(max-width: 800px) 50vw, 33vw"}
            priority={true}
            className={"object-contain"}
          />
        </div>
      </div>

      <div className={"grid grid-cols-3 gap-4 "}>
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </div>
    </section>
  );
};
