import { Box, styled, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SchoolIcon from "@mui/icons-material/School";
interface EducationItemProps {
  title: string;
  subtitle: string;
  date: string;
  graduated: boolean;
}
export default function EducationItem({
  title,
  subtitle,
  date,
  graduated,
}: EducationItemProps) {
  return (
    <EducationItemBox>
      <EducationIcon />
      <EducationInnerBox>
        <EducationItemTitle>{title}</EducationItemTitle>
        <EducationItemSubtitle>{subtitle}</EducationItemSubtitle>
        <EducationDate>{date}</EducationDate>
        {graduated ? <EducationSchool /> : null}
      </EducationInnerBox>
    </EducationItemBox>
  );
}
const EducationItemBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  marginBottom: "20px",
  borderBottom: "1px solid #8e97a8",
  paddingBottom: "5px",
}));
const EducationInnerBox = styled(Box)(({ theme }) => ({}));
const EducationItemTitle = styled(Typography)(({ theme }) => ({
  color: "#fff",
  fontSize: "20px",
  fontFamily: "inter",
  fontWeight: 700,
}));
const EducationItemSubtitle = styled(Typography)(({ theme }) => ({
  color: "#fff",
  fontSize: "16px",
  fontFamily: "inter",
  fontWeight: 400,
}));
const EducationDate = styled(Typography)(({ theme }) => ({
  color: "rgba(255, 255, 255, 0.5)",
  fontSize: "16px",
  fontFamily: "inter",
  fontWeight: 300,
  fontStyle: "italic",
  paddingBottom: "5px",
}));

const EducationIcon = styled(ArrowForwardIcon)(({ theme }) => ({
  color: "#fff",
  fontSize: "20px",
  marginRight: "10px",
}));
const EducationSchool = styled(SchoolIcon)(({ theme }) => ({
  position: "relative",
  color: "#fff",
  fontSize: "20px",
}));
