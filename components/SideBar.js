import React from "react";
import { FaChalkboardTeacher } from "react-icons/fa";
import {
  BsEnvelopeFill,
  BsPersonCheck,
  BsFillPeopleFill,
  BsEnvelopeOpenFill,
} from "react-icons/bs";
import SidebarLink from "./SidebarLink";
import { UseAuth } from "../context/AuthContext";
import { useRouter } from "next/router";
import { useInstructor } from "../context/InstructorContext";

const SideBar = () => {
  const { adminSignOut, adminUser } = UseAuth();
  const { checkRole } = useInstructor();

  const router = useRouter();
  return (
    <div className="min-h-[100vh] border-r border-gray-200 p-4 py-8 border-dashed space-y-3">
      <div className="cursor-pointer bg-gray-200 rounded-lg text-center space-y-1 p-2">
        <p>Zaid Dashboard</p>
        <p className="text-sm">Admin</p>
      </div>
      <div className="space-y-4">
        <SidebarLink
          icon={<BsPersonCheck />}
          name="New Students"
          url="/admin/dash/students"
          active="students"
        />
        <SidebarLink
          icon={<BsFillPeopleFill />}
          name="Active Student"
          url="/admin/dash/active"
          active="active"
        />
        <SidebarLink
          icon={<FaChalkboardTeacher />}
          name="Add Instructors"
          url="/admin/dash/instructors"
          active="instructors"
        />
        <SidebarLink
          icon={<BsEnvelopeFill />}
          name="Messages"
          url="/admin/dash/messages"
          active="messages"
        />
        <SidebarLink
          icon={<BsEnvelopeOpenFill />}
          name="Request"
          url="/admin/dash/requests"
          active="requests"
        />
      </div>
      <button
        className="my-12 px-12 py-4 rounded-md bg-indigo-500 text-sm text-white mt-8 mx-auto"
        onClick={() => {
          adminSignOut();
          router.replace("/admin");
        }}
      >
        Sign Out
      </button>
    </div>
  );
};

export default SideBar;
