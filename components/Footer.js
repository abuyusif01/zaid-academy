import Image from "next/image";
import React from "react";
import Link from "next/link";
import Logo from "../utils/logo.png";
import {
  BsEnvelopeFill,
  BsFacebook,
  BsInstagram,
  BsTelephone,
} from "react-icons/bs";

const Footer = () => {
  return (
    <div className="w-full px-16 py-8 bg-gray-100 flex items-center justify-between">
      <div className="w-48 h-24">
        <Image src={Logo} alt="logo" />
      </div>
      <div className="flex space-x-1 text-gray-600 text-sm">
        <Link href="/about">
          <div className="cursor-pointer px-4 py-3 rounded-md hover:text-white hover:bg-indigo-500 transition duration-300 ease-in">
            About
          </div>
        </Link>
        <Link href="/pricing">
          <div className="cursor-pointer px-4 py-3 rounded-md hover:text-white hover:bg-indigo-500 transition duration-300 ease-in">
            Pricing
          </div>
        </Link>
        <Link href="/instructors">
          <div className="cursor-pointer px-4 py-3 rounded-md hover:text-white hover:bg-indigo-500 transition duration-300 ease-in">
            Instructors
          </div>
        </Link>
        <Link href="/contact">
          <div className="cursor-pointer px-4 py-3 rounded-md hover:text-white hover:bg-indigo-500 transition duration-300 ease-in">
            Contact
          </div>
        </Link>
      </div>
      <div className="flex space-x-4">
        <div className="space-y-2 flex flex-col justify-center items-center text-gray-600">
          <BsTelephone className="text-2xl" />
          <p className="text-sm">+60-11-1605-0164</p>
        </div>
        <div className="space-y-2 flex flex-col justify-center items-center text-gray-600">
          <BsEnvelopeFill className="text-2xl" />
          <a
            href="mailto:zaid.academy@yahoo.com"
            target="blank"
            className="text-sm"
          >
            zaid.academy@yahoo.com
          </a>
        </div>
        <div className="space-y-2 flex flex-col justify-center items-center  text-gray-600">
          <BsInstagram className="text-2xl" />
          <a
            href="https://www.instagram.com/zaidacademy/"
            target="blank"
            className="text-sm"
          >
            Instagram
          </a>
        </div>
        <div className="space-y-2 flex flex-col justify-center items-center text-gray-600">
          <BsFacebook className="text-2xl" />
          <a
            href="https://www.facebook.com/Zaid-academy-114838844552579"
            target="blank"
            className="text-sm"
          >
            Facebook
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
