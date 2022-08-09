import { Box, Container, Grid, styled, Typography } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";

export default function Footer() {
  const links = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/burak-balci-491289210/",
    },
    {
      name: "GitHub",
      href: "mailto:burak.balci@student.hogent.be",
    },
    {
      name: "Email",
      href: "https://github.com/Bataklik",
    },
  ];
  return (
    <AnimatePresence>
      <FooterBox>
        <Grid container component={Container}>
          <Grid item md={3} sm={0} />
          {links.map(link => (
            <Grid item md={2} sm={4}>
              <FooterLink
                whileHover={{
                  scale: 1.1,
                  originX: 0,
                  textDecoration: "underline",
                  fontWeight: "300",
                }}
                transition={{
                  duration: 0.5,
                  ease: [0.6, 0.05, -0.01, 0.9],
                }}
                href={link.href}
              >
                {link.name}
              </FooterLink>
            </Grid>
          ))}
          <Grid item md={3} sm={0} />
          <Grid item md={4.5} sm={4.5} />
          <Grid item md={3} sm={3}>
            <FooterCopyright>© 2022 Bataklik || Belgium</FooterCopyright>
          </Grid>
          <Grid item md={4.5} sm={4.5} />
        </Grid>
      </FooterBox>
    </AnimatePresence>
  );
}
const FooterBox = styled(Box)(({ theme }) => ({
  borderTop: "1px solid #2B303B",
  paddingTop: "15px",
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
