/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import React, { useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { useRouter } from "next/router";
import Head from "next/head";
import { UseAuth } from "../context/AuthContext";

const Signup = () => {
  const { user, signInWithGoogle } = UseAuth();
  const router = useRouter();
  // useEffect(() => {
  //   if (user) {
  //     router.push("/register");
  //   }
  // }, [user, router]);

  return (
    <div className="flex justify-center items-center h-[700px]">
      <Head>
        <title>Zaid | Sign up</title>
      </Head>
      <div className="w-11/12 sm:w-10/12 md:w-8/12 lg:w-1/3 py-12 px-8 border border-gray-200 shadow rounded-lg">
        <h1 className="text-3xl text-center font-bold tracking-wide mb-3">
          Zaid Academy
        </h1>
        <h4 className="text-xl text-gray-500 text-center font-bold tracking-wide mb-6">
          Register to get start
        </h4>
        <div className="space-y-6 flex flex-col">
          <button
            onClick={() => {
              signInWithGoogle();
              router.push("/register");
            }}
            className="space-x-5 flex justify-center items-center w-full py-4 rounded-lg bg-white border border-gray-200 whitespace-nowrap hover:bg-gray-50 transition duration-500 ease-in focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            <FcGoogle className="text-xl" />
            <span>Sign in with Google</span>
          </button>
          {/* <button
            disabled
            className="space-x-5 flex justify-center items-center w-full py-4 rounded-lg bg-blue-500 text-white border-gray-400 whitespace-nowrap hover:bg-blue-400 transition duration-500 ease-in"
          >
            <BsFacebook className="text-white text-xl" />
            <span>Sign in with Facebook</span>
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Signup;
