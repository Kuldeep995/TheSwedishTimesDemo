"use client";
import { pushRotate as Menu } from "react-burger-menu";
import { categories } from "../constants";
import { usePathname } from "next/navigation";
import Link from "next/link";

import "./styles.css";
// add login logout funcionality TBL
// make search work, remove it when an article is opened // needed
// open data on different pages according to category // needed
// todo make pushRotate work
// extend light mode to menu
//clean code -> place all json data at one place
// publish app
// imporve hamburger position
// close menu on button click
function HamburgerMenu() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname?.split("/").pop() === path;
  };
  // const [isMenuOpen, setIsMenuOpen]  = useState(false);
  return (
    <Menu>
      <nav className="text-cs md:text-sm gap-4 pb-10 pl-4 pr-4 max-w-6xl mx-auto">
        {categories.map((category) => {
          const isActiveLink = isActive(category);
          return (
            <div
              onClick={() => {
                console.log("heii");
              }}
            >
              <Link
                href={`/news/${category}`}
                className={`navlink text-left block ${
                  isActiveLink &&
                  "underline decoration-orange-400 underline-offset-4 font-bold text-lg text-left"
                } `}
              >
                {category}
              </Link>
            </div>
          );
        })}
      </nav>
    </Menu>
  );
}

export default HamburgerMenu;
