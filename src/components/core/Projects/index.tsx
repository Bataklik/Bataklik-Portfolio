/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import React from "react";
import { Project } from "../../../utils/ProjectObject";
import { ProjectCard } from "./Projectcard";
export function ProjectsSection({}) {
  const Projects: Project[] = [
    new Project({
      id: 1,
      src: "/images/projects/Project_1.png",
      alt: "Skill",
      title: "React-Native App",
      description: "App was created during my internship",
    }),
    new Project({
      id: 4,
      src: "/images/projects/Project_2.png",
      alt: "Skill",
      title: "NextJS website",
      description: "A website for D-capture photography",
    }),
  ];
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: 0.5, delay: 0.1 } }}
      id="projects"
      className="py-20"
    >
      <div className="container mx-auto">
        {/* Top */}
        <div className="flex flex-col gap-3 items-center">
          <h1 className="text-gray-600 font-bold">PROJECTS</h1>
          <h1 className="text-3xl text-gray-500 font-bold">What did I make?</h1>
          <p className="w-1/2 text-center text-gray-400">
            My portfolio showcases my projects, highlighting my technical and
            design skills. I demonstrate expertise and passion, Take a look.
          </p>
        </div>
        {/* Bottom */}
        <div className="mt-8 mx-2 grid lg:grid-cols-2 gap-10 place-items-center">
          {Projects.map((p, i) => (
            <ProjectCard
              key={i}
              src={p.getSrc}
              alt={p.getAlt}
              description={p.getDescription}
              title={p.getTitle}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
