import React from "react";
import { Container } from "@mui/system";
import Form from "./Form";
import { Grid } from "@mui/material";

export default function ContactSection() {
  return (
    <Grid id="contact" container spacing={2}>
      <Grid item xs={2} />
      <Grid item xs={8}>
        <Container
          id="contact"
          sx={{
            display: "flex",
            justifyContent: "center",
            paddingBottom: "3rem",
            marginY: "5px",
          }}
        >
          <Form />
        </Container>
      </Grid>
      <Grid item xs={2} />
    </Grid>
  );
}
