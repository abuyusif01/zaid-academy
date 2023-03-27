import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const SidebarLink = ({ url, active, icon, name }) => {
  const router = useRouter();
  const activeLink = (active) => router.pathname.split("/").includes(active);
  return (
    <Link href={url}>
      <div
        className={`flex items-center text-lg space-x-6 mb-4 px-4 py-4 ${
          activeLink(active)
            ? "bg-indigo-500 text-gray-50"
            : "bg-white text-gray-500"
        } rounded font-semibold  cursor-pointer`}
      >
        <span>{icon}</span>

        <p className="text-sm tracking-wide">{name}</p>
      </div>
    </Link>
  );
};

export default SidebarLink;
