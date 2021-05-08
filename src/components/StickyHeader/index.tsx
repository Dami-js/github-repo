import React, { LegacyRef, PropsWithChildren, useEffect, useRef } from "react";

interface StickyHeaderProps {}

const StickyHeader = ({ children }: PropsWithChildren<StickyHeaderProps>) => {
  const container = useRef<LegacyRef<HTMLDivElement> | any>();

  const getSticky = () => {
    if (container && window.pageYOffset > container.current.offsetTop) {
      container.current.classList.add("fixed", "top-0", "w-full", "z-50");
    } else {
      container.current.classList.remove("fixed", "top-0", "w-full", "z-50");
    }
  };

  useEffect(() => {
    if (container && container.current) {
      window.addEventListener("scroll", getSticky);
    }
    return () => {
      window.removeEventListener("scroll", getSticky);
    };
  }, [container]);

  return (
    <div className="" ref={container}>
      {children}
    </div>
  );
};

export default StickyHeader;
