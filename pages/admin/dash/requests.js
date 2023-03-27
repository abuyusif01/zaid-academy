import Head from "next/head";
import React, { useEffect } from "react";
import { UseAuth } from "../../../context/AuthContext";
import { useInstructor } from "../../../context/InstructorContext";

const Request = () => {
  const { adminUser } = UseAuth();
  const { checkRole, loggedInAdmin } = useInstructor();
  return (
    <div>
      <Head>
        <title>Admin Request</title>
      </Head>
    </div>
  );
};

export default Request;
