import { Card, Rating, Stack, styled, Typography } from "@mui/material";
import React from "react";

interface SkillCardProps {
  title: string;
  subtitle: string;
  rating: number;
  image: string;
}

export default function SkillCard({
  title,
  subtitle,
  rating,
  image,
}: SkillCardProps) {
  return (
    <MainCard>
      <VStack>
        <HStack>
          <Rating name="read-only" value={rating} readOnly />
          <CardTitle>{title}</CardTitle>
          <CardSubTitle>{subtitle}</CardSubTitle>
        </HStack>
        <HStack>
          <CardImage src={image} />
        </HStack>
      </VStack>
    </MainCard>
  );
}

const MainCard = styled(Card)(({ theme }) => ({
  backgroundColor: "#303030",
  marginTop: "20px",
  padding: "25px",
  borderRadius: "15px",
  "&:hover": {
    backgroundColor: "#404040",
    transition: "all 0.6s ease-in-out",
  },
  [theme.breakpoints.down("sm")]: {},
}));

const VStack = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  justifyContent: "space-between",
  [theme.breakpoints.down("sm")]: {},
}));

const HStack = styled(Stack)(({ theme }) => ({
  flexDirection: "column",
  [theme.breakpoints.down("sm")]: {},
}));

const CardTitle = styled(Typography)(({ theme }) => ({
  color: "#fff",
  fontSize: "36px",
  fontWeight: 500,
  letterSpacing: "4px",
  width: "100%",
  [theme.breakpoints.down("sm")]: {
    fontSize: "26px",
  },
}));

const CardImage = styled("img")(({ theme, src }) => ({
  src: src,
  borderRadius: 20,
  width: "50%",
  margin: "0 auto",
  [theme.breakpoints.down("sm")]: {},
}));
const CardSubTitle = styled(Typography)(({ theme }) => ({
  color: "#fff",
  fontSize: "26px",
  fontWeight: 300,
  letterSpacing: "4px",
  width: "100%",
  [theme.breakpoints.down("sm")]: {
    fontSize: "16px",
  },
}));
