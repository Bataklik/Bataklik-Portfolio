import { Grid, styled } from "@mui/material";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { SkillGridModal } from "../SkillGridModal";

interface SkillCardProps {
  title: string;
  image: string;
  description: string;
  rating: number;
}
export default function SkillGrid({
  title,
  image,
  description,
  rating,
}: SkillCardProps) {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(true);
  };
  return (
    <>
      <SkillGridModal
        open={open}
        setOpen={setOpen}
        title={title}
        image={image}
        description={description}
        rating={rating}
      />
      <CardGrid item xs={4} md={2}>
        <CardImage
          whileHover={{ scale: 1.1 }}
          whileTap={{ opacity: 0 }}
          src={image}
          alt={title}
          onClick={handleClick}
        />
      </CardGrid>
    </>
  );
}

const CardGrid = styled(Grid)(({ theme }) => ({
  marginTop: "15px",
  marginBottom: "15px",
  padding: "5px",
  [theme.breakpoints.down("sm")]: {
    marginTop: "10px",
    marginBottom: "10px",
    width: "60px",
    height: "60px",
  },
}));

const CardImage = styled(motion.img)(({ theme, src }) => ({
  src: src,
  borderRadius: 20,
  objectFit: "cover",
  width: "150px",
  height: "150px",
  margin: "0 auto",
  [theme.breakpoints.down("sm")]: {
    width: "60px",
    height: "60px",
  },
}));
