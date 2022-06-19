import { Grid, IconButton, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import { makeStyles } from "@mui/styles";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
const useStyles = makeStyles((theme?: any) => {
  return {
    footerContainer: { backgroundColor: "#333333" },
    copyRightText: { color: "grey" },
    iconButton: { color: "grey" },
  };
});

export default function Footer() {
  const classes = useStyles();

  const socials = [
    { name: "Github", icon: GitHubIcon, link: "https://github.com/Bataklik" },
    {
      name: "LinkedIn",
      icon: LinkedInIcon,
      link: "https://www.linkedin.com/in/burak-balci-491289210/",
    },
    {
      name: "Mail",
      icon: AlternateEmailIcon,
      link: "mailto:burak.balci@student.hogent.be",
    },
  ];
  return (
    <Grid container className={classes.footerContainer}>
      <Grid container textAlign={"center"} item xs={12}>
        <Grid item xs={3} />
        {socials.map(social => {
          return (
            <Grid key={social.name} item xs={2}>
              <IconButton href={social.link}>
                <social.icon className={classes.iconButton} />
              </IconButton>
            </Grid>
          );
        })}
        <Grid item xs={3} />
      </Grid>
      <Grid container item xs={12}>
        <Grid item xs={3} />
        <Grid item xs={6}>
          <Typography className={classes.copyRightText} textAlign={"center"}>
            Copyright © 2022 Bataklik. All rights reserved.
          </Typography>
        </Grid>
        <Grid item xs={3} />
      </Grid>
    </Grid>
  );
}
