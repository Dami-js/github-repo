import { TextFieldSize } from "components/TextField";
import React, { ButtonHTMLAttributes, PropsWithChildren } from "react";

type ButtonVariant = "default" | "primary" | "success";

interface ButtonProps {
  fullWidth?: boolean;
  size?: TextFieldSize;
  variant?: ButtonVariant;
}

const getButtonColor = (variant?: ButtonVariant) => {
  switch (variant) {
    case "primary":
      return "bg-primary hover:bg-primary text-white";
    case "success":
      return "bg-success hover:bg-success text-white";

    default:
      return "bg-gray-50 hover:bg-gray-100 text-gray-700";
  }
};

const Button = ({
  children,
  fullWidth,
  className,
  variant = "default",
  size = "xs",
  ...props
}: PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement> & ButtonProps
>) => {
  return (
    <button
      className={`flex items-center justify-center border border-gray-300 rounded-md px-4 py-1.5 active:opacity-90 ${getButtonColor(
        variant
      )} text-${size} focus:outline-none ${
        fullWidth ? "w-full" : ""
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
