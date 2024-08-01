import React, { useState } from "react";
import { BsCircle, BsCheckCircleFill } from "react-icons/bs";
import { Form, Formik } from "formik";
import { useTranslation } from "react-i18next";
import personalSchema from "../validation/register";
import TextField from "./TextField";
import SelectField from "./SelectField";
import countries from "../validation/countries.json";
import Course from "../utils/courses";
import CourseRegistrationPlan from "./CourseRegistrationPlan";

const CourseRegistration = ({ student }) => {
  const [display, setDisplay] = useState("personal");
  const [program, setProgram] = useState("");
  const [studentData, setStudentData] = useState({});
  const { t } = useTranslation();
  const [pricingPlan, setPricingPlan] = useState("special");
  const showFamily = () => setPricingPlan("family");
  const showSpecial = () => setPricingPlan("special");
  const showPremium = () => setPricingPlan("premium");

  const countriesData = countries.map((count) => count.country);
  const courses = new Course();
  const currentCourses = courses.getCoursesByCategory(pricingPlan);

  return (
    <div className="my-10 space-y-6">
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
              setStudentData({
                ...studentData,
                ...data,
                date: new Date().getTime(),
              });
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
      {display === "program" ? (
        <div className="space-y-8">
          <h4 className="text-2xl text-semibold mb-8">Program</h4>
          <div className="space-y-5">
            <div
              className={`border border-2 w-full spc rounded-lg ${program === "beginners"
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
              className={`border border-2 w-full spc rounded-lg ${program === "tilawah" ? "border-indigo-500" : "border-gray-400"
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
              className={`border border-2 w-full spc rounded-lg ${program === "muraja" ? "border-indigo-500" : "border-gray-400"
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
              className={`border border-2 w-full spc rounded-lg ${program === "hifz" ? "border-indigo-500" : "border-gray-400"
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

      {display === "pricing" ?
        (
          <div>
            <h4 className="uppercase text-2xl text-center font-bold mb-8">
              Pricing
            </h4>
            <div className="mx-4 md:mx-auto mb-8 flex items-center justify-center space-x-4">
              <div
                className={`px-4 py-1 text-center ${pricingPlan === "special"
                  ? "bg-indigo-500 text-white"
                  : "bg-white text-gray-700"
                  } text-white rounded-2xl cursor-pointer`}
                onClick={showSpecial}
              >
                {t("specialPackage")}
              </div>
              <div
                className={`px-4 py-1 text-center ${pricingPlan === "premium"
                  ? "bg-indigo-500 text-white"
                  : "bg-white text-gray-700"
                  } text-white rounded-2xl cursor-pointer`}
                onClick={showPremium}
              >
                {t("premiumPackage")}
              </div>
              <div
                className={`px-4 py-1 text-center ${pricingPlan === "family"
                  ? "bg-indigo-500 text-white"
                  : "bg-white text-gray-700"
                  } text-white rounded-2xl cursor-pointer`}
                onClick={showFamily}
              >
                {t("familyPackage")}
              </div>
            </div>

            <div className="my-10 space-y-6">
              <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-2 gap-20">
                {currentCourses.map((course, index) => (
                  <CourseRegistrationPlan
                    key={index}
                    title={course.name}
                    price={course.price}
                    description={course.description || ""}
                    items={[
                      course.noStudent ? `${course.noStudent} ${t("student")}` : `${course.duration} ${t("minutePerSession")}`,
                      `${course.totalMonthly} ${t("classes")}`,
                      `${course.perWeek} ${t("weeklyClass")}`,
                    ]}
                    studentData={studentData}
                  />
                ))}
              </div>
            </div>

          </div>
        )
        : null}
    </div>
  );
};

export default CourseRegistration;
