import Image from "next/image";
import React from "react";
export function NavBrand({}) {
  return (
    <a href="#" className="-m-1.5 p-1.5 flex">
      <Image
        className="h-8 w-auto"
        src="/images/spade_black.png"
        alt="spade_logo"
        height={100}
        width={100}
      />
      <span className="text-xl font-semibold text-gray-800">Bataklik.</span>
    </a>
  );
}
