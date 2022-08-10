import Head from "next/head";
import React from "react";
import SideBar from "../../../components/SideBar";

const Request = () => {
  return (
    <div>
      <Head>
        <title>Admin Request</title>
      </Head>
      <div className="flex">
        <SideBar />
        <p>Request</p>
      </div>
    </div>
  );
};

export default Request;
