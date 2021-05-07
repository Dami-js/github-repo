import React, { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

export type TextFieldSize = "xs" | "sm" | "md" | "lg";

interface InputProps {
  fieldSize?: TextFieldSize;
}

export const Input = ({
  type = "text",
  fieldSize = "sm",
  ...props
}: InputHTMLAttributes<HTMLInputElement> & InputProps) => {
  return (
    <input
      className={`bg-transparent flex px-2 py-1 font-light w-full focus:outline-none rounded-md placeholder-gray-500 text-${fieldSize} border border-gray-300 focus:shadow-focus-primary focus:border-primary`}
      type={type}
      {...props}
    />
  );
};

interface TextareaProps {
  fieldSize?: TextFieldSize;
}

export const TextArea = ({
  rows = 3,
  fieldSize = "sm",
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement> & TextareaProps) => {
  return (
    <textarea
      className={`bg-transparent flex px-2 py-1 font-light w-full focus:outline-none rounded-md placeholder-gray-500 text-${fieldSize} border border-gray-300 focus:shadow-focus-primary focus:border-primary`}
      rows={rows}
      {...props}
    ></textarea>
  );
};
