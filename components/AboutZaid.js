import React from "react";
import { useTranslation } from "react-i18next";

const AboutZaid = () => {
  const { t } = useTranslation();
  return (
    <div className="w-2/3 mx-auto my-20">
      <h1 className="text-2xl font-bold uppercase text-center my-6">
        Zaid Academy
      </h1>
      <p className="text-lg text-gray-700 leading-loose text-justify">
        {t("aboutZaid")}
      </p>
    </div>
  );
};

export default AboutZaid;
