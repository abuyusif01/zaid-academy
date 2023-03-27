import Head from "next/head";
import React, { useEffect, useState } from "react";
import AddTeacher from "../../../components/AddTeacher";
import Modal from "../../../components/Modal";
import TableRow from "../../../components/TableRow";
import { useInstructor } from "../../../context/InstructorContext";

const Instructors = () => {
  const { instructors, getInstructors, deleteInstructor } = useInstructor();
  const [show, setShow] = useState(false);
  const openModal = () => {
    setShow(true);
  };
  const closeModal = () => {
    setShow(false);
  };
  useEffect(() => {
    getInstructors();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <Head>
        <title>Admin Instructors</title>
      </Head>
    </div>
  );
};

export default Instructors;
