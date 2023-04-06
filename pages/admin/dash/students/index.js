import Head from "next/head";
import React, { useEffect, useState, useRef } from "react";
import EditStudent from "../../../../components/EditStudent";
import Modal from "../../../../components/Modal";
import StudentInfo from "../../../../components/StudentInfo";
import StudentReg from "../../../../components/StudentReg";
import TableRow from "../../../../components/TableRow";
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
        {[...students].map((student) => (
          <div key={student.uid} className="w-[360px] p-4">
            <Student1 student={student} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Students;
