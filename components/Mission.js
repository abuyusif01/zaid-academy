import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useTranslation } from "react-i18next";
import { BsCheck } from "react-icons/bs";

// import Reading2 from "../utils/reading2.avif";
import Slate from "../utils/slatequran.jpeg";
// import vision from "../utils/slatequran.jpeg";

const Mission = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const datas = t("missions", { returnObjects: true });
  return (
    <div className="my-16 md:px-48 flex flex-col-reverse sm:flex-row justify-center items-center">
      <div className="w-full py-4 px-8 md:w-1/2">
        <h4 className="text-gray-800 text-lg md:text-2xl uppercase font-semibold leading-loose tracking-wider">
          Mission
        </h4>
        <p className="text-lg md:text-xl leading-relaxed">{t("learnQuran")}</p>
        <p className="text-sm leading-relaxed text-gray-700">{t("platform")}</p>
        <ul className="mt-6">
          {datas.map((data) => (
            <li
              className="flex text-sm md:text-lg items-center mb-4"
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
              {t("join")}
            </button>
          </Link>
        </div>
      </div>
      <div className="w-full md:w-1/2 relative py-4 px-8">
        <div className="relative md:w-11/12 h-[200px]  md:h-[500px] md:w-[500px] mx-auto">
          <Image
            src={Slate}
            alt="reading"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Mission;
