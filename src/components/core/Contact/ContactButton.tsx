import React from "react";
export function ContactButton({}) {
  return (
    <button
      disabled
      className="hover:cursor-not-allowed border-opacity-0 px-6 py-3 bg-slate-700 rounded-2xl text-white hover:text-slate-700 hover:bg-slate-200 hover:border-slate-400 hover:border transition-all duration-300 ease-in-out"
    >
      Send message
    </button>
  );
}
