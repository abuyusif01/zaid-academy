import React from "react";
import Image from "next/image";
import Madrasah from "../../utils/madrosah-sunnah-UyWPZMofyi0-unsplash.jpg";
import teachers from "../../utils/teachers";
import Teacher from "../../components/Teacher";
import Head from "next/head";
import Ousmane from "../../utils/ousmane.jpeg";
import Biallo from "../../utils/muhamed-1.JPEG";
import Mujtaba from "../../utils/muhamed2.png";
import Banner1 from "../../utils/banner1.jpeg";
import { useTranslation } from "react-i18next";

const style = {
  backgroundColor: "rgba(0, 0, 0, 0.5)",
};

const Instructor = () => {
  const { t } = useTranslation();
  const teachers = t("teachers", { returnObjects: true });
  const images = [Ousmane, Biallo, Mujtaba];
  return (
    <div className="relative">
      <Head>
        <title>Zaid | Instructors</title>
      </Head>
      <div className="relative">
        <div className="relative w-[100vw] min-h-[450px] md:min-h-[600px]">
          <Image
            src={Banner1}
            alt="banner"
            layout="fill"
            objectFit="cover"
            // objectPosition="bottom"
          />
        </div>
        <div
          style={style}
          className="absolute top-0 left-0 text-white inline-flex px-4 md:px-32 flex-col justify-center w-[100vw] min-h-[450px] md:min-h-[600px] md:space-y-6"
        >
          <h1 className="text-7xl font-bold leading-relaxed">Instructors</h1>
          <p className="md:w-2/3 leading-relaxed mt-10 italic text-sm md:text-xl">
            {t("instructorVerse")}
          </p>
        </div>
      </div>
      <div className="my-20 px-4">
        <h1 className="md:text-2xl text-lg font-bold leading-loose tracking-wide text-center text-gray-800">
          {t("popularTeacher")}
        </h1>
        <p className="text-center font-light text-gray-500 leading-loose">
          {t("struggle")}
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center mt-10">
          {teachers.map((teacher) => (
            <Teacher
              key={teacher.name}
              teacher={teacher}
              image={images[teacher.id - 1]}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Instructor;
