import { Container, styled, Typography } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";

interface OfferItemProps {
  img: string;
  title: string;
  description: string;
}
export default function OfferItem({ img, title, description }: OfferItemProps) {
  return (
    <OfferContainer>
      <OfferTitle>{title}</OfferTitle>
      <OfferImg src={img} alt={title} />
      <OfferText>{description}</OfferText>
    </OfferContainer>
  );
}

const OfferContainer = styled(Container)(({ theme }) => ({
  backgroundColor: "#1B1D22",
  borderRadius: "20px",
  margin: "0 15px",
  padding: "20px 10px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  boxShadow: "0 5px 30px rgba(0, 0, 0, 0.5)",

  [theme.breakpoints.down("sm")]: {
    margin: "0 0",
    alignItems: "center",
    textAlign: "center",
  },
}));

const OfferTitle = styled(Typography)(({ theme }) => ({
  color: "#fff",
  fontSize: "18px",
  marginBottom: "10px",
  fontFamily: "inter",
  fontWeight: 700,

  [theme.breakpoints.down("sm")]: {
    fontSize: "16px",
  },
}));

const OfferImg = styled(motion.img)(({ theme }) => ({
  height: "100px",
  width: "100px",
  marginBottom: "15px",

  [theme.breakpoints.down("sm")]: {
    height: "80px",
    width: "80px",
  },
}));

const OfferText = styled(Typography)(({ theme }) => ({
  color: "#97A0B3",
  fontSize: "16px",
  fontFamily: "inter",
  fontWeight: 400,

  [theme.breakpoints.down("sm")]: {
    fontSize: "14px",
  },
}));
