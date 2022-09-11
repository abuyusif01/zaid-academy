import React from "react";
import Image from "next/image";
import { BsCheck } from "react-icons/bs";
import { useRouter } from "next/router";
import Head from "next/head";
import { useTranslation } from "react-i18next";
import Biallo from "../../utils/muhamed-1.JPEG";
import Mujtaba from "../../utils/muhamed2.png";
import Ousmane from "../../utils/ousmane.jpeg";

const IntructorsDetail = (props) => {
  const { t } = useTranslation();
  const teachers = t("teachers", { returnObjects: true });
  const images = [Ousmane, Biallo, Mujtaba];
  const { query } = useRouter();
  const id = query.id * 1;
  const teacher = teachers.find((teach) => teach.id === id);
  return (
    <div className="md:my-10 md:px-24">
      <Head>
        <title>{teacher.name}</title>
      </Head>
      <div className="flex flex-col md:flex-row justify-center">
        <div className="relative w-full md:w-1/3 h-[650px]">
          <Image
            src={images[teacher.id - 1]}
            alt="instructor"
            layout="fill"
            objectFit="cover"
            objectPosition="top"
            className="rounded-md"
          />
        </div>
        <div className="w-full md:w-2/3 p-8 md:p-12 space-y-4">
          <h1 className="text-gray-800 text-2xl font-bold tracking-wide">
            {teacher.name}
          </h1>
          <h4 className="text-gray-600 text-sm">{teacher.role}</h4>
          {/* <h2 className="text-gray-800 text-sm font-bold">Short Bio</h2> */}
          <p className="text-gray-600 text-justify text-sm md:text-base leading-loose md:leading-loose">
            {teacher.shortBio}
          </p>
          <h2 className="text-gray-800 text-sm font-bold">Education</h2>
          <ul>
            {teacher.education.map((edu) => (
              <li
                className="flex text-sm capitalize md:text-base items-center text-gray-600 mb-2"
                key={edu}
              >
                <BsCheck className="mr-4 text-3xl text-indigo-500 font-bold" />
                <span className="capitalize">{edu}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default IntructorsDetail;
