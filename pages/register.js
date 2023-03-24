import { useRouter } from "next/router";
import React, { useEffect } from "react";
import CourseRegistration from "../components/CourseRegistration";
import { UseAuth } from "../context/AuthContext";
import Head from "next/head";

const Register = () => {
  // const { user } = UseAuth();
  const user = { email: "bolaji1050@gmail.com" };

  return (
    <div>
      <Head>
        <title>Register</title>
      </Head>
      <div>
        {user && (
          <div className="w-full sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-5/12 mx-auto">
            <CourseRegistration student={user} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Register;
