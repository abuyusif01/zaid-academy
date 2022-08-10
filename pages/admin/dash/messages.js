import Head from "next/head";
import React, { useEffect } from "react";
import SideBar from "../../../components/SideBar";
import Message from "../../../components/Messages";
import { useCourse } from "../../../context/CourseContext";
import { doc } from "firebase/firestore";

const Messages = () => {
  const { getOldMessages, getNewMessages, oldMessages, newMessages } =
    useCourse();
  useEffect(() => {
    getOldMessages();
    getNewMessages();
  }, []);
  return (
    <div>
      <Head>
        <title>Admin Messages</title>
      </Head>
      <div className="flex">
        <SideBar />
        <div className="p-8 space-y-8">
          <p className="text-2xl text-gray-600 font-semibold">New Messages</p>
          <div className="flex flex-wrap items-start space-x-4">
            {newMessages.map((mesg) => (
              <Message key={mesg.id} message={mesg} />
            ))}
          </div>
          <p className="text-2xl text-gray-600 font-semibold">Old Messages</p>
          <table className="min-w-full divide-y divide-gray-200 border border-gray-200 rounded">
            <thead className="bg-indigo-500 text-white py-4">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-xs font-bold text-left uppercase "
                >
                  Sender
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-xs font-bold text-left uppercase "
                >
                  Email
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-xs font-bold text-left uppercase "
                >
                  Phone Number
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-xs font-bold text-right uppercase "
                >
                  Time
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-xs font-bold text-right uppercase "
                >
                  Date
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {oldMessages.map((fig) => (
                <tr key={fig.id}>
                  <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                    {fig.firstName + " " + fig.lastName}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                    {fig.email}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                    {fig.phone}
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                    N/A
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                    N/A
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Messages;
