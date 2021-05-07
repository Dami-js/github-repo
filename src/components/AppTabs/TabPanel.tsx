import React, { PropsWithChildren } from "react";

interface TabPanelProps {}

export const TabPanel = ({ children }: PropsWithChildren<TabPanelProps>) => {
  return <div>{children}</div>;
};
