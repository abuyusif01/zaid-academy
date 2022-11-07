import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useInstructor } from "../context/InstructorContext";

const AddTeacher = ({ close }) => {
  const { addNewInstructor, addInstructorToDb } = useInstructor();
  const [instructor, setInstructor] = useState({
    email: "",
    displayName: "",
    password: "",
    role: "",
  });
  const onChange = (e) => {
    setInstructor({ ...instructor, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    addNewInstructor(instructor);
    addInstructorToDb({ ...instructor, uid: uuidv4() });
    close();
  };
  return (
    <div>
      <div className="py-6 border-b border-coolGray-100">
        <form
          autoComplete="off"
          onSubmit={onSubmit}
          className="w-full md:w-9/12"
        >
          <div className="flex flex-wrap -m-3">
            <div className="w-full md:w-1/3 p-3">
              <p className="text-sm text-coolGray-800 font-semibold">Name</p>
            </div>
            <div className="w-full md:flex-1 p-3">
              <input
                className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-indigo-500 border border-coolGray-200 rounded-lg shadow-input"
                type="text"
                placeholder="Full Name"
                name="displayName"
                value={instructor.displayName}
                onChange={onChange}
              />
            </div>
          </div>
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
        </form>
      </div>
      <div className="py-6 border-b border-coolGray-100">
        <div className="w-full md:w-9/12">
          <div className="flex flex-wrap -m-3">
            <div className="w-full md:w-1/3 p-3">
              <p className="text-sm text-coolGray-800 font-semibold">Gender</p>
            </div>
            <div className="w-full md:flex-1 p-3">
              <select
                className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-indigo-500 border border-coolGray-200 rounded-lg shadow-input"
                type="text"
                placeholder="Role"
                value={instructor.role}
                onChange={onChange}
                name="role"
              >
                <option value="">Choose Role</option>
                <option value="admin">Admin</option>
                <option value="instructor">Instructor</option>
              </select>
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
