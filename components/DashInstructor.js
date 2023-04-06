import Image from "next/image";
import React from "react";

const DashInstructor = ({ instructor }) => {
  return (
    <div className="w-full p-5 shadow-lg rounded flex cursor-pointer items-center space-x-4">
      <div className="relative h-16 w-16 rounded-full">
        <Image
          src={instructor.profile}
          layout="fill"
          objectFit="cover"
          objectPosition="top"
          alt="profile"
          className="rounded-full h-16 w-16"
        />
      </div>
      <div className="flex-1 hover:text-indigo-500 space-y-2">
        <p className="capitalize font-semibold text-center">
          {instructor.fullName}
        </p>
        <p className="text-gray-500 text-center text-sm">{instructor.email}</p>
      </div>
    </div>
  );
};

export default DashInstructor;
