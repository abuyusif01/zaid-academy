import React from "react";

const TableRow = ({
  data,
  header,
  open,
  onAction,
  showAction,
  instructorAction,
}) => {
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
        {!showAction ? (
          <p className="col-span-2 text-left">{instructor || data.lecturer}</p>
        ) : null}
        <p className="col-span-2 text-left">{email}</p>
        <p className="col-span-1 text-left">{course}</p>
        {!showAction ? (
          <>
            {header ? (
              <p className="col-span-1">{payment}</p>
            ) : (
              <p className="col-span-1">
                {payment == "paid" ? "Paid" : "Unpaid"}
              </p>
            )}
          </>
        ) : null}
        {!showAction ? (
          <p
            className={`col-span-1 cursor-pointer ${
              !header && "text-indigo-500"
            }`}
            onClick={!header && onAction}
          >
            Action
          </p>
        ) : (
          <>
            {!header ? (
              <button
                onClick={instructorAction}
                className="py-2 px-4 text-sm bg-red-500 text-white rounded font-semibold"
              >
                Delete
              </button>
            ) : (
              <p className="font-semibold">Action</p>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default TableRow;
