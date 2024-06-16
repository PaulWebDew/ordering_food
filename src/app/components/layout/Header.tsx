import React, { type FC } from "react";
import Link from "next/link";

export const Header: FC = () => {
  return (
    <header className={"flex items-center justify-between gap-8"}>
      <Link className={"text-primary font-semibold text-2xl"} href="/">
        ST PIZZA
      </Link>
      <nav
        className={"flex flex-1 gap-4 items-center text-gray-500 font-semibold"}
      >
        <Link href={"/"}>Home</Link>
        <Link href={""}>Menu</Link>
        <Link href={""}>About</Link>
        <Link href={""}>Contact</Link>

        <div className={"flex-1 text-end"}>
          <Link
            href={"/login"}
            className={
              "text-white bg-primary px-6 py-2 rounded-full hover:brightness-90 active:brightness-75"
            }
          >
            Login
          </Link>
        </div>
      </nav>
    </header>
  );
};
