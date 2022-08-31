import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { UseAuth } from "../context/AuthContext";
import { useStudent } from "../context/StudentContext";
import moment from "moment";

const StudentDashboard = ({ student, open }) => {
  const { t } = useTranslation();
  const { logout, user } = UseAuth();
  const { registerNewStudent } = useStudent();
  const router = useRouter();
  console.log(student);
  useEffect(() => {
    registerNewStudent(user);
  }, []);
  const data = [
    {
      instructor: "Abdullah AbdulRahman",
      course: "Beginners",
      status: "Attended",
      date: "Tuesday, 31 July, 2022",
      time: "14:00",
    },
    {
      instructor: "Abdullah AbdulRahman",
      course: "Beginners",
      status: "Absent",
      date: "Tuesday, 5 August, 2022",
      time: "14:00",
    },
    {
      instructor: "Abdullah AbdulRahman",
      course: "Beginners",
      status: "Upcoming",
      date: "Tuesday, 12 August, 2022",
      time: "14:00",
    },
    {
      instructor: "Abdullah AbdulRahman",
      course: "Beginners",
      status: "Upcoming",
      date: "Tuesday, 19 August, 2022",
      time: "14:00",
    },
  ];
  const onLogOut = () => {
    logout();
    router.replace("/");
  };
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <p className="text-lg md:text-3xl font-semibold">
          {t("welcome")} {user.displayName}
        </p>
        <div className="space-x-6">
          <button
            className="md:px-12 md:py-4 rounded-md bg-indigo-500 text-sm text-white"
            onClick={open}
          >
            update profile
          </button>
          <button
            className="px-8 py-2 md:px-12 md:py-4 rounded-md bg-red-400 text-sm text-white"
            onClick={onLogOut}
          >
            Log out
          </button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0">
        <div className="w-full md:w-1/3 rounded-lg h-48 bg-indigo-500 p-4 flex flex-col items-end justify-between text-white">
          <p className="bg-white text-indigo-500 font-semibold px-4 py-1 text-sm rounded-2xl">
            paid
          </p>
          <div className="space-y-2">
            <p>Course Registered: </p>
            <p className="text-2xl">
              {student.course !== "" && student.course}
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/3 rounded-lg h-48 bg-green-500 p-4 flex flex-col items-end justify-end text-white space-y-2">
          <p>Attendance Percentage: </p>
          <p className="text-2xl">--</p>
        </div>
        <div className="w-full md:w-1/3 rounded-lg h-48 bg-orange-200 p-4 flex flex-col items-end justify-end text-gray-800 space-y-2">
          <p className="text-2xl">Payment Due Date: </p>
          <p>{moment(student.expiryDate).format("MMMM Do YYYY")}</p>
        </div>
      </div>
      <p className="text-xl text-gray-600 font-semibold">
        List of Upcoming classes
      </p>
      <div className="space-y-4">
        {student.attendance?.map((att) => (
          <div
            key={att.date}
            className="flex justify-between p-4 border border-gray-500 rounded cursor-pointer"
          >
            <p>{moment(att.date).format("MMMM Do YYYY")}</p>
            <p className="text-indigo-500 cursor-pointer">upcoming</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentDashboard;
