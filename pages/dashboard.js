import Head from "next/head";
import Router, { useRouter } from "next/router";
import React from "react";
import { useTranslation } from "react-i18next";
import { UseAuth } from "../context/AuthContext";

const Dashboard = () => {
  const { logout, user } = UseAuth();
  const router = useRouter();
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
  const { t } = useTranslation();
  return (
    <div className="px-24 my-10 space-y-8 min-h-screen">
      <Head>
        <title>Dashboard | {user.displayName}</title>
      </Head>
      <div className="flex justify-between items-center">
        <p className="text-3xl font-semibold">
          {t("welcome")} {user.displayName}
        </p>
        <div className="space-x-6">
          <button className="px-12 py-4 rounded-md bg-indigo-500 text-sm text-white">
            Send Message to Instructor
          </button>
          <button
            className="px-12 py-4 rounded-md bg-red-400 text-sm text-white"
            onClick={onLogOut}
          >
            Log out
          </button>
        </div>
      </div>
      <div className="flex space-x-6">
        <div className="w-1/3 rounded-lg h-48 bg-indigo-500 p-4 flex flex-col items-end justify-between text-white">
          <p className="bg-white text-indigo-500 font-semibold px-4 py-1 text-sm rounded-2xl">
            paid
          </p>
          <div className="space-y-2">
            <p>Course Registered: </p>
            <p className="text-2xl">Beginners</p>
          </div>
        </div>
        <div className="w-1/3 rounded-lg h-48 bg-green-500 p-4 flex flex-col items-end justify-end text-white space-y-2">
          <p>Attendance Percentage: </p>
          <p className="text-2xl">70%</p>
        </div>
        <div className="w-1/3 rounded-lg h-48 bg-orange-200 p-4 flex flex-col items-end justify-end text-gray-800 space-y-2">
          <p className="text-2xl">Payment Due Date: </p>
          <p>Monday, 24th August, 2022</p>
        </div>
      </div>
      <p className="text-xl text-gray-600 font-semibold">
        List of Upcoming classes
      </p>
      <div>
        {/* <Table
        // columns={["Instructor", "Course", "Status", "Date", "Time"]}
        // rows={data}
        /> */}
        <table className="min-w-full divide-y divide-gray-200 border border-gray-200 rounded">
          <thead className="bg-indigo-500 text-white py-4">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-xs font-bold text-left uppercase "
              >
                Course
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-xs font-bold text-left uppercase "
              >
                Instructor
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-xs font-bold text-left uppercase "
              >
                Date
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-xs font-bold text-right uppercase "
              >
                Time
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-xs font-bold text-right uppercase "
              >
                Status
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {data.map((fig) => (
              <tr key={fig.id}>
                <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                  {fig.course}
                </td>
                <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                  {fig.instructor}
                </td>
                <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                  {fig.date}
                </td>
                <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                  {fig.time}
                </td>
                <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                  {fig.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
