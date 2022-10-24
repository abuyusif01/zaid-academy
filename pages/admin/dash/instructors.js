import Head from "next/head";
import React, { useState } from "react";
import AddTeacher from "../../../components/AddTeacher";
import Modal from "../../../components/Modal";
import SideBar from "../../../components/SideBar";

const Instructors = () => {
  const [show, setShow] = useState(false);
  const openModal = () => {
    setShow(true);
  };
  const closeModal = () => {
    setShow(false);
  };
  return (
    <div>
      <Head>
        <title>Admin Instructors</title>
      </Head>
      <div className="relative">
        <Modal open={show} close={closeModal}>
          <div className="p-4">
            <AddTeacher close={closeModal} />
          </div>
        </Modal>
      </div>
      <div className="flex w-full">
        <div className="w-2/12">
          <SideBar />
        </div>
        <div className="w-10/12 p-8">
          <div className="flex items-center justify-between w-full">
            <p className="text-2xl font-semibold">Instructors</p>
            <div>
              <button
                className="px-12 py-4 rounded-md bg-indigo-500 text-sm text-white mt-8 mx-auto"
                onClick={openModal}
              >
                Add Instructor
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructors;
