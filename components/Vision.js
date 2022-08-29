import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useTranslation } from "react-i18next";
import { BsCheck } from "react-icons/bs";

import Reading from "../utils/reading.avif";
import mission from "../utils/mission.jpeg";

const Vision = () => {
  const router = useRouter();
  const { t } = useTranslation();
  const datas = t("visions", { returnObjects: true });
  return (
    <div className="my-16 md:px-24 flex flex-col sm:flex-row justify-center items-center">
      <div className="w-full md:w-1/2 relative py-4 px-8">
        <div className="relative md:w-11/12 h-[200px]  md:h-[500px] md:w-[500px] mx-auto">
          <Image
            src={mission}
            alt="reading"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </div>
      <div className="w-full py-4 px-8 md:w-1/2">
        <h4 className="text-gray-800 text-lg md:text-2xl uppercase font-semibold leading-loose tracking-wider">
          Vision
        </h4>
        <p className="text-lg leading-relaxed">{t("learnQuran")}</p>
        <p className="text-sm leading-relaxed text-gray-700">
          {t("learnLanguage")} <br />
          {t("languages")}
        </p>
        <ul className="mt-6">
          {datas.map((data) => (
            <li
              className="flex items-center mb-4 text-sm md:text-lg"
              key={data}
            >
              <BsCheck className="mr-4 text-3xl text-indigo-500 font-bold" />
              <span>{data}</span>
            </li>
          ))}
        </ul>
        <div className="relative">
          <Link href="/">
            <button
              className="px-12 py-4 rounded-md bg-indigo-500 text-sm text-white"
              onClick={() => router.push("/signup")}
            >
              {t("apply")}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Vision;
