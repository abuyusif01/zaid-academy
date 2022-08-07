import React from "react";
import { useTranslation } from "react-i18next";
import Biallo from "../utils/muhamed-1.jpg";
import Mujtaba from "../utils/muhamed2.jpg";

import Teacher from "./Teacher";

const TeacherSection = () => {
  const { t } = useTranslation();
  const teachers = t("teachers", { returnObjects: true });
  const images = [Biallo, Biallo, Mujtaba];

  return (
    <div className="px-24">
      <p className="text-center text-2xl font-bold my-6 uppercase">
        {t("popularTeacher")}
      </p>
      <div className="flex items-center justify-center">
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
