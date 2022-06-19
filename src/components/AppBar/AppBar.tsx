import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Avatar } from "@mui/material";
import logo from "../../assets/images/spade_white.png";
import { makeStyles } from "@mui/styles";
interface IPage {
  name: string;
  path: string;
}

const pages: Array<IPage> = [
  { name: "Home", path: "/#home" },
  { name: "About", path: "/#about" },
  { name: "Contact", path: "/#contact" },
];
const useStyles = makeStyles({
  link: {
    position: "relative",
    "&:before": {
      content: "''",
      position: "absolute",
      width: "0",
      height: "2px",
      bottom: "-3px",
      left: "50%",
      transform: "translate(-50%,0%)",
      backgroundColor: "#CCCCCC",
      visibility: "hidden",
      transition: "all 0.25s ease-in",
    },
    "&:hover:before": {
      visibility: "visible",
      width: "100%",
    },
  },
});

const ResponsiveAppBar = () => {
  const classes = useStyles();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#333333" }}>
      <Container maxWidth="xl" sx={{ backgroundColor: "#333333" }}>
        <Toolbar disableGutters>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              mr: 1.5,
            }}
          >
            <Avatar alt="Bataklik" src={logo} sx={{ width: 24, height: 24 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                ml: 1.5,
                display: { xs: "none", md: "flex" },
                fontWeight: 550,
                letterSpacing: ".5rem",
                color: "#CCCCCC",
                textDecoration: "none",
              }}
            >
              Bataklik
            </Typography>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ color: "#CCCCCC" }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map(page => (
                <MenuItem
                  key={page.name}
                  onClick={handleCloseNavMenu}
                  href={page.path}
                >
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Avatar
            alt="Bataklik"
            src={logo}
            sx={{
              display: { xs: "flex", md: "none" },
              mr: 1.5,
              width: 24,
              height: 24,
            }}
          />

          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontWeight: 550,
              letterSpacing: ".5rem",
              color: "#CCCCCC",
              textDecoration: "none",
            }}
          >
            Bataklik
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              justifyContent: "flex-end",
              display: { xs: "none", md: "flex" },
            }}
          >
            {pages.map(page => (
              <Button
                disableRipple
                className={classes.link}
                key={page.name}
                href={page.path}
                sx={{
                  my: 2,
                  mx: 3,
                  color: "#CCCCCC",
                  display: "block",
                  fontWeight: "400",
                }}
              >
                {page.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
