import React, { useEffect, useRef, useState } from "react";
// import Quran from "../utils/quran.jpeg";
import AboutZaid from "../components/AboutZaid";
// import Image from "next/image";
// import Link from "next/link";
import Vision from "../components/Vision";
import Mission from "../components/Mission";
import i18n from "i18next";
import { BsFillPauseFill, BsFillPlayFill } from "react-icons/bs";
import { useTranslation, initReactI18next } from "react-i18next";
import Head from "next/head";
import Video from "../components/Video";

const style = {
  backgroundColor: "rgba(0, 0, 0, 0.2)",
};

const About = ({ url }) => {
  const { t } = useTranslation();

  return (
    <div className="">
      <Head>
        <title>Zaid | About</title>
      </Head>
      {/* <div className="relative">
        <div className="relative w-[100vw] min-h-[450px] md:min-h-[450px]">
          <Image src={Quran} alt="banner" layout="fill" />
        </div>
        <div
          style={style}
          className="absolute top-0 left-0 text-white inline-flex px-4 md:px-32 flex-col justify-center w-[100vw] min-h-[450px] md:min-h-[450px] md:space-y-6"
        >
          <h2 className="text-3xl md:text-7xl font-bold leading-relaxed ">
            Zaid Academy
          </h2>
          <p className="md:w-2/3 leading-relaxed mt-10 italic text-sm md:text-xl">
            {t("aboutVerse")}
          </p>
        </div>
      </div> */}
      <Video url={url} />
      <div className="my-10 md:px-24">
        <AboutZaid />
        <Vision />
        <Mission />
      </div>
    </div>
  );
};

export default About;

export const getServerSideProps = async () => {
  try {
    return {
      props: {
        url: "https://res.cloudinary.com/iium-gombak-campus/video/upload/v1666535776/about_fuotjs.mp4",
      },
    };
  } catch (error) {
    console.log(error);
  }
};
