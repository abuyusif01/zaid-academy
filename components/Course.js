import React from "react";
import { useTranslation } from "react-i18next";

const Course = ({ name, description, price }) => {
  const { t } = useTranslation();
  return (
    <div className="rounded-md min:w-1/4 p-6 cursor-pointer border border-gray-300 flex items-center justify-around hover:border-indigo-500 transition duration-500 ease-in">
      <div className="space-y-4">
        <p className="text-2xl font-semibold">{name}</p>
        <p className="text-gray-500">{description}</p>
      </div>
      <div>
        <p className="text-2xl font-semibold">
          ${price}/{t("monthly")}
        </p>
      </div>
    </div>
  );
};

export default Course;
