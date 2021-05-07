import { CheckIcon } from "components/icons";
import React, { PropsWithChildren } from "react";

interface FilterModalContentItemProps {
  labelText?: string;
  handleClick?: () => any;
  isSelected?: boolean;
}

const FilterModalContentItem = ({
  labelText,
  handleClick,
  isSelected,
}: FilterModalContentItemProps) => {
  return (
    <button
      className="text-gray-800 w-full focus:outline-none flex items-center border-t text-xs px-5 py-2 cursor-pointer"
      onClick={handleClick}
    >
      <span className={`mr-2 ${!isSelected ? "mr-6" : ""}`}>
        {isSelected && <CheckIcon className="fill-current" />}
      </span>
      {labelText}
    </button>
  );
};

export default FilterModalContentItem;
