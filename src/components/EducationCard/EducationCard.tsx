import { Box, styled, Typography } from "@mui/material";
import { motion } from "framer-motion";
import SchoolIcon from "@mui/icons-material/School";

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
      whileHover={{ scale: 1.05 }}
    >
      <GridTitleBox>
        <GridTitle>{school}</GridTitle>
        {graduated && <IconSchool />}
      </GridTitleBox>

      <GridText>{education}</GridText>
      <GridText>
        {startDate} - {endDate}
      </GridText>
    </GridCard>
  );
}

const IconSchool = styled(SchoolIcon)(({ theme }) => ({
  marginRight: "10px",
  color: "#000",
  [theme.breakpoints.down("sm")]: {
    marginRight: "5px",
  },
}));

const GridCard = styled(motion.div)(({ theme }) => ({
  backgroundColor: "#F9F9F9",
  border: "1px solid #c4c0c0",
  paddingTop: "5px",
  paddingBottom: "5px",
  paddingRight: "10px",
  paddingLeft: "10px",
  borderRadius: "15px",
  marginBottom: "10px",
}));
const GridTitleBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: "5px",
}));
const GridTitle = styled(Typography)(({ theme }) => ({
  color: "black",
  fontSize: "14px",
  fontWeight: "bold",
  width: "80%",
}));
const GridText = styled(Typography)(({ theme }) => ({
  color: "black",
  fontSize: "14px",
  width: "80%",
  margin: "2px 0",
}));
