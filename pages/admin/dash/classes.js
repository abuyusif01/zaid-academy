import Head from "next/head";
import React, { useEffect, useRef, useState } from "react";
import SideBar from "../../../components/SideBar";
import StudentCard from "../../../components/StudentCard";
import StudentInfo from "../../../components/StudentInfo";
import { UseAuth } from "../../../context/AuthContext";
import { useInstructor } from "../../../context/InstructorContext";
import { useStudent } from "../../../context/StudentContext";

const Classes = () => {
  const { adminUser, getAdminUser } = UseAuth();
  const { getStudentByInstructor, classes } = useStudent();
  const { getInstructors, instructors } = useInstructor();
  const [lecturer, setLecturer] = useState("");
  const [student, setStudent] = useState({});

  useEffect(() => {
    getStudentByInstructor(lecturer);
    setStudent({});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lecturer]);

  useEffect(() => {
    getInstructors();
    {
      adminUser;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(instructors);

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
    </div>
  );
};

export default Classes;
