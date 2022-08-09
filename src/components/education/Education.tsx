import { EducationItem } from "./../educationItem";
import { Box, Container, styled, Typography } from "@mui/material";

export default function Education() {
  const educationItems = [
    {
      title: "Sint Lievenscollege Business",
      subtitle: "Diploma of 2nd education, computer science management",
      date: "Sep 2016 - Jun 2018",
      graduated: true,
    },
    {
      title: "Hogent",
      subtitle: "Applied Computer Science, Computer Science",
      date: "Oct 2018 - Jun 2019",
      graduated: false,
    },
    {
      title: "Hogent",
      subtitle: "Graduate Programming, Computer Programming",
      date: "Oct 2020 - Jun 2022",
      graduated: true,
    },
  ];

  return (
    <EducationContainer>
      <EducationTitle>Education</EducationTitle>
      <EducationBox>
        {educationItems.map((item, index) => (
          <EducationItem
            key={index}
            title={item.title}
            subtitle={item.subtitle}
            date={item.date}
            graduated={item.graduated}
          />
        ))}
      </EducationBox>
    </EducationContainer>
  );
}
const EducationContainer = styled(Container)(({ theme }) => ({
  marginTop: "30px",
  marginBottom: "40px",
  width: "80%",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    marginTop: "30px",
    marginBottom: "30px",
  },
}));
const EducationTitle = styled(Typography)(({ theme }) => ({
  color: "#fff",
  fontSize: "28px",
  marginBottom: "20px",
  fontFamily: "inter",
  fontWeight: 700,
}));
const EducationBox = styled(Box)(({ theme }) => ({
  backgroundColor: "#1B1D22",
  borderRadius: "20px",
  padding: "20px 50px",

  [theme.breakpoints.down("sm")]: {
    padding: "20px 25px",
  },
}));
