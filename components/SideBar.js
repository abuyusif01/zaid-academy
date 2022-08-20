import Link from "next/link";
import React from "react";

const SideBar = () => {
  return (
    <div className="w-2/12 min-h-screen bg-gray-100">
      {/* <div className="h-24 flex justify-center items-center border-b border-b-1 border-b-indigo-400">
        Ousmane Yahya Diallo
      </div> */}
      <div className="px-8 py-4 border-b border-b-1 border-b-indigo-400">
        <Link href="/admin/dash/classes">Classes</Link>
      </div>
      <div className="px-8 py-4 border-b border-b-1 border-b-indigo-400">
        <Link href="/admin/dash/messages">Messages</Link>
      </div>
      {/* <div className="px-8 py-4 border-b border-b-1 border-b-indigo-400">
        <Link href="/admin/dash/requests">Request</Link>
      </div> */}
      <div className="px-8 py-4 border-b border-b-1 border-b-indigo-400">
        <Link href="/admin/dash/students">Students</Link>
      </div>
    </div>
  );
};

export default SideBar;
