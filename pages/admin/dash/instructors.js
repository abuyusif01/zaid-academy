import Head from "next/head";
import React from "react";
import SideBar from "../../../components/SideBar";

const Instructors = () => {
  return (
    <div>
      <Head>
        <title>Admin Instructors</title>
      </Head>
      <div className="flex w-full">
        <div className="w-2/12">
          <SideBar />
        </div>
        <div className="w-10/12 p-8">
          <p>Instructors</p>
        </div>
      </div>
    </div>
  );
};

export default Instructors;
