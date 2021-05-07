import { BarChartIcon, BookIcon, CubeIcon, DiaryIcon } from "components/icons";
import React, { PropsWithChildren } from "react";

interface TabProps {}

export const Tab = ({ children }: PropsWithChildren<TabProps>) => {
  return (
    <div className="flex items-center overflow-x-auto">
      <a
        href="#!"
        className="text-gray-600 p-3 text-sm inline-flex items-center border-b-2 border-transparent hover:border-gray-300"
      >
        <BookIcon className="fill-current mr-2 hidden md:block" />
        Overview
      </a>
      <a
        href="#!"
        className="text-gray-800 font-semibold p-3 text-sm inline-flex items-center border-b-2 border-red-500 hover:border-red-500"
      >
        <DiaryIcon className="fill-current mr-2 hidden md:block" />
        Repositories
        <span className="bg-gray-200 ml-2 font-light py-0.5 px-1.5 text-xs rounded-lg">
          40
        </span>
      </a>
      <a
        href="#!"
        className="text-gray-600 p-3 text-sm inline-flex items-center border-b-2 border-transparent hover:border-gray-300"
      >
        <BarChartIcon className="fill-current mr-2 hidden md:block" />
        Projects
      </a>
      <a
        href="#!"
        className="text-gray-600 p-3 text-sm inline-flex items-center border-b-2 border-transparent hover:border-gray-300"
      >
        <CubeIcon className="fill-current mr-2 hidden md:block" />
        Packages
      </a>
    </div>
  );
};
