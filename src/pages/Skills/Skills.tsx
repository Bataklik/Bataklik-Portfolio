import { Card, Stack, Typography, styled, Box } from "@mui/material";
import { Container } from "@mui/system";
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
      <MainCard>
        <Stack>
          <CardTitle>Skills</CardTitle>
          <CardSubTitle>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua."
          </CardSubTitle>
          <CardContent>
            <SkillCard
              title={"React Native"}
              rating={5}
              subtitle={"Learnt during my intermship"}
              image={ReactNativeImg}
            />
            <SkillCard
              title={"React"}
              rating={4}
              subtitle={"Learnt at school"}
              image={ReactImg}
            />
            <SkillCard
              title={"JavaScript"}
              rating={4}
              subtitle={"Learnt at school"}
              image={JavaScriptImg}
            />
            <SkillCard
              title={"TypeScript"}
              rating={5}
              subtitle={"Learnt at school"}
              image={TypeScriptImg}
            />
            <SkillCard
              title={"C-Sharp"}
              rating={3}
              subtitle={"Learnt at school"}
              image={CsharpImg}
            />
            <SkillCard
              title={"SQL"}
              rating={3}
              subtitle={"Learnt at school"}
              image={SqlImg}
            />
          </CardContent>
        </Stack>
      </MainCard>
    </MainBox>
  );
}

const MainBox = styled(Box)(({ theme }) => ({
  backgroundColor: "#101010",
  padding: "0px 80px",
  paddingBottom: 20,

  [theme.breakpoints.down("sm")]: {
    padding: "0px 20px",
  },
}));

const MainCard = styled(Card)(({ theme }) => ({
  backgroundColor: "#101010",
  padding: "40px",
  borderRadius: "20px",
  [theme.breakpoints.down("sm")]: {
    padding: "15px",
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

const CardContent = styled(Container)(({ theme }) => ({}));
