import React, { LegacyRef, PropsWithChildren, useEffect, useRef } from "react";

interface StickyHeaderProps {}

const StickyHeader = ({ children }: PropsWithChildren<StickyHeaderProps>) => {
  const container = useRef<LegacyRef<HTMLDivElement> | any>();

  const getSticky = (container: any, sticky: any) => {
    if (container && window.pageYOffset > sticky) {
      container.current.classList.add("fixed", "top-0", "w-full", "z-50");
    } else {
      container.current.classList.remove("fixed", "top-0", "w-full", "z-50");
    }
  };

  useEffect(() => {
    const containerOffsetTop = container.current?.offsetTop;
    if (container && container.current) {
      window.addEventListener("scroll", () =>
        getSticky(container, containerOffsetTop)
      );
    }
    return () => {
      window.removeEventListener("scroll", () =>
        getSticky(container, containerOffsetTop)
      );
    };
  }, [container]);
  return (
    <div className="" ref={container}>
      {children}
    </div>
  );
};

export default StickyHeader;
