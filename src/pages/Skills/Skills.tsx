import { Card, Stack, Typography, styled, Box } from "@mui/material";
import { SkillCard } from "../../components/SkillCard";
import ReactImg from "./../../assets/images/skills/React.svg";
import ReactNativeImg from "./../../assets/images/skills/React-Native.svg";
import JavaScriptImg from "./../../assets/images/skills/JavaScript.svg";
import TypeScriptImg from "./../../assets/images/skills/TypeScript.svg";
import CsharpImg from "./../../assets/images/skills/Csharp.svg";
import SqlImg from "./../../assets/images/skills/Mysql.svg";
import { FilterBar } from "../../components/FilterBar";
import { useEffect, useState } from "react";
//
interface SkillsArrayProps {
  title: string;
  rating: number;
  subtitle: string;
  img: string;
}

export default function Skills() {
  const [sortedSkills, setSortedSkills] = useState<SkillsArrayProps[]>([]);
  const handleSkillSort = (sortBy: string) => {
    switch (sortBy) {
      case "rating":
        setSortedSkills(SkillsArray.sort((a, b) => b.rating - a.rating));
        console.log(
          "sorted by rating",
          SkillsArray.sort((a, b) => b.rating - a.rating)
        );

        break;
      case "title":
        setSortedSkills(
          SkillsArray.sort((a, b) => a.title.localeCompare(b.title))
        );
        console.log(
          "sorted by title",
          SkillsArray.sort((a, b) => a.title.localeCompare(b.title))
        );

        break;
      default:
        setSortedSkills(SkillsArray);
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
      <MainCard>
        <Stack>
          <CardTitle>Skills</CardTitle>
          <CardSubTitle>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua."
          </CardSubTitle>
          <CardContent>
            <FilterBar handleItemClick={handleSkillSort} />
            {sortedSkills.map(skill => (
              <SkillCard
                key={skill.title}
                title={skill.title}
                subtitle={skill.subtitle}
                image={skill.img}
                rating={skill.rating}
              />
            ))}
          </CardContent>
        </Stack>
      </MainCard>
    </MainBox>
  );
}

const SkillsArray: SkillsArrayProps[] = [
  {
    title: "TypeScript",
    rating: 5,
    subtitle:
      "I hated TypeScript before, but now I love it. Also, I used it in my app.",
    img: TypeScriptImg,
  },
  {
    title: "C-Sharp",
    rating: 3,
    subtitle:
      "C# is my first language, but I don't hate it and don't love it either.",
    img: CsharpImg,
  },
  {
    title: "React",
    rating: 4,
    subtitle: "Most of the React projects I've worked on are school projects.",
    img: ReactImg,
  },
  {
    title: "JavaScript",
    rating: 4,
    subtitle:
      "First time I have used JavaScript, Fell in love with it. During my internship I have used it to create an app with React Native.",
    img: JavaScriptImg,
  },

  {
    title: "React Native",
    rating: 5,
    subtitle:
      "Have created a native mobile app with React Native for my internship.",
    img: ReactNativeImg,
  },
  {
    title: "Mysql",
    rating: 3,
    subtitle: "Mysql is my first database language.",
    img: SqlImg,
  },
];

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

const CardContent = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    padding: "0px 10px",
    margin: "0px",
  },
}));
