import { ErrorMessage, useField } from "formik";
import React from "react";

const SelectField = ({ label, ...props }) => {
  const { data, placeholder, name } = props;
  const [field, meta] = useField(props);
  return (
    <div className="">
      <div className="w-full">
        <div className="flex flex-wrap space-y-3 flex-col">
          <div className="w-full">
            <label
              htmlFor={field.name}
              className="text-sm text-coolGray-800 font-semibold"
            >
              {label}
            </label>
          </div>
          <div className="w-full">
            <select
              className={`w-full py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-indigo-500 border ${
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
