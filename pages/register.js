import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import CourseRegistration from "../components/CourseRegistration";
import { UseAuth } from "../context/AuthContext";
import Head from "next/head";
import { useStudent } from "../context/StudentContext";

const Register = () => {
  const router = useRouter();
  const { user } = UseAuth();
  const [render, setRender] = useState(true);
  const { pupil, checkStudent, checkUser } = useStudent();

  useEffect(() => {
    user?.email && checkStudent(user?.email);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    (async () => {
      if (user) {
        const studentExist = await checkUser(user);
        setRender(studentExist);
        studentExist ? router.replace("dashboard") : null;
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <div>
      <Head>
        <title>Register</title>
      </Head>
      <div>
        {!user && (
          <div className="animate-ping h-6 w-6 rounded-full bg-indigo-600 mx-auto"></div>
        )}
        {!render ? (
          <div className="w-full sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-5/12 mx-auto">
            <CourseRegistration student={user} />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Register;
