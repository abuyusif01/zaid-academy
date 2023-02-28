import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const FAQ = ({ title, description }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="border-b border-b-2 border-b-gray-400 py-2 px-2 space-y-3">
      <div
        className="cursor-pointer flex justify-between items-center"
        onClick={() => setShow((prev) => !prev)}
      >
        <h1 className="text-xl text-gray-700 font-semibold">{title}</h1>
        {!show ? (
          <AiOutlinePlus className="text-2xl" />
        ) : (
          <AiOutlineMinus className="text-2xl" />
        )}
      </div>
      {show && (
        <div className="text-lg leading-8">
          <p className="text-gray-500">{description}</p>
        </div>
      )}
    </div>
  );
};

export default FAQ;
