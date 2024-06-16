import React, { type FC } from "react";
import Image from "next/image";
import { ArrowRightIcon } from "@/app/assets/icons/ArrowRight.icon";
import { Button } from "@/app/components/ui/button/Button";

export const Hero: FC = () => {
  return (
    <section className={"hero mt-4"}>
      <div className={"py-8"}>
        <h1 className={"text-4xl font-semibold"}>
          Everything <br />
          is better <br />
          with a <span className={"text-primary"}>Pizza</span>
        </h1>
        <p className={"my-4 text-gray-500 text-sm"}>
          Pizza is the missing piece that makes every day complete, a simple and
          delicious joy in life
        </p>
        <div className={"flex gap-2"}>
          <Button afterIcon={<ArrowRightIcon />}>Order now</Button>
          <Button variant={"text"} afterIcon={<ArrowRightIcon />}>
            Learn more
          </Button>
        </div>
      </div>
      <div className={"relative"}>
        <Image
          src={"/pizza.png"}
          alt={"pizza"}
          sizes={"(max-width: 800px) 50vw, 33vw"}
          priority={true}
          fill
          className={"object-contain"}
        />
      </div>
    </section>
  );
};
