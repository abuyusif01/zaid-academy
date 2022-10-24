import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useStudent } from "../context/StudentContext";

const CourseRegistration = ({ student }) => {
  const router = useRouter();
  const { selfRegister, checkStudent, pupil } = useStudent();
  const { t } = useTranslation();
  const [program, setProgram] = useState({
    course: "",
    intensive: "",
    phone: "",
    whatsapp: "",
    nationality: "",
    language: "",
    gender: "",
    active: false,
    registered: true,
  });

  const onChange = (e) => {
    setProgram({ ...program, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    selfRegister({ ...student, ...program });
    router.push("/dashboard");
    close();
  };

  useEffect(() => {
    checkStudent(student.email);
  }, []);
  console.log("Pupil data is: ", pupil);
  if (pupil === undefined || Object.keys(pupil).length === 0) {
    console.log("not yet registered");
  } else {
    console.log("Properties", Object.keys(pupil));
    router.push("/dashboard");
  }
  return (
    <div className="space-y-4 border border-gray-300 rounded p-8">
      <div className="text-center">
        <p>
          {t("welcome")}, {student.displayName}
        </p>
        <p className="text-gray-700 text-lg">
          {t("toRegister")}{" "}
          <span className="font-semibold">{t("whatsapp")}</span>
        </p>
        <p className="text-gray-700">{t("fillForm")}</p>
      </div>
      <form onSubmit={onSubmit}>
        <div className="py-6 border-b border-coolGray-100">
          <div className="w-full md:w-9/12">
            <div className="flex flex-wrap -m-3">
              <div className="w-full md:w-1/3 p-3">
                <p className="text-sm text-coolGray-800 font-semibold">
                  {t("phoneNumber")}
                </p>
              </div>
              <div className="w-full md:flex-1 p-3">
                <input
                  className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-indigo-500 border border-coolGray-200 rounded-lg shadow-input"
                  type="text"
                  placeholder="Enter your Phone number"
                  name="phone"
                  value={program.phone}
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
                  {t("whatsappNumber")}
                </p>
              </div>
              <div className="w-full md:flex-1 p-3">
                <input
                  className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-indigo-500 border border-coolGray-200 rounded-lg shadow-input"
                  type="text"
                  placeholder="Enter your Whatsapp number"
                  name="whatsapp"
                  value={program.whatsapp}
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
                  {t("gender")}
                </p>
              </div>
              <div className="w-full md:flex-1 p-3">
                <select
                  className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-indigo-500 border border-coolGray-200 rounded-lg shadow-input"
                  value={program.gender}
                  onChange={onChange}
                  name="gender"
                >
                  <option value="">Choose your gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
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
                  {t("nationality")}
                </p>
              </div>
              <div className="w-full md:flex-1 p-3">
                <input
                  className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-indigo-500 border border-coolGray-200 rounded-lg shadow-input"
                  type="text"
                  placeholder="Enter your Nationality"
                  name="nationality"
                  value={program.nationality}
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
                  {t("program")}
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
                  <option value="">Choose a Program</option>
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
                  {t("intensiveLevel")}
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
                  <option value="">Choose intensive level</option>
                  <option value="intensive">Intensive</option>
                  <option value="basic">Basic</option>
                </select>
                {program.intensive === "intensive" && (
                  <div>
                    <p>This is for intensive progam,</p>
                    <p> it has 5 classes per week</p>
                    <p>Price: $180</p>
                  </div>
                )}
                {program.intensive === "basic" && (
                  <div>
                    <p>This is for basic progam,</p>
                    <p> it has 3 classes per week</p>
                    <p>Price: $110</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="py-6 border-b border-coolGray-100">
          <div className="w-full md:w-9/12">
            <div className="flex flex-wrap -m-3">
              <div className="w-full md:w-1/3 p-3">
                <p className="text-sm text-coolGray-800 font-semibold">
                  {t("language")}
                </p>
              </div>
              <div className="w-full md:flex-1 p-3">
                <select
                  className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-indigo-500 border border-coolGray-200 rounded-lg shadow-input"
                  type="text"
                  placeholder="language"
                  name="language"
                  value={program.language}
                  onChange={onChange}
                >
                  <option value="">Choose a Language</option>
                  <option value="Arabic">Arabic</option>
                  <option value="Fulani">Fulani</option>
                  <option value="English">English</option>
                  <option value="French">French</option>
                  <option value="Wollof">Wollof</option>
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
