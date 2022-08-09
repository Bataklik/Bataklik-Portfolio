import { Box, Rating, styled, Typography } from "@mui/material";
import { motion } from "framer-motion";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import React from "react";
const styles = {
  favoriteBorderIcon: {
    color: "rgba(255,255,255,0.7)",
  },
};
interface SkillProps {
  name: string;
  rating: number;
  description: string;
  src: string;
}
export default function Skill({ name, rating, description, src }: SkillProps) {
  return (
    <SkillBox
      whileHover={{
        scale: 1.05,
        boxShadow:
          "0px 0px 20px rgb(167, 159, 253), 0 -10px 20px -5px rgba(123, 39, 44, 1)",
      }}
      whileTap={{
        scale: 1.05,
        boxShadow:
          "0px 0px 20px rgb(167, 159, 253), 0 -10px 20px -5px rgba(123, 39, 44, 1)",
      }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
        mass: 0.5,
        duration: 1,
      }}
    >
      <SkillInnerBox>
        <SkillTitle>{name}</SkillTitle>
        <SkillText>{description}</SkillText>
        <SkillRating
          icon={<FavoriteIcon fontSize="inherit" />}
          emptyIcon={
            <FavoriteBorderIcon
              sx={styles.favoriteBorderIcon}
              fontSize="inherit"
            />
          }
          name="half-rating-read"
          precision={0.5}
          value={rating}
          readOnly
        />
      </SkillInnerBox>
      <SkillImage
        src={src}
        initial={{ opacity: 0, scale: 0.5, y: -20 }}
        animate={{
          scale: 1,
          opacity: 1,
          y: 0,
          transition: { duration: 1 },
        }}
      />
    </SkillBox>
  );
}

const SkillBox = styled(motion.div)(({ theme }) => ({
  borderRadius: "30px",
  padding: "15px",
  backgroundColor: "#1B1D22",
  border: "1px solid rgba(255, 255, 255, 0.5)",
  marginBottom: "20px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  [theme.breakpoints.down("sm")]: {
    padding: "10px",
  },
}));

const SkillTitle = styled(Typography)(({ theme }) => ({
  color: "#fff",
  fontSize: "24px",
  marginBottom: "10px",
  fontFamily: "inter",
  fontWeight: 700,

  [theme.breakpoints.down("sm")]: {
    fontSize: "20px",
  },
}));
const SkillText = styled(Typography)(({ theme }) => ({
  color: "#97A0B3",
  fontSize: "22px",
  fontFamily: "inter",
  fontWeight: 400,

  [theme.breakpoints.down("sm")]: {
    fontSize: "18px",
  },
}));
const SkillInnerBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  width: "85%",
  paddingRight: "150px",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    paddingRight: "0px",
    alignItems: "center",
  },
}));
const SkillImage = styled(motion.img)(({ theme }) => ({
  width: "150px",
  height: "150px",
  borderRadius: "30px",
  objectFit: "contain",
  objectPosition: "center",
  marginLeft: "5px",
  [theme.breakpoints.down("sm")]: {
    width: "100px",
    height: "100px",
  },
}));
const SkillRating = styled(Rating)({
  marginTop: "10px",

  "& .MuiRating-iconFilled": {
    color: "#ff6d75",
  },
});
