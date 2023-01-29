/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from "react";

interface Props {
  cardImage: any;
  cardTitle: string;
  cardDescription: string;
}
export function Card({ cardImage, cardTitle, cardDescription }: Props) {
  return (
    <div className="w-full md:w-4/12 shadow-xl rounded-lg flex p-5 my-3 md:my-10 flex-col gap-3">
      <div className="flex gap-2 items-center">
        <img className="w-10" src={cardImage.src} alt="Skill" />
        <h1 className="font-medium text-lg">{cardTitle}</h1>
      </div>
      <p className="text-gray-400">{cardDescription} </p>
    </div>
  );
}
