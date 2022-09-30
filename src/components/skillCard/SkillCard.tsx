import { Grid, Rating, styled, Typography } from "@mui/material";
import { motion, Variants } from "framer-motion";
import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
const styles = {
  favoriteBorderIcon: {
    color: "rgba(255,255,255,0.7)",
  },
};
interface SkillCardProps {
  name: string;
  rating: number;
  description: string;
  src: string;
  variant: Variants;
}

export default function SkillCard({
  name,
  rating,
  description,
  src,
  variant,
}: SkillCardProps) {
  return (
    <MotionBox
      variants={variant}
      transition={{ delay: 0.2, duration: 0.3 }}
      initial={"hidden"}
      animate={"show"}
      exit={"exit"}
    >
      <SkillGrid container>
        <Grid container item xs={4}>
          <Grid item>
            <SkillImage
              src={src}
              initial={{ opacity: 0, scale: 0.5, y: -20 }}
              animate={{
                scale: 1,
                opacity: 1,
                y: 0,
                transition: { duration: 1 },
              }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.5, ease: [0.6, 0.01, -0.05, 0.95] },
                boxShadow:
                  "0px 0px 20px rgb(167, 159, 253), 0 -10px 20px -5px rgba(123, 39, 44, 1)",
              }}
              whileTap={{
                scale: 1.05,
                transition: { duration: 0.5, ease: [0.6, 0.01, -0.05, 0.95] },
                boxShadow:
                  "0px 0px 20px rgb(167, 159, 253), 0 -10px 20px -5px rgba(123, 39, 44, 1)",
              }}
            />
          </Grid>
        </Grid>
        <Grid container item xs={8}>
          <Grid item xs={12}>
            <SkillTitle>{name}</SkillTitle>
          </Grid>
          <Grid item xs={12}>
            <SkillText>{description}</SkillText>{" "}
          </Grid>
          <Grid item xs={12}>
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
          </Grid>
        </Grid>
      </SkillGrid>
    </MotionBox>
  );
}

const MotionBox = styled(motion.div)(({ theme }) => ({}));
const SkillGrid = styled(Grid)(({ theme }) => ({
  borderRadius: "30px",
  padding: "15px",
  backgroundColor: "#1B1D22",
  border: "1px solid rgba(255, 255, 255, 0.5)",
  marginBottom: "20px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "350px",
  height: "200px",

  [theme.breakpoints.down("sm")]: {
    padding: "10px",
    width: "300px",
    height: "200px",
  },
}));

const SkillTitle = styled(Typography)(({ theme }) => ({
  color: "#fff",
  fontSize: "18px",
  marginBottom: "5px",
  fontFamily: "inter",
  fontWeight: 500,

  [theme.breakpoints.down("sm")]: {
    fontSize: "18px",
  },
}));
const SkillText = styled(Typography)(({ theme }) => ({
  color: "#97A0B3",
  fontSize: "16px",
  fontFamily: "inter",
  fontWeight: 300,

  [theme.breakpoints.down("sm")]: {
    fontSize: "16px",
  },
}));

const SkillImage = styled(motion.img)(({ theme }) => ({
  width: "80px",
  height: "80px",
  borderRadius: "15px",
  objectFit: "contain",
  objectPosition: "center",
  marginLeft: "5px",
  [theme.breakpoints.down("sm")]: {
    width: "60px",
    height: "60px",
  },
}));
const SkillRating = styled(Rating)({
  marginTop: "10px",
  "& .MuiRating-iconFilled": {
    color: "#ff6d75",
  },
});
