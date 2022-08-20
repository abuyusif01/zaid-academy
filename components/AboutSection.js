import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useTranslation } from "react-i18next";
import { BsCheck } from "react-icons/bs";
import Reading2 from "../utils/reading2.avif";

// const datas = [
//   "Provide unrestricted access to Quran Education",
//   "Ease the process of learning the Quran",
//   "Teach Quran in a way that's true to Islamic principles",
// ];

const AboutSection = () => {
  const { t, ready } = useTranslation();
  const router = useRouter();
  if (!ready) return "loading translations...";
  const datas = t("visions", { returnObjects: true });
  return (
    <div className="px-24 my-16 flex justify-center items-center">
      <div className="w-1/2 p-4 relative">
        <div className="relative h-[400px] w-[400px] mx-auto">
          <Image
            src={Reading2}
            alt="reading"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </div>
      <div className="w-1/2  p-4">
        <h4 className="text-gray-800 text-2xl uppercase font-semibold leading-loose tracking-wider">
          {t("we")}
        </h4>
        <p className="text-xl leading-relaxed">{t("learnQuran")}</p>
        <p className="text-sm leading-relaxed text-gray-700">
          {t("learnLanguage")} <br />
          {t("languages")}
        </p>
        <ul className="mt-6">
          {datas.map((data) => (
            <li className="flex items-center mb-4" key={data}>
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

export default AboutSection;
