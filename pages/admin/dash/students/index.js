import Head from "next/head";
import React, { useEffect, useState } from "react";
import { useStudent } from "../../../../context/StudentContext";
import Student1 from "../../../../components/Student1";

const Students = () => {
  const { students, getStudents } = useStudent();

  useEffect(() => {
    getStudents();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="relative">
      <Head>
        <title>Admin Students</title>
      </Head>
      <div className="flex flex-wrap justify-start">
        {[...students]
          .filter((stud) => !stud.active)
          .sort((a, b) => a.date - b.date)
          .map((student) => (
            <div
              key={student.uid}
              className="w-full sm:w-1/2 xl:w-1/3 2xl:w-1/4 p-4"
            >
              <Student1 student={student} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Students;
