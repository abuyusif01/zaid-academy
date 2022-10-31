import React from "react";

const Modal = ({ close, open, children }) => {
  return (
    <>
      {open && (
        <div
          className="h-screen w-full fixed top-0 left-0 flex items-center justify-center"
          style={{ backgroundColor: "rgba(0,0,0, 0.7)" }}
          onClick={close}
        >
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="w-3/6 max-h-[95vh] bg-white rounded p-8 overflow-y-scroll"
          >
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
