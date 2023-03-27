import Head from "next/head";
import React, { useEffect, useState, useRef } from "react";
import EditStudent from "../../../components/EditStudent";
import Modal from "../../../components/Modal";
import StudentInfo from "../../../components/StudentInfo";
import StudentReg from "../../../components/StudentReg";
import TableRow from "../../../components/TableRow";
import { useStudent } from "../../../context/StudentContext";

const Students = () => {
  const { students, getStudents } = useStudent();
  const [student, setStudent] = useState({});
  const [studentShow, setStudentShow] = useState(false);
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
    </div>
  );
};

export default Students;
