import { Box, Container, styled } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import blobDcaptures from "./../../assets/images/projects/dcapture.png";
import blobFadedphotography from "./../../assets/images/projects/fadedphotography.png";
import blobSmartgrid from "./../../assets/images/projects/smartgrid.png";

export default function Projects() {
  const [isHover, setIsHover] = useState(false);
  const projectsItems = [
    {
      name: "D-capture photography website",
      description: "Een website voor de D-capture photography",
      image: blobDcaptures,
      link: "https://d-captures.vercel.app/",
    },
    {
      name: "Fadedphotography website",
      description: "Een website voor de Fadedphotography",
      image: blobFadedphotography,
      link: "https://fadedphotography.vercel.app/",
    },
    {
      name: "Smartgrid One App",
      description: "Een app voor de Smartgrid One, gemaakt tijdens mijn stage.",
      image: blobSmartgrid,
      link: "https://smartgridone.com/nl/",
    },
  ];
  return (
    <AnimatePresence>
      <ProjectsContainer
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <ProjectsTitle
          animate={{
            textShadow: isHover
              ? "5px 1px 3px rgb(167, 159, 253), 1px 1px 3px rgba(123, 39, 44, 1)"
              : "none",
          }}
        >
          Projects
        </ProjectsTitle>
        <ProjectsBox>
          {projectsItems.map(item => (
            <ProjectsItem key={item.name}>
              <ProjectInnerBox>
                <Box>
                  <ProjectsItemTitle>{item.name}</ProjectsItemTitle>
                  <ProjectsItemDescription>
                    {item.description}
                  </ProjectsItemDescription>
                </Box>
                <ProjectsVisitButton href={item.link} target="_blank">
                  VISIT
                </ProjectsVisitButton>
              </ProjectInnerBox>
              <ProjectsItemImage src={item.image} />
            </ProjectsItem>
          ))}
        </ProjectsBox>
      </ProjectsContainer>
    </AnimatePresence>
  );
}
const ProjectsContainer = styled(Container)(({ theme }) => ({
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
const ProjectsTitle = styled(motion.h3)(({ theme }) => ({
  color: "#fff",
  fontSize: "28px",
  marginBottom: "20px",
  fontFamily: "inter",
  fontWeight: 700,
}));
const ProjectsBox = styled(Box)(({ theme }) => ({
  backgroundColor: "#1B1D22",
  borderRadius: "20px",
  padding: "20px 50px",

  [theme.breakpoints.down("sm")]: {
    padding: "20px 25px",
  },
}));
const ProjectInnerBox = styled(Box)(({ theme }) => ({
  display: "flex",
}));
const ProjectsVisitButton = styled(motion.a)(({ theme }) => ({
  color: "#1B1D22",
  fontSize: "14px",
  fontFamily: "inter",
  fontWeight: 700,
  textDecoration: "none",
  marginLeft: "auto",
  marginTop: "10px",
  borderRadius: "20px",
  padding: "15px 20px",
  backgroundColor: "#FFFFFF",
  textAlign: "center",
  width: "100px",
  height: "50px",
  "&:hover": {
    backgroundColor: "#1B1D22",
    color: "#fff",
    border: "1px solid #fff",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "15px 20px",
  },
}));
const ProjectsItem = styled(motion.div)(({ theme }) => ({}));
const ProjectsItemImage = styled(motion.img)(({ theme }) => ({
  width: "100%",
  borderRadius: "20px",
  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    borderRadius: "20px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
  },
}));
const ProjectsItemTitle = styled(motion.h4)(({ theme }) => ({
  color: "#fff",
  fontSize: "20px",
  fontFamily: "inter",
  fontWeight: 700,
  marginBottom: "1px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "18px",
  },
}));
const ProjectsItemDescription = styled(motion.p)(({ theme }) => ({
  color: "#fff",
  fontSize: "16px",
  fontFamily: "inter",
  fontWeight: 400,
  marginTop: "1px",
  marginBottom: "10px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "14px",
  },
}));
