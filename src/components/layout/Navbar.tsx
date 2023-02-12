/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { NavDown } from "./Navdown";
import { motion } from "framer-motion";

export const navVariants = {
  hidden: {
    opacity: 0,
    y: -50,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 140,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      delay: 1,
    },
  },
};
export function Navbar() {
  const navLinks = [
    {
      linkName: "Home",
      linkPath: "#home",
    },
    {
      linkName: "About me",
      linkPath: "#about",
    },
    {
      linkName: "Projects",
      linkPath: "#projects",
    },
    {
      linkName: "Contact me",
      linkPath: "#contact",
    },
  ];

  const [selectedItem, setSelectedItem] = useState(0);
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className="w-full fixed top-0 bg-white z-10 border"
    >
      <div className="container mx-auto py-5 flex justify-between items-center">
        <a href="#" className="flex ml-2 items-center gap-2">
          <img className="w-8" src="/images/spade_black.png" alt="Logo" />
          <span className="text-xl font-bold text-gray-800">Bataklik.</span>
        </a>
        <ul className="hidden md:flex space-x-10 text-gray-600 text-sm uppercase">
          {navLinks.map((nl, i) => (
            <NavItem
              key={i}
              text={nl.linkName}
              link={nl.linkPath}
              onClick={() => setSelectedItem(navLinks.indexOf(nl))}
              selected={selectedItem === i}
            />
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
    </motion.nav>
  );
}

interface NavItemProps {
  text: string;
  link: string;
  selected: any;
  onClick: React.MouseEventHandler<HTMLDivElement>;
}
const NavItem = ({ text, link, selected, onClick }: NavItemProps) => (
  <motion.div
    className="menu-item cursor-pointer"
    onClick={e => {
      const target = document.querySelector(link);
      target!.scrollIntoView({ behavior: "smooth" });
      onClick(e);
    }}
    animate={{ opacity: selected ? 1 : 0.5 }}
  >
    {text}
    {selected && <motion.div className="underline" layoutId="underline" />}
  </motion.div>
);
