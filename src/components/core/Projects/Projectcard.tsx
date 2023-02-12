/* eslint-disable @next/next/no-img-element */
import React from "react";
interface ProjectCardProps {
  src?: string;
  alt?: string;
  description: string;
  title: string;
}
export function ProjectCard({
  src,
  alt,
  title,
  description,
}: ProjectCardProps) {
  return (
    <div className="flex group relative overflow-hidden sm:w-4/5 shadow-xl rounded-lg my-3 m-5 transition-all hover:scale-95">
      {/* Overlay */}
      <div className="group-hover:bg-black/20 w-full h-full absolute z-40 transition-all duration-300"></div>
      <img
        className="w-full h-full object-cover shadow-lg rounded-xl"
        src={src}
        alt={alt}
      />
      <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-300 z-50">
        <span className="text-white">{description}</span>
      </div>
      <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-500 z-50">
        <span className="text-gradient text-3xl">{title}</span>
      </div>
    </div>
  );
}
