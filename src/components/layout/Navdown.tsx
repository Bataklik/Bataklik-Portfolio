import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiOutlineX } from "react-icons/hi";

interface NavDownProps {
  navLinks: {
    home: {
      linkName: string;
      linkPath: string;
    };
    about: {
      linkName: string;
      linkPath: string;
    };
    projects: {
      linkName: string;
      linkPath: string;
    };
    contact: {
      linkName: string;
      linkPath: string;
    };
  };
}

export function NavDown({ navLinks }: NavDownProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.ul
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          exit={{ y: -100 }}
          className="absolute top-full right-0 bg-white shadow-xl py-2 px-4 z-10 rounded-lg"
        >
          {Object.entries(navLinks).map(([key, value]) => (
            <li key={key} className="mb-4">
              <a
                href={value.linkPath}
                className="text-gray-800 text-xl"
                onClick={() => setIsOpen(false)}
              >
                {value.linkName}
              </a>
            </li>
          ))}
        </motion.ul>
      )}
      <HiMenu
        className={"block md:hidden cursor-pointer z-10 mr-3"}
        color={"black"}
        size={30}
        onClick={() => setIsOpen(!isOpen)}
      />
      {/* <HiOutlineX
          className={
            isOpen
              ? "block md:hidden cursor-pointer z-10 mr-3"
              : "hidden md:hidden cursor-pointer z-10 mr-3"
          }
          color={"black"}
          size={30}
          onClick={() => setIsOpen(!isOpen)}
        /> */}
    </AnimatePresence>
  );
}
