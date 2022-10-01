import { Box, styled } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";

interface ProjectItemProps {
  name: string;
  description: string;
  link: string;
  image: string;
}
export default function ProjectItem({
  name,
  description,
  link,
  image,
}: ProjectItemProps) {
  return (
    <ProjectsItem key={name}>
      <ProjectInnerBox>
        <Box>
          <ProjectsItemTitle>{name}</ProjectsItemTitle>
          <ProjectsItemDescription>{description}</ProjectsItemDescription>
        </Box>
        <a href={link} target="_blank" rel="noreferrer">
          <ProjectsItemVisitButton
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            VISIT
          </ProjectsItemVisitButton>
        </a>
      </ProjectInnerBox>
      <ProjectsItemImage src={image} />
    </ProjectsItem>
  );
}
const ProjectInnerBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
}));

const ProjectsItemVisitButton = styled(motion.button)(({ theme }) => ({
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
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "#1B1D22",
    color: "#fff",
    border: "1px solid #fff",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "10px 15px",
    width: "90px",
    height: "40px",
    borderRadius: "15px",
  },
}));
const ProjectsItem = styled(motion.div)(({ theme }) => ({
  margin: "10px 0",
}));
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
