import Head from "next/head";
import React, { useEffect, useRef, useState } from "react";
import SideBar from "../../../components/SideBar";
import StudentCard from "../../../components/StudentCard";
import StudentInfo from "../../../components/StudentInfo";
import { useStudent } from "../../../context/StudentContext";

const Classes = () => {
  const { getStudentByInstructor, classes } = useStudent();
  const [lecturer, setLecturer] = useState("");
  const [student, setStudent] = useState({});

  useEffect(() => {
    getStudentByInstructor(lecturer);
    setStudent({});
  }, [lecturer]);

  const onChange = (e) => {
    setLecturer(e.target.value);
  };

  const chooseStudent = (student) => {
    setStudent(student);
  };

  return (
    <div>
      <Head>
        <title>Admin Dashboard</title>
      </Head>
      <div className="flex">
        <SideBar />
        <div className="p-8 w-full">
          <p className="text-2xl text-gray-600 font-semibold">Classes</p>
          <div className="py-6 border-b border-coolGray-100">
            <label className="text-sm text-coolGray-800 font-semibold">
              Instructor
            </label>
            <div className="w-full  p-3">
              <select
                className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-indigo-500 border border-coolGray-200 rounded-lg shadow-input"
                type="text"
                placeholder="instructor"
                name="lecturer"
                value={lecturer}
                onChange={onChange}
              >
                <option value="">Choose an Instructor</option>
                <option value="Ousmane Yahya Diallo">
                  Ousmane Yahya Diallo{" "}
                </option>
                <option value="Mouhamed El Moudjtaba Diallo">
                  Mouhamed El Moudjtaba Diallo
                </option>
                <option value="Mamadou Bailo Diallo">
                  Mamadou Bailo Diallo
                </option>
              </select>
            </div>
          </div>
          <div className="flex space-x-8">
            <div className="w-1/2 my-4 space-y-4">
              {classes.map((student) => (
                <StudentCard
                  key={student.id}
                  student={student}
                  choose={chooseStudent}
                />
              ))}
            </div>
            <div className="w-1/2">
              {Object.keys(student).length !== 0 && (
                <StudentInfo student={student} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Classes;
