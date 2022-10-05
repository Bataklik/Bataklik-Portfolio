import { styled, Typography } from "@mui/material";
import { motion, Variants } from "framer-motion";
import React from "react";

interface OfferItemProps {
  img: string;
  title: string;
  description: string;
  animation: Variants;
}
export default function OfferItem({
  img,
  title,
  description,
  animation,
}: OfferItemProps) {
  return (
    <OfferContainer
      variants={animation}
      initial={"initial"}
      animate={"animate"}
    >
      <OfferTitle>{title}</OfferTitle>
      <OfferImg
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.5, ease: [0.6, 0.01, -0.05, 0.95] },
        }}
        whileTap={{
          scale: 1.05,
          transition: { duration: 0.5, ease: [0.6, 0.01, -0.05, 0.95] },
        }}
        src={img}
        alt={title}
      />
      <OfferText>{description}</OfferText>
    </OfferContainer>
  );
}

const OfferContainer = styled(motion.div)(({ theme }) => ({
  backgroundColor: "#1B1D22",
  borderRadius: "20px",
  margin: "0 15px",
  padding: "20px",
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
