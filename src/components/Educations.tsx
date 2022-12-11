import React from "react";
import { GoChevronRight, GoMortarBoard } from "react-icons/go";
export const Educations = () => {
  const educations = [
    {
      title: "Sint Lievenscollege Business",
      subtitle: "Diploma of 2nd education, computer science management",
      date: "Sep 2016 - Jun 2018",
      graduated: 1,
    },
    {
      title: "Hogeschool gent",
      subtitle: "Applied Computer Science, Computer Science",
      date: "Oct 2018 - Jun 2019",
      graduated: 0,
    },
    {
      title: "Hogeschool gent",
      subtitle: "Graduate Programming, Computer Programming",
      date: "Oct 2020 - Jun 2022",
      graduated: 1,
    },
    {
      title: "Hogeschool gent",
      subtitle: "Shortened Applied Computer Science, Computer Science",
      date: "Oct 2022 - Jun 2024",
      graduated: 0,
    },
  ];
  return (
    <section className="text-gray-800 bg-custom-gray-1 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
          <h2 className="text-gray-900 text-5xl title-font font-large mb-3">
            EDUCATION
          </h2>
          <p className="leading-relaxed text-base">
            I will be happy to help you find your answer and fix your problem.
          </p>
        </div>
        <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
          {educations.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col mb-10 lg:items-start items-center"
            >
              <div className="flex-grow">
                <div className="flex gap-2 items-center">
                  <GoChevronRight />
                  <h2 className="text-gray-900 text-lg title-font font-medium mb-1">
                    {skill.title}
                  </h2>
                  {skill.graduated ? <GoMortarBoard /> : null}
                </div>
                <p className="leading-relaxed text-base">{skill.subtitle}</p>
                <p className="leading-relaxed text-base text-gray-500">
                  {skill.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
