/* eslint-disable @next/next/no-img-element */
import { motion, Variants } from "framer-motion";
import React from "react";
const leftContainerVariants: Variants = {
  active: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: 0.1 },
  },
  inactive: {
    x: -500,
    opacity: 0,
  },
};
const rightContainerVariants: Variants = {
  active: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: 0.1 },
  },
  inactive: {
    x: 500,
    opacity: 0,
  },
};
const imgVariants: Variants = {
  active: {
    opacity: 1,
    transition: { duration: 1, delay: 0.3 },
  },
  inactive: {
    opacity: 0,
  },
};
export function AboutSection({}) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: 0.5, delay: 0.2 } }}
      id="about"
      className="px-10 my-16"
    >
      <div className="container py-15 mx-auto flex flex-col-reverse lg:flex-row items-center gap-20">
        {/* Left */}
        <div className="relative">
          {/* <img className="w-1/4 h-1/4 absolute left-0 -z-10" alt={} /> */}
          <motion.div
            initial={"inactive"}
            variants={leftContainerVariants}
            animate={"active"}
            className="h-full rounded-t-full shadow-2xl overflow-hidden"
          >
            <motion.img
              alt={"Portrait"}
              initial={"inactive"}
              variants={imgVariants}
              animate={"active"}
              src={"images/portrait.jpeg"}
              className=""
            />
          </motion.div>
        </div>
        {/* RIGHT */}
        <motion.div
          initial={"inactive"}
          variants={rightContainerVariants}
          animate={"active"}
          className="my-auto flex flex-col gap-3"
        >
          <h1 className="text-gray-600 font-bold">About me</h1>

          <p className="text-gray-400">
            As a Belgian-based developer, I am deeply passionate about creating
            innovative and engaging React and React-Native applications. With
            few successful projects under my belt, I am constantly seeking new
            and challenging opportunities to grow and expand my skillset..
          </p>
          <div className="container ">
            <h3 className="text-gray-500 font-medium"></h3>
            <h1 className="text-gray-600 font-bold">Favorite technologies:</h1>

            <ul className="pl-6 list-disc">
              <li className="my-2 font-medium text-gray-400">TypeScript</li>
              <li className="my-2 font-medium text-gray-400">React Native</li>
              <li className="my-2 font-medium text-gray-400">React</li>
              <li className="my-2 font-medium text-gray-400">CSharp</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
