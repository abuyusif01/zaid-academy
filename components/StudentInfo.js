import React from "react";
import moment from "moment";

const StudentInfo = ({ student }) => {
  console.log(student);
  return (
    <div className="min-h-56 shadow p-8 space-y-4 rounded">
      <p>Student Information</p>
      <p className="text-2xl">{student.name}</p>
      <p>{student.email}</p>
      <div>
        <p>Instructor: </p>
        <p className="text-2xl">{student.lecturer}</p>
      </div>
      <div>
        <p>Course :</p>
        <p className="text-2xl">
          {student.course} : {student.intensive}
        </p>
      </div>
      <p>Expires on: {moment(student.expiryDate).format("MMMM Do YYYY")}</p>
      <div>
        <p>Attendance: </p>
      </div>
    </div>
  );
};

export default StudentInfo;
