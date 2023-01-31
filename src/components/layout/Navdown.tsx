import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiOutlineX } from "react-icons/hi";

interface NavDownProps {
  navLinks: {
    linkName: string;
    linkPath: string;
  }[];
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
          {navLinks.map(n => (
            <li key={n.linkName} className="mb-4">
              <a
                href={n.linkPath}
                className="text-gray-800 text-xl"
                onClick={() => setIsOpen(false)}
              >
                {n.linkName}
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
