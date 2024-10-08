import Image from "next/image";
import React, { useEffect, useState } from "react";
import Avatar from "boring-avatars";
import { BsCheckCircleFill, BsThreeDotsVertical } from "react-icons/bs";
import Link from "next/link";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import moment from "moment";

const Student1 = ({ student }) => {
  const [instructor, setInstructor] = useState({});
  student.plan = student.plan.replace(/([a-z])([A-Z])/g, '$1 $2')

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


  return (
    <Link href={`/admin/dash/students/${student.uid}`}>
      <div className="relative shadow w-full rounded-lg cursor-pointer hover:shadow-lg">
        <div
          className={`relative p-4 w-full h-32 bg-opacity-20 rounded-t-lg ${student.teacher ? "bg-indigo-500" : "bg-gray-500"
            }`}
        >
          <div className="flex justify-between space-center">
            <p className="px-3 py-1 rounded-xl inline bg-indigo-500 font-bold text-white text-sm">
              {student.active ? "Paid" : "Unpaid"}
            </p>
            <div>
              {student.isSent ? (
                <BsCheckCircleFill className="text-indigo-500 text-xl" />
              ) : (
                <BsThreeDotsVertical />
              )}
            </div>
          </div>
        </div>
        <div className="rounded-full w-12 h-12 absolute -top-7 mx-auto relative">
          <Avatar
            size={60}
            name="Maria Mitchell"
            variant="beam"
            colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
          />
        </div>
        <div className="space-y-4">
          <div className="px-2 space-y-1 text-center select-none">
            <p className="font-semibold">{student.fullName}</p>
            <p className="text-sm text-gray-500">{student.email}</p>
            <p className="">
              {student.instructor ? instructor.fullName : "No Teacher"}
            </p>
            <p>
              {student.date
                ? moment(new Date(parseInt(student.date))).format("MMMM DD YYYY")
                : "No date"}
            </p>
          </div>
          <div className="select-none flex justify-between w-full p-4 border-t border-t-gray-700 border-dashed">
            <div className="text-center">
              <p className="capitalize text-gray-600 text-sm">Program</p>
              <p className="font-bold capitalize">{student.program}</p>
            </div>
            <div className="text-center">
              <p className="capitalize text-gray-600 text-sm">pricing</p>
              <p className="font-bold capitalize">${student.price}</p>
            </div>
            <div className="text-center">
              <p className="capitalize text-gray-600 text-sm">plan</p>
              <p className="font-bold capitalize">{student.plan}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Student1;
