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
      <img
        className="w-full h-full object-cover shadow-lg rounded-xl"
        src={src}
        alt={alt}
      />
      {/* Description */}
      <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center text-white transition-opacity duration-300 opacity-0 hover:opacity-100">
        <h3 className="text-2xl md:text-3xl font-bold mb-2">{title}</h3>
        <p className="text-sm md:text-base">{description}</p>
      </div>
    </div>
  );
}
