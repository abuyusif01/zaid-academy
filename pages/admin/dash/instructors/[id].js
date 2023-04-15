import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useInstructor } from "../../../../context/InstructorContext";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../../../../config/firebase";
import Head from "next/head";
import Student1 from "../../../../components/Student1";
import pricingData from "../../../../validation/pricing.json";
import {
  BsCashCoin,
  BsCashStack,
  BsClockHistory,
  BsPerson,
  BsPersonCheck,
  BsPersonX,
  BsThreeDotsVertical,
} from "react-icons/bs";
import moment from "moment";

const InstructorDetails = () => {
  const { getInstructorById, instructorById, addToPaymentHistory } =
    useInstructor();
  const [show, setShow] = useState(false);
  const [payment, setPayment] = useState(0);
  const [students, setStudents] = useState([]);
  const [paidTime, setPaidTime] = useState(0);
  const [payments, setPayments] = useState([]);
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

  useEffect(() => {
    setPaidTime(
      instructorById.payments?.reduce((acc, val) => acc + val.payment * 1, 0) ||
        0
    );
    setPayments(instructorById.payments || []);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [instructorById]);

  const total = absentTotal + presentTotal;

  const makePayment = () => {
    if (payment !== 0 && payment <= total - paidTime) {
      const data = {
        payment,
        payDay: new Date().getTime(),
        id: uuidv4(),
      };
      setPaidTime((prev) => 1 * prev + payment * 1);
      setPayments((prev) => [data, ...prev]);
      addToPaymentHistory(id, data);
    }
    setPayment(0);
    setShow(false);
  };

  return (
    <div>
      <Head>
        <title>{instructorById.fullName}</title>
      </Head>
      <div className="space-y-8">
        <div className=" grid grid-cols-6 gap-8">
          <div className="col-span-6 lg:col-span-3 2xl:col-span-2 rounded-lg shadow-lg p-8 space-y-4">
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
          <div className="col-span-6 lg:col-span-3 2xl:col-span-2 rounded-lg shadow-lg p-8 space-y-4">
            <div className="flex items-center justify-between">
              <p className="font-semibold text-xl">Total Duration</p>
              <div
                className="rounded-full bg-green-300 bg-opacity-40 p-3 cursor-pointer hover:bg-opacity-60"
                onClick={() => setShow((prev) => !prev)}
              >
                <BsThreeDotsVertical className="text-green-700 text-xl" />
              </div>
            </div>
            <div className="space-y-2 text-center">
              <p className="font-semibold text-xl">{total}</p>
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
          <div className="col-span-3 2xl:col-span-1 rounded-lg shadow-lg px-5 py-8 space-y-4">
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
          <div className="col-span-3 2xl:col-span-1 rounded-lg shadow-lg px-5 py-8 space-y-4">
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
          <div className="col-span-3 2xl:col-span-2 rounded-lg shadow-lg p-8 space-y-4">
            <div className="flex items-center justify-between">
              <p className="font-semibold text-xl">Paid Time</p>
              <div className="rounded-full bg-red-300 bg-opacity-40 p-3">
                <BsCashStack className="text-red-700 text-xl" />
              </div>
            </div>
            <div className="text-center space-y-2">
              <p className="text-xl font-semibold">{paidTime}</p>
              <p className="text-gray-500 text-sm">Minutes</p>
            </div>
          </div>
          <div className="col-span-3 2xl:col-span-1 rounded-lg shadow-lg px-5 py-8 space-y-4">
            <div className="flex items-center justify-between">
              <p className="font-semibold text-xl">Unpaid</p>
              <div className="rounded-full bg-slate-300 bg-opacity-40 p-3">
                <BsCashCoin className="text-slate-700 text-xl" />
              </div>
            </div>
            <div className="space-y-2 text-center">
              <p className="font-semibold text-xl">{total - paidTime}</p>
              <p className="text-gray-500 text-sm"> Minutes</p>
            </div>
          </div>
          <div className="col-span-6 2xl:col-span-3 max-h-48 rounded-lg shadow-lg p-8 space-y-4  overflow-y-auto">
            <div className="flex items-center justify-between">
              <p className="font-semibold text-xl">Payment History</p>
              <div className="rounded-full bg-orange-300 bg-opacity-40 p-3">
                <BsClockHistory className="text-orange-700 text-xl" />
              </div>
            </div>
            <div className="text-center">
              {payments?.map((pay) => (
                <div
                  key={pay.id}
                  className="flex items-center justify-between text-sm text-gray-500 space-y-2"
                >
                  <p>{moment(pay.payDay).format("MMMM Do YYYY")}</p>
                  <p>{pay.payment} minutes</p>
                </div>
              ))}
            </div>
            <div className="text-sm text-center text-gray-500">
              {payments.length === 0 ? <p>No Payment History</p> : null}
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
        <div className="flex flex-wrap justify-center md:justify-start">
          {students.map((student) => (
            <div
              key={student.uid}
              className="w-full sm:w-1/2 xl:w-1/3 2xl:w-1/4 p-4"
            >
              <Student1 student={student} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InstructorDetails;
