/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import classNames from "classnames";
import { NavDown } from "./Navdown";

export function Navbar() {
  const navLinks = {
    home: {
      linkName: "Home",
      linkPath: "#home",
    },
    about: {
      linkName: "About me",
      linkPath: "#about",
    },
    projects: {
      linkName: "Projects",
      linkPath: "#projects",
    },
    contact: {
      linkName: "Contact me",
      linkPath: "#contact",
    },
  };
  const [selectedItem, setSelectedItem] = useState(navLinks.home);
  return (
    <nav className="w-full fixed top-0 bg-white z-10">
      <div className="container mx-auto py-5 flex justify-between items-center">
        <div className="flex ml-2 items-center gap-2">
          <img className="w-8" src="/images/spade_black.png" alt="Logo" />
          <span className="text-xl font-bold text-gray-800">Bataklik.</span>
        </div>
        <ul className="hidden md:flex space-x-10 text-gray-600 text-sm uppercase">
          {Object.entries(navLinks).map(nl => (
            <li
              className={classNames(
                "hover:text-gray-400 ",
                selectedItem.linkName == nl[1].linkName
                  ? "underline underline-offset-4"
                  : ""
              )}
              key={nl[0]}
              onClick={() => setSelectedItem(nl[1])}
            >
              <a href={nl[1].linkPath}>{nl[1].linkName}</a>
            </li>
          ))}
        </ul>
        <NavDown navLinks={navLinks} />
        {/* <HiMoon
          className="hidden md:block cursor-pointer"
          color="black"
          size={30}
        /> */}
        {/* <HiMenu
          className={
            OpenMenu
              ? "hidden md:hidden cursor-pointer z-10"
              : "block md:hidden cursor-pointer z-10 mr-3"
          }
          color={OpenMenu ? "white" : "black"}
          size={30}
          onClick={() => setOpenMenu(!OpenMenu)}
        /> */}
        {/* <HiOutlineX
          className={
            OpenMenu
              ? "block md:hidden cursor-pointer z-10 mr-3"
              : "hidden md:hidden cursor-pointer z-10 mr-3"
          }
          color={OpenMenu ? "white" : "black"}
          size={30}
          onClick={() => setOpenMenu(!OpenMenu)}
        /> */}
        {/* <motion.ul
          className={classNames(
            OpenMenu
              ? "block md:hidden absolute left-0 top-0 w-full p-10 rounded-b-xl space-y-10 text-white text-center bg-white border-2 border-gray-600 shadow-lg"
              : "block md:hidden absolute left-0 top-0 w-full p-10 rounded-b-xl space-y-10 text-white text-center bg-white border-2 border-gray-600 shadow-lg"
          )}
          variants={{
            close: {
              x: "100%",
              opacity: 0,
            },
            open: {
              x: 0,
              opacity: 1,
            },
          }}
          transition={{
            type: "spring",
            bounce: 0,
            duration: 0.4,
            delay: 0.1,
          }}
          animate={OpenMenu ? "open" : "close"}
        >
          {Object.entries(navLinks).map(([key, value]) => (
            <li key={key}>
              <a
                href={value.linkPath}
                className="text-gray-800"
                onClick={() => setOpenMenu(false)}
              >
                {value.linkName}
              </a>
            </li>
          ))}
        </motion.ul> */}
      </div>
    </nav>
  );
}