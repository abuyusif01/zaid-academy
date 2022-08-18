import Head from "next/head";
import Router, { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import StudentDashboard from "../components/StudentDashboard";
import CourseRegistration from "../components/CourseRegistration";
import { UseAuth } from "../context/AuthContext";
import { useStudent } from "../context/StudentContext";

const Dashboard = () => {
  const { user } = UseAuth();
  const { student, registerNewStudent } = useStudent();

  useEffect(() => {
    registerNewStudent(user);
  }, []);

  return (
    <div className="px-24 my-10 space-y-8 min-h-screen">
      <Head>
        <title>Dashboard | {user.displayName}</title>
      </Head>
      {student.course !== "" ? (
        <StudentDashboard student={student} />
      ) : (
        <CourseRegistration student={student} />
      )}
    </div>
  );
};

export default Dashboard;
