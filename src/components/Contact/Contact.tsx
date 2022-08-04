import { Box, Container, Grid, styled, Typography } from "@mui/material";
import React from "react";
import { ContactGrid } from "./ContactGrid";

export interface InfoItem {
  title: string;
  value: string;
  placeholder: string;
}
export default function Contact() {
  const Info: InfoItem[] = [
    {
      title: "Mail",
      value: "mailto:burak.balci@student.hogent.be",
      placeholder: "burak.balci",
    },
    {
      title: "LinkedIn",
      value: "https://www.linkedin.com/in/burak-balci-491289210/",
      placeholder: "Burak Balci",
    },
    {
      title: "",
      value: "",
      placeholder: "",
    },
    {
      title: "GitHub",
      value: "https://github.com/Bataklik",
      placeholder: "Bataklik",
    },
  ];
  return (
    <MainBox>
      <Container>
        <Grid container>
          <Grid item xs={12} md={4}>
            <Title>Contact Info.</Title>
          </Grid>
          {Info.map((item, index) => (
            <ContactGrid key={index} item={item} />
          ))}
          <Grid item xs={12} md={4} />
        </Grid>
      </Container>
    </MainBox>
  );
}

const MainBox = styled(Box)(({ theme }) => ({
  backgroundColor: "#F8F8F8",
  padding: "0px 80px",
  paddingBottom: 20,

  [theme.breakpoints.down("sm")]: {
    padding: "0px 5px",
    textAlign: "center",
  },
}));

const Title = styled(Typography)(({ theme }) => ({
  fontSize: "24px",
  fontWeight: "bold",
}));
