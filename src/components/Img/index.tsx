import React from "react";

interface ImgProps {
  src: string;
  size?: string;
  className?: string;
}

const Img = ({ src, className, size = "20" }: ImgProps) => {
  return (
    <div className={`rounded-full ${className}`}>
      <img src={src} alt="" className="rounded-full w-full" />
    </div>
  );
};

export default Img;
