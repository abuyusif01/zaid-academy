import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { useTranslation } from "react-i18next";
import { useStudent } from "../context/StudentContext";
import SelectField from "./SelectField";

const EditStudent = ({ student, close, edit }) => {
  const [checked, setChecked] = useState(student.isSent ? true : false);
  const { updateStudent } = useStudent();
  const { t } = useTranslation();

  return (
    <div className="space-y-8">
      <Formik
        initialValues={{
          program: student.program,
          language: student.language,
          pricing: student.pricing,
          plan: student.plan,
        }}
        onSubmit={(values) => {
          updateStudent(student.uid, { ...values, isSent: checked });
          edit(values);
          close();
        }}
      >
        {(formik) => (
          <Form className="space-y-6">
            <SelectField
              label="Program"
              placeholder="Choose a Program"
              name="program"
              data={["beginners", "hifz", "muraja", "tilawah"]}
            />
            <SelectField
              label={t("language")}
              placeholder="Choose a language"
              name="language"
              data={["Arabic", "English", "Wollof", "French", "Fulani"]}
            />
            <SelectField
              label="Pricing"
              placeholder="Choose a Pricing"
              name="pricing"
              data={["family", "special", "premium"]}
            />
            {formik.values.pricing === "family" && (
              <SelectField
                label="Plan"
                placeholder="Choose a Plan"
                name="intensive"
                data={["intensive", "basic", "regular"]}
              />
            )}

            {formik.values.pricing === "premium" && (
              <SelectField
                label="Plan"
                placeholder="Choose a Plan"
                name="plan"
                data={["silver D", "silver E", "gold D", "gold E"]}
              />
            )}

            {formik.values.pricing === "special" && (
              <>
                <SelectField
                  label="Plan"
                  placeholder="Choose a Plan"
                  name="plan"
                  data={[
                    "silver A",
                    "silver B",
                    "silver C",
                    "gold A",
                    "gold B",
                    "gold C",
                  ]}
                />
              </>
            )}

            <div className="space-x-5">
              <input
                type="checkbox"
                checked={checked}
                onChange={() => setChecked((props) => !props)}
              />
              <span className="text-lg">Message Already Sent</span>
            </div>

            <div className="space-x-4">
              <button
                className="px-12 py-4 rounded-md bg-indigo-500 text-sm text-white mt-8 mx-auto"
                type="submit"
              >
                Update
              </button>
              <button
                className="px-12 py-4 rounded-md border border-gray-500 text-sm text-gray-700 mt-8 mx-auto"
                onClick={close}
              >
                Cancel
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default EditStudent;
