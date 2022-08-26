import React from "react";
import Quran from "../utils/quran.jpeg";
import AboutZaid from "../components/AboutZaid";
import Image from "next/image";
import Link from "next/link";
import Vision from "../components/Vision";
import Mission from "../components/Mission";
import { t } from "i18next";
import { useTranslation } from "react-i18next";
import Head from "next/head";
import Logo from "../utils/logo.png";

const style = {
  backgroundColor: "rgba(0, 0, 0, 0.5)",
};

const About = () => {
  const { t } = useTranslation();
  return (
    <div className="">
      <Head>
        <title>Zaid | About</title>
      </Head>
      <div className="relative">
        <div className="relative w-[100vw] min-h-[450px] md:min-h-[600px]">
          <Image src={Quran} alt="banner" layout="fill" />
        </div>
        <div
          style={style}
          className="absolute top-0 left-0 text-white inline-flex px-4 md:px-32 flex-col justify-center w-[100vw] min-h-[450px] md:min-h-[600px] md:space-y-6"
        >
          {/* <div className="w-24 h-10 cursor-pointer">
            <Image src={Logo} alt="logo" />
          </div> */}
          {/* <h1 className="text-5xl font-bold leading-relaxed">{t("learn")}</h1> */}
          <h2 className="text-3xl md:text-6xl font-bold leading-relaxed ">
            Zaid Academy
          </h2>
        </div>
      </div>
      <div className="my-10">
        <AboutZaid />
        <Vision />
        <Mission />
      </div>
    </div>
  );
};

export default About;
