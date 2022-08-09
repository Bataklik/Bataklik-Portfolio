import { Box, styled, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SchoolIcon from "@mui/icons-material/School";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import StopCircleIcon from "@mui/icons-material/StopCircle";
interface EducationItemProps {
  title: string;
  subtitle: string;
  date: string;
  graduated: number;
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
        {graduated === 1 ? (
          <EducationSchool />
        ) : graduated === 2 ? (
          <EducationStart />
        ) : (
          <EducationStop />
        )}
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
  letterSpacing: "1.5px",
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
const EducationStart = styled(PlayCircleFilledIcon)(({ theme }) => ({
  color: "#fff",
  fontSize: "20px",
}));
const EducationStop = styled(StopCircleIcon)(({ theme }) => ({
  color: "#fff",
  fontSize: "20px",
}));
const EducationSchool = styled(SchoolIcon)(({ theme }) => ({
  position: "relative",
  color: "#fff",
  fontSize: "20px",
}));
