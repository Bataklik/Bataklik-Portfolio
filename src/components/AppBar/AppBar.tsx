import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import { styled, Tooltip } from "@mui/material";
import { Box, Container } from "@mui/system";

export default function ButtonAppBar() {
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

  return (
    <Box sx={styles.MainBox}>
      <AppBar position="static" sx={styles.Appbar}>
        <Container>
          <Toolbar>
            <Typography variant="h6" component="div" sx={styles.AppbarTitle}>
              Bataklik
            </Typography>
            <Tooltip title={"Contact me"}>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <InfoIcon />
              </IconButton>
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
}));
