import React, { useState } from "react";
import { motion } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";

interface Props {
  navLinks: {
    id: number;
    name: string;
    path: string;
  }[];
  selectedItem: number;
  setSelectedItem: React.Dispatch<React.SetStateAction<number>>;
}

const sidebarVariants = {
  open: {
    x: 0,
    transition: {
      stiffness: 50,
      damping: 10,
    },
  },
  closed: {
    x: "100%",
    transition: {
      stiffness: 50,
      damping: 10,
    },
  },
};

export default function Sidebar({ navLinks }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {!isOpen ? (
        <HiMenu
          className={"block md:hidden cursor-pointer z-10 mr-3"}
          color={"black"}
          size={30}
          onClick={toggleSidebar}
        />
      ) : (
        <HiX
          className={"block z-10 md:hidden cursor-pointer fixed top-5 right-5"}
          color={"white"}
          size={30}
          onClick={toggleSidebar}
        />
      )}
      <motion.div
        className={`top-0 right-0 fixed gap-4 flex flex-col bg-slate-800 w-full h-full rounded-sm`}
        variants={sidebarVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
      >
        <motion.div className="mt-10 flex flex-col justify-center ">
          <motion.p
            variants={{
              open: { opacity: 1, x: 0 },
              closed: { opacity: 0, x: 50 },
            }}
            className="px-10 text-xl font-bold text-white mb-5"
          >
            Bataklik.
          </motion.p>
          {navLinks.map(nav => {
            return (
              <motion.a
                key={nav.id}
                href={nav.path}
                onClick={toggleSidebar}
                className="text-xl px-10 py-5 text-white hover:bg-white hover:text-slate-700 focus:hover:bg-white focus:text-slate-700 transition-all duration-500 ease-in-out"
                variants={{
                  open: { opacity: 1, x: 0 },
                  closed: { opacity: 0, x: 50 },
                }}
              >
                {nav.name}
              </motion.a>
            );
          })}
        </motion.div>
      </motion.div>
    </>
  );
}
