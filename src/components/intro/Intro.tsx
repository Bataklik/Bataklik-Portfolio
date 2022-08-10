import { Container, styled } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";

const banner = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};

const bannerText = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    },
  },
};

export default function Intro() {
  return (
    <IntroBox variants={banner}>
      <IntroContainer>
        <IntroTitle variants={bannerText} initial="initial" animate="animate">
          Developer passionate with creating strong user friendly apps
        </IntroTitle>
        <IntroText variants={bannerText} initial="initial" animate="animate">
          I'm a Belgian based developer, passionate about react, and
          react-native apps. Have created a few apps, and I'm always looking for
          new challenges.
        </IntroText>
      </IntroContainer>
    </IntroBox>
  );
}

const IntroBox = styled(motion.div)(({ theme }) => ({
  backgroundColor: "#16181D",
  paddingTop: "100px",
  paddingBottom: "50px",

  [theme.breakpoints.down("sm")]: {
    paddingTop: "50px",
    paddingBottom: "25px",
  },
}));
const IntroContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "0 150px",

  [theme.breakpoints.down("sm")]: {
    padding: "0 25px",
  },
}));
const IntroTitle = styled(motion.h3)(({ theme }) => ({
  color: "#fff",
  fontSize: "36px",
  fontFamily: "inter",
  textAlign: "center",
  marginBottom: "10px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "24px",
    marginBottom: "5px",
  },
}));
const IntroText = styled(motion.p)(({ theme }) => ({
  color: "#8E97A8",
  fontSize: "26px",
  fontFamily: "inter",
  textAlign: "center",
  [theme.breakpoints.down("sm")]: {
    fontSize: "18px",
  },
}));
