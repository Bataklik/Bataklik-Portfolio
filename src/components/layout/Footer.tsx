/* eslint-disable @next/next/no-img-element */
import React from "react";

export function Footer() {
  const socialLinks = [
    {
      name: "Linkedin",
      link: "https://www.linkedin.com/in/burak-balci-491289210/",
    },
    {
      name: "Mail",
      link: "mailto:burak.balci@student.hogent.be",
    },
    {
      name: "GitHub",
      link: "https://github.com/Bataklik",
    },
  ];
  return (
    <footer id="footer" className="mt-4 p-4 md:p-8 lg:p-10 ">
      <div className="mx-auto max-w-screen-xl text-center">
        <span className="text-sm text-gray-500 sm:text-center">
          All Rights Reserved © 2021-2022{" "}
          <a href="#" className="hover:underline">
            Bataklik
          </a>
        </span>
      </div>
    </footer>
  );
}
