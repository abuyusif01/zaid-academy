import Head from "next/head";
import React from "react";
import AboutSection from "../components/AboutSection";
import Banner from "../components/Banner";
import ProgramSection from "../components/ProgramSection";
import TeacherSection from "../components/TeacherSection";

const Home = () => {
  return (
    <div className="">
      <Head>
        <title>Zaid | Home</title>
        <meta name="description" content="Zaid Academy, Learning Quran" />
        <meta
          name="keywords"
          content="Learn Quran, Teach Quran, Help me learn quran, Quran class, Quran class online"
        />
      </Head>
      <Banner />
      <div className="max-w-full">
        <AboutSection />
      </div>
      <div className="py-12">
        <ProgramSection />
      </div>
      <div className="bg-gray-100 bg-opacity-50 py-12">
        <TeacherSection />
      </div>
    </div>
  );
};

export default Home;
