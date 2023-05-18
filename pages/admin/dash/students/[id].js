import Head from "next/head";
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useStudent } from "../../../../context/StudentContext";
import { useRouter } from "next/router";
import moment from "moment";
import { BsTrash, BsCheck2, BsX } from "react-icons/bs";
import { useInstructor } from "../../../../context/InstructorContext";
import EditStudent from "../../../../components/EditStudent";

const StudentsDetails = () => {
  const [showEdit, setShowEdit] = useState(false);
  const [showAttendance, setShowAttendance] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [showInstructors, setShowInstructors] = useState(false);
  const [program, setProgram] = useState("");
  const [language, setLanguage] = useState("");
  const [plan, setPlan] = useState("");
  const [pricing, setPricing] = useState("");
  const [classDate, setClassDate] = useState(new Date().getTime());
  const [classTime, setClassTime] = useState(new Date().getTime());
  const [classes, setClasses] = useState([]);
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());
  const [payments, setPayments] = useState([]);
  const [expiresOn, setExpiresOn] = useState(null);
  const router = useRouter();
  const { id } = router.query;
  const {
    getStudentById,
    studentById,
    addClass,
    removeClass,
    addToPaymentHistory,
    setExpiry,
    enrollStudentToLecturer,
    myInstructor,
    setInstructorMy,
    getMyInstructor,
  } = useStudent();

  const { instructors, getInstructors } = useInstructor();

  useEffect(() => {
    (async () => {
      await getStudentById(id);
      getInstructors();
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setClasses(studentById.classes ? studentById.classes : []);
    setPayments(studentById.payments ? studentById.payments : []);
    setExpiresOn(studentById.expiry ? studentById.expiry : null);
    setProgram(studentById.program ? studentById.program : null);
    setLanguage(studentById.language ? studentById.language : null);
    setPricing(studentById.pricing ? studentById.pricing : null);
    setPlan(studentById.plan ? studentById.plan : null);
    getMyInstructor(studentById.instructor ? studentById.instructor : null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [studentById]);

  const saveClass = (data) => {
    addClass(id, data);
    setClasses([...classes, data]);
    setShowAttendance(false);
  };

  const deleteClass = (data) => {
    const remain = classes.filter((lec) => lec.id !== data.id);
    setClasses(remain);
    removeClass(id, remain);
  };

  const markAttendance = (data, status) => {
    const remain = classes.filter((lec) => lec.id !== data.id);
    const target = classes.find((lec) => lec.id === data.id);
    const newData = [{ ...target, attended: status }, ...remain];
    setClasses(newData);
    removeClass(id, newData);
  };

  const addPayment = (data) => {
    addToPaymentHistory(id, data);
    setPayments([...payments, data]);
    setExpiry(id, data);
    setExpiresOn(data);
    setShowPayment(false);
  };

  const chooseInstructor = (instructor) => {
    setInstructorMy(instructor);
    enrollStudentToLecturer(id, instructor);
    setShowInstructors(false);
  };

  const isexpired =
    new Date(expiresOn?.toDate).getTime() > new Date().getTime();

  const updateEditedValue = (data) => {
    setProgram(data.program);
    setLanguage(data.language);
    setPricing(data.pricing);
    setPlan(data.plan);
  };

  return (
    <div>
      <Head>
        <title>Student Details</title>
      </Head>
      {showEdit ? (
        <div className="space-y-6 px-6">
          <div className="w-full">
            <button
              className="px-12 py-4 rounded-md border border-red-500 text-sm text-red-700 mt-8 mx-auto inline-block"
              onClick={() => setShowEdit(false)}
            >
              Close
            </button>
          </div>
          <EditStudent
            student={studentById}
            close={() => setShowEdit(false)}
            edit={updateEditedValue}
          />
        </div>
      ) : (
        <div className="grid grid-cols-5 gap-4">
          {/* TODO: Personal Information */}
          <div className="min-h-64 lg:col-span-3 col-span-5 bg-indigo-500 shadow rounded-lg bg-opacity-20 p-5 text-indigo-900 space-y-6">
            <div className="flex items-center justify-between">
              <p className="font-bold">Personal Information</p>
              <p className="font-bold">
                Expire :{" "}
                <span>
                  {expiresOn?.toDate
                    ? moment(expiresOn?.toDate || new Date()).format(
                        "MMMM Do YYYY"
                      )
                    : "No Date"}
                </span>
              </p>
              <div>
                <button
                  className="px-12 py-4 rounded-md  text-sm text-white bg-indigo-600 mx-auto"
                  onClick={() => {
                    setShowEdit(true);
                  }}
                >
                  Edit
                </button>
              </div>
            </div>
            <div className="flex justify-between">
              <p className="font-semibold text-3xl tracking-wide">
                {studentById.fullName}{" "}
              </p>
              <span className="py-2 px-4 text-sm bg-indigo-500 text-white rounded-full">
                {!isexpired ? "Inactive" : "Active"}
              </span>
            </div>
            <div className="flex justify-between">
              <p>Email: {studentById.email}</p>
              <p>Residence: {studentById.residence}</p>
            </div>
            <div className="flex justify-between">
              <p>Whatsapp: {studentById.whatsapp}</p>
              <p>Nationality: {studentById.nationality}</p>
            </div>
            <div className="flex justify-between">
              <p>Phone: {studentById.phone}</p>
              <p>Language: {language}</p>
            </div>
          </div>
          {/* TODO: Course and Teacher */}
          <div className="min-h-64 relative lg:col-span-2 col-span-5 shadow bg-green-200 bg-opacity-10 rounded-lg p-5 text-green-900 space-y-5">
            <div className="flex justify-between items-center">
              <p className="font-semibold">Courses and Teacher</p>
              {!studentById.instructor && (
                <button
                  className="bg-green-700 text-white py-3 px-4 rounded"
                  onClick={() => setShowInstructors((prev) => !prev)}
                >
                  {showInstructors ? "Close" : "Choose Teacher"}
                </button>
              )}
            </div>
            {showInstructors && (
              <div className="z-10 w-full p-2 left-0 shadow-lg absolute bg-white space-y-4 text-lg font-semibold text-black min-h-32 overflow-y">
                {[...instructors].map((instructor) => (
                  <p
                    className="cursor-pointer p-2 bg-gray-400 bg-opacity-20 capitalize rounded"
                    key={instructor.uid}
                    onClick={() => chooseInstructor(instructor)}
                  >
                    {instructor.fullName}
                  </p>
                ))}
              </div>
            )}
            <p className="font-semibold text-3xl tracking-wide capitalize">
              {program}
            </p>
            <p className="capitalize">Pricing: {pricing}</p>
            <p className="capitalize">Plan: {plan}</p>
            <p>
              Teacher:{" "}
              <span className="font-bold">
                {" "}
                {myInstructor ? myInstructor.fullName : "No Teacher"}
              </span>
            </p>
          </div>
          {/* TODO: Attendance */}
          <div className="lg:col-span-2 col-span-5 p-5 shadow min-h-64 rounded-lg relative space-y-4">
            <div className="flex justify-between items-center">
              <p className="font-bold">Attendance</p>
              <button
                className="bg-indigo-500 text-white py-3 px-4 rounded"
                onClick={() => setShowAttendance((prev) => !prev)}
              >
                {showAttendance ? "Close" : "Add Class"}
              </button>
            </div>
            {showAttendance && (
              <div className="absolute right-3 bg-white p-2 shadow-lg space-y-2">
                <div className="space-x-2">
                  <input
                    className="p-4 outline-none border rounded border-gray-500"
                    type="date"
                    value={classDate}
                    onChange={(e) => setClassDate(e.target.value)}
                  />
                  <input
                    className="p-4 outline-none border rounded border-gray-500"
                    type="time"
                    value={classTime}
                    onChange={(e) => setClassTime(e.target.value)}
                  />
                </div>
                <div className="align-right">
                  <button
                    onClick={() =>
                      saveClass({
                        classDate,
                        classTime,
                        id: uuidv4(),
                        attended: null,
                        plan: studentById.plan,
                      })
                    }
                    className="bg-indigo-500 text-white py-3 px-4 rounded"
                  >
                    Add
                  </button>
                </div>
              </div>
            )}
            <div className="space-y-3">
              {classes.map((classData) => (
                <div
                  key={classData.id}
                  className={`flex justify-between items-center space-x-4 p-4 ${
                    classData.attended === null && "bg-gray-500"
                  }
                ${classData.attended === "absent" && "bg-red-500"} ${
                    classData.attended === "present" && "bg-green-500"
                  } rounded-lg bg-opacity-20`}
                >
                  <p>{moment(classData.classDate).format("MMMM Do YYYY")}</p>
                  <p>{classData.classTime}</p>
                  {!classData.attended ? (
                    <>
                      {new Date(classData.classDate) < new Date() && (
                        <div className="flex space-x-6 items-center">
                          <BsCheck2
                            className="text-xl cursor-pointer"
                            onClick={() => markAttendance(classData, "present")}
                          />
                          <BsX
                            className="text-2xl cursor-pointer"
                            onClick={() => markAttendance(classData, "absent")}
                          />
                        </div>
                      )}
                    </>
                  ) : (
                    <div></div>
                  )}
                  <BsTrash
                    className="text-xl cursor-pointer "
                    onClick={() => deleteClass(classData)}
                  />
                </div>
              ))}
            </div>
          </div>
          {/* TODO: Payment History */}
          <div className="lg:col-span-3 col-span-5 p-5 shadow rounded-lg min-h-64 space-y-4 relative">
            <div className="flex justify-between items-center">
              <p className="font-bold">Payment History</p>
              {!isexpired && (
                <button
                  className="bg-indigo-500 text-white py-3 px-4 rounded"
                  onClick={() => setShowPayment((prev) => !prev)}
                >
                  {showPayment ? "Close" : "Set Expiry Date"}
                </button>
              )}
            </div>
            {showPayment && (
              <div className="absolute right-3 bg-white p-2 shadow-lg space-y-2">
                <div className="space-x-2">
                  <input
                    className="p-4 outline-none border rounded border-gray-500"
                    type="date"
                    value={fromDate}
                    onChange={(e) => setFromDate(e.target.value)}
                  />
                  <input
                    className="p-4 outline-none border rounded border-gray-500"
                    type="date"
                    value={toDate}
                    onChange={(e) => setToDate(e.target.value)}
                  />
                </div>
                <div className="align-right">
                  <button
                    onClick={() =>
                      addPayment({
                        fromDate,
                        toDate,
                        id: uuidv4(),
                        paid: true,
                        plan: studentById.plan,
                        pricing: studentById.pricing,
                        program: studentById.program,
                      })
                    }
                    className="bg-indigo-500 text-white py-3 px-4 rounded"
                  >
                    Add
                  </button>
                </div>
              </div>
            )}
            <div className="space-y-3">
              {payments
                .sort((a, b) => a.classDate - b.classDate)
                .map((pay) => (
                  <div
                    key={pay.id}
                    className={`flex justify-between items-center space-x-4 p-4 bg-yellow-500 rounded-lg bg-opacity-20`}
                  >
                    <p>{moment(pay.fromDate).format("MMMM Do YYYY")}</p>
                    <p>to</p>
                    <p>{moment(pay.toDate).format("MMMM Do YYYY")}</p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentsDetails;
