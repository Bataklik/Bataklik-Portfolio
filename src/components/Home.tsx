import Image from "next/image";
import React from "react";

export function Home() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -mx-4 -mb-10 text-center">
          <div className="sm:w-1/2 mb-10 px-4">
            <div className="rounded-lg h-32 overflow-hidden">E</div>
            <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
              I&apos;m a Software developer
            </h2>
            <p className="leading-relaxed text-base">
              I&apos;m a Belgian based developer, passionate about react, and
              react-native apps. Have created a few apps, and I&apos;m always
              looking for new challenges.
            </p>
            <button className="flex mx-auto mt-6 text-white bg-gray-500 border-0 py-2 px-5 focus:outline-none hover:bg-gray-400 rounded">
              Let&apos;s Connect!
            </button>
          </div>
          <div className="sm:w-1/2 mb-10 px-4">
            <Image
              src={"/images/buraq.jpeg"}
              className="object-cover"
              alt={"Picture of bataklik"}
              height={500}
              width={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
