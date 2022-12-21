import Image from "next/image";
import React from "react";

export function Home() {
  return (
    <section className="container mt-4 mb-3">
      <div className="mx-auto text-5xl text-center">
        <h1 className="mx-auto mb-1">Software developer</h1>
        <div className="mb-1 line-height-1.3 mx-auto">
          <p className="text-2xl">
            I&apos;m a Belgian based developer, passionate about react, and
            react-native apps. Have created a few apps, and I&apos;m always
            looking for new challenges.
          </p>
        </div>
      </div>
    </section>
  );
}
