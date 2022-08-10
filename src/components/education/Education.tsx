import { EducationItem } from "./educationItem";
import { Box, Container, styled } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function Education() {
  const educationItems = [
    {
      title: "Sint Lievenscollege Business",
      subtitle: "Diploma of 2nd education, computer science management",
      date: "Sep 2016 - Jun 2018",
      graduated: 1,
    },
    {
      title: "Hogent",
      subtitle: "Applied Computer Science, Computer Science",
      date: "Oct 2018 - Jun 2019",
      graduated: 0,
    },
    {
      title: "Hogent",
      subtitle: "Graduate Programming, Computer Programming",
      date: "Oct 2020 - Jun 2022",
      graduated: 1,
    },
    {
      title: "Hogent",
      subtitle: "Shortened Applied Computer Science, Computer Science",
      date: "Oct 2022 - Jun 2024",
      graduated: 2,
    },
  ];
  const [isHover, setIsHover] = useState(false);
  return (
    <AnimatePresence>
      <EducationContainer
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <EducationTitle
          animate={{
            textShadow: isHover
              ? "5px 1px 3px rgb(167, 159, 253), 1px 1px 3px rgba(123, 39, 44, 1)"
              : "none",
          }}
        >
          Education
        </EducationTitle>
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
    </AnimatePresence>
  );
}
const EducationContainer = styled(Container)(({ theme }) => ({
  marginTop: "30px",
  marginBottom: "40px",
  width: "80%",
  marginLeft: "auto",
  marginRight: "auto",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    marginTop: "30px",
    marginBottom: "30px",
    marginLeft: "5px",
    marginRight: "5px",
  },
}));
const EducationTitle = styled(motion.h3)(({ theme }) => ({
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
