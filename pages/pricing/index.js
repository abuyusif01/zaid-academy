import Head from "next/head";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Plan from "../../components/Plan";

const PricingX = () => {
  const [pricingPlan, setPricingPlan] = useState("special");
  const showFamily = () => setPricingPlan("family");
  const showSpecial = () => setPricingPlan("special");
  const showPremium = () => setPricingPlan("premium");
  const { t } = useTranslation();

  return (
    <div className="my-10 space-y-6">
      <Head>
        <title>Zaid | Pricing</title>
      </Head>
      <div>
        <h4 className="uppercase text-2xl text-center font-bold mb-8">
          Pricing
        </h4>
        <div className="mx-4 md:mx-auto mb-8 flex items-center justify-center space-x-4">
          <div
            className={`px-4 py-1 text-center ${pricingPlan === "special"
              ? "bg-indigo-500 text-white"
              : "bg-white text-gray-700"
              } rounded-2xl cursor-pointer`}
            onClick={showSpecial}
          >
            {t("specialPackage")}
          </div>
          <div
            className={`px-4 py-1 text-center ${pricingPlan === "premium"
              ? "bg-indigo-500 text-white"
              : "bg-white text-gray-700"
              } rounded-2xl cursor-pointer`}
            onClick={showPremium}
          >
            {t("premiumPackage")}
          </div>
          <div
            className={`px-4 py-1 text-center ${pricingPlan === "family"
              ? "bg-indigo-500 text-white"
              : "bg-white text-gray-700"
              } rounded-2xl cursor-pointer`}
            onClick={showFamily}
          >
            {t("familyPackage")}
          </div>
        </div>
        <div className="w-10/12 mx-auto space-y-8">
          {pricingPlan === "family" && (
            <div className="flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-6">
              <Plan
                title="basic"
                price={80}
                description="This is suitable for 3 people"
                items={[
                  `2-3 ${t("student")}`,
                  `2 ${t("sessionPerWeek")}`,
                  `60 ${t("minutePerSession")}`,
                ]}
              />
              <Plan
                title="regular"
                price={110}
                description="This is suitable for 3 people"
                items={[
                  `2-3 ${t("student")}`,
                  `3 ${t("sessionPerWeek")}`,
                  `60 ${t("minutePerSession")}`,
                ]}
              />
              <Plan
                title="intensive"
                price={160}
                items={[
                  `2-3 ${t("student")}`,
                  `5 ${t("sessionPerWeek")}`,
                  `60 ${t("minutePerSession")}`,
                ]}
              />
            </div>
          )}
          {pricingPlan === "special" && (
            <div className="space-y-6">
              <div className="w-full flex flex-col lg:flex-row">
                <div className="w-full p-4">
                  <Plan
                    title="Silver A"
                    price={20}
                    items={[
                      "30 minutes",
                      `4 ${t("classes")}`,
                      `1 ${t("weeklyClass")}`,
                    ]}
                  />
                </div>
                <div className="w-full p-4">
                  <Plan
                    title="Silver B"
                    price={40}
                    items={[
                      "30 minutes",
                      `8 ${t("classes")}`,
                      `2 ${t("weeklyClass")}`,
                    ]}
                  />
                </div>
                <div className="w-full p-4">
                  <Plan
                    title="Silver C"
                    price={60}
                    items={[
                      "30 minutes",
                      `12 ${t("classes")}`,
                      `3 ${t("weeklyClass")}`,
                    ]}
                  />
                </div>
              </div>
              <div className="w-full flex flex-col lg:flex-row">
                <div className="w-full p-4">
                  <Plan
                    title="Gold A"
                    price={30}
                    items={[
                      "45 minutes",
                      `4 ${t("classes")}`,
                      `1 ${t("weeklyClass")}`,
                    ]}
                  />
                </div>
                <div className="w-full p-4">
                  <Plan
                    title="Gold B"
                    price={60}
                    items={[
                      "45 minutes",
                      `8 ${t("classes")}`,
                      `2 ${t("weeklyClass")}`,
                    ]}
                  />
                </div>
                <div className="w-full p-4">
                  <Plan
                    title="Gold C"
                    price={90}
                    items={[
                      "45 minutes",
                      `12 ${t("classes")}`,
                      `3 ${t("weeklyClass")}`,
                    ]}
                  />
                </div>
              </div>
            </div>
          )}
          {pricingPlan === "premium" && (
            <div className="flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-6">
              <div className="w-full flex flex-col lg:flex-row flex-wrap">
                <div className="w-full md:w-1/2 p-4">
                  <Plan
                    title="Silver D"
                    price={80}
                    items={[
                      "30 minutes",
                      `16 ${t("classes")}`,
                      `4 ${t("weeklyClass")}`,
                    ]}
                  />
                </div>
                <div className="w-full md:w-1/2 p-4">
                  <Plan
                    title="Silver E"
                    price={90}
                    items={[
                      "30 minutes",
                      `20 ${t("classes")}`,
                      `5 ${t("weeklyClass")}`,
                    ]}
                  />
                </div>
                <div className="w-full md:w-1/2 p-4">
                  <Plan
                    title="Gold D"
                    price={110}
                    items={[
                      "45 minutes",
                      `16 ${t("classes")}`,
                      `4 ${t("weeklyClass")}`,
                    ]}
                  />
                </div>
                <div className="w-full md:w-1/2 p-4">
                  <Plan
                    title="Gold E"
                    price={130}
                    items={[
                      "45 minutes",
                      `20 ${t("classes")}`,
                      `5 ${t("weeklyClass")}`,
                    ]}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PricingX;
