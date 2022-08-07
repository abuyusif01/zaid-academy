import React from "react";
import Image from "next/image";
import Madrasah from "../../utils/madrosah-sunnah-UyWPZMofyi0-unsplash.jpg";
import teachers from "../../utils/teachers";
import Teacher from "../../components/Teacher";
import Head from "next/head";
import Biallo from "../../utils/muhamed-1.jpg";
import Mujtaba from "../../utils/muhamed2.jpg";
import { useTranslation } from "react-i18next";

const style = {
  backgroundColor: "rgba(0, 0, 0, 0.5)",
};

const Instructor = () => {
  const { t } = useTranslation();
  const teachers = t("teachers", { returnObjects: true });
  const images = [Biallo, Biallo, Mujtaba];
  return (
    <div className="relative">
      <Head>
        <title>Zaid | Instructors</title>
      </Head>
      <div className="">
        <div className="relative w-[100vw] h-[600px]">
          <Image src={Madrasah} alt="banner" layout="fill" objectFit="cover" />
        </div>
        <div
          style={style}
          className="absolute top-0 left-0 text-white px-24 inline-flex flex-col justify-center py-10 w-[100vw] h-[600px]"
        >
          <h1 className="text-5xl font-bold leading-relaxed">Instructors</h1>
        </div>
      </div>
      <div className="my-20">
        <h1 className="text-2xl font-bold leading-loose tracking-wide text-center text-gray-800">
          {t("popularTeacher")}
        </h1>
        <p className="text-center font-light text-gray-500 leading-loose">
          {t("struggle")}
        </p>
        <div className="flex items-center justify-center mt-10e">
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
