import Image from "next/image";
import Link from "next/link";
import React from "react";

const DashInstructor = ({ instructor }) => {
  return (
    <Link href={`/admin/dash/instructors/${instructor.uid}`}>
      <div className="w-full p-5 shadow-lg rounded flex flex-col cursor-pointer items-center space-y-4">
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
          <p className="text-gray-500 text-center text-sm">
            {instructor.email}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default DashInstructor;
