import React from "react";
import CourseRegistration from "../components/CourseRegistration";
import { UseAuth } from "../context/AuthContext";

const Register = () => {
  const { user } = UseAuth();
  console.log(user);
  return (
    <div className="px-4 sm:px-12 md:px-32 lg:px-56 xl:px-72">
      <CourseRegistration student={user} />
    </div>
  );
};

export default Register;
