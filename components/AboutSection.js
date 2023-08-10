import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { BsCheck } from "react-icons/bs";
import Reading2 from "../utils/childreciter.jpg";

// const datas = [
//   "Provide unrestricted access to Quran Education",
//   "Ease the process of learning the Quran",
//   "Teach Quran in a way that's true to Islamic principles",
// ];

const AboutSection = () => {
  const { t, ready } = useTranslation();
  const router = useRouter();
  if (!ready) return "loading translations....";
  const datas = t("visions", { returnObjects: true });
  return (
    <section className="my-16 flex flex-col sm:flex-row justify-center items-center">
      <motion.div
        initial={{ opacity: 0, x: -300 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full md:w-1/2 relative py-4 px-8"
      >
        <div className="relative md:w-11/12 h-[200px]  md:h-[500px] md:w-[500px] mx-auto">
          <Image
            src={Reading2}
            alt="reading"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </motion.div>
      <motion.div className="w-full py-4 px-8 md:w-1/2">
        <motion.h4
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-gray-800 text-2xl uppercase font-semibold leading-loose tracking-wider"
        >
          {t("we")}
        </motion.h4>
        <motion.p
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl leading-relaxed"
        >
          {t("learnQuran")}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-sm leading-relaxed text-gray-700"
        >
          {t("learnLanguage")} <br />
          {t("languages")}
        </motion.p>
        <ul className="mt-6">
          {datas.map((data, index) => (
            <motion.li
              initial={{ opacity: 0, x: 300 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.25 * (index + 1) }}
              viewPort={{ once: true }}
              className="flex items-center mb-4"
              key={data}
            >
              <BsCheck className="mr-4 text-3xl text-sm text-indigo-500 font-bold" />
              <span>{data}</span>
            </motion.li>
          ))}
        </ul>
        <div className="relative">
          <Link href="/">
            <motion.button
              initial={{ opacity: 0, x: 300 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewPort={{ once: true }}
              className="px-12 py-4 rounded-md bg-indigo-500 text-sm text-white"
              onClick={() => router.push("/signup")}
            >
              {t("apply")}
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
