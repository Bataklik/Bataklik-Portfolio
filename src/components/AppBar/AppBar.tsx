import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import { styled, Tooltip } from "@mui/material";
import { Box, Container } from "@mui/system";
import { ContactModal } from "../ContactModal";
import React from "react";
import { PersonProps } from "../ContactModal/ContactModal";
import { AboutModal } from "../AboutModal";
const styles = {
  MainBox: {
    backgroundColor: "#101010",
    flexGrow: 1,
  },
  Appbar: {
    backgroundColor: "#101010",
    elevation: 0,
  },
  AppbarTitle: {
    color: "#fff",
    flexGrow: 1,
    fontWeight: 500,
  },
};
interface AppbarProps {
  person: PersonProps;
}
export default function Appbar({ person }: AppbarProps) {
  const [openInfo, setOpenInfo] = React.useState(false);
  const [openAbout, setOpenAbout] = React.useState(false);
  const handleCloseInfo = () => {
    setOpenInfo(false);
  };
  const handleOpenInfo = () => {
    setOpenInfo(true);
  };
  const handleCloseAbout = () => {
    setOpenAbout(false);
  };
  const handleOpenAbout = () => {
    setOpenAbout(true);
  };
  return (
    <Box sx={styles.MainBox}>
      <ContactModal
        person={person}
        open={openInfo}
        handleClose={handleCloseInfo}
      />
      <AboutModal
        person={person}
        open={openAbout}
        handleClose={handleCloseAbout}
      />
      <AppBar position="static" sx={styles.Appbar}>
        <Container>
          <Toolbar>
            <Typography variant="h6" component="div" sx={styles.AppbarTitle}>
              Bataklik
            </Typography>
            <Tooltip title={"Contact me"}>
              <ButtonIcon
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleOpenInfo}
              >
                <InfoIcon />
              </ButtonIcon>
            </Tooltip>
            <StyledButton onClick={handleOpenAbout}>About</StyledButton>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}

const StyledButton = styled(Button)(({ theme }) => ({
  color: "#fff",
  background: "rgba( 66, 66, 66, 0.2 )",
  boxShadow: "0 2px 10px 0 rgba( 245, 245, 245, 0.15 )",
  backdropFilter: "blur( 7.5px )",
  WebkitBackdropFilter: "blur( 7.5px )",
  border: "1px solid rgba( 255, 255, 255, 0.1 )",
  fontSize: "16px",
  fontWeight: 500,
  letterSpacing: "1px",
  borderRadius: "10px",
  paddingTop: "10px",
  paddingBottom: "10px",
  paddingLeft: "35px",
  paddingRight: "35px",
  margin: "5px",
  textTransform: "capitalize",
  "&:hover": {
    backgroundColor: "#292929",
  },
  [theme.breakpoints.down("sm")]: {
    paddingTop: "6px",
    paddingBottom: "6px",
    paddingLeft: "25px",
    paddingRight: "25px",
    fontSize: "14px",
  },
}));

const ButtonIcon = styled(IconButton)(({ theme }) => ({
  marginRight: "10px",
}));
