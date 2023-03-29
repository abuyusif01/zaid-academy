import Head from "next/head";
import React, { useEffect } from "react";
import { useStudent } from "../../../../context/StudentContext";
import { useRouter } from "next/router";

const StudentsDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const { getStudentById, studentById } = useStudent();
  useEffect(() => {
    (async () => {
      await getStudentById(id);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <Head>
        <title>Student Details</title>
      </Head>
      <div className="grid grid-cols-5 gap-4">
        <div className="min-h-64 col-span-3 bg-indigo-500 shadow rounded-lg bg-opacity-20 p-5 text-indigo-900 space-y-4">
          <p className="font-bold">Personal Information</p>
          <p className="font-semibold text-3xl tracking-wide">
            {studentById.fullName}
          </p>
          <p>Email: {studentById.email}</p>
          <p>Whatsapp: {studentById.whatsapp}</p>
          <p>Phone: {studentById.phone}</p>
        </div>
        <div className="min-h-64 col-span-2 shadow rounded-lg p-5 space-y-5">
          <p className="font-semibold">Courses and Teacher</p>
          <p className="font-semibold text-3xl tracking-wide capitalize">
            {studentById.program}
          </p>
          <p>Pricing: {studentById.pricing}</p>
          <p>Plan: {studentById.plan}</p>
          <div className="flex justify-between items-center">
            <p>
              Teacher:{" "}
              <span className="font-bold">
                {" "}
                {studentById.teacher ? studentById.teacher : "No Teacher"}
              </span>
            </p>
            <button className="bg-indigo-500 text-white py-3 px-4 rounded">
              Choose Teacher
            </button>
          </div>
        </div>
        <div className="col-span-2 p-5 shadow min-h-64 rounded-lg">
          <div className="flex justify-between items-center">
            <p className="font-bold">Attendance</p>
            <button className="bg-indigo-500 text-white py-3 px-4 rounded">
              Add Attendance
            </button>
          </div>
          <div></div>
        </div>
        <div className="col-span-3 p-5 shadow rounded-lg min-h-64">
          <div className="flex justify-between items-center">
            <p className="font-bold">Payment History</p>
            <button className="bg-indigo-500 text-white py-3 px-4 rounded">
              Set Expiry Date
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentsDetails;
