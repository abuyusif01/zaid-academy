/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import React from "react";

const signin = () => {
  return (
    <div className="flex justify-center items-center h-[700px]">
      <div className="w-11/12 sm:w-10/12 md:w-8/12 lg:w-1/3 py-12 px-8 border border-gray-200 shadow rounded-lg">
        <h1 className="text-3xl text-center font-bold tracking-wide mb-6">
          Zaid Academy
        </h1>
        <h4 className="text-2xl text-center font-bold tracking-wide mb-6">
          Login to Get Access
        </h4>
        <form className="space-y-6 flex flex-col">
          <div className="space-y-2">
            <label className="text-gray-500 text-sm">Email</label>
            <div className="border border-gray-300 p-2 rounded-md">
              <input
                placeholder="Email"
                type="email"
                className="text-sm text-gray-400 focus:outline-0 focus:bg-white focus:text-sm block w-full"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-gray-500 text-sm">Password</label>
            <div className="border border-gray-300 p-2 rounded-md">
              <input
                placeholder="Password"
                type="password"
                className="text-sm text-gray-400 focus:outline-0 focus:bg-white focus:text-sm block w-full"
              />
            </div>
          </div>
          <button className="block px-12 py-3 rounded-md bg-indigo-500 text-sm text-white mt-8">
            Sign In
          </button>
          <p className="text-center text-sm text-gray-500 my-4">
            Don't have an account?{" "}
            <Link href="/signup">
              <span className="text-indigo-500 cursor-pointer">
                Register here
              </span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default signin;
