import React, { useState } from "react";

export default function Menu({
  menu,
  onClick,
  className,
}: {
  menu: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  className: string;
}) {
  if (!menu) {
    return (
      <button className={className} onClick={onClick}>
        <svg
          fill="none"
          width="24"
          viewBox="0 0 28 24"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <clipPath id="a">
            <path d="m0 0h28v24h-28z"></path>
          </clipPath>
          <g clipPath="url(#a)">
            <path
              d="m0 15.5h28m-28-7h28z"
              stroke="rgba(0,0,0,1)"
              strokeWidth="2"
            ></path>
          </g>
        </svg>
      </button>
    );
  } else {
    return (
      <button className={className} onClick={onClick}>
        <svg
          width="24"
          viewBox="0 0 28 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.40871 3L19 20.819M1 21L18.5913 3.181L1 21Z"
            stroke="rgba(0,0,0,1)"
            strokeWidth="2"
          ></path>
        </svg>
      </button>
    );
  }
}
