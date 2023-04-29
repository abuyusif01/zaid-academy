import React, { useState } from "react";
import * as yup from "yup";
import { v4 as uuidv4 } from "uuid";
import { useInstructor } from "../context/InstructorContext";
import { Form, Formik } from "formik";
import TextField from "./TextField";
import SelectField from "./SelectField";
import { BsCameraFill, BsCheckLg } from "react-icons/bs";
import Image from "next/image";
import { useRouter } from "next/router";
import Animation from "./Animation";

const AddTeacher = ({ close }) => {
  const [edu, setEdu] = useState("");
  const router = useRouter();
  const [education, setEducation] = useState([]);
  const [description, setDescription] = useState("");
  const { addInstructorToDb, uploadPicture, imgUrl, clearImgUrl, imgLoading } =
    useInstructor();

  const addEducation = () => {
    setEducation((prev) => [...prev, edu]);
    setEdu("");
  };

  const formHandler = async (e) => {
    if (e.target.files) {
      const files = e.target.files || [];
      const file = files[0];
      uploadPicture(file);
    }
  };

  return (
    <div className="space-y-8">
      <p className="font-semibold text-lg">Add Teacher</p>
      <Formik
        initialValues={{
          fullName: "",
          email: "",
          qualification: "",
          role: "",
        }}
        onSubmit={(values) => {
          addInstructorToDb({
            ...values,
            education,
            description,
            profile: imgUrl,
            uid: uuidv4(),
          });
          router.push("/admin/dash/instructors");
          clearImgUrl();
        }}
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
              <div className="space-y-4">
                <div className="flex items-center justify-center space-x-6">
                  <div className="flex-1 space-y-3">
                    <label className="text-sm font-semibold">Education</label>
                    <input
                      value={edu}
                      onChange={(e) => setEdu(e.target.value)}
                      className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-indigo-500 border border-coolGray-200 rounded-lg shadow-input"
                    />
                  </div>
                  <button
                    type="button"
                    className="px-12 py-4 rounded-md bg-indigo-500 text-sm text-white mt-8 mx-auto"
                    onClick={addEducation}
                  >
                    Add
                  </button>
                </div>
                <div className="space-y-2">
                  {education.map((ed) => (
                    <p className="flex items-center space-x-3" key={ed}>
                      <BsCheckLg className="text-indigo-500" />
                      <span className="text-lg">{ed}</span>
                    </p>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-span-3 p-5 shadow space-y-6">
              <SelectField
                label="Role"
                placeholder="Choose a Role"
                name="role"
                data={["Instructor", "Executive", "Both", "Suspended"]}
              />
              <div className="space-y-3">
                <label className="text-sm font-semibold">Description</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={5}
                  className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-indigo-500 border border-coolGray-200 rounded-lg shadow-input"
                />
              </div>
              <div className="flex space-x-4">
                <div className="relative w-full h-56 rounded border border-gray-400 border-dashed w-1/2">
                  {imgUrl ? (
                    <Image
                      src={imgUrl}
                      alt="teacher"
                      layout="fill"
                      objectFit="cover"
                      objectPosition="top"
                      className="rounded-lg hover:scale-125 transition duration-300 ease-in"
                    />
                  ) : null}
                  {imgLoading ? (
                    <div className="flex h-56 w-full items-center justify-center">
                      <Animation />
                    </div>
                  ) : null}
                </div>
                <div className="flex w-1/2 items-center justify-center h-56 border rounded border-gray-400 border-dashed">
                  <label
                    htmlFor="upload"
                    className="flex items-center space-x-4 cursor-pointer px-12 py-4 rounded-md bg-indigo-500 text-sm text-white mt-8 mx-auto"
                  >
                    <BsCameraFill className="text-xl" />
                    <span className="cursor-pointer">Upload</span>
                  </label>
                  <input
                    className="hidden"
                    onChange={formHandler}
                    id="upload"
                    name="profileImg"
                    type="file"
                  />
                </div>
              </div>
              <button
                className="px-12 py-4 rounded-md bg-indigo-500 text-sm text-white mt-8 mx-auto"
                type="submit"
              >
                Submit
              </button>
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
  role: yup.string().required("Role is required"),
});
