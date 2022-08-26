import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";
import Pricing from "./Pricing";

// const BeginnersItem = [
//   "Introduction to Arabic Alphabet",
//   "How to read",
//   "3 sessions per week",
//   "Recommended for Beginners",
//   "50 minutes per session",
// ];

const BeginnersIntensiveItem = [
  "Introduction to Arabic Alphabet",
  "How to read",
  "Recommended for Beginners",
  "5 sessions per week",
  "50 minutes per session",
];

const HifzItems = [
  "Memorization",
  "3 sessions per week",
  "50 minutes per session",
];

const HifzIntensiveItems = [
  "Memorization",
  "5 sessions per week",
  "50 minutes per session",
];

const TilawahItem = [
  "Reading",
  "Recommended for older student",
  "3 sessions per week",
  "50 minutes per session",
];

const TilawahIntensiveItem = [
  "Reading",
  "Recommended for older student",
  "5 sessions per week",
  "50 minutes per session",
];

const MurajaItem = [
  "Revision",
  "Recommended for Hafiz",
  "3 sessions per week",
  "50 minutes per session",
];

const MurajaIntensiveItem = [
  "Revision",
  "Recommended for Hafiz",
  "5 sessions per week",
  "50 minutes per session",
];

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

const PricingSection = () => {
  const { t } = useTranslation();
  const BeginnersItem = t("BeginnersItem", { returnObjects: true });
  const HifzItems = t("HifzItems", { returnObjects: true });
  const TilawahItem = t("TilawahItem", { returnObjects: true });
  return (
    <div className="px-4 md:px-24">
      <p className="text-center text-2xl font-bold my-6 uppercase">Pricings</p>
      <div className="flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-6">
        <Pricing
          bestValue={false}
          title="Beginners"
          description={t("oneOnOne")}
          price={`110`}
          items={BeginnersItem}
        />
        <Pricing
          bestValue={false}
          title="Hifz"
          description={t("oneOnOne")}
          price={`110`}
          items={HifzItems}
        />
        <Pricing
          bestValue={false}
          title="Tilawah"
          description={t("oneOnOne")}
          price={`110`}
          items={TilawahItem}
        />
      </div>
      <div className="flex justify-center my-6">
        <Link href="/pricing">
          <button className="px-12 py-4 rounded-md bg-indigo-500 text-sm text-white">
            See more Pricing
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PricingSection;
