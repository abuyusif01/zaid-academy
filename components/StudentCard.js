import React from "react";

const StudentCard = ({ student, choose }) => {
  const { name, payment } = student;
  return (
    <div
      className="flex p-4 border border-gray-200 shadow hover:shadow-lg rouned cursor-pointer justify-between items-center"
      onClick={() => choose(student)}
    >
      <p className="text-lg text-gray-600">{name}</p>
      <p
        className={`select-none border rounded-2xl py-1 px-3 ${
          payment !== "paid"
            ? "border-red-500 text-red-500"
            : "border-green-500 text-green-500"
        }`}
      >
        {payment !== "paid" ? "inactive" : "active"}
      </p>
    </div>
  );
};

export default StudentCard;
