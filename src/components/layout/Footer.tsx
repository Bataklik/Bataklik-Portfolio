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
        <ul className="flex flex-wrap justify-center items-center mb-3 text-gray-900">
          {socialLinks.map(sl => (
            <li key={sl.name}>
              <a
                href={sl.link}
                target="_blank"
                className="mr-4 hover:underline md:mr-6"
                rel="noreferrer"
              >
                {sl.name}
              </a>
            </li>
          ))}
        </ul>
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
