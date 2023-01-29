import React from "react";
import { Card } from "./Skillcard";
import { motion } from "framer-motion";
import JS from "../../../assets/skills/JavaScript.svg";
import TS from "../../../assets/skills/TypeScript.svg";
import CSHARP from "../../../assets/skills/Csharp.svg";
import HTML from "../../../assets/skills/HTML5.svg";
import CSS from "../../../assets/skills/CSS3.svg";
import MYSQL from "../../../assets/skills/Mysql.svg";
import REACT from "../../../assets/skills/React.svg";
import REACTNATIVE from "../../../assets/skills/React-Native.svg";
export function SkillSection({}) {
  const skills = [
    {
      name: "JavaScript",
      rating: 4.5,
      description:
        "From the moment I first used JavaScript, I fell in love with the language.",
      src: JS,
    },
    {
      name: "TypeScript",
      rating: 5,
      description:
        "First I hated TypeScript, but now I love it. I have actually used it in my app as well.",
      src: TS,
    },
    {
      name: "CSharp",
      rating: 3.5,
      description:
        "C# is my first language, but I neither hate it nor love it.",
      src: CSHARP,
    },
    {
      name: "HTML",
      rating: 3.5,
      description:
        "Html is a basic web developer language, you can use it to create a simple website.",
      src: HTML,
    },
    {
      name: "CSS",
      rating: 3.5,
      description:
        "CSS is also a basic web developer language, you can use it to style websites.",
      src: CSS,
    },
    {
      name: "Mysql",
      rating: 2.5,
      description:
        "Mysql is my very first database language, that I have used in some school projects.",
      src: MYSQL,
    },
    {
      name: "React",
      rating: 4,
      description:
        "Most of the React projects I've worked on are school projects.",
      src: REACT,
    },
    {
      name: "React-Native",
      rating: 5,
      description:
        "Created a mobile app with React Native for my internship. In the process, I also learned typescript.",
      src: REACTNATIVE,
    },
  ];
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: 0.5, delay: 0.2 } }}
      id="skills"
      className="mt-8"
    >
      <div className="container mx-auto ">
        {/* Top */}
        <div className="flex flex-col gap-3 items-center">
          <h1 className="text-gray-600 font-bold">SKILLS</h1>
          <h1 className="text-3xl text-gray-500 font-bold">What do I know?</h1>
          <p className="w-1/2 text-center text-gray-400">
            My skills section displays my technical and creative abilities. I
            continuously learn to improve and add new skills. Browse the section
            to see my full range of capabilities.
          </p>
        </div>
        {/* Bottom */}
        <div className="p-5 sm:p-0 flex flex-wrap justify-evenly">
          {skills.map(s => (
            <Card
              key={s.name}
              cardImage={s.src}
              cardTitle={s.name}
              cardDescription={s.description}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
