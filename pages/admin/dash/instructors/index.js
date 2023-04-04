import { useRouter } from "next/router";
import React from "react";

const Instructors = () => {
  const router = useRouter();
  return (
    <div className="w-full">
      <div className="flex items-center justify-">
        <p className="font-semibold text-lg capitalize">Instructors</p>
        <button
          className="px-12 py-4 rounded-md bg-indigo-500 text-sm text-white mt-8 mx-auto"
          onClick={() => router.push("/admin/dash/instructors/add")}
        >
          Add Instructors
        </button>
      </div>
    </div>
  );
};

export default Instructors;
