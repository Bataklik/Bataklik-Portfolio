import { styled, Typography } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";

export interface AboutCardProps {
  school: string;
  education: string;
  startDate: string;
  endDate: string;
}

export default function EducationCard({
  school,
  education,
  startDate,
  endDate,
}: AboutCardProps) {
  return (
    <GridCard
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ layout: { duration: 2, type: "spring" } }}
    >
      <GridTitle>{school}</GridTitle>
      <GridText>{education}</GridText>
      <GridText>
        {startDate} - {endDate}
      </GridText>
    </GridCard>
  );
}

const GridCard = styled(motion.div)(({ theme }) => ({
  backgroundColor: "rgba( 245, 245, 245, 0.20 )",
  padding: "10px",
  borderRadius: "15px",
  marginBottom: "10px",
}));

const GridTitle = styled(Typography)(({ theme }) => ({
  color: "whitesmoke",
  fontSize: "14px",
  fontWeight: "bold",
}));
const GridText = styled(Typography)(({ theme }) => ({
  color: "whitesmoke",
  fontSize: "14px",
}));
