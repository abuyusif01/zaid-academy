import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { BsCheck } from "react-icons/bs";
import React from "react";

const CourseRegistrationPlan = ({ title, price, items, studentData }) => {

  const createQueryStringFromObject = (params) => {
    return Object.keys(params)
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
      .join('&');
  };
  const handleClick = () => {
    studentData.title = title
    studentData.items = items
    studentData.price = price

    const queryString = createQueryStringFromObject(studentData);
    router.push(`/checkout?${queryString}`);
  };

  const router = useRouter();
  const { t } = useTranslation();
  return (
    <div className="border border-gray-200 p-10 rounded w-full text-center space-y-4">
      <h5 className="border border-gray-500 rounded-2xl px-4 py-1 inline-flex text-sm">
        {title}
      </h5>
      <p className="text-3xl text-gray-700 font-bold">
        ${price} <span className="text-sm font-normal">/ {t("monthly")}</span>
      </p>
      <ul className="text-center">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-center justify-center font-heading mb-3 font-medium text-base text-gray-900"
          >
            <BsCheck />
            <p>{item}</p>
          </li>
        ))}
      </ul>
      <button
        onClick={handleClick}
        className="px-6 py-4 rounded-md bg-indigo-500 text-sm text-white mt-8 mx-auto"
      >
        {t("apply")}
      </button>
    </div>
  );
};

export default CourseRegistrationPlan;
