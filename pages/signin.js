/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import Head from "next/head";

const signin = () => {
  return (
    <div className="flex justify-center items-center h-[700px]">
      <Head>
        <title>Zaid | Signin</title>
      </Head>
      <div className="w-11/12 sm:w-10/12 md:w-8/12 lg:w-1/3 py-12 px-8 border border-gray-200 shadow rounded-lg">
        <h1 className="text-3xl text-center font-bold tracking-wide mb-3">
          Zaid Academy
        </h1>
        <h4 className="text-xl text-gray-500 text-center font-bold tracking-wide mb-6">
          Log in to gain access
        </h4>
        <form className="space-y-6 flex flex-col">
          <button className="space-x-5 flex justify-center items-center w-full py-4 rounded-lg bg-white border border-gray-200 whitespace-nowrap hover:bg-gray-50 transition duration-500 ease-in focus:outline-none focus:ring-2 focus:ring-yellow-400">
            <FcGoogle className="text-xl" />
            <span>Sign in with Google</span>
          </button>
          <button className="space-x-5 flex justify-center items-center w-full py-4 rounded-lg bg-blue-500 text-white border-gray-400 whitespace-nowrap hover:bg-blue-400 transition duration-500 ease-in">
            <BsFacebook className="text-white text-xl" />
            <span>Sign in with Facebook</span>
          </button>
          <p className="text-center text-sm text-gray-500 my-4">
            Already have an account?{" "}
            <Link href="/signin">
              <span className="text-indigo-500 cursor-pointer">log in</span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default signin;
