import { Grid, styled } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";

interface SkillCardProps {
  title: string;
  image: string;
}
export default function SkillGrid({ title, image }: SkillCardProps) {
  return (
    <Grid item xs={4} md={2}>
      <CardImage src={image} alt={title} />
    </Grid>
  );
}

const CardImage = styled(motion.img)(({ theme, src }) => ({
  src: src,
  borderRadius: 20,
  width: "150px",
  height: "150px",
  margin: "0 auto",
  [theme.breakpoints.down("sm")]: {
    width: "60px",
    height: "60px",
  },
}));
