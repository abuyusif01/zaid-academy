import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useInstructor } from "../../../../context/InstructorContext";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../../../../config/firebase";
import Head from "next/head";
import Student1 from "../../../../components/Student1";
import pricingData from "../../../../validation/pricing.json";
import { BsGraphUp, BsPerson, BsPersonCheck, BsPersonX } from "react-icons/bs";

const InstructorDetails = () => {
  const { getInstructorById, instructorById } = useInstructor();
  const [show, setShow] = useState(false);
  const [payment, setPayment] = useState(0);
  const [students, setStudents] = useState([]);
  const router = useRouter();
  const { id } = router.query;

  const getStudents = () => {
    const q = query(collection(db, "students"), where("instructor", "==", id));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const student = [];
      querySnapshot.forEach((doc) => {
        if (doc.exists()) {
          student.push(doc.data());
        } else {
          console.log("Student doees not exist yet");
        }
      });
      setStudents(student);
    });
  };

  useEffect(() => {
    (async () => {
      await getInstructorById(id);
    })();
    getStudents();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const paymentData = students.map((stud) => {
    if (stud.classes) {
      return stud.classes;
    } else return [];
  });

  const presentTotal = paymentData
    .flat()
    .filter((stud) => stud.attended === "present")
    .reduce((acc, val) => acc + pricingData[val.plan], 0);

  const absentTotal = paymentData
    .flat()
    .filter((stud) => stud.attended === "absent")
    .reduce((acc, val) => acc + pricingData[val.plan], 0);

  const makePayment = () => {
    // if (paymen)
    setPayment(0);
    setShow(false);
  };

  return (
    <div>
      <Head>
        <title>{instructorById.fullName}</title>
      </Head>
      <div className="space-y-8">
        <div className="px-4 grid grid-cols-6 gap-5">
          <div className="col-span-2 rounded-lg shadow-lg p-8 space-y-4">
            <div className="flex items-center justify-between">
              <p className="font-semibold text-xl">Profile</p>
              <div className="rounded-full bg-blue-300 bg-opacity-40 p-3">
                <BsPerson className="text-blue-700 text-xl" />
              </div>
            </div>
            <div className="text-center space-y-2">
              <p className="text-xl font-semibold">{instructorById.fullName}</p>
              <p className="text-gray-500 text-sm">{instructorById.email}</p>
            </div>
          </div>
          <div className="col-span-2 rounded-lg shadow-lg p-8 space-y-4">
            <div className="flex items-center justify-between">
              <p className="font-semibold text-xl">Total Duration</p>
              <div
                className="rounded-full bg-green-300 bg-opacity-40 p-3 cursor-pointer hover:bg-opacity-60"
                onClick={() => setShow((prev) => !prev)}
              >
                <BsGraphUp className="text-green-700 text-xl" />
              </div>
            </div>
            <div className="space-y-2 text-center">
              <p className="font-semibold text-xl">
                {presentTotal + absentTotal}
              </p>
              <p className="text-gray-500 text-sm">Total Minutes</p>
            </div>
            {show ? (
              <div className="flex items-center space-x-5">
                <input
                  type="number"
                  value={payment}
                  onChange={(e) => setPayment(e.target.value)}
                  className="p-1 text-sm border border-indigo-500 rounded w-full outline-none"
                />
                <button
                  className="w-full text-sm bg-indigo-500 text-white border border-indigo-500 rounded p-1"
                  onClick={makePayment}
                >
                  Add Payment
                </button>
              </div>
            ) : null}
          </div>
          <div className="col-span-1 rounded-lg shadow-lg px-5 py-8 space-y-4">
            <div className="flex items-center justify-between">
              <p className="font-semibold text-xl">Present</p>
              <div className="rounded-full bg-purple-300 bg-opacity-40 p-3">
                <BsPersonCheck className="text-purple-700 text-xl" />
              </div>
            </div>
            <div className="space-y-2 text-center">
              <p className="font-semibold text-xl">{presentTotal}</p>
              <p className="text-gray-500 text-sm"> Minutes</p>
            </div>
          </div>
          <div className="col-span-1 rounded-lg shadow-lg px-5 py-8 space-y-4">
            <div className="flex items-center justify-between">
              <p className="font-semibold text-xl">No Show</p>
              <div className="rounded-full bg-indigo-300 bg-opacity-40 p-3">
                <BsPersonX className="text-indigo-700 text-xl" />
              </div>
            </div>
            <div className="space-y-2 text-center">
              <p className="font-semibold text-xl">{absentTotal}</p>
              <p className="text-gray-500 text-sm"> Minutes</p>
            </div>
          </div>
        </div>
        <div>
          {students.length === 0 ? (
            <p className="text-center my-10">
              No Student registered to Instructor {instructorById.fullName}
            </p>
          ) : null}
        </div>
        <div className="flex flex-wrap justify-start">
          {students.map((student) => (
            <div key={student.uid} className="w-[360px] p-4">
              <Student1 student={student} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InstructorDetails;
