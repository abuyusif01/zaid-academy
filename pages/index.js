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
      </Head>
      <Banner />
      <AboutSection />
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
