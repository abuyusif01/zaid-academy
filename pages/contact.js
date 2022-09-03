import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";
import { BsFacebook, BsInstagram, BsEnvelope } from "react-icons/bs";
import { useCourse } from "../context/CourseContext";

const Contact = () => {
  const { sendMessage } = useCourse();
  const [message, setMessage] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    whatsapp: "",
    content: "",
    completed: false,
  });
  const onChange = (e) => {
    setMessage({ ...message, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    sendMessage(message);
    setMessage({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      content: "",
      completed: false,
    });
  };
  return (
    <div className="md:px-48 md:my-20">
      <Head>
        <title>Zaid | Contact</title>
      </Head>
      <h4 className="uppercase p-4 pb-10 text-lg md:text-2xl text-center font-bold">
        You can Reach out to us via the following
      </h4>

      <div className="flex flex-col md:flex-row items-center">
        <div className="p-4 md:w-2/3 w-full">
          <form onSubmit={onSubmit}>
            <div className="py-6 border-b border-coolGray-100">
              <div className="w-full md:w-9/12">
                <div className="flex flex-wrap -m-3">
                  <div className="w-full md:w-1/3 p-3">
                    <p className="text-sm text-coolGray-800 font-semibold">
                      Name
                    </p>
                  </div>
                  <div className="w-full md:w-1/3 p-3">
                    <input
                      className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-indigo-500 border border-coolGray-200 rounded-lg shadow-input"
                      type="text"
                      placeholder="First Name"
                      name="firstName"
                      value={message.firstName}
                      onChange={onChange}
                    />
                  </div>
                  <div className="w-full md:w-1/3 p-3">
                    <input
                      className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-indigo-500 border border-coolGray-200 rounded-lg shadow-input"
                      type="text"
                      placeholder="Last Name"
                      name="lastName"
                      value={message.lastName}
                      onChange={onChange}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="py-6 border-b border-coolGray-100">
              <div className="w-full md:w-9/12">
                <div className="flex flex-wrap -m-3">
                  <div className="w-full md:w-1/3 p-3">
                    <p className="text-sm text-coolGray-800 font-semibold">
                      Email address
                    </p>
                  </div>
                  <div className="w-full md:flex-1 p-3">
                    <input
                      className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-indigo-500 border border-coolGray-200 rounded-lg shadow-input"
                      type="text"
                      placeholder="Enter your email"
                      name="email"
                      value={message.email}
                      onChange={onChange}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="py-6 border-b border-coolGray-100">
              <div className="w-full md:w-9/12">
                <div className="flex flex-wrap -m-3">
                  <div className="w-full md:w-1/3 p-3">
                    <p className="text-sm text-coolGray-800 font-semibold">
                      Phone number
                    </p>
                  </div>
                  <div className="w-full md:flex-1 p-3">
                    <input
                      className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-indigo-500 border border-coolGray-200 rounded-lg shadow-input"
                      type="text"
                      placeholder="Enter your phone number"
                      name="phone"
                      value={message.phone}
                      onChange={onChange}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="py-6 border-b border-coolGray-100">
              <div className="w-full md:w-9/12">
                <div className="flex flex-wrap -m-3">
                  <div className="w-full md:w-1/3 p-3">
                    <p className="text-sm text-coolGray-800 font-semibold">
                      Whatsapp number
                    </p>
                  </div>
                  <div className="w-full md:flex-1 p-3">
                    <input
                      className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-indigo-500 border border-coolGray-200 rounded-lg shadow-input"
                      type="text"
                      placeholder="Enter your Whatsapp number"
                      name="phone"
                      value={message.whatsapp}
                      onChange={onChange}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-6">
              <div className="w-full md:w-9/12">
                <div className="flex flex-wrap -m-3">
                  <div className="w-full md:w-1/3 p-3">
                    <p className="text-sm text-coolGray-800 font-semibold">
                      Message
                    </p>
                    <p className="text-xs text-coolGray-500 font-medium">
                      Type your message here
                    </p>
                  </div>
                  <div className="w-full md:flex-1 p-3">
                    <textarea
                      className="block w-full h-64 p-6 text-base text-coolGray-900 font-normal outline-none focus:border-indigo-500 border border-coolGray-200 rounded-lg shadow-input resize-none"
                      placeholder="Type your message"
                      name="content"
                      value={message.content}
                      onChange={onChange}
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative mx-auto">
              <Link href="/">
                <button
                  className="px-12 py-4 rounded-md bg-indigo-500 text-sm text-white mt-8 mx-auto"
                  onClick={onSubmit}
                >
                  Submit
                </button>
              </Link>
            </div>
          </form>
        </div>
        <div className="w-full md:w-1/3  p-4">
          <div className="bg-white border border-gray-100 shadow rounded-md p-12 space-y-8">
            <div className="space-y-1 text-sm md:text-base">
              <h4 className="text-lg md:text-2xl font-bold leading-loose mb-2">
                Malaysia Office
              </h4>
              <p>Jalan Gombak</p>
              <p>Gombak, Selangor</p>
              <p>Malaysia</p>
            </div>
            <div className="text-sm md:text-base">
              <h4 className="text-lg leading-loose">Email us directly</h4>
              <p>
                <a
                  href="mailto:zaidacademy22@gmail.com"
                  target="blank"
                  className="text-gray-500 hover:text-indigo-500"
                >
                  zaidacademy22@gmail.com
                </a>
              </p>
            </div>
            <div className="">
              <h4 className="text-lg leading-loose">Phone</h4>
              <p>
                <a
                  href="tel:+60-11-1605-0164"
                  className="text-gray-500 hover:text-indigo-500"
                >
                  +60-11-1605-0164
                </a>
              </p>
            </div>
            <div className="contact__social pl-30">
              <h4 className="text-lg mb-4">Follow Us</h4>
              <ul className="text-2xl flex space-x-8">
                <li>
                  <a
                    href="https://www.facebook.com/Zaid-academy-114838844552579"
                    target="blank"
                    className="cursor-pointer"
                  >
                    <BsFacebook />
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:zaidacademy22@gmail.com"
                    target="blank"
                    className="cursor-pointer"
                  >
                    <BsEnvelope />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/zaidacademy/"
                    target="blank"
                    className="cursor-pointer"
                  >
                    <BsInstagram />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
