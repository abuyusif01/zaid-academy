import React from "react";
import { useTranslation } from "react-i18next";
import Ousmane from "../utils/ousmane.jpeg";
import Biallo from "../utils/muhamed-1.JPEG";
import Mujtaba from "../utils/muhamed2.png";

import Teacher from "./Teacher";

const TeacherSection = () => {
  const { t } = useTranslation();
  const teachers = t("teachers", { returnObjects: true });
  const images = [Ousmane, Biallo, Mujtaba];

  return (
    <div className="md:px-24">
      <p className="text-center md:text-2xl font-bold my-6 uppercase">
        {t("popularTeacher")}
      </p>
      <div className="flex flex-col md:flex-row items-center justify-center">
        {teachers.map((teacher) => (
          <Teacher
            key={teacher.name}
            teacher={teacher}
            image={images[teacher.id - 1]}
          />
        ))}
      </div>
    </div>
  );
};

export default TeacherSection;
