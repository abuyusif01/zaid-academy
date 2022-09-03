import React, { useState } from "react";
import moment from "moment";
import { useStudent } from "../context/StudentContext";

const StudentInfo = ({ student }) => {
  const { addAttendance } = useStudent();
  const [editStudent, setEditStudent] = useState("none");
  const [show, setShow] = useState(false);
  const [attendance, setAttendance] = useState({
    date: new Date(),
    status: "upcomming",
  });

  const openDate = () => {
    setEditStudent("date");
  };
  const openStatus = () => {
    setEditStudent("status");
  };

  const onChange = (e) => {
    setAttendance({ ...attendance, [e.target.name]: e.target.value });
  };

  const open = () => {
    setShow(true);
  };

  const close = () => {
    setShow(false);
  };

  const onAdd = () => {
    console.log(attendance);
    addAttendance(student.id, attendance);
    setAttendance({ date: new Date(), status: "upcomming" });
    close();
  };

  // console.log(student);
  return (
    <div className="min-h-56 shadow p-8 space-y-4 rounded">
      <p>Student Information</p>
      <p className="text-2xl">{student.displayName}</p>
      <p>{student.email}</p>
      <div>
        <p>Instructor: </p>
        <p className="text-2xl">{student.lecturer}</p>
      </div>
      <div>
        <p>Language: </p>
        <p className="text-2xl">{student.language}</p>
      </div>
      <div>
        <p>Whatsapp number: </p>
        <p className="text-2xl">{student.phone}</p>
      </div>

      <div>
        <p>Course :</p>
        <p className="text-2xl">
          {student.course} : {student.intensive}
        </p>
      </div>
      <p>Expires on: {moment(student.expiryDate).format("MMMM Do YYYY")}</p>
      <div>
        {!show ? (
          <button
            className="px-8 py-2 md:px-12 md:py-4 rounded-md bg-indigo-400 text-sm text-white"
            onClick={open}
          >
            Add class
          </button>
        ) : (
          <div className="space-y-6">
            <div className="py-6 border-b border-coolGray-100">
              <div className="w-full md:w-9/12">
                <div className="flex flex-wrap -m-3">
                  <div className="w-full md:flex-1 p-3">
                    <input
                      className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-indigo-500 border border-coolGray-200 rounded-lg shadow-input"
                      type="date"
                      placeholder="instructor"
                      name="date"
                      value={attendance.date}
                      onChange={onChange}
                    />
                  </div>
                </div>
              </div>
            </div>
            <button
              className="px-8 py-2 md:px-12 md:py-4 rounded-md bg-indigo-400 text-sm text-white"
              onClick={onAdd}
            >
              Add Date
            </button>
          </div>
        )}
      </div>
      <div>
        <p>Attendance: </p>
      </div>
      {student.attendance?.map((att) => (
        <div key={att.date}>
          <div className="flex justify-between p-4 border border-gray-500 rounded cursor-pointer">
            <p>{moment(att.date).format("MMMM Do YYYY")}</p>
            <p className="text-indigo-500 cursor-pointer" onClick={openStatus}>
              {att.status}
            </p>
            <p className="text-indigo-500 cursor-pointer" onClick={openDate}>
              Postpone
            </p>
          </div>
          {/* <div>
            {editStudent === "date" && (
              <div className="w-full p-3">
                <input
                  className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-indigo-500 border border-coolGray-200 rounded-lg shadow-input"
                  type="date"
                  placeholder="instructor"
                  name="expiryDate"
                  value={att.date}
                  // onChange={onChange}
                />
              </div>
            )}
            {editStudent === "status" && (
              <div className="w-full p-3">
                <select
                  className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-indigo-500 border border-coolGray-200 rounded-lg shadow-input"
                  type="text"
                  placeholder="intensive level"
                  value={att.status}
                  // onChange={onChange}
                  name="status"
                >
                  <option value="upcoming">Upcoming</option>
                  <option value="absent">Absent</option>
                  <option value="present">Present</option>
                </select>
              </div>
            )}
          </div> */}
        </div>
      ))}
    </div>
  );
};

export default StudentInfo;
