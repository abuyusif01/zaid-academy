import React from "react";
import { useCourse } from "../context/CourseContext";

const Request = ({ message }) => {
  const { answerMessage } = useCourse();
  console.log(message);
  return (
    <div className="min-w-1/4  border border-gray-300 rounded pb-4">
      <div className="py-4 px-8 ">
        <p className="text-sm text-gray-500">message from</p>
        <p>{message.firstName + " " + message.lastName}</p>
        <p className="text-sm text-gray-500">{message.email}</p>
        <p className="text-sm text-gray-500">{message.phone}</p>
      </div>
      <div className="bg-indigo-500 text-white text-justify p-8 ">
        <p>{message.content}</p>
      </div>
      <button
        className="block px-12 py-3 rounded-md bg-indigo-500 text-sm text-white mt-8 ml-8"
        onClick={() => answerMessage(message.id)}
      >
        Answer
      </button>
    </div>
  );
};

export default Request;
