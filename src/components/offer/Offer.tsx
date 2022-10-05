import { OfferItem } from "./../offerItem";
import { Container, Grid, styled } from "@mui/material";
import React, { useState } from "react";
import DesignImg from "../../assets/images/design.png";
import CodeImg from "../../assets/images/code.png";
import ResponsiveImg from "../../assets/images/responsive.png";
import { motion } from "framer-motion";

const OfferCard_1 = {
  initial: {
    x: -500,
    opacity: 0,
    scale: 0.5,
  },
  animate: {
    x: 0,
    opacity: 1,
    scale: 1,

    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      delay: 0.2,
      duration: 1,
    },
  },
};

const OfferCard_2 = {
  initial: {
    y: -500,
    opacity: 0,
    scale: 0.5,
  },
  animate: {
    y: 0,
    scale: 1,
    opacity: 1,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      delay: 0.2,
      duration: 1,
    },
  },
};

const OfferCard_3 = {
  initial: {
    x: 500,
    opacity: 0,
    scale: 0.5,
  },
  animate: {
    x: 0,
    opacity: 1,
    scale: 1,

    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      delay: 0.2,
      duration: 1,
    },
  },
};

export default function Offer() {
  const [isHover, setIsHover] = useState(false);

  return (
    <OffersContainer
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <OfferTitle
        initial={{
          y: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          y: 0,
          scale: 1,
          opacity: 1,
          transition: {
            ease: [0.6, 0.01, -0.05, 0.95],
            delay: 0.2,
            duration: 1,
          },
          textShadow: isHover
            ? "5px 1px 3px rgb(167, 159, 253), 1px 1px 3px rgba(123, 39, 44, 1)"
            : "none",
        }}
      >
        What do I offer?
      </OfferTitle>
      <OffersStack container spacing={2}>
        <Grid item md={4} xs={12}>
          <OfferItem
            img={DesignImg}
            title={"Beautiful Designs"}
            description={
              "Creating elegant (web) applications suitable for your requirements."
            }
            animation={OfferCard_1}
          />
        </Grid>
        <Grid item md={4} xs={12}>
          <OfferItem
            img={CodeImg}
            title={"Understandable code"}
            description={"Writing understandable and good code for your needs."}
            animation={OfferCard_2}
          />
        </Grid>

        <Grid item md={4} xs={12}>
          <OfferItem
            img={ResponsiveImg}
            title={"Responsive layout"}
            description={
              "Creating applications that are suited to all devices."
            }
            animation={OfferCard_3}
          />
        </Grid>
      </OffersStack>
    </OffersContainer>
  );
}

const OffersContainer = styled(Container)(({ theme }) => ({
  display: "block",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "50px",
  padding: "15px 35px",
}));
const OffersStack = styled(Grid)(({ theme }) => ({}));
const OfferTitle = styled(motion.h3)(({ theme }) => ({
  color: "#fff",
  fontSize: "28px",
  marginBottom: "20px",
  fontFamily: "inter",
  fontWeight: 700,
}));
