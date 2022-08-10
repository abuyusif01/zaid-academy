import Head from "next/head";
import React from "react";
import SideBar from "../../../components/SideBar";

const Classes = () => {
  return (
    <div>
      <Head>
        <title>Admin Dashboard</title>
      </Head>
      <div className="flex">
        <SideBar />
        <p>Classes</p>
      </div>
    </div>
  );
};

export default Classes;
