/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { Trans, useTranslation } from "react-i18next";
import Quran from "../utils/quran.jpeg";

const style = {
  backgroundColor: "rgba(0, 0, 0, 0.5)",
};

const Banner = () => {
  const router = useRouter();
  const { t } = useTranslation();
  return (
    <div className="relative">
      <div className="relative w-[100vw] min-h-[650px]">
        <Image src={Quran} alt="banner" layout="fill" className="w-[100vw]" />
      </div>
      <div
        style={style}
        className="absolute top-0 left-0 text-white inline-flex px-4 md:px-32 flex-col justify-center w-[100vw] min-h-[650px] md:space-y-6"
      >
        <h1 className="md:text-5xl text-4xl font-bold leading-relaxed">
          {t("learn")}
        </h1>

        <h2 className="md:text-5xl text-4xl font-bold leading-relaxed ">
          {t("bannerText")}
        </h2>
        <h2 className="md:text-5xl text-4xl font-bold leading-relaxed ">
          {t("bannerText1")}
        </h2>
        <p className="md:w-2/3 leading-relaxed mt-10 italic text-sm md:text-lg">
          "{t("verse")}" (Surah fatir verse 29)
        </p>
        <div className="relative">
          <button
            className="px-12 py-4 rounded-md bg-indigo-500 text-sm text-white mt-8"
            onClick={() => router.push("/signup")}
          >
            {t("apply")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
