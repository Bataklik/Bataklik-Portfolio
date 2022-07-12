import { Card, styled, Typography } from "@mui/material";
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
    <Card
      sx={{
        backgroundColor: "rgba( 245, 245, 245, 0.20 )",
        padding: "5px",
        marginY: "10px",
      }}
    >
      <GridTitle>{school}</GridTitle>
      <GridText>{education}</GridText>
      <GridText>
        {startDate} - {endDate}
      </GridText>
    </Card>
  );
}

const GridTitle = styled(Typography)(({ theme }) => ({
  color: "whitesmoke",
  fontSize: "14px",
  fontWeight: "bold",
}));
const GridText = styled(Typography)(({ theme }) => ({
  color: "whitesmoke",
  fontSize: "14px",
}));
