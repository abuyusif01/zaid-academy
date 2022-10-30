import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import * as yup from "yup";
import { useTranslation } from "react-i18next";
import { useStudent } from "../context/StudentContext";
import userSchema from "../validation/student";
import { async } from "@firebase/util";
import { useRouter } from "next/router";
import { Form, Formik } from "formik";
import TextField from "./TextField";
import SelectField from "./SelectField";
import Select from "./Select";

const StudentReg = ({ program, close }) => {
  const router = useRouter();
  const { selfRegister } = useStudent();
  const { t } = useTranslation();

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        whatsapp: "",
        gender: "",
        nationality: "",
        language: "",
        program: program.slug,
        intensive: "",
        plan: "",
        planType: "",
        registered: true,
        active: false,
      }}
      validationSchema={userSchema}
      onSubmit={(values) => {
        const studentData = {
          ...values,
          uid: uuidv4(),
          displayName: values.firstName + " " + values.lastName,
        };
        selfRegister(studentData);
        {
          close ? close() : router.push("/signup");
        }
      }}
    >
      {(formik) => (
        <Form>
          <TextField label="First Name" name="firstName" type="text" />
          <TextField label="Last Name" name="lastName" type="text" />
          <TextField label="Email Address" name="email" type="email" />
          <TextField label="Phone Number" name="phone" type="text" />
          <TextField label="Whatsapp Number" name="whatsapp" type="text" />
          <SelectField
            label="Gender"
            placeholder="Choose your Gender"
            name="gender"
            data={["Male", "Female"]}
          />
          <TextField label="Nationality" name="nationality" type="text" />
          <SelectField
            label="Language"
            placeholder="Choose a language"
            name="language"
            data={["Arabic", "English", "Wollof", "French", "Fulani"]}
          />
          <SelectField
            label="Program"
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
              data={["intensive", "basic", "muraja", "tilawah"]}
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

          <button className="px-12 py-4 rounded-md bg-indigo-500 text-sm text-white mt-8 mx-auto">
            {t("apply")}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default StudentReg;
