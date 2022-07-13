import {
  Box,
  Grid,
  IconButton,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FavoriteIcon from "@mui/icons-material/Favorite";

import EmailIcon from "@mui/icons-material/AlternateEmail";
const styles = {
  MainBox: {
    backgroundColor: "#141414",
    bottom: 0,
    paddingTop: 10,
    paddingBottom: "5px",
    position: "static",
    width: "100%",
  },
};
export default function Footer() {
  const linkedIn = "https://www.linkedin.com/in/burak-balci-491289210/";
  const email = "mailto:burak.balci@student.hogent.be";
  return (
    <Box sx={styles.MainBox}>
      <Grid container>
        <Grid item xs={12}>
          <VStack>
            <IconButton href={linkedIn}>
              <LinkedInIcon htmlColor="#fff" />
              <SocialText>LinkedIn</SocialText>
            </IconButton>
            <IconButton href={email}>
              <EmailIcon htmlColor="#fff" />
              <SocialText>E-Mail</SocialText>
            </IconButton>
          </VStack>
        </Grid>
        <Grid item xs={12}>
          <VStack>
            <CopyrightText fontStyle={"normal"}>
              Copyright © 2022 | Made with
            </CopyrightText>
            <FavoriteIcon
              fontSize="small"
              sx={{ marginRight: "5px" }}
              htmlColor="#fff"
            />
            <CopyrightText fontStyle={"italic"}>by Bataklik</CopyrightText>
          </VStack>
        </Grid>
      </Grid>
    </Box>
  );
}

const VStack = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  justifyContent: "center",
}));

const CopyrightText = styled(Typography)(({ theme }) => ({
  color: "#fff",
  fontSize: "16px",
  textAlign: "center",
  marginRight: "5px",

  [theme.breakpoints.down("sm")]: {
    fontSize: "14px",
  },
}));

const SocialText = styled(Typography)(({ theme }) => ({
  color: "#fff",
  fontSize: "14px",
  textAlign: "center",
  marginLeft: "5px",
}));
