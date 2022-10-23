import Link from "next/link";
import React from "react";
import { FaChalkboardTeacher } from "react-icons/fa";
import {
  BsEnvelopeFill,
  BsPersonCheck,
  BsFillPeopleFill,
  BsEnvelopeOpenFill,
} from "react-icons/bs";
import SidebarLink from "./SidebarLink";

const SideBar = () => {
  return (
    <div className="min-h-[100vh] border-r border-gray-200 p-4 py-8 border-dashed space-y-3">
      <div className="cursor-pointer bg-gray-200 rounded-lg text-center space-y-1 p-2">
        <p>Zaid Dashboard</p>
        <p className="text-sm">Admin</p>
      </div>
      <div className="space-y-4">
        <SidebarLink
          icon={<BsFillPeopleFill />}
          name="Classes"
          url="/admin/dash/classes"
          active
        />
        <SidebarLink
          icon={<BsPersonCheck />}
          name="Students"
          url="/admin/dash/students"
        />
        <SidebarLink
          icon={<FaChalkboardTeacher />}
          name="Instructors"
          url="/admin/dash/instructors"
        />
        <SidebarLink
          icon={<BsEnvelopeFill />}
          name="Messages"
          url="/admin/dash/messages"
        />
        <SidebarLink
          icon={<BsEnvelopeOpenFill />}
          name="Request"
          url="/admin/dash/requests"
        />
      </div>
    </div>
  );
};

export default SideBar;
