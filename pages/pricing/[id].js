import Head from "next/head";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { BsCheck } from "react-icons/bs";
import { useStudent } from "../../context/StudentContext";
import StudentReg from "../../components/StudentReg";

const PricingDetails = () => {
  const { selfRegister } = useStudent();
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
    router.push("/signup");
  };
  return (
    <div className="md:px-48 px-4 my-16 space-y-8">
      <Head>
        <title>Pricing | {program.slug}</title>
      </Head>
      <h1 className="md:text-3xl text-lg text-center font-bold capitalize leading-loose">
        {program.slug}
      </h1>
      <p className="text-justify text-sm md:text-base leading-loose">
        {program.details}
      </p>
      {program.outcome && (
        <>
          <h4 className="md:text-2xl text-lg font-semibold">Outcome</h4>
          <p className="text-justify text-sm md:text-base leading-loose">
            {program.outcome}
          </p>
        </>
      )}
      <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-8">
        <div className="space-y-4 px-4 py-8 rounded-lg border border-gray-200">
          <h4 className="text-2xl font-semibold">Basic Pricing</h4>
          <ul className="text-left">
            {program.basic.map((item) => (
              <li
                key={item}
                className="flex text-sm md:text-base items-center font-heading mb-3 font-medium text-base text-gray-900"
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
                className="flex text-sm md:text-base items-center font-heading mb-3 font-medium text-base"
              >
                <BsCheck />
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-4 px-4 py-8 rounded-lg border border-gray-200">
          <h4 className="text-2xl font-semibold">
            Special and Premium Pricing
          </h4>
          <ul className="text-left">
            <li className="flex text-sm md:text-base items-center font-heading mb-3 font-medium text-base text-gray-900">
              <BsCheck />
              <p>customized timing</p>
            </li>
            <li className="flex text-sm md:text-base items-center font-heading mb-3 font-medium text-base text-gray-900">
              <BsCheck />
              <p>More classes per week</p>
            </li>
            {program.basic.map((item) => (
              <li
                key={item}
                className="flex text-sm md:text-base items-center font-heading mb-3 font-medium text-base text-gray-900"
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
        <StudentReg program={program || ""} />
      </div>
    </div>
  );
};

export default PricingDetails;
