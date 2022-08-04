import {
  Box,
  Grid,
  IconButton,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FavoriteIcon from "@mui/icons-material/Favorite";

import EmailIcon from "@mui/icons-material/AlternateEmail";

export default function Footer() {
  const linkedIn = "https://www.linkedin.com/in/burak-balci-491289210/";
  const email = "mailto:burak.balci@student.hogent.be";
  return (
    <MainBox>
      <Grid container>
        <Grid item xs={12}>
          <VStack>
            <IconButton href={linkedIn}>
              <LinkedInIcon htmlColor="#000" />
              <SocialText>LinkedIn</SocialText>
            </IconButton>
            <IconButton href={email}>
              <EmailIcon htmlColor="#000" />
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
              htmlColor="#000"
            />
            <CopyrightText fontStyle={"italic"}>by Bataklik</CopyrightText>
          </VStack>
        </Grid>
      </Grid>
    </MainBox>
  );
}

const MainBox = styled(Box)(({ theme }) => ({
  backgroundColor: "#fff",
  bottom: 0,
  paddingTop: 10,
  paddingBottom: "5px",
  position: "static",
  width: "100%",
}));

const VStack = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  justifyContent: "center",
}));

const CopyrightText = styled(Typography)(({ theme }) => ({
  color: "#000",
  fontSize: "16px",
  textAlign: "center",
  marginRight: "5px",

  [theme.breakpoints.down("sm")]: {
    fontSize: "14px",
  },
}));

const SocialText = styled(Typography)(({ theme }) => ({
  color: "#000",
  fontSize: "14px",
  textAlign: "center",
  marginLeft: "5px",
}));
