import React, { PropsWithChildren } from "react";

interface ContainerProps {}

const Container = ({ children }: PropsWithChildren<ContainerProps>) => {
  return (
    <div className="px-3.5 lg:px-8 lg:max-w-7xl lg:mx-auto">{children}</div>
  );
};

export default Container;
