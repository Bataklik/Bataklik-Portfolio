import { Box, Container, Grid, styled, Typography } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import HeartIcon from "@mui/icons-material/Favorite";

export default function Footer() {
  const links = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/burak-balci-491289210/",
      icon: <FooterLinkedInIcon />,
    },
    {
      name: "Email",
      href: "mailto:burak.balci@student.hogent.be",
      icon: <FooterEmailIcon />,
    },
    {
      name: "GitHub",
      href: "https://github.com/Bataklik",
      icon: <FooterGithubIcon />,
    },
  ];
  return (
    <AnimatePresence>
      <FooterBox>
        <Grid
          container
          component={Container}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <CustomGrid container item>
            <Grid item md={3} sm={2} />
            {links.map(link => (
              <Grid key={link.name} item md={2} sm={3}>
                <FooterLink
                  whileHover={{
                    scale: 1.1,
                    textDecoration: "underline",
                    fontWeight: "300",
                  }}
                  transition={{
                    duration: 0.5,
                    ease: [0.6, 0.05, -0.01, 0.9],
                  }}
                  href={link.href}
                >
                  {link.icon}
                  {link.name}
                </FooterLink>
              </Grid>
            ))}
          </CustomGrid>
          <Grid container item justifyContent={"center"} alignItems={"center"}>
            <Grid item md={4} sm={4.5} />

            <Grid item md={4} sm={3}>
              <FooterCopyright>
                Copyright &copy; 2022 | Made with <FooterHeartIcon /> by
                Bataklik
              </FooterCopyright>
            </Grid>
            <Grid item md={4} sm={4.5} />
          </Grid>
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
const CustomGrid = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    justifyContent: "center",
    alignItems: "center",
  },
}));
const FooterGithubIcon = styled(GitHubIcon)(({ theme }) => ({
  color: "#E8E8FD",
  marginRight: "5px",
  fontSize: "18px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "14px",
    marginLeft: "5px",
  },
}));

const FooterLinkedInIcon = styled(LinkedInIcon)(({ theme }) => ({
  color: "#E8E8FD",
  marginRight: "5px",
  fontSize: "18px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "14px",
    marginLeft: "5px",
  },
}));

const FooterEmailIcon = styled(EmailIcon)(({ theme }) => ({
  color: "#E8E8FD",
  marginRight: "5px",
  fontSize: "18px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "14px",
    marginLeft: "5px",
  },
}));
const FooterHeartIcon = styled(HeartIcon)(({ theme }) => ({
  color: "#E8E8FD",
  marginRight: "5px",
  fontSize: "18px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "14px",
    marginLeft: "5px",
  },

  "&:hover": {
    color: "#FF5252",
  },
  "&:click": {
    color: "#FF5252",
  },
}));
