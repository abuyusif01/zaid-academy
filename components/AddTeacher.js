import React, { useState } from "react";

const AddTeacher = ({ close }) => {
  const [instructor, setInstructor] = useState({
    email: "",
    password: "",
  });
  const onChange = (e) => {
    setInstructor({ ...instructor, [e.target.name]: e.target.value });
  };
  const onSubmit = () => {
    console.log(instructor);
  };
  return (
    <div>
      <div className="py-6 border-b border-coolGray-100">
        <div className="w-full md:w-9/12">
          <div className="flex flex-wrap -m-3">
            <div className="w-full md:w-1/3 p-3">
              <p className="text-sm text-coolGray-800 font-semibold">Email</p>
            </div>
            <div className="w-full md:flex-1 p-3">
              <input
                className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-indigo-500 border border-coolGray-200 rounded-lg shadow-input"
                type="text"
                placeholder="email"
                name="email"
                value={instructor.email}
                onChange={onChange}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="py-6 border-b border-coolGray-100">
        <div className="w-full md:w-9/12">
          <div className="flex flex-wrap -m-3">
            <div className="w-full md:w-1/3 p-3">
              <p className="text-sm text-coolGray-800 font-semibold">
                Password
              </p>
            </div>
            <div className="w-full md:flex-1 p-3">
              <input
                className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-indigo-500 border border-coolGray-200 rounded-lg shadow-input"
                type="password"
                placeholder="Password"
                name="password"
                value={instructor.password}
                onChange={onChange}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="space-x-4">
        <button
          className="px-12 py-4 rounded-md bg-indigo-500 text-sm text-white mt-8 mx-auto"
          onClick={onSubmit}
        >
          Add Teacher
        </button>
        <button
          className="px-12 py-4 rounded-md border border-gray-500 text-sm text-gray-700 mt-8 mx-auto"
          onClick={close}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AddTeacher;
