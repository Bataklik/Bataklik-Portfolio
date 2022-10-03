import { Box, styled } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
const banner = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};

const bannerTitle = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      delay: 0.2,
      duration: 1,
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
      delay: 0.5,
      duration: 1,
    },
  },
};

export default function Banner() {
  const socials = [
    {
      icon: <LinkedIn />,
      href: "https://www.linkedin.com/in/burak-balci-491289210",
    },
    {
      icon: <GitHub />,
      href: "https://github.com/Bataklik",
    },
  ];
  return (
    <IntroBox variants={banner}>
      <IntroContainer>
        <IntroName variants={bannerTitle} initial="initial" animate="animate">
          Burak Mikail Balci
        </IntroName>
        <IntroWhat variants={bannerText} initial="initial" animate="animate">
          Software developer
        </IntroWhat>
        <IntroText variants={bannerText} initial="initial" animate="animate">
          I'm a Belgian based developer, passionate about react, and
          react-native apps. Have created a few apps, and I'm always looking for
          new challenges.
        </IntroText>
      </IntroContainer>
      <IntroContainer>
        <IntroSocials>
          {socials.map(s => (
            <motion.a
              key={s.href}
              variants={{
                initial: {
                  x: -500,
                  opacity: 0,
                },
                animate: {
                  x: 0,
                  opacity: 1,
                  transition: {
                    ease: [0.6, 0.01, -0.05, 0.95],
                    delay: 0.7,
                    duration: 1,
                  },
                },
              }}
              initial="initial"
              animate="animate"
              whileHover={{ opacity: 0.5 }}
              href={s.href}
            >
              {s.icon}
            </motion.a>
          ))}
        </IntroSocials>
      </IntroContainer>
      {/* <IntroContainer>
        <IntroTitle variants={bannerTitle} initial="initial" animate="animate">
          Developer passionate with creating strong user friendly apps
        </IntroTitle>

      </IntroContainer> */}
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
const IntroContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "0 150px",

  [theme.breakpoints.down("sm")]: {
    padding: "0 25px",
  },
}));
// const IntroTitle = styled(motion.h3)(({ theme }) => ({
//   color: "#fff",
//   fontSize: "36px",
//   fontFamily: "inter",
//   textAlign: "center",
//   marginBottom: "10px",
//   [theme.breakpoints.down("sm")]: {
//     fontSize: "24px",
//     marginBottom: "5px",
//   },
// }));
const IntroText = styled(motion.p)(({ theme }) => ({
  color: "#8E97A8",
  fontSize: "26px",
  fontFamily: "inter",
  textAlign: "center",
  [theme.breakpoints.down("sm")]: {
    fontSize: "18px",
  },
}));
const IntroName = styled(motion.h3)(({ theme }) => ({
  color: "#fff",
  fontSize: "36px",
  fontFamily: "inter",
  textAlign: "center",
  marginBottom: "2px",
  textShadow:
    "0px 0px 20px rgb(167, 159, 253), 0 -15px 20px  rgba(123, 39, 44, 1)",
  [theme.breakpoints.down("sm")]: {
    fontSize: "24px",
    marginBottom: "5px",
  },
}));
const IntroWhat = styled(motion.p)(({ theme }) => ({
  color: "rgba(255,255,255,0.82)",
  fontSize: "26px",
  fontFamily: "inter",
  textAlign: "center",
  marginBottom: "5px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "18px",
  },
}));
const IntroSocials = styled(Box)(({ theme }) => ({
  display: "flex",
  padding: "5px 15px",
  width: "150px",
  justifyContent: "space-between",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    width: "100px",
  },
}));

const LinkedIn = styled(LinkedInIcon)(({ theme }) => ({
  color: "#fff",
  fontSize: 36,
  marginRight: 10,
  left: 0,
  [theme.breakpoints.down("sm")]: {
    fontSize: 26,
  },
}));
const GitHub = styled(GitHubIcon)(({ theme }) => ({
  color: "#fff",
  fontSize: 36,
  [theme.breakpoints.down("sm")]: {
    fontSize: 26,
  },
}));
