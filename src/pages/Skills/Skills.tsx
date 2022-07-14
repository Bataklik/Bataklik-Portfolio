import { Stack, Typography, styled, Box } from "@mui/material";
import { SkillCard } from "../../components/SkillCard";
import ReactImg from "./../../assets/images/skills/React.svg";
import ReactNativeImg from "./../../assets/images/skills/React-Native.svg";
import JavaScriptImg from "./../../assets/images/skills/JavaScript.svg";
import TypeScriptImg from "./../../assets/images/skills/TypeScript.svg";
import CsharpImg from "./../../assets/images/skills/Csharp.svg";
import SqlImg from "./../../assets/images/skills/Mysql.svg";

export default function Skills() {
  return (
    <MainBox>
      <Stack>
        <CardTitle>Skills</CardTitle>
        <CardSubTitle>
          These are the skills I have learned. Some skills I like more than
          others.
        </CardSubTitle>
        <CardContent>
          <SkillCard
            title="C-Sharp"
            rating={3.5}
            subtitle="C# is my first language, but I neither hate it nor love it."
            image={CsharpImg}
          />
          <SkillCard
            title="JavaScript"
            rating={4.5}
            subtitle="From the moment I first used JavaScript, I fell in love with the language."
            image={JavaScriptImg}
          />
          <SkillCard
            title="Mysql"
            rating={2.5}
            subtitle="Mysql is my very first database language, that I have used in some school projects."
            image={SqlImg}
          />
          <SkillCard
            title="TypeScript"
            rating={5}
            subtitle="First I hated TypeScript, but now I love it. I have actually used it in my app as well."
            image={TypeScriptImg}
          />
          <SkillCard
            title="React"
            rating={4}
            subtitle="Most of the React projects I've worked on are school projects."
            image={ReactImg}
          />
          <SkillCard
            title="React Native"
            rating={5}
            subtitle="Created a mobile app with React Native for my internship. In the process, I also learned typescript."
            image={ReactNativeImg}
          />
        </CardContent>
      </Stack>
    </MainBox>
  );
}

const MainBox = styled(Box)(({ theme }) => ({
  backgroundColor: "#101010",
  padding: "0px 80px",
  paddingBottom: 20,

  [theme.breakpoints.down("sm")]: {
    padding: "0px 5px",
  },
}));

const CardTitle = styled(Typography)(({ theme }) => ({
  color: "#fff",
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
  color: "rgba(255, 255, 255, 0.7)",
  fontSize: "26px",
  fontWeight: 400,
  letterSpacing: "2px",
  textAlign: "center",
  width: "100%",
  [theme.breakpoints.down("sm")]: {
    fontSize: "16px",
  },
}));

const CardContent = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    padding: "0px 10px",
    margin: "0px",
  },
}));
