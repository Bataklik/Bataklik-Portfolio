import { styled, Typography } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";
import SchoolIcon from "@mui/icons-material/School";
import { Box } from "@mui/system";

export interface AboutCardProps {
  school: string;
  education: string;
  startDate: string;
  endDate: string;
  graduated: boolean;
}

export default function EducationCard({
  school,
  education,
  startDate,
  endDate,
  graduated,
}: AboutCardProps) {
  return (
    <GridCard
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ layout: { duration: 2, type: "spring" } }}
    >
      {graduated && (
        <SchoolIcon
          sx={{ position: "absolute", right: "10%" }}
          htmlColor="#fff"
        />
      )}
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
  width: "80%",
}));
const GridText = styled(Typography)(({ theme }) => ({
  color: "whitesmoke",
  fontSize: "14px",
  width: "80%",
  margin: "5px 0",
}));
