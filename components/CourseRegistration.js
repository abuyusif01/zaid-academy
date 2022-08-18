import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useStudent } from "../context/StudentContext";

const CourseRegistration = ({ student }) => {
  const { selfRegister } = useStudent();
  const { t } = useTranslation();
  const [program, setProgram] = useState({
    course: "",
    intensive: "",
  });
  const onChange = (e) => {
    setProgram({ ...program, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    selfRegister({ ...student, ...program });
  };
  return (
    <div className="space-y-4 border border-gray-300 rounded p-8">
      <div className="text-center">
        <p className="text-gray-700 text-lg">
          Contact this number:{" "}
          <span className="text-semibold">+60-11-1605-0164</span> to enroll and
          / or for payment
        </p>
        <p className="text-baseline text-gray-500"> or enroll yourself below</p>
      </div>
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
                  <option>Intensive</option>
                  <option>Basic</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <button
          className="px-12 py-4 rounded-md bg-indigo-500 text-sm text-white mt-8 mx-auto"
          onClick={onSubmit}
        >
          {t("apply")}
        </button>
      </form>
    </div>
  );
};

export default CourseRegistration;
