import Head from "next/head";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import StudentDashboard from "../components/StudentDashboard";
import Modal from "../components/Modal";
import CourseRegistration from "../components/CourseRegistration";
import { UseAuth } from "../context/AuthContext";
import { useStudent } from "../context/StudentContext";

const Dashboard = () => {
  const { user } = UseAuth();
  const { pupil, checkStudent } = useStudent();
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    checkStudent(user.email);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log("Pupil is", pupil);

  return (
    <div className="px-8 md:px-24 my-10 space-y-8 min-h-screen">
      <Head>
        <title>Dashboard | {user.displayName}</title>
      </Head>
      {pupil[0] && <StudentDashboard student={pupil[0]} open={openModal} />}

      {/* <div>
        <Modal open={showModal} close={closeModal}>
          <CourseRegistration student={student} close={closeModal} />
        </Modal>
      </div> */}
    </div>
  );
};

export default Dashboard;
