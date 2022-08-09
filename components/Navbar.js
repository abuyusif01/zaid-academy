import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import i18n from "i18next";

import Logo from "../utils/logo.png";
import { useTranslation } from "react-i18next";
import { AuthContext, UseAuth } from "../context/AuthContext";

const Navbar = () => {
  const { t } = useTranslation();
  const { user } = UseAuth();
  return (
    <div className="py-6 px-24 bg-gray-100 flex items-center justify-between">
      <div className="relative">
        <Link href="/">
          <div className="w-24 h-10 cursor-pointer">
            <Image src={Logo} alt="logo" />
          </div>
        </Link>
      </div>
      <div className="flex space-x-4 text-gray-600 text-sm">
        <Link href="/about">
          <div className="cursor-pointer px-8 py-3 rounded-md hover:text-white hover:bg-indigo-500 transition duration-300 ease-in">
            About
          </div>
        </Link>
        <Link href="/pricing">
          <div className="cursor-pointer px-8 py-3 rounded-md hover:text-white hover:bg-indigo-500 transition duration-300 ease-in">
            Pricing
          </div>
        </Link>
        <Link href="/instructors">
          <div className="cursor-pointer px-8 py-3 rounded-md hover:text-white hover:bg-indigo-500 transition duration-300 ease-in">
            Instructors
          </div>
        </Link>
        <Link href="/contact">
          <div className="cursor-pointer px-8 py-3 rounded-md hover:text-white hover:bg-indigo-500 transition duration-300 ease-in">
            Contact
          </div>
        </Link>
      </div>
      <div className="flex space-x-4 text-sm">
        <p className="cursor-pointer" onClick={() => i18n.changeLanguage("en")}>
          En
        </p>
        <p className="cursor-pointer" onClick={() => i18n.changeLanguage("fr")}>
          Fr
        </p>
      </div>
      <div className="flex space-x-4 text-sm">
        <Link href="/signup">
          <div className="px-8 py-3 rounded-md bg-indigo-500 text-sm text-white cursor-pointer">
            {!user ? "Sign In" : "Dashboard"}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
