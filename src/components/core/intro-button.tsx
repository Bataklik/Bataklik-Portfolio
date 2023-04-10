import { motion, Variants } from "framer-motion";
import React from "react";
const buttonVariants: Variants = {
  active: {
    opacity: 1,
    transition: { duration: 1, delay: 0.25 },
  },
  inactive: {
    opacity: 0,
  },
};

interface IntroButtonProps {
  text: string;
  href: string;
  white: boolean;
}
export function IntroButton({ text, href, white = false }: IntroButtonProps) {
  return (
    <motion.a
      href={href}
      initial={"inactive"}
      variants={buttonVariants}
      animate={"active"}
      className={`text-base py-2 px-4 text-center ease-in-out duration-300 ${
        white ? "bg-white hover:bg-black" : "bg-black hover:bg-white"
      } border rounded-lg shadow-2xl font-semibold leading-7 ${
        white ? "text-black hover:text-white" : "text-white hover:text-black"
      }`}
    >
      {text}
    </motion.a>
  );
}
