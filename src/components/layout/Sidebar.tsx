import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

interface Props {
  navLinks: {
    linkName: string;
    linkPath: string;
  }[];
}
export default function Sidebar({ navLinks }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {!isOpen ? (
        <HiMenu
          className={"block md:hidden cursor-pointer z-10 mr-3"}
          color={"black"}
          size={30}
          onClick={() => setIsOpen(!isOpen)}
        />
      ) : (
        <HiX
          className={"block z-10 md:hidden cursor-pointer fixed top-5 right-5"}
          color={"white"}
          size={30}
          onClick={() => setIsOpen(!isOpen)}
        />
      )}
      <div
        className={`top-0 right-0 fixed gap-4 flex flex-col bg-slate-800 w-[50vw] h-full rounded-sm ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } ease-in-out duration-300 pt-16`}
      >
        {navLinks.map(n => (
          <a
            key={n.linkName}
            href={n.linkPath}
            onClick={() => setIsOpen(!isOpen)}
            className="text-xl px-10 py-5  text-white hover:bg-white hover:text-slate-700 focus:hover:bg-white focus:text-slate-700 transition-all duration-500 ease-in-out"
          >
            {n.linkName}
          </a>
        ))}
      </div>
    </>
  );
}
