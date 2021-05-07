import React from "react";

export const SearchBar = () => {
  return (
    <div className="border border-gray-600 rounded-md relative px-2">
      <input
        type="text"
        placeholder="Search or jump to..."
        className="bg-transparent flex px-2 py-1 font-light text-sm w-full focus:outline-none text-gray-300 placeholder-gray-300"
      />
      <span className="absolute top-1 right-2 text-gray-400 border rounded-sm border-gray-600 px-1.5 py-0.5 text-xxs ">
        /
      </span>
    </div>
  );
};
