import { Stack, Typography, styled, Box, Grid } from "@mui/material";
import { SkillCard } from "../../components/SkillCard";
import ReactImg from "./../../assets/images/skills/React.svg";
import ReactNativeImg from "./../../assets/images/skills/React-Native.svg";
import JavaScriptImg from "./../../assets/images/skills/JavaScript.svg";
import TypeScriptImg from "./../../assets/images/skills/TypeScript.svg";
import CsharpImg from "./../../assets/images/skills/Csharp.svg";
import SqlImg from "./../../assets/images/skills/Mysql.svg";
import { motion } from "framer-motion";
import { SkillGrid } from "../../components/SkillGrid";

export default function Skills() {
  return (
    <MainBox>
      <Stack>
        <CardTitle>Skills</CardTitle>
        <CardSubTitle>
          These are the skills I have learned. Some skills I like more than
          others.
        </CardSubTitle>
        <MainGrid container>
          <Grid item xs={0} md={3} />
          <SkillGrid title={"JavaScript"} image={JavaScriptImg} />
          <SkillGrid title={"TypeScript"} image={TypeScriptImg} />
          <SkillGrid title={"C-Sharp"} image={CsharpImg} />
          <Grid item xs={0} md={3} />
          <Grid item xs={0} md={3} />
          <SkillGrid title={"React"} image={ReactImg} />
          <SkillGrid title={"React Native"} image={ReactNativeImg} />
          <SkillGrid title={"MySQL"} image={SqlImg} />
          <Grid item xs={0} md={3} />
        </MainGrid>
      </Stack>
    </MainBox>
  );
}

const MainGrid = styled(Grid)(({ theme }) => ({
  marginTop: "20px",
  marginLeft: "15px",
  marginRight: "15px",
  [theme.breakpoints.down("sm")]: {
    marginTop: "10px",
    marginLeft: "30px",
    marginRight: "30px",
  },
}));

const MainBox = styled(Box)(({ theme }) => ({
  backgroundColor: "#FFF",
  padding: "0px 80px",
  paddingBottom: 20,

  [theme.breakpoints.down("sm")]: {
    padding: "0px 5px",
  },
}));

const CardTitle = styled(Typography)(({ theme }) => ({
  color: "#000",
  fontSize: "36px",
  fontWeight: 700,
  letterSpacing: "4px",
  textAlign: "center",
  width: "100%",
  [theme.breakpoints.down("sm")]: {
    fontSize: "26px",
  },
}));
const CardSubTitle = styled(Typography)(({ theme }) => ({
  color: "rgba(0, 0, 0, 0.7)",
  fontSize: "26px",
  fontWeight: 400,
  letterSpacing: "2px",
  textAlign: "center",
  width: "100%",
  [theme.breakpoints.down("sm")]: {
    fontSize: "16px",
  },
}));
