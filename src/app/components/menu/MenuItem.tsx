import React, { type FC } from "react";
import { Button } from "@/app/components/ui/button/Button";
import { ItemStyle } from "@/app/components/menu/Item.style";

export const MenuItem: FC = () => {
  return (
    <div className={ItemStyle}>
      <img
        src="/pizza.png"
        alt={"Pizza"}
        className={"transition-all duration-300 max-w-[80%] block mx-auto p-4"}
      />
      <h4 className={"font-semibold my-3 text-xl"}>Pepperoni Pizza</h4>
      <p className={"text-gray-500"}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </p>
      <Button className={"mt-4"}>Add to cart $12</Button>
    </div>
  );
};
