import { IconProps } from "interfaces/icons.interface";
import React from "react";

export const CaretDownIcon = ({
  color = "#ffffff",
  className,
  size = "16",
}: IconProps) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 64 49"
    >
      <path d="M2.71633 0C1.12313 0 0.16951 1.77198 1.04711 3.10168L30.3308 47.4709C31.1213 48.6686 32.8787 48.6686 33.6692 47.4709L62.9529 3.10169C63.8305 1.77199 62.8769 0 61.2837 0H2.71633Z" />
    </svg>
  );
};
