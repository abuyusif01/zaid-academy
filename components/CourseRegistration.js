import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { BsCircle, BsCheckCircleFill } from "react-icons/bs";
import { RiCloseCircleFill } from "react-icons/ri";
import { Form, Formik } from "formik";
import { useTranslation } from "react-i18next";
import { useStudent } from "../context/StudentContext";
import personalSchema from "../validation/register";
import TextField from "./TextField";
import SelectField from "./SelectField";
import Select from "./Select";

const CourseRegistration = ({ student }) => {
  const [display, setDisplay] = useState("personal");
  const [pricing, setPricing] = useState("special");
  const [program, setProgram] = useState("");
  const [plan, setPlan] = useState({ plan: "" });
  const [studentData, setStudentData] = useState({});
  const router = useRouter();
  const { selfRegister, checkStudent, pupil } = useStudent();
  const { t } = useTranslation();

  const pricingdata = [
    { name: "special" },
    { name: "premium" },
    { name: "family" },
  ];

  const planData = {
    family: {
      name: "family",
      details: [],
      subs: [{ plan: "basic" }, { plan: "regular" }, { plan: "intensive" }],
    },
    special: {
      name: "special",
      details: [],
      subs: [
        { plan: "silver A" },
        { plan: "silver B" },
        { plan: "silver C" },
        { plan: "gold A" },
        { plan: "gold B" },
        { plan: "gold C" },
      ],
    },
    premium: {
      name: "premium",
      details: [],
      subs: [
        { plan: "silver D" },
        { plan: "silver E" },
        { plan: "gold D" },
        { plan: "gold E" },
      ],
    },
  };

  return (
    <div className="p-8">
      {display === "personal" ? (
        <div className="space-y-4">
          <h4 className="text-2xl text-semibold mb-8">Personal Information</h4>
          <Formik
            initialValues={{
              fullName: "" || studentData.fullName,
              phone: "" || studentData.phone,
              whatsapp: "" || studentData.whatsapp,
              gender: "" || studentData.gender,
              nationality: "" || studentData.nationality,
              language: "" || studentData.language,
              residence: "" || studentData.residence,
            }}
            validationSchema={personalSchema}
            onSubmit={(values) => {
              const data = { ...student, ...values };
              setStudentData({ ...studentData, ...data });
              setDisplay("program");
            }}
          >
            {(formik) => (
              <Form className="space-y-6">
                <TextField label="Full Name" name="fullName" type="text" />
                <TextField label={t("phoneNumber")} name="phone" type="text" />
                <TextField
                  label={t("whatsappNumber")}
                  name="whatsapp"
                  type="text"
                />
                <SelectField
                  label={t("gender")}
                  placeholder="Choose your Gender"
                  name="gender"
                  data={["Male", "Female"]}
                />
                <TextField
                  label={t("nationality")}
                  name="nationality"
                  type="text"
                />
                <TextField label="residence" name="residence" type="text" />

                <SelectField
                  label={t("language")}
                  placeholder="Choose a language"
                  name="language"
                  data={["Arabic", "English", "Wollof", "French", "Fulani"]}
                />
                <button
                  className="px-12 py-4 rounded-md bg-indigo-500 text-sm text-white mt-8 mx-auto"
                  type="submit"
                >
                  Next
                </button>
              </Form>
            )}
          </Formik>
        </div>
      ) : null}

      {display === "pricing" ? (
        <div className="space-y-8">
          <h4 className="text-2xl text-semibold mb-8">Pricing</h4>
          <div className="space-y-5">
            <div
              className={`border border-2 h-48 w-full spc rounded-lg ${
                pricing === "special" ? "border-indigo-500" : "border-gray-400"
              } p-4 cursor-pointer`}
              onClick={() => setPricing("special")}
            >
              <div className="flex justify-between items-center">
                <h1 className="text-xl">Special</h1>
                {pricing === "special" ? (
                  <BsCheckCircleFill className="text-xl text-indigo-500" />
                ) : (
                  <BsCircle className="text-xl" />
                )}
              </div>
            </div>
            <div
              className={`border border-2 h-48 w-full rounded-lg ${
                pricing === "premium" ? "border-indigo-500" : "border-gray-400"
              } p-4 cursor-pointer`}
              onClick={() => setPricing("premium")}
            >
              <div className="flex justify-between items-center">
                <h1 className="text-xl">Premium</h1>
                {pricing === "premium" ? (
                  <BsCheckCircleFill className="text-xl text-indigo-500" />
                ) : (
                  <BsCircle className="text-xl" />
                )}
              </div>
            </div>
            <div
              className={`border border-2 h-48 w-full rounded-lg ${
                pricing === "family" ? "border-indigo-500" : "border-gray-400"
              } p-4 cursor-pointer`}
              onClick={() => setPricing("family")}
            >
              <div className="flex justify-between items-center">
                <h1 className="text-xl">Family</h1>
                {pricing === "family" ? (
                  <BsCheckCircleFill className="text-xl text-indigo-500" />
                ) : (
                  <BsCircle className="text-xl" />
                )}
              </div>
            </div>
          </div>
          <div>
            <button
              className="pr-12 py-4 rounded-md text-indigo-500 text-sm mt-8 mx-auto"
              type="button"
              disabled={program === ""}
              onClick={() => {
                setDisplay("program");
              }}
            >
              Previous
            </button>
            <button
              className="px-12 py-4 rounded-md bg-indigo-500 text-sm text-white mt-8 mx-auto"
              type="button"
              disabled={pricing === ""}
              onClick={() => {
                setStudentData({ ...studentData, pricing });
                setDisplay("plan");
              }}
            >
              Next
            </button>
          </div>
        </div>
      ) : null}

      {display === "program" ? (
        <div className="space-y-8">
          <h4 className="text-2xl text-semibold mb-8">Program</h4>
          <div className="space-y-5">
            <div
              className={`border border-2 w-full spc rounded-lg ${
                program === "beginners"
                  ? "border-indigo-500"
                  : "border-gray-400"
              } p-4 cursor-pointer`}
              onClick={() => setProgram("beginners")}
            >
              <div className="flex justify-between items-center">
                <h1 className="text-xl">Beginners</h1>
                {program === "beginners" ? (
                  <BsCheckCircleFill className="text-xl text-indigo-500" />
                ) : (
                  <BsCircle className="text-xl" />
                )}
              </div>
            </div>
            <div
              className={`border border-2 w-full spc rounded-lg ${
                program === "tilawah" ? "border-indigo-500" : "border-gray-400"
              } p-4 cursor-pointer`}
              onClick={() => setProgram("tilawah")}
            >
              <div className="flex justify-between items-center">
                <h1 className="text-xl">Tilawah</h1>
                {program === "tilawah" ? (
                  <BsCheckCircleFill className="text-xl text-indigo-500" />
                ) : (
                  <BsCircle className="text-xl" />
                )}
              </div>
            </div>
            <div
              className={`border border-2 w-full spc rounded-lg ${
                program === "muraja" ? "border-indigo-500" : "border-gray-400"
              } p-4 cursor-pointer`}
              onClick={() => setProgram("muraja")}
            >
              <div className="flex justify-between items-center">
                <h1 className="text-xl">Muraja</h1>
                {program === "muraja" ? (
                  <BsCheckCircleFill className="text-xl text-indigo-500" />
                ) : (
                  <BsCircle className="text-xl" />
                )}
              </div>
            </div>
            <div
              className={`border border-2 w-full spc rounded-lg ${
                program === "hifz" ? "border-indigo-500" : "border-gray-400"
              } p-4 cursor-pointer`}
              onClick={() => setProgram("hifz")}
            >
              <div className="flex justify-between items-center">
                <h1 className="text-xl">Hifz</h1>
                {program === "hifz" ? (
                  <BsCheckCircleFill className="text-xl text-indigo-500" />
                ) : (
                  <BsCircle className="text-xl" />
                )}
              </div>
            </div>
          </div>
          <div>
            <button
              className="pr-12 py-4 rounded-md text-indigo-500 text-sm mt-8 mx-auto"
              type="button"
              onClick={() => {
                setDisplay("personal");
              }}
            >
              Previous
            </button>
            <button
              className="px-12 py-4 rounded-md bg-indigo-500 text-sm text-white mt-8 mx-auto"
              type="button"
              disabled={program === ""}
              onClick={() => {
                setDisplay("pricing");
                setStudentData({ ...studentData, program });
              }}
            >
              Next
            </button>
          </div>
        </div>
      ) : null}

      {display === "plan" ? (
        <div className="space-y-8">
          <h4 className="text-2xl text-semibold mb-8">Plan</h4>
          <div className="space-y-4">
            <h1 className="text-3xl capitalize">{planData[pricing].name}</h1>
            {plan.plan === "" ? (
              <div className="space-y-5">
                {planData[pricing].subs.map((item, index) => (
                  <div
                    className="border border-2 px-4 py-6 text-xl capitalize rounded cursor-pointer"
                    key={item.plan}
                    onClick={() => {
                      setPlan(item);
                    }}
                  >
                    {item.plan}
                  </div>
                ))}
              </div>
            ) : (
              <div className="relative px-12 py-4 bg-indigo-600 rounded-md text-center text-white">
                <p>{plan.plan}</p>
                <RiCloseCircleFill
                  className="absolute -top-2 -right-2 text-white cursor-pointer text-2xl"
                  onClick={() => setPlan({ plan: "" })}
                />
              </div>
            )}
          </div>
          <div>
            <button
              className="pr-12 py-4 rounded-md text-indigo-500 text-sm mt-8 mx-auto"
              type="button"
              disabled={program === ""}
              onClick={() => {
                setDisplay("pricing");
              }}
            >
              Previous
            </button>
            <button
              className="px-12 py-4 rounded-md bg-indigo-500 text-sm text-white mt-8 mx-auto"
              type="button"
              disabled={plan.plan === ""}
              onClick={() => {
                const studData = { ...studentData, ...plan };
                console.log(studData);
              }}
            >
              Submit
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default CourseRegistration;
