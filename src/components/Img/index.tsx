import React from "react";

interface ImgProps {
  src: string;
  size?: string;
}

const Img = ({ src, size = "20" }: ImgProps) => {
  return <img src={src} alt="" className={`rounded-full w-${size}`} />;
};

export default Img;
