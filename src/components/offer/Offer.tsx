import { OfferItem } from "./../offerItem";
import { Container, Grid, styled } from "@mui/material";
import React, { useState } from "react";
import DesignImg from "../../assets/images/design.png";
import CodeImg from "../../assets/images/code.png";
import ResponsiveImg from "../../assets/images/responsive.png";
import { motion } from "framer-motion";

export default function Offer() {
  const [isHover, setIsHover] = useState(false);

  return (
    <OffersContainer
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <OfferTitle
        animate={{
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
          />
        </Grid>
        <Grid item md={4} xs={12}>
          <OfferItem
            img={CodeImg}
            title={"Understandable code"}
            description={"Writing understandable and good code for your needs."}
          />
        </Grid>

        <Grid item md={4} xs={12}>
          <OfferItem
            img={ResponsiveImg}
            title={"Responsive layout"}
            description={
              "Creating applications that are suited to all devices."
            }
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
