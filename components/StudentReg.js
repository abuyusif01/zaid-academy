import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useTranslation } from "react-i18next";
import { useStudent } from "../context/StudentContext";

const StudentReg = ({ program, close }) => {
  const { selfRegister } = useStudent();
  const { t } = useTranslation();
  const [plan, setPlan] = useState("");
  const [intensive, setIntensive] = useState("");
  const [course, setCourse] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    whatsapp: "",
    gender: "",
    nationality: "",
    language: "",
    plan: "",
    planType: "",
    program: program.slug,
    registered: true,
    active: false,
  });
  const onChange = (e) => {
    setCourse({ ...course, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    selfRegister({
      ...course,
      plan,
      intensive,
      displayName: course.firstName + " " + course.lastName,
      uid: uuidv4(),
    });
    setCourse({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      whatsapp: "",
      gender: "",
      nationality: "",
      language: "",
      plan: "",
      planType: "",
      program: program.slug,
      active: false,
      registered: true,
    });
    {
      close ? close() : router.push("/signup");
    }
  };
  return (
    <form onSubmit={onSubmit}>
      <div className="py-6 border-b border-coolGray-100">
        <div className="w-full md:w-9/12">
          <div className="flex flex-wrap -m-3">
            <div className="w-full md:w-1/3 p-3">
              <p className="text-sm text-coolGray-800 font-semibold">Name</p>
            </div>
            <div className="w-full md:w-1/3 p-3">
              <input
                className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-indigo-500 border border-coolGray-200 rounded-lg shadow-input"
                type="text"
                name="firstName"
                placeholder="First Name"
                value={course.firstName}
                onChange={onChange}
              />
            </div>
            <div className="w-full md:w-1/3 p-3">
              <input
                className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-indigo-500 border border-coolGray-200 rounded-lg shadow-input"
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={course.lastName}
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
                Email address
              </p>
            </div>
            <div className="w-full md:flex-1 p-3">
              <input
                className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-indigo-500 border border-coolGray-200 rounded-lg shadow-input"
                type="text"
                placeholder="Enter your email"
                name="email"
                value={course.email}
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
                Phone Number
              </p>
            </div>
            <div className="w-full md:flex-1 p-3">
              <input
                className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-indigo-500 border border-coolGray-200 rounded-lg shadow-input"
                type="text"
                placeholder="Enter your phone number"
                name="phone"
                value={course.phone}
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
                Whatsapp Number
              </p>
            </div>
            <div className="w-full md:flex-1 p-3">
              <input
                className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-indigo-500 border border-coolGray-200 rounded-lg shadow-input"
                type="text"
                placeholder="Enter your phone number"
                name="whatsapp"
                value={course.whatsapp}
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
              <p className="text-sm text-coolGray-800 font-semibold">Gender</p>
            </div>
            <div className="w-full md:flex-1 p-3">
              <select
                className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-indigo-500 border border-coolGray-200 rounded-lg shadow-input"
                type="text"
                placeholder="Gender"
                value={course.gender}
                onChange={onChange}
                name="gender"
              >
                <option value="">Choose Gender</option>
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
                Nationality
              </p>
            </div>
            <div className="w-full md:flex-1 p-3">
              <input
                className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-indigo-500 border border-coolGray-200 rounded-lg shadow-input"
                type="text"
                placeholder="Enter your Nationality"
                name="nationality"
                value={course.nationality}
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
                Language
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
      <div className="py-6 border-b border-coolGray-100">
        <div className="w-full md:w-9/12">
          <div className="flex flex-wrap -m-3">
            <div className="w-full md:w-1/3 p-3">
              <p className="text-sm text-coolGray-800 font-semibold">Program</p>
            </div>
            <div className="w-full md:flex-1 p-3">
              <select
                className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-indigo-500 border border-coolGray-200 rounded-lg shadow-input"
                type="text"
                placeholder="program"
                name="program"
                value={program.slug}
                onChange={onChange}
              >
                <option value="">Choose a Program</option>
                <option value="beginners">{t("Beginners")}</option>
                <option value="hifz">Hifz</option>
                <option value="muraja">Muraja {t("revision")}</option>
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
              <p className="text-sm text-coolGray-800 font-semibold">Plan</p>
            </div>
            <div className="w-full md:flex-1 p-3">
              <select
                className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-indigo-500 border border-coolGray-200 rounded-lg shadow-input"
                type="text"
                placeholder="intensive level"
                value={plan}
                onChange={(e) => setPlan(e.target.value)}
                name="plan"
              >
                <option value="">Choose Plan</option>
                <option value="family">Family</option>
                <option value="special">Special</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      {plan === "family" && (
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
                  value={intensive}
                  onChange={(e) => setIntensive(e.target.value)}
                  name="intensive"
                >
                  <option value="">Choose Intensive Level</option>
                  <option value="intensive">Intensive</option>
                  <option value="basic">Basic</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      )}

      {plan === "special" && (
        <>
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
                    value={intensive}
                    onChange={(e) => setIntensive(e.target.value)}
                    name="intensive"
                  >
                    <option value="">Choose Intensive Level</option>
                    <option value="gold">Gold</option>
                    <option value="silver">Silver</option>
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
                    Special Option
                  </p>
                </div>
                <div className="w-full md:flex-1 p-3">
                  <select
                    className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-indigo-500 border border-coolGray-200 rounded-lg shadow-input"
                    type="text"
                    placeholder="Special Option"
                    value={course.planType}
                    onChange={onChange}
                    name="planType"
                  >
                    <option value="">Choose Options</option>
                    <option value="A">
                      A ------ {intensive === "gold" ? "$30" : "$20"}
                    </option>
                    <option value="B">
                      B ------ {intensive === "gold" ? "$60" : "$40"}
                    </option>
                    <option value="C">
                      C ------ {intensive === "gold" ? "$90" : "$60"}
                    </option>
                    <option value="D">
                      D ------ {intensive === "gold" ? "$120" : "$80"}
                    </option>
                    <option value="E">
                      E ------ {intensive === "gold" ? "$150" : "$100"}
                    </option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      <button
        className="px-12 py-4 rounded-md bg-indigo-500 text-sm text-white mt-8 mx-auto"
        onClick={onSubmit}
        // disabled
      >
        {t("apply")}
      </button>
    </form>
  );
};

export default StudentReg;
