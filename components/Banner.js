/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Trans, useTranslation } from "react-i18next";
import Quran from "../utils/quran.jpeg";

const style = {
  backgroundColor: "rgba(0, 0, 0, 0.5)",
};

const Banner = () => {
  const { t } = useTranslation();
  return (
    <div className="relative">
      <div className="relative w-[100vw] h-[600px]">
        <Image src={Quran} alt="banner" layout="fill" />
      </div>
      <div
        style={style}
        className="absolute top-0 left-0 text-white px-24 inline-flex flex-col justify-center py-10 w-[100vw] h-[600px]"
      >
        <h1 className="text-5xl font-bold leading-relaxed">{t("learn")}</h1>

        <h2 className="text-5xl font-bold leading-relaxed ">
          {t("bannerText")}
        </h2>
        <h2 className="text-5xl font-bold leading-relaxed ">
          {t("bannerText1")}
        </h2>
        <p className="xl:w-2/3 leading-relaxed mt-10 italic text-sm">
          "{t("verse")}" (Surah fatir verse 29)
        </p>
        <div className="relative">
          <Link href="/">
            <button className="px-12 py-4 rounded-md bg-indigo-500 text-sm text-white mt-8">
              {t("apply")}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
