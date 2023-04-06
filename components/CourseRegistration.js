import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { BsCircle, BsCheckCircleFill, BsCheckLg } from "react-icons/bs";
import { RiCloseCircleFill } from "react-icons/ri";
import { Form, Formik } from "formik";
import { useTranslation } from "react-i18next";
import { useStudent } from "../context/StudentContext";
import personalSchema from "../validation/register";
import TextField from "./TextField";
import SelectField from "./SelectField";
import countries from "../validation/countries.json";

const CourseRegistration = ({ student }) => {
  const [display, setDisplay] = useState("personal");
  const [pricing, setPricing] = useState("special");
  const [program, setProgram] = useState("");
  const [plan, setPlan] = useState({ plan: "" });
  const [studentData, setStudentData] = useState({});
  const router = useRouter();
  const { selfRegister, checkStudent, pupil } = useStudent();
  const { t } = useTranslation();

  const countriesData = countries.map((count) => count.country);

  const pricingdata = [
    { name: "special" },
    { name: "premium" },
    { name: "family" },
  ];

  const planData = {
    family: {
      name: "family",
      details: [],
      subs: [
        { plan: "basic", price: 80 },
        { plan: "regular", price: 100 },
        { plan: "intensive", price: 160 },
      ],
    },
    special: {
      name: "special",
      details: [],
      subs: [
        { plan: "silver A", price: 20 },
        { plan: "silver B", price: 40 },
        { plan: "silver C", price: 60 },
        { plan: "gold A", price: 30 },
        { plan: "gold B", price: 60 },
        { plan: "gold C", price: 90 },
      ],
    },
    premium: {
      name: "premium",
      details: [],
      subs: [
        { plan: "silver D", price: 80 },
        { plan: "silver E", price: 90 },
        { plan: "gold D", price: 110 },
        { plan: "gold E", price: 130 },
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
                <SelectField
                  label={t("nationality")}
                  placeholder="Choose your Nationality"
                  name="nationality"
                  data={countriesData}
                />
                <SelectField
                  label="residence"
                  placeholder="Choose your country of residence"
                  name="residence"
                  data={countriesData}
                />

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
              className={`border border-2 h-48 w-full spc rounded-lg space-y-4 ${
                pricing === "special" ? "border-indigo-500" : "border-gray-400"
              } p-4 cursor-pointer`}
              onClick={() => setPricing("special")}
            >
              <div className="flex justify-between items-center">
                <h1 className="text-xl font-semibold">Special</h1>
                {pricing === "special" ? (
                  <BsCheckCircleFill className="text-xl text-indigo-500" />
                ) : (
                  <BsCircle className="text-xl" />
                )}
              </div>
              {/* Details */}
              <div className="space-y-4 text-lg">
                <p className="flex space-x-4 items-center">
                  <BsCheckLg className="text-indigo-500" />
                  <span>1 - 3 classes per week</span>
                </p>
                <p className="flex space-x-4 items-center">
                  <BsCheckLg className="text-indigo-500" />
                  <span>4 - 12 Classes per month</span>
                </p>
                <p className="flex space-x-4 items-center">
                  <BsCheckLg className="text-indigo-500" />
                  <span>30 or 45 Minutes per Session</span>
                </p>
              </div>
            </div>
            <div
              className={`border border-2 h-48 w-full rounded-lg space-y-4 ${
                pricing === "premium" ? "border-indigo-500" : "border-gray-400"
              } p-4 cursor-pointer`}
              onClick={() => setPricing("premium")}
            >
              <div className="flex justify-between items-center">
                <h1 className="text-xl font-semibold">Premium</h1>
                {pricing === "premium" ? (
                  <BsCheckCircleFill className="text-xl text-indigo-500" />
                ) : (
                  <BsCircle className="text-xl" />
                )}
              </div>
              {/* Details */}
              <div className="space-y-4 text-lg">
                <p className="flex space-x-4 items-center">
                  <BsCheckLg className="text-indigo-500" />
                  <span>4 - 5 classes per week</span>
                </p>
                <p className="flex space-x-4 items-center">
                  <BsCheckLg className="text-indigo-500" />
                  <span>16 - 20 Classes per month</span>
                </p>
                <p className="flex space-x-4 items-center">
                  <BsCheckLg className="text-indigo-500" />
                  <span>30 or 45 Minutes per Session</span>
                </p>
              </div>
            </div>
            <div
              className={`border border-2 h-48 w-full rounded-lg space-y-4 ${
                pricing === "family" ? "border-indigo-500" : "border-gray-400"
              } p-4 cursor-pointer`}
              onClick={() => setPricing("family")}
            >
              <div className="flex justify-between items-center">
                <h1 className="text-xl font-semibold">Family</h1>
                {pricing === "family" ? (
                  <BsCheckCircleFill className="text-xl text-indigo-500" />
                ) : (
                  <BsCircle className="text-xl" />
                )}
              </div>
              {/* Details */}
              <div className="space-y-4 text-lg">
                <p className="flex space-x-4 items-center">
                  <BsCheckLg className="text-indigo-500" />
                  <span>2-3 Students</span>
                </p>
                <p className="flex space-x-4 items-center">
                  <BsCheckLg className="text-indigo-500" />
                  <span>2-5 Sessions</span>
                </p>
                <p className="flex space-x-4 items-center">
                  <BsCheckLg className="text-indigo-500" />
                  <span>60 Minutes per Session</span>
                </p>
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
                <h1 className="text-lg">Beginners (Alphabets) </h1>
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
                <h1 className="text-lg">Tilawah</h1>
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
                <h1 className="text-lg">Muraja</h1>
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
                <h1 className="text-lg">Hifz</h1>
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
                    className="border border-2 px-4 py-6 text-xl capitalize rounded cursor-pointer flex items-center justify-between"
                    key={item.plan}
                    onClick={() => {
                      setPlan(item);
                    }}
                  >
                    <p>{item.plan}</p>
                    <p>$ {item.price}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div>
                <div className="text-lg space-y-3 mb-3">
                  <p className="capitalize">
                    Full Name: {studentData.fullName}
                  </p>
                  <p className="capitalize">Phone: {studentData.phone}</p>
                  <p className="capitalize">Email: {studentData.email}</p>
                  <p className="capitalize">Whatsapp: {studentData.whatsapp}</p>
                  <p className="capitalize">Gender: {studentData.gender}</p>
                  <p className="capitalize">
                    Nationality: {studentData.nationality}
                  </p>
                  <p className="capitalize">Language: {studentData.language}</p>
                  <p className="capitalize">Program: {studentData.program}</p>
                  <p className="capitalize">Pricing: {studentData.pricing}</p>
                </div>
                <div className="relative px-12 py-4 bg-indigo-600 rounded-md text-center text-white">
                  <p>{plan.plan}</p>
                  <RiCloseCircleFill
                    className="absolute -top-2 -right-2 text-white cursor-pointer text-2xl"
                    onClick={() => setPlan({ plan: "" })}
                  />
                </div>
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
                const studData = { ...studentData, ...plan, active: false };
                selfRegister(studData);
                router.replace("dashboard");
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
