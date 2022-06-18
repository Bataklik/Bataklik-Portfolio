import React from "react";
import { Container } from "@mui/system";
import Form from "./Form";

export default function ContactSection() {
  return (
    <Container
      id="contact"
      sx={{
        display: "flex",
        justifyContent: "center",
        paddingBottom: "3rem",
        marginY: "20px",
      }}
    >
      <Form />
    </Container>
  );
}
