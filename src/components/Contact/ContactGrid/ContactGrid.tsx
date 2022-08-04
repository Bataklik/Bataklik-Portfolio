import { Grid, styled, Typography } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";
import { InfoItem } from "../Contact";

interface ContactGridProps {
  item: InfoItem;
}
export default function ContactGrid({ item }: ContactGridProps) {
  return (
    <GridItem item xs={12} md={4}>
      <Title>{item.title}</Title>
      <TextLink whileHover={{ opacity: 0.5 }} href={item.value}>
        {item.placeholder}
      </TextLink>
    </GridItem>
  );
}

const GridItem = styled(Grid)(({ theme }) => ({
  marginBottom: "20px",

  [theme.breakpoints.down("sm")]: {
    marginBottom: "10px",
    textAlign: "center",
  },
}));
const Title = styled(Typography)(({ theme }) => ({
  fontSize: "24px",
  fontWeight: "bold",
}));
const TextLink = styled(motion.a)(({ theme }) => ({
  fontSize: "22px",
  fontWeight: "lighter",
  wordWrap: "break-word",
  cursor: "pointer",
  textDecoration: "none",
  color: "rgbn(0,0,0,0.5)",
  transition: "all 0.2s ease-out",
}));
