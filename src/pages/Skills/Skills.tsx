import { Stack, Typography, styled, Box } from "@mui/material";
import { SkillCard } from "../../components/SkillCard";
import ReactImg from "./../../assets/images/skills/React.svg";
import ReactNativeImg from "./../../assets/images/skills/React-Native.svg";
import JavaScriptImg from "./../../assets/images/skills/JavaScript.svg";
import TypeScriptImg from "./../../assets/images/skills/TypeScript.svg";
import CsharpImg from "./../../assets/images/skills/Csharp.svg";
import SqlImg from "./../../assets/images/skills/Mysql.svg";
import { useEffect } from "react";
//
interface SkillsArrayProps {
  title: string;
  rating: number;
  subtitle: string;
  img: string;
}

export default function Skills() {
  // const [sortedSkills, setSortedSkills] = useState<SkillsArrayProps[]>([]);
  const handleSkillSort = (sortBy: string) => {
    switch (sortBy) {
      case "rating":
        // setSortedSkills(SkillsArray.sort((a, b) => b.rating - a.rating));
        console.log(
          "sorted by rating",
          SkillsArray.sort((a, b) => b.rating - a.rating)
        );

        break;
      case "title":
        // setSortedSkills(
        //   SkillsArray.sort((a, b) => a.title.localeCompare(b.title))
        // );
        console.log(
          "sorted by title",
          SkillsArray.sort((a, b) => a.title.localeCompare(b.title))
        );
        break;
      default:
        // setSortedSkills(SkillsArray);
        break;
    }
  };
  useEffect(() => {
    return () => {
      handleSkillSort("");
    };
  }, []);

  return (
    <MainBox>
      <Stack>
        <CardTitle>Skills</CardTitle>
        <CardSubTitle>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua."
        </CardSubTitle>
        <CardContent>
          <SkillCard
            title="C-Sharp"
            rating={3}
            subtitle="C# is my first language, but I neither hate it nor love it."
            image={CsharpImg}
          />
          <SkillCard
            title="JavaScript"
            rating={4}
            subtitle="The moment I first used JavaScript, the language made me fall in love with it."
            image={JavaScriptImg}
          />
          <SkillCard
            title="Mysql"
            rating={3}
            subtitle="Mysql is my very first database language."
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
        </CardContent>
      </Stack>
    </MainBox>
  );
}

const SkillsArray: SkillsArrayProps[] = [
  {
    title: "React",
    rating: 4,
    subtitle: "Most of the React projects I've worked on are school projects.",
    img: ReactImg,
  },

  {
    title: "React Native",
    rating: 5,
    subtitle:
      "Have created a native mobile app with React Native for my internship.",
    img: ReactNativeImg,
  },
];

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
