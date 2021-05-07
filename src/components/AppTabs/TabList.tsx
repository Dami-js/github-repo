import React, { PropsWithChildren } from "react";

interface TabListProps {}

export const TabList = ({ children }: PropsWithChildren<TabListProps>) => {
  return <div className="flex border-b">{children}</div>;
};
