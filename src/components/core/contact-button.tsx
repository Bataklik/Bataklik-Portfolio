import React from "react";
import { IoLogoGithub, IoLogoLinkedin, IoMailOpen } from "react-icons/io5";

export function ContactButton({}) {
  return (
    <button
      className="flex justify-center gap-2 items-center text-base py-2 px-4 font-semibold leading-7 text-white bg-slate-700 hover:bg-white hover:text-black cursor-pointer border rounded-md shadow-2xl ease-in-out duration-300 text-center"
      onClick={() => {
        window.open("mailto:burak.balci@student.hogent.be", "_blank");
      }}
    >
      <p>Get in touch</p>
      <IoMailOpen />
    </button>
  );
}
