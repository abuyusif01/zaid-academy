import Head from "next/head";
import React, { useEffect } from "react";
import SideBar from "../../../components/SideBar";
import { UseAuth } from "../../../context/AuthContext";
import { useInstructor } from "../../../context/InstructorContext";

const Request = () => {
  const { adminUser } = UseAuth();
  const { checkRole, loggedInAdmin } = useInstructor();
  // useEffect(() => {
  //   checkRole(adminUser.email);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <div>
      <Head>
        <title>Admin Request</title>
      </Head>
      {/* {loggedInAdmin[0].role === "admin" ? ( */}
      <div className="flex w-full">
        <div className="w-2/12">
          <SideBar />
        </div>
        <div className="w-10/12 p-8">
          <p>Request</p>
        </div>
      </div>
      {/* ) : null} */}
    </div>
  );
};

export default Request;
