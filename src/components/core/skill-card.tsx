import Image from "next/image";
import React from "react";

interface Props {
  cardImage: any;
  cardTitle: string;
  cardDescription: string;
}
export function SkillCard({ cardImage, cardTitle, cardDescription }: Props) {
  return (
    <div className="w-full md:w-4/12 shadow-xl rounded-lg flex p-3 my-3 md:my-10 flex-col gap-3">
      <div className="flex gap-2 items-center">
        <Image
          width={100}
          height={100}
          className="w-14 rounded-sm"
          src={cardImage.src}
          alt="Skill"
        />
        <h1 className="font-medium text-lg text-gray-700">{cardTitle}</h1>
      </div>
      <p className="text-gray-500">{cardDescription} </p>
    </div>
  );
}
