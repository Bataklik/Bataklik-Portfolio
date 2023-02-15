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
        className={`top-0 right-0 fixed gap-8 flex flex-col bg-slate-800 w-[35vw] h-full p-10 rounded-sm ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } ease-in-out duration-300`}
      >
        {navLinks.map(n => (
          <a
            key={n.linkName}
            href={n.linkPath}
            onClick={() => setIsOpen(!isOpen)}
            className="text-xl text-white hover:underline hover:underline-offset-4"
          >
            {n.linkName}
          </a>
        ))}
      </div>
    </>
  );
}
