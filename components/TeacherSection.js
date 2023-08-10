import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

import Teacher from "./Teacher";
import { useInstructor } from "../context/InstructorContext";

const TeacherSection = () => {
  const { t } = useTranslation();
  const teachers = t("teachers", { returnObjects: true });
  const { executives, getExecutives } = useInstructor();

  useEffect(() => {
    getExecutives();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="md:px-24">
      <p className="text-center md:text-2xl font-bold my-6 uppercase">
        {t("popularTeacher")}
      </p>
      <div className="flex flex-wrap items-center justify-center">
        {teachers.splice(0, 3).map((teacher) => (
          <div className="p-4 w-full md:w-1/3 lg:w-1/4" key={teacher.uid}>
            <Teacher teacher={teacher} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeacherSection;
