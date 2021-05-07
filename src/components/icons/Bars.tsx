import { IconProps } from "interfaces/icons.interface";
import React from "react";

export function Bars({ color = "#ffffff", size = "24" }: IconProps) {
  return (
    <svg
      height={size}
      viewBox="0 0 16 16"
      version="1.1"
      width={size}
      fill={color}
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M1 2.75A.75.75 0 011.75 2h12.5a.75.75 0 110 1.5H1.75A.75.75 0 011 2.75zm0 5A.75.75 0 011.75 7h12.5a.75.75 0 110 1.5H1.75A.75.75 0 011 7.75zM1.75 12a.75.75 0 100 1.5h12.5a.75.75 0 100-1.5H1.75z"
      ></path>
    </svg>
  );
}
