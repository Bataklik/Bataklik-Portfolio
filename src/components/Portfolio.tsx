import Image from "next/image";
import React from "react";

export const Portfolio = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="lg:w-2/3 mx-auto">
          <h2 className="text-gray-700 text-5xl title-font font-large mb-10">
            PORTFOLIO
          </h2>
          <div className="flex flex-wrap w-full bg-gray-100 py-32 px-10 relative mb-4">
            <Image
              alt="gallery"
              className="w-full object-cover h-full object-center block opacity-25 absolute inset-0"
              src="/images/projects/smartgrid.png"
              width={820}
              height={340}
            />
            <div className="text-center relative z-10 w-full">
              <h2 className="text-2xl text-gray-900 font-medium title-font mb-2">
                Smartgrid One App
              </h2>
              <p className="leading-relaxed">
                Created an app for Smartgrid One during my internship.
              </p>
              <a className="mt-3 text-gray-800 inline-flex items-center cursor-pointer">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="flex flex-wrap w-full bg-gray-100 py-32 px-10 relative mb-4">
            <Image
              alt="gallery"
              className="w-full object-cover h-full object-center block opacity-25 absolute inset-0"
              src="/images/projects/dcapture.png"
              width={820}
              height={340}
            />
            <div className="text-center relative z-10 w-full">
              <h2 className="text-2xl text-gray-900 font-medium title-font mb-2">
                D-capture photography
              </h2>
              <p className="leading-relaxed">
                A website for D-capture photography
              </p>
              <a className="mt-3 text-gray-800 inline-flex items-center cursor-pointer">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
