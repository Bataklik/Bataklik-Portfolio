import { Box, Grid, styled, Typography } from "@mui/material";
import React from "react";

export default function Footer() {
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
  return (
    <Box sx={styles.MainBox}>
      <Grid container>
        <Grid item xs={12}>
          <CopyrightText>
            © 2022 Bataklik. No rights reserved. Made with ❤️.
          </CopyrightText>
        </Grid>
      </Grid>
    </Box>
  );
}

const CopyrightText = styled(Typography)(({ theme }) => ({
  color: "#fff",
  fontSize: "16px",
  textAlign: "center",
}));
