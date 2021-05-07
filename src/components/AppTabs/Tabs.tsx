import React, { PropsWithChildren } from "react";

interface TabsProps {}

export const Tabs = ({ children }: PropsWithChildren<TabsProps>) => {
  return <div className="">{children}</div>;
};
