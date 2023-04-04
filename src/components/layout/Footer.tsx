import React from "react";

export function Footer() {
  const year = new Date().getFullYear();
  const rightsReserved = `All Rights Reserved © ${year - 1}-${year} `;
  return (
    <footer id="footer" className="mt-4 p-4 md:p-8 lg:p-10 ">
      <div className="mx-auto max-w-screen-xl text-center">
        <span className="text-sm text-gray-500 sm:text-center">
          {rightsReserved}
          <a href="#" className="hover:underline">
            Bataklik
          </a>
        </span>
      </div>
    </footer>
  );
}
