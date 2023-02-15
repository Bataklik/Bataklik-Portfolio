import React from "react";
export function ContactTextarea({}) {
  return (
    <textarea
      className="bg-transparent mb-8 resize-none border-b py-8 outline-none w-full placeholder:text-slate-500 focus:border-slate-500 transition-all"
      placeholder="Your message"
    />
  );
}
