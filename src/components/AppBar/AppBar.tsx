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
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <Box sx={styles.MainBox}>
      <ContactModal person={person} open={open} handleClose={handleClose} />
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
                onClick={handleOpen}
              >
                <InfoIcon />
              </ButtonIcon>
            </Tooltip>
            <StyledButton>About</StyledButton>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}

const StyledButton = styled(Button)(({ theme }) => ({
  color: "#fff",
  backgroundColor: "#424242",
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
