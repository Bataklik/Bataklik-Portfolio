import { Stack, styled, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { EducationCard } from "../EducationCard";

export default function About() {
  return (
    <MainContainer>
      <MainStack>
        <AboutTitle>About</AboutTitle>
        <AboutText>
          I'm a Belgian based developer, passionate about react, and
          react-native apps. Have created a few apps, and I'm always looking for
          new challenges.
        </AboutText>
        <AboutSubTitle>Education</AboutSubTitle>
        <EducationStack>
          <EducationCard
            school={"Sint Lievenscollege Business"}
            education={"Diploma of 2nd education, computer science management"}
            startDate={"Sep 2016"}
            endDate={"Jun 2018"}
            graduated={true}
          />
          <EducationCard
            school={"Hogent"}
            education={"Applied Computer Science, Computer Science"}
            startDate={"Oct 2018"}
            endDate={"Jun 2019"}
            graduated={false}
          />
          <EducationCard
            school={"Hogent"}
            education={"Graduate Programming, Computer Programming"}
            startDate={"Oct 2020"}
            endDate={"Jun 2022"}
            graduated={true}
          />
        </EducationStack>
      </MainStack>
    </MainContainer>
  );
}

const MainContainer = styled(Container)(({ theme }) => ({}));
const MainStack = styled(Stack)(({ theme }) => ({
  justifyContent: "center",
  alignItems: "center",
}));

const EducationStack = styled(Stack)(({ theme }) => ({
  width: "80%",
  marginTop: "10px",
  marginBottom: "10px",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    marginTop: "5px",
    marginBottom: "5px",
  },
}));
const AboutTitle = styled(Typography)(({ theme }) => ({
  fontSize: "44px",
}));
const AboutText = styled(Typography)(({ theme }) => ({
  opacity: "0.8",
  textAlign: "center",
  fontSize: "24px",
  marginTop: "10px",
  marginBottom: "10px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "18px",
    marginTop: "5px",
    marginBottom: "5px",
  },
}));
const AboutSubTitle = styled(Typography)(({ theme }) => ({
  fontSize: "34px",
}));
