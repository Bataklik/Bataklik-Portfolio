import React from "react";
import JS from "public/images/skills/JavaScript.svg";
import TS from "public/images/skills/TypeScript.svg";
import CSHARP from "public/images/skills//Csharp.svg";
import HTML from "public/images/skills/HTML5.svg";
import CSS from "public/images/skills/CSS3.svg";
import MYSQL from "public/images/skills/Mysql.svg";
import REACT from "public/images/skills/React.svg";
import REACTNATIVE from "public/images/skills/React-Native.svg";
import Image from "next/image";

export const Skills = () => {
  const faqsList = [
    {
      q: "What are some random questions to ask?",
      a: "That's exactly the reason we created this random question generator. There are hundreds of random questions to choose from so you're able to find the perfect random question.",
    },
    {
      q: "Do you include common questions?",
      a: "This generator doesn't include most common questions. The thought is that you can come up with common questions on your own so most of the questions in this generator.",
    },
    {
      q: "Can I use this for 21 questions?",
      a: "Yes! there are two ways that you can use this question generator depending on what you're after. You can indicate that you want 21 questions generated.",
    },
    {
      q: "Are these questions for girls or for boys?",
      a: "The questions in this generator are gender neutral and can be used to ask either male of females (or any other gender the person identifies with).",
    },
    {
      q: "What are some random questions to ask?",
      a: "That's exactly the reason we created this random question generator. There are hundreds of random questions to choose from so you're able to find the perfect random question to ask friends.",
    },
    {
      q: "What do you wish you had more talent doing?",
      a: "If you've been searching for a way to get random questions, you've landed on the correct webpage. We created the Random Question Generator to ask you as many random questions as your heart desires.",
    },
  ];
  const skills = [
    {
      name: "JavaScript",
      rating: 4.5,
      description:
        "From the moment I first used JavaScript, I fell in love with the language.",
      src: JS,
    },
    {
      name: "TypeScript",
      rating: 5,
      description:
        "First I hated TypeScript, but now I love it. I have actually used it in my app as well.",
      src: TS,
    },
    {
      name: "CSharp",
      rating: 3.5,
      description:
        "C# is my first language, but I neither hate it nor love it.",
      src: CSHARP,
    },
    {
      name: "HTML",
      rating: 3.5,
      description:
        "Html is a basic web developer language, you can use it to create a simple website.",
      src: HTML,
    },
    {
      name: "CSS",
      rating: 3.5,
      description:
        "CSS is also a basic web developer language, you can use it to style websites.",
      src: CSS,
    },
    {
      name: "Mysql",
      rating: 2.5,
      description:
        "Mysql is my very first database language, that I have used in some school projects.",
      src: MYSQL,
    },
    {
      name: "React",
      rating: 4,
      description:
        "Most of the React projects I've worked on are school projects.",
      src: REACT,
    },
    {
      name: "React-Native",
      rating: 5,
      description:
        "Created a mobile app with React Native for my internship. In the process, I also learned typescript.",
      src: REACTNATIVE,
    },
  ];
  return (
    <section className=" bg-custom-gray-1">
      <div className="container px-5 py-20 mx-auto">
        <div className="space-y-1 text-center">
          <h1 className="text-3xl text-gray-800 font-semibold">Skills</h1>
          <p className="text-gray-600 max-w-lg mx-auto text-lg">
            Here are the skills, I learned over the years.
          </p>
        </div>
        <div className="mt-14 gap-2 sm:grid sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((item, idx) => (
            <div
              className="flex max-w-md mx-auto mt-4 shadow-lg border rounded-lg duration-300 hover:shadow-sm p-5 gap-3"
              key={idx}
            >
              <Image
                src={item.src}
                alt={`Skill: ${item.name}`}
                width={75}
                height={75}
              />
              <div className="block justify-center">
                <h4 className="text-gray-700 font-medium">{item.name}</h4>
                <p className="text-gray-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
