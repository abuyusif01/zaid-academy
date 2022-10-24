import Head from "next/head";
import React, { useEffect, useState, useRef } from "react";
import EditStudent from "../../../components/EditStudent";
import Modal from "../../../components/Modal";
import SideBar from "../../../components/SideBar";
import StudentInfo from "../../../components/StudentInfo";
import TableRow from "../../../components/TableRow";
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

      <div className="flex w-full">
        <div className="w-2/12">
          <SideBar />
        </div>
        <div className="p-8 w-10/12 space-y-4">
          <div className="flex items-center justify-between w-full">
            <p className="text-2xl font-semibold">Students</p>
            <div>
              <button className="px-12 py-4 rounded-md bg-indigo-500 text-sm text-white mt-8 mx-auto">
                Add Students
              </button>
            </div>
          </div>
          <TableRow
            data={{
              name: "Name",
              instructor: "Instructor",
              email: "Email",
              course: "Course",
              payment: "Payment",
              action: "Action",
            }}
            header={true}
          />
          {students.map((stud) => (
            <div key={stud.uid}>
              <TableRow
                open={() => setStudent(stud)}
                onAction={() => {
                  setModalData(stud);
                  openModal();
                }}
                data={stud}
                header={false}
              />
            </div>
          ))}
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
