import React, { useState } from "react";
import * as yup from "yup";
import { v4 as uuidv4 } from "uuid";
import { useInstructor } from "../context/InstructorContext";
import { Form, Formik } from "formik";
import TextField from "./TextField";

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
    <div className="space-y-8">
      <p className="font-semibold text-lg">Add Teacher</p>
      <Formik
        initialValues={{}}
        onSubmit={(values) => {}}
        validationSchema={teacherSchema}
      >
        <Form className="space-y-6">
          <div className="grid grid-cols-6 gap-5">
            <div className="col-span-3 space-y-6 p-5 shadow">
              <TextField label="Full Name" name="fullName" type="text" />
              <TextField label="Email" name="email" type="email" />
              <TextField
                label="Qualification"
                name="qualification"
                type="text"
              />
              <div className="flex items-center justify-center space-x-6">
                <div className="flex-1 space-y-3">
                  <label className="text-sm font-semibold">Education</label>
                  <input className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-indigo-500 border border-coolGray-200 rounded-lg shadow-input" />
                </div>
                <button className="px-12 py-4 rounded-md bg-indigo-500 text-sm text-white mt-8 mx-auto">
                  Add
                </button>
              </div>
            </div>
            <div className="col-span-3 p-5 shadow">
              <div className="space-y-3">
                <label className="text-sm font-semibold">Description</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-indigo-500 border border-coolGray-200 rounded-lg shadow-input"
                />
              </div>
              <div className="flex items-center justify-center h-">
                <button className="px-12 py-4 rounded-md bg-indigo-500 text-sm text-white mt-8 mx-auto">
                  Upload Photo
                </button>
              </div>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default AddTeacher;

const teacherSchema = yup.object().shape({
  fullName: yup.string().required("Full Name is required"),
  email: yup.string().required("Email is required"),
  qualification: yup.string().required("Qualification is required"),
});
