/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { motion } from "framer-motion";
import Sidebar from "./Sidebar";

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
        <Sidebar navLinks={navLinks} />

        {/* <NavDown navLinks={navLinks} /> */}
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
