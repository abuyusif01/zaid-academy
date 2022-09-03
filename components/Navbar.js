import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import i18n from "i18next";
import { GrMenu, GrClose } from "react-icons/gr";

import Logo from "../utils/logo.png";
import { useTranslation } from "react-i18next";
import { AuthContext, UseAuth } from "../context/AuthContext";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const { t } = useTranslation();
  const { user } = UseAuth();
  const openNav = () => {
    setShow(true);
  };
  const closeNav = () => {
    setShow(false);
  };
  return (
    <div className="relative">
      {show ? (
        <div className="top-0 right-0 w-full bg-white h-screen">
          <div className="relative flex justify-between p-4 py-6 items-center">
            <Link href="/">
              <div className="w-24 h-10 cursor-pointer">
                <Image src={Logo} alt="logo" />
              </div>
            </Link>
            <div onClick={closeNav}>
              <GrClose className="text-3xl" />
            </div>
          </div>
          <div className="space-y-4 text-center p-4 text-gray-600 text-sm">
            <Link href="/about">
              <div
                className="cursor-pointer px-8 py-3 rounded-md hover:text-white hover:bg-indigo-500 transition duration-300 ease-in"
                onClick={closeNav}
              >
                About
              </div>
            </Link>
            <Link href="/pricing">
              <div
                className="cursor-pointer px-8 py-3 rounded-md hover:text-white hover:bg-indigo-500 transition duration-300 ease-in"
                onClick={closeNav}
              >
                Pricing
              </div>
            </Link>
            <Link href="/instructors">
              <div
                className="cursor-pointer px-8 py-3 rounded-md hover:text-white hover:bg-indigo-500 transition duration-300 ease-in"
                onClick={closeNav}
              >
                Instructors
              </div>
            </Link>
            <Link href="/contact">
              <div
                className="cursor-pointer px-8 py-3 rounded-md hover:text-white hover:bg-indigo-500 transition duration-300 ease-in"
                onClick={closeNav}
              >
                Contact
              </div>
            </Link>
          </div>
          <div className="flex space-x-4 text-sm justify-center">
            <p
              className="cursor-pointer"
              onClick={() => i18n.changeLanguage("en")}
            >
              En
            </p>
            <p
              className="cursor-pointer"
              onClick={() => i18n.changeLanguage("fr")}
            >
              Fr
            </p>
          </div>
          <div className="space-x-4 text-sm px-4 text-center my-4">
            <Link href="/signup">
              <div
                className="px-8 py-3 rounded-md bg-indigo-500 text-sm text-white cursor-pointer"
                onClick={closeNav}
              >
                {!user ? "Sign In" : "Dashboard"}
              </div>
            </Link>
          </div>
        </div>
      ) : (
        <div className="py-6 px-2 md:px-24 bg-gray-100 flex items-center justify-between">
          <div className="relative">
            <Link href="/">
              <div className="w-24 h-10 cursor-pointer">
                <Image src={Logo} alt="logo" />
              </div>
            </Link>
          </div>
          <div className="md:flex space-x-4 text-gray-600 text-sm hidden">
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
          <div className="md:flex space-x-4 text-sm hidden">
            <p
              className="cursor-pointer"
              onClick={() => {
                i18n.changeLanguage("en");
                // closeNav();
              }}
            >
              En
            </p>
            <p
              className="cursor-pointer"
              onClick={() => {
                i18n.changeLanguage("fr");
                // closeNav();
              }}
            >
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
          <div className="md:hidden" onClick={openNav}>
            <GrMenu className="text-3xl" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
