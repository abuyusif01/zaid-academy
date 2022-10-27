import Head from "next/head";
import React from "react";
import { useTranslation } from "react-i18next";
import PricingSection from "../components/PricingSection";
import ProgramSection from "../components/ProgramSection";

const ProgramDetails = ({ details }) => <div></div>;

const Program = () => {
  const { t } = useTranslation();
  const BeginnersDetails = t("BeginnersDetails");
  const HifzDetails = t("HifzDetails");
  const TilawahDetails = t("TilawahDetails");
  const MurajaDetails = t("MurajaDetails");
  const programs = [
    { name: "Beginners", details: BeginnersDetails },
    { name: "Tilawah", details: TilawahDetails },
    { name: "Hifz", details: HifzDetails },
    { name: "Muraja", details: MurajaDetails },
  ];
  return (
    <div className="py-12">
      <Head>
        <title>Zaid | Pricing</title>
      </Head>
      <div>
        <ProgramSection />
      </div>
      {/* <div className="flex">
        {programs.map((program) => (
          <div key={program.name}>
            <div>
              <p>{program.name}</p>
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default Program;
