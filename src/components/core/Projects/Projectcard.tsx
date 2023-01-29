/* eslint-disable @next/next/no-img-element */
import React from "react";
interface ProjectCardProps {
  src?: string;
  alt?: string;
}
export function ProjectCard({ src, alt }: ProjectCardProps) {
  return (
    <div className="flex sm:w-4/5 shadow-xl rounded-lg my-3 m-5 transition-all hover:scale-110">
      <img
        className="w-full h-full object-cover shadow-lg rounded-lg"
        src={src}
        alt={alt}
      />
    </div>
  );
}
