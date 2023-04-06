import React, { Dispatch, ReactNode, SetStateAction } from "react";
import { IconType } from "react-icons";
interface NavButtonProps {
  Icon: ReactNode;
  onClick: () => void;
  srText: string;
}

export function NavButton({ Icon, onClick, srText }: NavButtonProps) {
  return (
    <button
      type="button"
      className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
      onClick={() => onClick()}
    >
      <span className="sr-only">{srText}</span>
      {Icon}
    </button>
  );
}
