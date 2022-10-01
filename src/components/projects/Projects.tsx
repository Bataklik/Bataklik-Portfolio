import { Box, Container, styled } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import ProjectItem from "../projectItem/ProjectItem";
import blobDcaptures from "./../../assets/images/projects/dcapture.png";
import blobFadedphotography from "./../../assets/images/projects/fadedphotography.png";
import blobSmartgrid from "./../../assets/images/projects/smartgrid.png";

export default function Projects() {
  const [isHover, setIsHover] = useState(false);
  const projectsItems = [
    {
      name: "D-capture photography",
      description: "A website for D-capture photography",
      image: blobDcaptures,
      link: "https://d-captures.vercel.app/",
    },
    {
      name: "Fadedphotography",
      description: "A website for Fadedphotography",
      image: blobFadedphotography,
      link: "https://fadedphotography.vercel.app/",
    },
    {
      name: "Smartgrid One App",
      description: "Created an app for Smartgrid One during my internship.",
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
            <ProjectItem key={item.name} {...item} />
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
