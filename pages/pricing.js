import Head from "next/head";
import React from "react";
import { useTranslation } from "react-i18next";
import Pricing from "../components/Pricing";

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
      <h4 className="uppercase text-2xl text-center font-bold">Pricing</h4>
      <p className="text-lg text-gray-600 text-center">{t("Beginners")}</p>
      <div>
        <div className="flex justify-center">
          <Pricing
            bestValue={false}
            title="Beginners"
            description={t("family")}
            price={`110`}
            items={BeginnersItem}
            programs={[]}
          />
          <Pricing
            bestValue={true}
            title="Beginners Intensive"
            description={t("oneOnOne")}
            price={`180`}
            items={BeginnersIntensiveItem}
          />
        </div>
        <p className="text-lg text-gray-600 text-center">Hifz</p>
        <div className="flex justify-center">
          <Pricing
            bestValue={false}
            title="Hifz"
            description={t("family")}
            price={`110`}
            items={HifzItems}
            programs={[]}
          />
          <Pricing
            bestValue={true}
            title="Hifz Intensive"
            description={t("oneOnOne")}
            price={`180`}
            items={HifzIntensiveItems}
          />
        </div>
        <p className="text-lg text-gray-600 text-center">Tilawah</p>
        <div className="flex justify-center">
          <Pricing
            bestValue={false}
            title="Tilawah"
            description={t("family")}
            price={`110`}
            items={TilawahItem}
            programs={[]}
          />
          <Pricing
            bestValue={true}
            title="Tilawah Intensive"
            description={t("oneOnOne")}
            price={180}
            items={TilawahIntensiveItem}
          />
        </div>
        <p className="text-lg text-gray-600 text-center">Murajah</p>
        <div className="flex justify-center">
          <Pricing
            bestValue={false}
            title="Murajah"
            description={t("family")}
            price={`110`}
            items={MurajaItem}
          />
          <Pricing
            bestValue={true}
            title="Murajah Intensive"
            description={t("oneOnOne")}
            price={180}
            items={MurajaIntensiveItem}
          />
        </div>
      </div>
    </div>
  );
};

export default PricingX;
