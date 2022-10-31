import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { Form, Formik } from "formik";
import { useTranslation } from "react-i18next";
import { useStudent } from "../context/StudentContext";
import registerSchema from "../validation/register";
import TextField from "./TextField";
import SelectField from "./SelectField";
import Select from "./Select";

const CourseRegistration = ({ student }) => {
  const router = useRouter();
  const { selfRegister, checkStudent, pupil } = useStudent();
  const { t } = useTranslation();

  useEffect(() => {
    checkStudent(student.email);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      <Formik
        initialValues={{
          phone: "",
          whatsapp: "",
          gender: "",
          nationality: "",
          language: "",
          program: "",
          intensive: "",
          plan: "",
          planType: "",
          residence: "",
          active: false,
          registered: true,
        }}
        validationSchema={registerSchema}
        onSubmit={(values) => {
          const studentData = { ...student, ...values };
          selfRegister(studentData);
          router.push("/dashboard");
          close();
        }}
      >
        {(formik) => (
          <Form>
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
            <SelectField
              label={t("program")}
              placeholder="Choose a Program"
              name="program"
              data={["beginners", "hifz", "muraja", "tilawah"]}
            />
            <SelectField
              label="Plan"
              placeholder="Choose a Plan"
              name="plan"
              data={["family", "special"]}
            />

            {formik.values.plan === "family" && (
              <SelectField
                label="Intesive Level"
                placeholder="Choose a intensive level"
                name="intensive"
                data={["intensive", "basic"]}
              />
            )}

            {formik.values.plan === "special" && (
              <>
                <SelectField
                  label="Intensive Level"
                  placeholder="Choose a intensive level"
                  name="intensive"
                  data={["gold", "silver"]}
                />
                <Select label="Special Option" name="planType" />
              </>
            )}
            <button
              className="px-12 py-4 rounded-md bg-indigo-500 text-sm text-white mt-8 mx-auto"
              type="submit"
            >
              {t("apply")}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CourseRegistration;
