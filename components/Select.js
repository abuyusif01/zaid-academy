import { useField } from "formik";
import React from "react";

const Select = ({ label, ...props }) => {
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
              className="w-full px-4 py-2.5 text-base text-coolGray-900 font-normal outline-none focus:border-indigo-500 border border-coolGray-200 rounded-lg shadow-input"
              {...props}
              {...field}
            >
              <option value="">Choose Options</option>
              <option value="A">
                A ------ {intensive === "gold" ? "$30" : "$20"}
              </option>
              <option value="B">
                B ------ {intensive === "gold" ? "$60" : "$40"}
              </option>
              <option value="C">
                C ------ {intensive === "gold" ? "$90" : "$60"}
              </option>
              <option value="D">
                D ------ {intensive === "gold" ? "$120" : "$80"}
              </option>
              <option value="E">
                E ------ {intensive === "gold" ? "$150" : "$100"}
              </option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Select;
