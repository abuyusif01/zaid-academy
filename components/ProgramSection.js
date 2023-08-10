import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

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
    <aside className="space-y-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center space-y-6"
      >
        <h2 className="text-center inline font-semibold px-12 py-4 rounded-md text-2xl">
          {t("ourProgram")}
        </h2>
        <p className="text-center font-semibold text-xl">
          {t("chooseProgram")}
        </p>
      </motion.div>
      <div className="flex flex-row flex-wrap justify-center lg:mx-40">
        {programs.map((program, index) => (
          <div
            key={program.name}
            className="w-full lg:w-1/2 p-4 cursor-pointer"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25 * (index + 1) }}
              className="w-full border border-gray-200 rounded-lg px-6 py-8 space-y-4 hover:shadow-lg "
            >
              <h2 className="text-2xl  font-semibold">{program.name}</h2>
              <p className=" leading-relaxed text-justify">{program.details}</p>
              <button
                className="px-12 select-none py-3 rounded-md bg-indigo-500 text-sm text-white"
                onClick={() => {
                  console.log(program.name);
                  router.push(`/signup`);
                }}
              >
                {t("enroll")}
              </button>
            </motion.div>
          </div>
        ))}
      </div>
      <div className="text-center">
        <Link href="/pricing">
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="px-12 py-4 rounded-md bg-indigo-500 text-sm text-white"
          >
            {t("seePricings")}
          </motion.button>
        </Link>
      </div>
    </aside>
  );
};

export default ProgramSection;
