import classNames from "classnames";
import React, { useState } from "react";
import { LogoIcon } from "../../icons/LogoIcon";
import Menu from "../../icons/MenuIcon";
import Button from "../button";

export const Navbar = () => {
  const navLinks = ["Home", "Services", "Portfolio", "Contact"];
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header className="bg-white">
      <nav className="flex justify-between items-center w-[92%] mx-auto">
        <div>
          <LogoIcon />
        </div>
        <div
          className={classNames(
            "nav-links duration-300 md:static absolute bg-white md:min-h-fit min-h-[30vh] left-0 md:w-auto w-full flex items-center px-5 ",
            openMenu ? "top-[15%]" : "top-[-100%]"
          )}
        >
          <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
            {navLinks.map(link => (
              <li key={link}>
                <a className=" hover:text-gray-500" href="#">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-6">
          <Button onClick={undefined} text={"Sign In"} />
          <Menu
            onClick={() => setOpenMenu(!openMenu)}
            menu={openMenu}
            className={"md:hidden"}
          />
        </div>
      </nav>
    </header>
  );
};
