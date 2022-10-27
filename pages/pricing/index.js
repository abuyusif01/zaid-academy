import Head from "next/head";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Plan from "../../components/Plan";
import Pricing from "../../components/Pricing";

const TajweedItem = [
  "Reading with Intonation",
  "Recommended for Everyone",
  "3 sessions per week",
  "50 minutes per session",
];

const TajweedIntensiveItem = [
  "Reading with Intonation",
  "Recommended for Everyone",
  "5 sessions per week",
  "50 minutes per session",
];

const IjazahItem = [
  "Chain Certificate",

  "Recommended for Hafiz",
  "3 sessions per week",
  "50 minutes per session",
];

const IjazahIntensiveItem = [
  "Chain Certificate",
  "Recommended for Hafiz",
  "3 sessions per week",
  "50 minutes per session",
];

const PricingX = () => {
  const [show, setShow] = useState("basic");
  const [pricingPlan, setPricingPlan] = useState("family");
  const showFamily = () => setPricingPlan("family");
  const showSpecial = () => setPricingPlan("special");
  const showPremium = () => setPricingPlan("premium");
  const showBasic = () => setShow("basic");
  const showIntensive = () => setShow("intensive");
  const { t } = useTranslation();
  const BeginnersItem = t("BeginnersItem", { returnObjects: true });
  const BeginnersIntensiveItem = t("BeginnersIntensiveItem", {
    returnObjects: true,
  });
  const HifzItems = t("HifzItems", { returnObjects: true });
  const HifzIntensiveItems = t("HifzIntensiveItems", { returnObjects: true });
  const TilawahItem = t("TilawahItem", { returnObjects: true });
  const TilawahIntensiveItem = t("TilawahIntensiveItem", {
    returnObjects: true,
  });
  const MurajaItem = t("MurajaItem", { returnObjects: true });
  const MurajaIntensiveItem = t("MurajaIntensiveItem", { returnObjects: true });
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
            className={`px-4 py-1 text-center ${
              pricingPlan === "special"
                ? "bg-indigo-500 text-white"
                : "bg-white text-gray-700"
            } text-white rounded-2xl cursor-pointer`}
            onClick={showSpecial}
          >
            Special Package
          </div>
          <div
            className={`px-4 py-1 text-center ${
              pricingPlan === "premium"
                ? "bg-indigo-500 text-white"
                : "bg-white text-gray-700"
            } text-white rounded-2xl cursor-pointer`}
            onClick={showPremium}
          >
            Premium Package
          </div>
          <div
            className={`px-4 py-1 text-center ${
              pricingPlan === "family"
                ? "bg-indigo-500 text-white"
                : "bg-white text-gray-700"
            } text-white rounded-2xl cursor-pointer`}
            onClick={showFamily}
          >
            Family Package
          </div>
        </div>
        <div className="w-10/12 mx-auto space-y-8">
          {pricingPlan === "family" && (
            <div className="flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-6">
              <Plan
                title="basic"
                price={110}
                description="This is suitable for 3 people"
                items={[
                  "2-3 students",
                  "3 sessions per week",
                  "50 minutes per session",
                ]}
              />
              <Plan
                title="intensive"
                price={180}
                items={[
                  "2-3 students",
                  "5 sessions per week",
                  "50 minutes per session",
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
                    items={["30 minutes", "4 classes /month", "1 classs /week"]}
                  />
                </div>
                <div className="w-full p-4">
                  <Plan
                    title="Silver B"
                    price={40}
                    items={["30 minutes", "8 classes /month", "2 classs /week"]}
                  />
                </div>
                <div className="w-full p-4">
                  <Plan
                    title="Silver C"
                    price={60}
                    items={[
                      "30 minutes",
                      "12 classes /month",
                      "3 classs /week",
                    ]}
                  />
                </div>
              </div>
              <div className="w-full flex flex-col lg:flex-row">
                <div className="w-full p-4">
                  <Plan
                    title="Gold A"
                    price={30}
                    items={["45 minutes", "4 classes /month", "1 classs /week"]}
                  />
                </div>
                <div className="w-full p-4">
                  <Plan
                    title="Gold B"
                    price={60}
                    items={["45 minutes", "8 classes /month", "2 classs /week"]}
                  />
                </div>
                <div className="w-full p-4">
                  <Plan
                    title="Gold C"
                    price={90}
                    items={[
                      "45 minutes",
                      "12 classes /month",
                      "3 classs /week",
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
                      "16 classes /month",
                      "4 classs /week",
                    ]}
                  />
                </div>
                <div className="w-full md:w-1/2 p-4">
                  <Plan
                    title="Silver E"
                    price={100}
                    items={[
                      "30 minutes",
                      "20 classes /month",
                      "5 classs /week",
                    ]}
                  />
                </div>
                <div className="w-full md:w-1/2 p-4">
                  <Plan
                    title="Gold D"
                    price={120}
                    items={[
                      "45 minutes",
                      "16 classes /month",
                      "4 classs /week",
                    ]}
                  />
                </div>
                <div className="w-full md:w-1/2 p-4">
                  <Plan
                    title="Gold E"
                    price={150}
                    items={[
                      "45 minutes",
                      "20 classes /month",
                      "5 classs /week",
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
