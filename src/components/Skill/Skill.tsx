import { Stack, Typography, styled, Box, Grid } from "@mui/material";
import ReactImg from "./../../assets/images/skills/React.svg";
import ReactNativeImg from "./../../assets/images/skills/React-Native.svg";
import JavaScriptImg from "./../../assets/images/skills/JavaScript.svg";
import TypeScriptImg from "./../../assets/images/skills/TypeScript.svg";
import CsharpImg from "./../../assets/images/skills/Csharp.svg";
import SqlImg from "./../../assets/images/skills/Mysql.svg";
import HtmlImg from "./../../assets/images/skills/Html.svg";
import CssImg from "./../../assets/images/skills/Css.svg";

import { SkillGrid } from "../../components/Skill/SkillGrid";

export default function Skill() {
  return (
    <MainBox>
      <Stack>
        <CardTitle>Skills</CardTitle>
        <CardSubTitle>
          These are the skills I have learned. Some skills I like more than
          others.
        </CardSubTitle>
        <MainGrid container>
          <Grid item xs={0} md={2} />
          <SkillGrid
            title={"JavaScript"}
            image={JavaScriptImg}
            description={
              "From the moment I first used JavaScript, I fell in love with the language."
            }
            rating={4}
          />
          <SkillGrid
            title={"TypeScript"}
            image={TypeScriptImg}
            description={
              "First I hated TypeScript, but now I love it. I have actually used it in my app as well."
            }
            rating={5}
          />
          <SkillGrid
            title={"C-Sharp"}
            image={CsharpImg}
            description={
              "C# is my first language, but I neither hate it nor love it."
            }
            rating={3}
          />
          <SkillGrid
            title={"HTML"}
            image={HtmlImg}
            description={
              "Html is a basic web developer language, you can use it to create a simple website."
            }
            rating={3.5}
          />
          <Grid item xs={0} md={2} />
          <Grid item xs={0} md={2} />
          <SkillGrid
            title={"React"}
            image={ReactImg}
            description={
              "Most of the React projects I've worked on are school projects."
            }
            rating={4.5}
          />
          <SkillGrid
            title={"React Native"}
            image={ReactNativeImg}
            description={
              "Created a mobile app with React Native for my internship. In the process, I also learned typescript."
            }
            rating={5}
          />
          <SkillGrid
            title={"MySQL"}
            image={SqlImg}
            description={
              "Mysql is my very first database language, that I have used in some school projects."
            }
            rating={2.5}
          />
          <SkillGrid
            title={"CSS"}
            image={CssImg}
            description={
              "CSS is also a basic web developer language, you can use it to style a website."
            }
            rating={3.5}
          />
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
  backgroundColor: "#F8F8F8",
  padding: "0px 50px",
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
