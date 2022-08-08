import { Box, Container, styled, Typography } from "@mui/material";
import React from "react";

export default function Intro() {
  return (
    <IntroBox>
      <IntroContainer>
        <IntroTitle>
          Developer passionate with creating strong user friendly apps
        </IntroTitle>
        <IntroText>
          I'm a developer, who loves to create react and react-native apps.
        </IntroText>
      </IntroContainer>
    </IntroBox>
  );
}

const IntroBox = styled(Box)(({ theme }) => ({
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
}));
const IntroTitle = styled(Typography)(({ theme }) => ({
  color: "#fff",
  fontSize: "36px",
  fontFamily: "inter",
  [theme.breakpoints.down("sm")]: {
    fontSize: "24px",
  },
}));
const IntroText = styled(Typography)(({ theme }) => ({
  color: "#fff",
  fontSize: "26px",
  fontFamily: "inter",
  [theme.breakpoints.down("sm")]: {
    fontSize: "18px",
  },
}));
