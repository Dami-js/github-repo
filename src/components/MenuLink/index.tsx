import React, { ReactNode } from "react";

interface MenuLinkProps {
  label: string;
  border?: boolean;
  icon?: ReactNode;
  fullWidth?: boolean;
}

const MenuLink = ({
  label,
  border = true,
  fullWidth = true,
  icon,
}: MenuLinkProps) => {
  return (
    <a
      href="#!"
      className={`text-white ${border ? "border-t" : ""} ${
        fullWidth ? "w-full" : ""
      } inline-flex items-center text-sm font-bold border-gray-700 py-2`}
    >
      {icon && <span className="pr-1">{icon}</span>}
      {label}
    </a>
  );
};

export default MenuLink;
