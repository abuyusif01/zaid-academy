import React from "react";

const TableRow = ({ data, header, open, onAction }) => {
  const { name, instructor, email, course, payment, action } = data;
  return (
    <>
      <div
        className={`grid text-center grid-cols-10 ${
          header
            ? "text-lg bg-gray-200 rounded-t-lg px-4 py-4 font-semibold"
            : "px-4 py-6  hover:bg-gray-100"
        }`}
      >
        <div
          className="col-span-3 cursor-pointer"
          onClick={() => {
            !header && open();
          }}
        >
          <p className="text-left">{name || data.displayName}</p>
        </div>
        <p className="col-span-2 text-left">{instructor || data.lecturer}</p>
        <p className="col-span-2 text-left">{email}</p>
        <p className="col-span-1 text-left">{course}</p>
        {header ? (
          <p className="col-span-1">{payment}</p>
        ) : (
          <p className="col-span-1">{payment == "paid" ? "Paid" : "Unpaid"}</p>
        )}
        <p
          className={`col-span-1 cursor-pointer ${
            !header && "text-indigo-500"
          }`}
          onClick={!header && onAction}
        >
          Action
        </p>
      </div>
    </>
  );
};

export default TableRow;
