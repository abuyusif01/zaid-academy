import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useStudent } from "../context/StudentContext";

const EditStudent = ({ student, close }) => {
  const { updateStudent } = useStudent();
  const { t } = useTranslation();
  const [program, setProgram] = useState({
    course: student.course || "",
    lecturer: student.lecturer || "",
    intensive: student.intensive || "",
    payment: student.payment || "",
    active: true,
    expiryDate: Date.now(),
  });
  const onChange = (e) => {
    setProgram({ ...program, active: true, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    updateStudent(student.uid, program);
    close();
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="py-6 border-b border-coolGray-100">
          <div className="w-full md:w-9/12">
            <div className="flex flex-wrap -m-3">
              <div className="w-full md:w-1/3 p-3">
                <p className="text-sm text-coolGray-800 font-semibold">
                  Program
                </p>
              </div>
              <div className="w-full md:flex-1 p-3">
                <select
                  className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-indigo-500 border border-coolGray-200 rounded-lg shadow-input"
                  type="text"
                  placeholder="course"
                  name="course"
                  value={program.course}
                  onChange={onChange}
                >
                  <option value="">Choose course</option>
                  <option value="beginners">{t("Beginners")}</option>
                  <option value="hifz">Hifz</option>
                  <option value="muraja">Muraja ({t("revision")})</option>
                  <option value="tilawah">Tilawah</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="py-6 border-b border-coolGray-100">
          <div className="w-full md:w-9/12">
            <div className="flex flex-wrap -m-3">
              <div className="w-full md:w-1/3 p-3">
                <p className="text-sm text-coolGray-800 font-semibold">
                  Intensive Level
                </p>
              </div>
              <div className="w-full md:flex-1 p-3">
                <select
                  className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-indigo-500 border border-coolGray-200 rounded-lg shadow-input"
                  type="text"
                  placeholder="intensive level"
                  value={program.intensive}
                  onChange={onChange}
                  name="intensive"
                >
                  <option value="">Choose Intensity level</option>
                  <option value="intensive">Intensive</option>
                  <option value="basic">Basic</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="py-6 border-b border-coolGray-100">
          <div className="w-full md:w-9/12">
            <div className="flex flex-wrap -m-3">
              <div className="w-full md:w-1/3 p-3">
                <p className="text-sm text-coolGray-800 font-semibold">
                  Instructor
                </p>
              </div>
              <div className="w-full md:flex-1 p-3">
                <select
                  className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-indigo-500 border border-coolGray-200 rounded-lg shadow-input"
                  type="text"
                  placeholder="instructor"
                  name="lecturer"
                  value={program.lecturer}
                  onChange={onChange}
                >
                  <option value="">Choose an Instructor</option>
                  <option value="Ousmane Yahya Diallo">
                    Ousmane Yahya Diallo{" "}
                  </option>
                  <option value="Mouhamed El Moudjtaba Diallo">
                    Mouhammed El Moudjtaba Diallo
                  </option>
                  <option value="Mamadou Bailo Diallo">
                    Mamadou Bailo Diallo
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="py-6 border-b border-coolGray-100">
          <div className="w-full md:w-9/12">
            <div className="flex flex-wrap -m-3">
              <div className="w-full md:w-1/3 p-3">
                <p className="text-sm text-coolGray-800 font-semibold">
                  Payment
                </p>
              </div>
              <div className="w-full md:flex-1 p-3">
                <select
                  className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-indigo-500 border border-coolGray-200 rounded-lg shadow-input"
                  placeholder="payment"
                  value={program.payment}
                  onChange={onChange}
                  name="payment"
                >
                  <option value="">-------------</option>
                  <option value="unpaid">unpaid</option>
                  <option value="paid">paid</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="py-6 border-b border-coolGray-100">
          <div className="w-full md:w-9/12">
            <div className="flex flex-wrap -m-3">
              <div className="w-full md:w-1/3 p-3">
                <p className="text-sm text-coolGray-800 font-semibold">
                  Expiry Date
                </p>
              </div>
              <div className="w-full md:flex-1 p-3">
                <input
                  className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-indigo-500 border border-coolGray-200 rounded-lg shadow-input"
                  type="date"
                  placeholder="instructor"
                  name="expiryDate"
                  value={program.expiryDate}
                  onChange={onChange}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="space-x-4">
          <button
            className="px-12 py-4 rounded-md bg-indigo-500 text-sm text-white mt-8 mx-auto"
            onClick={onSubmit}
          >
            Update
          </button>
          <button
            className="px-12 py-4 rounded-md border border-gray-500 text-sm text-gray-700 mt-8 mx-auto"
            onClick={close}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditStudent;
