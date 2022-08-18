import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { BsCheck } from "react-icons/bs";
import { useCourse } from "../../context/CourseContext";

const PricingDetails = () => {
  const { requestCourse } = useCourse();
  const onChange = (e) => {
    setCourse({ ...course, [e.target.name]: e.target.value });
  };
  const router = useRouter();
  const slug = router.asPath.split("/")[2];
  const { t } = useTranslation();
  const BeginnersItem = t("BeginnersItem", { returnObjects: true });
  const BeginnersIntensiveItem = t("BeginnersIntensiveItem", {
    returnObjects: true,
  });
  const BeginnersDetails = t("BeginnersDetails");
  const BeginnersOutcome = t("BeginnersOutcome");
  const HifzItems = t("HifzItems", { returnObjects: true });
  const HifzIntensiveItems = t("HifzIntensiveItems", { returnObjects: true });
  const HifzDetails = t("HifzDetails");
  const TilawahItem = t("TilawahItem", { returnObjects: true });
  const TilawahIntensiveItem = t("TilawahIntensiveItem", {
    returnObjects: true,
  });
  const TilawahDetails = t("TilawahDetails");
  const MurajaItem = t("MurajaItem", { returnObjects: true });
  const MurajaIntensiveItem = t("MurajaIntensiveItem", { returnObjects: true });
  const MurajaDetails = t("MurajaDetails");
  const programs = [
    {
      slug: "beginners",
      basic: BeginnersItem,
      intensive: BeginnersIntensiveItem,
      outcome: BeginnersOutcome,
      details: BeginnersDetails,
    },
    {
      slug: "hifz",
      basic: HifzItems,
      intensive: HifzIntensiveItems,
      details: HifzDetails,
    },
    {
      slug: "tilawah",
      basic: TilawahItem,
      intensive: TilawahIntensiveItem,
      details: TilawahDetails,
    },
    {
      slug: "muraja",
      basic: MurajaItem,
      intensive: MurajaIntensiveItem,
      details: MurajaDetails,
    },
  ];
  const program = programs.find((prog) => slug.includes(prog.slug));
  const [course, setCourse] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    whatsapp: "",
    gender: "",
    nationality: "",
    language: "",
    program: program.slug,
    intensive: "intensive",
    registered: false,
  });
  const onSubmit = (e) => {
    e.preventDefault();
    requestCourse(course);
    setCourse({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      whatsapp: "",
      gender: "",
      nationality: "",
      language: "",
      program: program.slug,
      intensive: "intensive",
    });
  };
  return (
    <div className="px-48 my-16 space-y-8">
      <Head>
        <title>Pricing | {program.slug}</title>
      </Head>
      <h1 className="text-3xl text-center font-bold capitalize leading-loose">
        {program.slug}
      </h1>
      <p className="text-justify leading-loose">{program.details}</p>
      {program.outcome && (
        <>
          <h4 className="text-2xl font-semibold">Outcome</h4>
          <p>{program.outcome}</p>
        </>
      )}
      <div className="flex space-x-8">
        <div className="space-y-4 px-4 py-8 rounded-lg border border-gray-200">
          <h4 className="text-2xl font-semibold">Basic Pricing</h4>
          <ul className="text-left">
            {program.basic.map((item) => (
              <li
                key={item}
                className="flex items-center font-heading mb-3 font-medium text-base text-gray-900"
              >
                <BsCheck />
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-4 bg-indigo-500 text-white px-4 py-8 rounded-lg">
          <h4 className="text-2xl font-semibold">Intensive Pricing</h4>
          <ul className="text-left">
            {program.intensive.map((item) => (
              <li
                key={item}
                className="flex items-center font-heading mb-3 font-medium text-base"
              >
                <BsCheck />
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="my-4">
        <h1 className="text-2xl font-semibold">Register Here</h1>
        <form onSubmit={onSubmit}>
          <div className="py-6 border-b border-coolGray-100">
            <div className="w-full md:w-9/12">
              <div className="flex flex-wrap -m-3">
                <div className="w-full md:w-1/3 p-3">
                  <p className="text-sm text-coolGray-800 font-semibold">
                    Name
                  </p>
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
                  <p className="text-sm text-coolGray-800 font-semibold">
                    Gender
                  </p>
                </div>
                <div className="w-full md:flex-1 p-3">
                  <select
                    className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-indigo-500 border border-coolGray-200 rounded-lg shadow-input"
                    type="text"
                    placeholder="intensive level"
                    value={course.gender}
                    onChange={onChange}
                    name="gender"
                  >
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
                    Primary Language
                  </p>
                </div>
                <div className="w-full md:flex-1 p-3">
                  <input
                    className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-indigo-500 border border-coolGray-200 rounded-lg shadow-input"
                    type="text"
                    placeholder="Enter your Primary Language"
                    name="language"
                    value={course.language}
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
                    Program
                  </p>
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
                  <p className="text-sm text-coolGray-800 font-semibold">
                    Intensive Level
                  </p>
                </div>
                <div className="w-full md:flex-1 p-3">
                  <select
                    className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-indigo-500 border border-coolGray-200 rounded-lg shadow-input"
                    type="text"
                    placeholder="intensive level"
                    value={course.intensive}
                    onChange={onChange}
                    name="intensive"
                  >
                    <option value="intensive">Intensive</option>
                    <option value="basic">Basic</option>
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
    </div>
  );
};

export default PricingDetails;
