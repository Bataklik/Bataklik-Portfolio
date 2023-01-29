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
    }),
    new Project({
      id: 4,
      src: "/images/projects/Project_2.png",
      alt: "Skill",
    }),
  ];
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: 0.5, delay: 0.2 } }}
      id="projects"
    >
      <div className="container mx-auto">
        {/* Top */}
        <div className="flex flex-col gap-3 items-center">
          <h1 className="text-gray-600 font-bold">PROJECTS</h1>
          <h1 className="text-3xl text-gray-500 font-bold">What did I made?</h1>
          <p className="w-1/2 text-center text-gray-400">
            My portfolio showcases my projects, highlighting my technical and
            design skills. I demonstrate expertise and passion, Take a look.
          </p>
        </div>
        {/* Bottom */}
        <div className="mt-8 mx-2 grid lg:grid-cols-2 gap-10 place-items-center">
          {Projects.map(p => (
            <ProjectCard key={p.getId} src={p.getSrc} alt={p.getAlt} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
