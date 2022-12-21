import React from "react";

interface ButtonProps {
  text: string;
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
}
export function Button({ text, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="bg-[#000] text-[rgb(247,247,248)] px-5 py-2 rounded-full hover:bg-[rgba(0,0,0,0.7)]"
    >
      {text}
    </button>
  );
}
