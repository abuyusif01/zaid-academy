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
    {
      link: `beginners (alphabet)`,
      name: `${t("Beginners")}`,
      details: BeginnersDetails,
    },
    { link: `tilawah`, name: "Tilawah", details: TilawahDetails },
    { link: `Hifz`, name: "Hifz", details: HifzDetails },
    { link: `muraja`, name: "Muraja", details: MurajaDetails },
  ];
  return (
    <div className="space-y-12">
      <div className="text-center">
        <h2 className="text-center inline font-semibold px-12 py-4 rounded-md text-2xl">
          {t("ourProgram")}
        </h2>
      </div>
      <p className="text-center font-semibold text-xl">{t("chooseProgram")}</p>
      <div className="flex flex-row flex-wrap justify-center lg:mx-40">
        {programs.map((program) => (
          <div
            key={program.name}
            className="w-full lg:w-1/2 p-4 cursor-pointer"
          >
            <div className="w-full border border-gray-200 rounded-lg px-6 py-8 space-y-4 hover:shadow-lg ">
              <h2 className="text-2xl  font-semibold">{program.name}</h2>
              <p className=" leading-relaxed text-justify">{program.details}</p>
              <button
                className="px-12 select-none py-3 rounded-md bg-indigo-500 text-sm text-white"
                onClick={() => {
                  console.log(program.name);
                  router.push(
                    `/pricing/${program.link
                      .split(" ")
                      .join("-")
                      .toLowerCase()}`
                  );
                }}
              >
                {t("enroll")}
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center">
        <Link href="/pricing">
          <button className="px-12 py-5 rounded-md bg-indigo-500 text-sm text-white">
            {t("seePricings")}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProgramSection;
