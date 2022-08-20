import React from "react";
import Image from "next/image";
import { BsCheck } from "react-icons/bs";
import { useRouter } from "next/router";
import Head from "next/head";
import { useTranslation } from "react-i18next";
import Biallo from "../../utils/muhamed-1.jpg";
import Mujtaba from "../../utils/muhamed2.jpg";
import Ousmane from "../../utils/ousmane.png";

const IntructorsDetail = (props) => {
  const { t } = useTranslation();
  const teachers = t("teachers", { returnObjects: true });
  const images = [Ousmane, Biallo, Mujtaba];
  const { query } = useRouter();
  const id = query.id * 1;
  const teacher = teachers.find((teach) => teach.id === id);
  return (
    <div className="my-10 px-24">
      <Head>
        <title>{teacher.name}</title>
      </Head>
      <div className="flex justify-center">
        <div className="relative w-1/3 h-[650px]">
          <Image
            src={images[teacher.id - 1]}
            alt="instructor"
            layout="fill"
            objectFit="cover"
            objectPosition="top"
            className="rounded-md"
          />
        </div>
        <div className="w-2/3 p-12 space-y-4">
          <h1 className="text-gray-800 text-2xl font-bold tracking-wide">
            {teacher.name}
          </h1>
          <h4 className="text-gray-600 text-sm">{teacher.role}</h4>
          <h2 className="text-gray-800 font-bold">Teachers Details</h2>
          <h2 className="text-gray-800 text-sm font-bold">Short Bio</h2>
          <p className="text-gray-600 leading-loose">{teacher.shortBio}</p>
          <h2 className="text-gray-800 text-sm font-bold">Education</h2>
          <ul>
            {teacher.education.map((edu) => (
              <li className="flex items-center text-gray-600 mb-2" key={edu}>
                <BsCheck className="mr-4 text-3xl text-indigo-500 font-bold" />
                <span>{edu}</span>
              </li>
            ))}
          </ul>
          <h2 className="text-gray-800 text-sm font-bold">
            Certificate Skills and Awards
          </h2>
          <ul>
            {teacher.certificate.map((cert) => (
              <li className="flex items-center text-gray-600 mb-2" key={cert}>
                <BsCheck className="mr-4 text-3xl text-indigo-500 font-bold" />
                <span>{cert}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default IntructorsDetail;
