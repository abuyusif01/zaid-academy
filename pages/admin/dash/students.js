import Head from "next/head";
import React from "react";
import SideBar from "../../../components/SideBar";

const Students = () => {
  return (
    <div>
      <Head>
        <title>Admin Students</title>
      </Head>
      <div className="flex">
        <SideBar />
        <p>Dashboard</p>
      </div>
    </div>
  );
};

export default Students;
