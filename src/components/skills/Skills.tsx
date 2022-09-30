import { Skill } from "./skill";
import { Box, Container, Grid, styled } from "@mui/material";
import JS from "./../../assets/images/skills/JavaScript.svg";
import TS from "./../../assets/images/skills/TypeScript.svg";
import CSHARP from "./../../assets/images/skills/Csharp.svg";
import HTML from "./../../assets/images/skills/HTML5.svg";
import CSS from "./../../assets/images/skills/CSS3.svg";
import MYSQL from "./../../assets/images/skills/Mysql.svg";
import REACT from "./../../assets/images/skills/React.svg";
import REACTNATIVE from "./../../assets/images/skills/React-Native.svg";
import { motion, Variants } from "framer-motion";
import { useState } from "react";
import { SkillCard } from "../skillCard";
const SkillVariants: Variants = {
  offscreen: {
    y: 300,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const CardVariant1: Variants = {
  show: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: 800 },
  exit: { opacity: 0, y: 800 },
};
const CardVariant2: Variants = {
  show: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 800 },
  exit: { opacity: 0, x: 800 },
};
const CardVariant3: Variants = {
  show: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: -800 },
  exit: { opacity: 0, x: -800 },
};
export default function Skills() {
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
  const [isHover, setIsHover] = useState(false);
  return (
    <SkillsBox>
      <SkillsContainer
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <SkillsTitle
          animate={{
            textShadow: isHover
              ? "5px 1px 3px rgb(167, 159, 253), 1px 1px 3px rgba(123, 39, 44, 1)"
              : "none",
          }}
        >
          Skills
        </SkillsTitle>
        {/* {skills.map(skill => (
          <Skill
            variant={SkillVariants}
            initial="offscreen"
            animate="onscreen"
            key={skill.name}
            name={skill.name}
            description={skill.description}
            rating={skill.rating}
            src={skill.src}
          />
        ))} */}
        <Grid component={Container} container>
          {skills.map((skill, index) => (
            <Grid item md={4}>
              <SkillCard
                variant={
                  index % 2
                    ? CardVariant1
                    : index % 2
                    ? CardVariant3
                    : CardVariant2
                }
                key={skill.name}
                {...skill}
              />
            </Grid>
          ))}
        </Grid>
      </SkillsContainer>
    </SkillsBox>
  );
}
const SkillsBox = styled(Box)(({ theme }) => ({
  justifyContent: "center",
  alignItems: "center",
}));
const SkillsContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  marginTop: "20px",
  marginBottom: "20px",
}));

const SkillsTitle = styled(motion.h3)(({ theme }) => ({
  color: "#fff",
  fontSize: "28px",
  marginBottom: "20px",
  fontFamily: "inter",
  fontWeight: 700,
}));
