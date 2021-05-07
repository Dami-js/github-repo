import React, { LegacyRef, PropsWithChildren, useEffect, useRef } from "react";

interface ModalContainerProps {}

export const ModalContainer = ({
  children,
}: PropsWithChildren<ModalContainerProps>) => {
  return <div className="relative">{children}</div>;
};

interface ModalProps {
  isVisible: boolean;
  onClose: () => any;
  position?: "left" | "right";
  className?: string;
}

const Modal = ({
  children,
  isVisible,
  onClose,
  className,
}: PropsWithChildren<ModalProps>) => {
  const modalContentRef = useRef<LegacyRef<HTMLDivElement> | any>();

  const globalListener = (e: MouseEvent) => {
    if (modalContentRef.current && modalContentRef.current.contains(e.target)) {
      return;
    }
    onClose();
    document.removeEventListener("click", globalListener);
  };

  useEffect(() => {
    if (modalContentRef.current) {
      document.addEventListener("click", globalListener);
    }
    return () => {
      document.removeEventListener("click", globalListener);
    };
  }, [isVisible, modalContentRef]);

  return (
    <>
      {isVisible && (
        <>
          <div className="hidden md:block fixed top-0 left-0 right-0 bottom-0"></div>
          <div
            className={`fixed top-0 left-0 right-0 bottom-0  bg-black bg-opacity-40 z-50 p-4 flex overflow-y-auto md:bg-transparent md:absolute sm:top-auto sm:left-auto sm:right-auto sm:bottom-auto md:w-80 md:p-1 ${className}`}
          >
            <div className="my-auto relative w-full" ref={modalContentRef}>
              {children}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Modal;
