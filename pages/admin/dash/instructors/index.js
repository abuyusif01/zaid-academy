import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useInstructor } from "../../../../context/InstructorContext";
import DashInstructor from "../../../../components/DashInstructor";

const Instructors = () => {
  const router = useRouter();
  const { getInstructors, instructors } = useInstructor();
  useEffect(() => {
    getInstructors();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <Head>
        <title>Instructors</title>
      </Head>
      <div className="w-full">
        <div className="flex justify-between items-center">
          <p className="font-semibold text-lg capitalize">Instructors</p>
          <button
            className="px-12 py-4 rounded-md bg-indigo-500 text-sm text-white"
            onClick={() => router.push("/admin/dash/instructors/add")}
          >
            Add Instructors
          </button>
        </div>
        <div className="flex flex-wrap justify-center">
          {instructors.map((instructor) => (
            <div className="p-4 w-full lg:w-1/2 2xl:w-1/4" key={instructor.uid}>
              <DashInstructor instructor={instructor} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Instructors;
