import React from "react";
interface Props {
  Type: string;
  Placeholder: string;
}
export function ContactInput({ Type, Placeholder }: Props) {
  return (
    <input
      className="bg-transparent border-b py-3 outline-none w-full placeholder:text-slate-500 focus:border-slate-500 transition-all"
      type={Type}
      placeholder={Placeholder}
    />
  );
}
