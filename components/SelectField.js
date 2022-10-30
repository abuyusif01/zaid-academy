import { ErrorMessage, useField } from "formik";
import React from "react";

const SelectField = ({ label, ...props }) => {
  const { data, placeholder, name } = props;
  const [field, meta] = useField(props);
  return (
    <div className="py-6 border-b border-coolGray-100">
      <div className="w-full md:w-9/12">
        <div className="flex flex-wrap -m-3">
          <div className="w-full md:w-1/3 p-3">
            <label
              htmlFor={field.name}
              className="text-sm text-coolGray-800 font-semibold"
            >
              {label}
            </label>
          </div>
          <div className="w-full md:flex-1 p-3">
            <select
              className={`w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-indigo-500 border ${
                meta.touched && meta.error
                  ? "border-red-500"
                  : "border-coolGray-200"
              } border-coolGray-200 rounded-lg shadow-input`}
              name={field.name}
              {...props}
              {...field}
            >
              <option value="">{placeholder}</option>
              {data.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            <div className="text-sm text-red-500">
              <ErrorMessage name={field.name} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectField;
