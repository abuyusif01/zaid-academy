import React, { useEffect, useId, useState } from "react";
import { Formik, Form } from "formik";
import { useTranslation } from "react-i18next";
import { useInstructor } from "../context/InstructorContext";
import { useStudent } from "../context/StudentContext";
import SelectField from "./SelectField";
import Select from "./Select";
import TextField from "./TextField";

const EditStudent = ({ student, close }) => {
  const { updateStudent, deleteStudent } = useStudent();
  const [lecturers, SetLecturers] = useState([]);
  const { getInstructors, instructors } = useInstructor();
  const { t } = useTranslation();

  useEffect(() => {
    getInstructors();
    SetLecturers(instructors.map((inst) => inst.displayName));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(lecturers);

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between pb-8 border-b border-b-gray-200">
        <p>Delete student account</p>
        <button
          onClick={() => {
            deleteStudent(student);
            close();
          }}
          className="px-4 py-2 font-semibold bg-red-500 text-white rounded text-sm"
        >
          Delete
        </button>
      </div>
      <Formik
        initialValues={{
          program: student.program,
          plan: student.plan,
          intensive: student.intensive,
          planType: student.planType,
          lecturer: student.lecturer,
          payment: student.payment,
          expiryDate: student.expiryDate,
          active: true,
          registered: true,
        }}
        onSubmit={(values) => {
          updateStudent(student.uid, values);
          close();
        }}
      >
        {(formik) => (
          <Form>
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
                <Select
                  label="Special Option"
                  name="planType"
                  intensive={formik.values.intensive}
                />
              </>
            )}
            <SelectField
              label="Instructor"
              placeholder="Choose a instructor"
              name="lecturer"
              data={lecturers.length > 0 ? lecturers : []}
            />
            <SelectField
              label="Payment"
              placeholder="------------"
              name="payment"
              data={["unpaid", "paid"]}
            />
            <TextField label="Expiry Date" name="expiryDate" type="date" />
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
