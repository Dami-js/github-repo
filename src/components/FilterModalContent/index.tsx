import React, { PropsWithChildren } from "react";

interface FilterModalContentProps {
  title?: string;
  handleClose?: () => any;
  showClose?: boolean;
}

const FilterModalContent = ({
  children,
  title,
  handleClose,
  showClose = true,
}: PropsWithChildren<FilterModalContentProps>) => {
  return (
    <div className="bg-white rounded-lg border md:shadow-lg">
      <div className="flex px-5 py-1 text-xs items-center">
        <p className="font-semibold text-gray-600">{title}</p>
        {showClose && (
          <button
            className="ml-auto text-lg text-gray-500 focus:outline-none"
            onClick={handleClose}
          >
            &times;
          </button>
        )}
      </div>
      <div className="">{children}</div>
    </div>
  );
};

export default FilterModalContent;
