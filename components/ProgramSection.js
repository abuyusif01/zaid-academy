import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useTranslation } from "react-i18next";

const ProgramSection = () => {
  const router = useRouter();
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
    <div className="space-y-8">
      <h2 className="text-center text-2xl">Our Programs</h2>
      <div className="flex flex-row flex-wrap justify-center lg:mx-40">
        {programs.map((program) => (
          <div
            key={program.name}
            className="w-full lg:w-1/2 p-4 cursor-pointer"
          >
            <div
              onClick={() =>
                router.push(
                  `/pricing/${program.name.split(" ").join("-").toLowerCase()}`
                )
              }
              className="w-full border border-gray-200 rounded-lg px-6 py-8 space-y-4 hover:shadow-lg"
            >
              <h2 className="text-2xl text-black font-semibold">
                {program.name}
              </h2>
              <p className="text-gray-500 leading-relaxed">{program.details}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center">
        <Link href="/pricing">
          <button className="px-12 py-4 rounded-md bg-indigo-500 text-sm text-white">
            {t("seePricings")}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProgramSection;
