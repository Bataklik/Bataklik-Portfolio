import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Container, styled } from "@mui/material";

export default function Navbar() {
  return (
    <MainBox>
      <NavBar position="static" elevation={0}>
        <Container>
          <Toolbar>
            <NavBarTitle variant="h6">Bataklik</NavBarTitle>
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
const NavBarTitle = styled(Typography)(({ theme }) => ({
  flexGrow: 1,
  fontFamily: "inter",
  color: "#fff",
}));
