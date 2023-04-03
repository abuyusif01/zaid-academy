/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Logo from "../../utils/logo.png";
import { UseAdminAuth } from "../../context/AdminAuthContext";
import { UseAuth } from "../../context/AuthContext";

const Admin = () => {
  const { signInWithEmail } = UseAuth();
  const router = useRouter();
  const [admin, setAdmin] = useState({
    email: "",
    password: "",
  });
  const onChange = (e) => {
    setAdmin({ ...admin, [e.target.name]: e.target.value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    await signInWithEmail(admin.email, admin.password);
    router.replace("admin/dash/students");
  };

  return (
    <div className="flex h-screen">
      <Head>
        <title>Admin Login</title>
      </Head>
      <div className="hidden md:w-6/12 xl:w-9/12 bg-gray-200 md:flex flex-col h-full p-16">
        <div className="relative">
          <Link href="/">
            <div className="w-24 h-10 cursor-pointer">
              <Image src={Logo} alt="logo" />
            </div>
          </Link>
        </div>
        <div className="text-center flex-1 flex flex-col space-y-3 justify-center items-center">
          <h1 className="text-3xl  font-bold tracking-wide mb-6">Welcome to</h1>
          <h4 className="text-2xl  font-bold tracking-wide mb-6">
            Zaid Academy
          </h4>
        </div>
      </div>
      <div className="w-full md:w-6/12 xl:w-3/12 px-8 flex flex-col">
        <div className="relative md:hidden py-8">
          <Link href="/">
            <div className="w-24 h-10 cursor-pointer">
              <Image src={Logo} alt="logo" />
            </div>
          </Link>
        </div>
        <form
          className="flex-1 justify-center space-y-6 flex flex-col"
          autoComplete="off"
          onSubmit={onSubmit}
        >
          <div>
            <h1 className="text-gray-700 font-semibold text-2xl">
              Login to Zaid
            </h1>
          </div>
          <div className="space-y-2">
            <label className="text-gray-500 text-sm">Email</label>
            <div className="border border-gray-300 p-2 rounded-md">
              <input
                placeholder="Email"
                type="email"
                className="text-baseline py-3 px-2 text-gray-600 focus:outline-0 block w-full autofill:bg-white"
                name="email"
                autoComplete="false"
                autoSave="off"
                value={admin.email}
                onChange={onChange}
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-gray-500 text-sm">Password</label>
            <div className="border border-gray-300 p-2 rounded-md">
              <input
                placeholder="Password"
                autoSave="off"
                type="password"
                className="text-base py-3 px-2 text-gray-700 focus:outline-0 block w-full autofill:bg-white"
                name="password"
                autoComplete="false"
                value={admin.password}
                onChange={onChange}
              />
            </div>
          </div>
          <button
            className="block px-12 py-3 rounded-md bg-indigo-500 text-lg text-white mt-8"
            onClick={onSubmit}
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Admin;
