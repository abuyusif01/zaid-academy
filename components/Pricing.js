import { t } from "i18next";
import React from "react";
import { useTranslation } from "react-i18next";
import { BsCheck } from "react-icons/bs";

const Pricing = ({ items, title, description, price }) => {
  const { t } = useTranslation();
  return (
    <div className="w-full md:w-1/3 m-4">
      <div className="pt-8 px-11 xl:px-20 pb-10 bg-transparent border-b md:border-b-0 md:border-r border-gray-200 rounded-10">
        <h3 className="mb-0.5 font-heading font-semibold text-lg text-gray-900">
          {title}
        </h3>
        <p className="mb-5 text-gray-600 text-sm">{description}</p>
        <div className="mb-9 flex">
          <span className="mr-1 mt-0.5 font-heading font-semibold text-lg text-gray-900">
            $
          </span>
          <span className="font-heading font-semibold text-6xl sm:text-7xl text-gray-900">
            {price}
          </span>
          <span className="font-heading font-semibold self-end">
            / {t("monthly")}
          </span>
        </div>
        <div className="p-1">
          <button className="group relative mb-9 p-px w-full font-heading font-semibold text-xs text-gray-50 bg-indigo-500 uppercase tracking-px overflow-hidden rounded-md">
            <div className="absolute top-0 left-0 transform -translate-y-full group-hover:-translate-y-0 h-full w-full bg-gradient-green transition ease-in-out duration-500"></div>
            <div className="p-4 bg-indigo-500 overflow-hidden rounded-md">
              <p className="relative z-10">Join now</p>
            </div>
          </button>
        </div>
        <ul>
          {items.map((item) => (
            <li
              key={item}
              className="flex items-center font-heading mb-3 font-medium text-base text-gray-900"
            >
              <BsCheck />
              <p>{item}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Pricing;
