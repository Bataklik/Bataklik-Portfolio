import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Container, styled } from "@mui/material";
import { motion } from "framer-motion";
const bannerText = {
  initial: {
    y: 400,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    },
  },
};
export default function Navbar() {
  const title = ["B", "A", "T", "A", "K", "L", "I", "K"];
  return (
    <MainBox>
      <NavBar position="static" elevation={0}>
        <Container>
          <Toolbar>
            {title.map((letter, index) => (
              <NavBarLetter
                variants={bannerText}
                initial="initial"
                animate="animate"
                key={index}
              >
                {letter}
              </NavBarLetter>
            ))}
            {/* <NavBarTitle variant="h6">Bataklik</NavBarTitle> */}
            {/* <Button color="inherit">Login</Button> */}
          </Toolbar>
        </Container>
      </NavBar>
    </MainBox>
  );
}
const MainBox = styled(Box)(({ theme }) => ({
  backgroundColor: "#16181D",
  flexGrow: 1,
}));

const NavBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: "#16181D",
}));
// const NavBarTitle = styled(Typography)(({ theme }) => ({
//   flexGrow: 1,
//   fontFamily: "inter",
//   color: "#fff",
// }));

const NavBarLetter = styled(motion.span)(({ theme }) => ({
  fontFamily: "inter",
  color: "#fff",
  fontWeight: "bold",
  textShadow:
    "5px 1px 3px rgb(167, 159, 253), 1px 1px 3px rgba(123, 39, 44, 1)",
}));
