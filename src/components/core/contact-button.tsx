import React from "react";
export function ContactButton({}) {
  return (
    <button
      disabled
      className="text-base py-2 px-4 font-semibold leading-7 text-white bg-slate-900 hover:bg-white hover:text-black cursor-not-allowed border rounded-lg shadow-2xl ease-in-out duration-300 text-center"
    >
      Send message
    </button>
  );
}
