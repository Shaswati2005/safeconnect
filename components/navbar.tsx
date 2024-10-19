import React from "react";
import Button from "./Button";
import Link from "next/link";
import { NAV_LINKS } from "@/constants";

const Navbar = () => {
  return (
    <nav className=" bg-violet-10 lg:rounded-bl-5xl  lg:rounded-br-5xl flexBetween max-container px-6 z-20  relative py-5">
   
      <Link href="/">
        <h3 className="capitalise font-bold-18 text-skin-10 ">safe connect</h3>
      </Link>

      <ul className="hidden h-full gap-15 lg:flex gap-20">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-skin-10 flex-center cursor-pointer pb-1 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
