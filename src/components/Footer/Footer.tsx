import { Grid, IconButton, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import { makeStyles } from "@mui/styles";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
const useStyles = makeStyles((theme?: any) => {
  return {
    copyRightText: { color: "grey" },
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
    <Grid container>
      <Grid xs={4} item />
      <Grid container item xs={4}>
        <Grid container justifyContent={"space-evenly"} item xs={12}>
          {socials.map(social => {
            return (
              <Grid key={social.name} item xs={4}>
                <IconButton href={social.link}>
                  <social.icon />
                </IconButton>
              </Grid>
            );
          })}
        </Grid>
        <Grid item xs={12}>
          <footer>
            <Typography className={classes.copyRightText}>
              Copyright © 2022 Bataklik. All rights reserved.
            </Typography>
          </footer>
        </Grid>
      </Grid>
      <Grid xs={4} item />
    </Grid>
  );
}
