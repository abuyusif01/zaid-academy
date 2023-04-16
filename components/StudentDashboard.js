import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { UseAuth } from "../context/AuthContext";
import moment from "moment";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../config/firebase";

const StudentDashboard = ({ student }) => {
  const { t } = useTranslation();
  const { logout } = UseAuth();
  const [instructor, setInstructor] = useState({});
  const router = useRouter();
  const onLogOut = () => {
    logout();
    router.replace("/");
  };
  useEffect(() => {
    (async () => {
      if (student.instructor) {
        const instructorRef = doc(db, "instructors", student.instructor);
        const docSnap = await getDoc(instructorRef);
        if (docSnap.exists()) {
          setInstructor(docSnap.data());
        } else {
          console.log("No such document!");
        }
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getAttendance = (status) => {
    return student?.classes?.reduce((acc, curr) => {
      if (curr.attended === status) {
        return acc + 1;
      } else {
        return acc;
      }
    }, 0);
  };

  const paid = new Date(student?.expiry?.toDate) > new Date();

  const totalPresent = getAttendance("present");
  const totalAbsent = getAttendance("absent");
  const totalUpcoming = getAttendance(null);

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <p className="text-lg md:text-3xl font-semibold">
          {t("welcome")} {student.fullName}
        </p>
        <div className="space-x-6">
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
            {paid ? "paid" : "unpaid"}
          </p>
          <div className="space-y-1">
            <div className="space-y-2">
              <p className="text-lg">
                Instructor:{" "}
                <span className="capitalize font-semibold">
                  {instructor.fullName || "No Instructor"}
                </span>
              </p>
              <p className="text-2xl">
                {student.course !== "" && student.course}
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-lg">
                Course Registered:{" "}
                <span className="capitalize font-semibold">
                  {student.program}
                </span>
              </p>
              <p className="text-2xl">
                {student.course !== "" && student.course}
              </p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3 rounded-lg h-48 bg-green-500 p-4 flex flex-col items-end justify-end text-white space-y-2">
          <p>Attendance Percentage: </p>
          {totalPresent ? (
            <p className="text-2xl">
              {((totalPresent * 100) / (totalAbsent + totalPresent)).toFixed(2)}{" "}
              %
            </p>
          ) : (
            <p>No classes yet</p>
          )}
        </div>
        <div className="w-full md:w-1/3 rounded-lg h-48 bg-orange-200 p-4 flex flex-col items-end justify-end text-gray-800 space-y-2">
          <p className="text-2xl">Payment Due Date: </p>
          <p>{moment(student?.expiry?.toDate).format("MMMM Do YYYY")}</p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-8">
        <div className="col-span-3 md:col-span-1 space-y-4">
          <p className="text-xl text-gray-600 font-semibold">
            Upcoming classes
          </p>
          {student.classes
            ?.filter((clas) => clas.attended === null)
            .map((att) => (
              <div
                key={att.id}
                className="flex justify-between p-4 bg-gray-200 bg-opacity-40 rounded"
              >
                <p>{moment(att.classDate).format("MMMM Do YYYY")}</p>
                <p className="text-black">upcoming</p>
              </div>
            ))}
          <div>
            {totalUpcoming ? null : (
              <p className="text-sm text-gray-400">no upcoming classes</p>
            )}
          </div>
        </div>
        <div className="col-span-3 md:col-span-1 space-y-4">
          <p className="text-xl text-gray-600 font-semibold">
            Attended classes
          </p>
          {student.classes
            ?.filter((clas) => clas.attended === "present")
            .map((att) => (
              <div
                key={att.id}
                className="flex justify-between p-4 bg-green-200 bg-opacity-40 rounded"
              >
                <p>{moment(att.classDate).format("MMMM Do YYYY")}</p>
                <p className="text-green-700">present</p>
              </div>
            ))}
          <div>
            {totalPresent ? null : (
              <p className="text-sm text-gray-400">no attended classes</p>
            )}
          </div>
        </div>
        <div className="col-span-3 md:col-span-1 space-y-4">
          <p className="text-xl text-gray-600 font-semibold">Missed classes</p>
          {student.classes
            ?.filter((clas) => clas.attended === "absent")
            .map((att) => (
              <div
                key={att.id}
                className="flex justify-between p-4 bg-red-200 bg-opacity-40 rounded"
              >
                <p>{moment(att.classDate).format("MMMM Do YYYY")}</p>
                <p className="text-red-700">absent</p>
              </div>
            ))}
          <div>
            {totalAbsent ? null : (
              <p className="text-sm text-gray-400">no absent classes</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
