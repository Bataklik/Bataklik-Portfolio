import { Box, Container, Grid, styled, Typography } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";

export default function Footer() {
  const linkedin = "https://www.linkedin.com/in/burak-balci-491289210/";
  const email = "mailto:burak.balci@student.hogent.be";
  const github = "https://github.com/Bataklik";
  return (
    <FooterBox>
      <Grid container component={Container}>
        <Grid item md={3} sm={0} />
        <Grid item md={2} sm={4}>
          <FooterLink href={linkedin}>LinkedIn</FooterLink>
        </Grid>
        <Grid item md={2} sm={4}>
          <FooterLink href={github}>GitHub</FooterLink>
        </Grid>
        <Grid item md={2} sm={4}>
          <FooterLink href={email}>Email</FooterLink>
        </Grid>
        <Grid item md={3} sm={0} />
        <Grid item md={4.5} sm={4.5} />
        <Grid item md={3} sm={3}>
          <FooterCopyright>© 2022 Bataklik || Belgium</FooterCopyright>
        </Grid>
        <Grid item md={4.5} sm={4.5} />
      </Grid>
    </FooterBox>
  );
}
const FooterBox = styled(Box)(({ theme }) => ({
  borderTop: "1px solid #2B303B",
}));
const FooterLink = styled(motion.a)(({ theme }) => ({
  color: "#E8E8FD",
  textDecoration: "none",
  cursor: "pointer",
  [theme.breakpoints.down("sm")]: {
    marginRight: "5px",
  },
}));
const FooterCopyright = styled(Typography)(({ theme }) => ({
  color: "#E8E8FD",
  opacity: 0.5,
  textDecoration: "none",
  paddingTop: "20px",
  [theme.breakpoints.down("sm")]: {
    textAlign: "center",
  },
}));
