import { ContactTextarea } from "./ContactTextarea";
import { ContactInput } from "./ContactInput";
import { ContactButton } from "./ContactButton";
import React from "react";
import { motion } from "framer-motion";
import { IoLogoGithub, IoLogoLinkedin, IoMailOpen } from "react-icons/io5";

const fadeIn = (direction: string, delay: number) => {
  return {
    hidden: {
      y: direction === "up" ? 80 : direction === "down" ? -80 : 0,
      opacity: 0,
      x: direction === "left" ? 80 : direction === "right" ? -80 : 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 1.2,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};
export function ContactSection({}) {
  const socialLinks = [
    {
      name: "Linkedin",
      link: "https://www.linkedin.com/in/burak-balci-491289210/",
      icon: IoLogoLinkedin,
    },
    {
      name: "Mail",
      link: "mailto:burak.balci@student.hogent.be",
      icon: IoMailOpen,
    },
    {
      name: "GitHub",
      link: "https://github.com/Bataklik",
      icon: IoLogoGithub,
    },
  ];
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: 0.5, delay: 0.1 } }}
      id="contact"
      className="py-16"
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* {Text} */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex items-center ml-4"
          >
            <div>
              <h1 className="text-gray-600 font-bold">CONTACT ME</h1>

              <h1 className="text-7xl text-gray-500 font-bold">
                Let&apos;s work <br /> together
              </h1>

              <div className="flex gap-4 mb-12 mt-2 ">
                {socialLinks.map(sl => (
                  <motion.div
                    className="flex justify-center items-center gap-2"
                    key={sl.name}
                    whileHover={{
                      opacity: 0.7,
                      textDecorationLine: "underline",
                    }}
                  >
                    <sl.icon className="text-slate-700" />
                    <a href={sl.link} target="_blank" rel="noreferrer">
                      {sl.name}
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
          {/* {Form} */}
          <motion.form
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start"
          >
            <ContactInput Type={"text"} Placeholder="Your name" />
            <ContactInput Type={"email"} Placeholder="Your email" />
            <ContactTextarea />
            <ContactButton />
          </motion.form>
        </div>
      </div>
    </motion.section>
  );
}
