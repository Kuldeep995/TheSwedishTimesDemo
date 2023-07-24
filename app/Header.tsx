import React from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import Link from "next/link";
import NavLinks from "./NavLinks";
import HamburgerMenu from "./HamburgerMenu";
import SearchBox from "./SearchBox";
import DarkModeButton from "./DarkModeButton";

function Header() {
  return (
    <header>
      <div className=" pt-10 pb-10 pl-4 pr-4 flex justify-between items-center">
        <HamburgerMenu />

        <Link href="/" prefetch={false}>
          <h1 className="font-serif text-center sm:text-2xl md:text-4xl xl:text-4xl">
            The Swedish Times
          </h1>
        </Link>

        <div className="flex items-center justify-end space-x-2">
          <DarkModeButton />
        </div>
      </div>

      <NavLinks />

      <SearchBox />
    </header>
  );
}

export default Header;
