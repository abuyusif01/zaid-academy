import Head from "next/head";
import React, { useEffect } from "react";
import { useStudent } from "../../../context/StudentContext";
import Student1 from "../../../components/Student1";

const Active = () => {
  const { students, getStudents } = useStudent();

  useEffect(() => {
    getStudents();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <Head>
        <title>Admin Dashboard</title>
      </Head>
      <div className="flex flex-wrap justify-start">
        {[...students]
          .filter((stud) => stud.active)
          .map((student) => (
            <div key={student.uid} className="w-[360px] p-4">
              <Student1 student={student} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Active;
