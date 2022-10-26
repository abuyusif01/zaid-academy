import Head from "next/head";
import React from "react";
import AboutSection from "../components/AboutSection";
import Banner from "../components/Banner";
import PricingSection from "../components/PricingSection";
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

      <div className="bg-gray-100 py-12">
        <TeacherSection />
      </div>
      <div className="py-12">
        <PricingSection />
      </div>
      <div className="py-12">
        <ProgramSection />
      </div>
    </div>
  );
};

export default Home;
