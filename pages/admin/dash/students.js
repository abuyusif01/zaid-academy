import Head from "next/head";
import React, { useEffect, useState, useRef } from "react";
import EditStudent from "../../../components/EditStudent";
import Modal from "../../../components/Modal";
import SideBar from "../../../components/SideBar";
import StudentInfo from "../../../components/StudentInfo";
import { useStudent } from "../../../context/StudentContext";

const Students = () => {
  const { students, getStudents } = useStudent();
  const [student, setStudent] = useState({});
  const studentRef = useRef({});
  const [show, setShow] = useState(false);
  const openModal = () => {
    setShow(true);
  };
  const closeModal = () => {
    setShow(false);
  };
  useEffect(() => {
    getStudents();
  }, []);
  const setModalData = (data) => {
    studentRef.current = data;
  };
  return (
    <div className="relative">
      <Head>
        <title>Admin Students</title>
      </Head>
      <div className="relative">
        <Modal open={show} close={closeModal}>
          <div className="p-4">
            <EditStudent student={studentRef.current} close={closeModal} />
          </div>
        </Modal>
      </div>
      <div className="flex">
        <SideBar />
        <div className="p-8">
          <table className="min-w-full divide-y divide-gray-200 border border-gray-200 rounded">
            <thead className="bg-indigo-500 text-white py-4">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-xs font-bold text-left uppercase "
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-xs font-bold text-right uppercase "
                >
                  Instructor
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
                  Course
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-xs font-bold text-right uppercase "
                >
                  Payment
                </th>

                <th
                  scope="col"
                  className="px-6 py-3 text-xs font-bold text-right uppercase "
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {students.map((fig) => (
                <tr key={fig.uid}>
                  <td
                    className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap cursor-pointer "
                    onClick={() => setStudent(fig)}
                  >
                    <p className="text-indigo-500">{fig.displayName}</p>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                    {fig.lecturer}
                  </td>
                  <td
                    className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap"
                    onClick={() => setStudent(fig)}
                  >
                    {fig.email}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                    {fig.course ? fig.course : "Not Registered"}
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                    {fig.payment !== "paid" ? "unpaid" : "paid"}
                  </td>

                  <td
                    className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap cursor-pointer text-indigo-500"
                    onClick={() => {
                      setModalData(fig);
                      openModal();
                    }}
                  >
                    Action
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div>
            {Object.keys(student).length > 0 && (
              <StudentInfo student={student} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Students;
