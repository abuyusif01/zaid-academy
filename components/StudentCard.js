import React from "react";

const StudentCard = ({ student, choose }) => {
  const { displayName, active } = student;
  return (
    <div
      className="flex p-4 border border-gray-200 shadow hover:shadow-lg rouned cursor-pointer justify-between items-center"
      onClick={() => choose(student)}
    >
      <p className="text-lg text-gray-600">{displayName}</p>
      <p
        className={`select-none border rounded-2xl py-1 px-3 ${
          !active
            ? "border-red-500 text-red-500"
            : "border-green-500 text-green-500"
        }`}
      >
        {!active ? "inactive" : "active"}
      </p>
    </div>
  );
};

export default StudentCard;
