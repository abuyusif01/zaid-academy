import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

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
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className="text-center md:text-2xl font-bold my-6 uppercase"
      >
        {t("popularTeacher")}
      </motion.p>
      <div className="flex flex-wrap items-center justify-center">
        {teachers.splice(0, 3).map((teacher) => (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="p-4 w-full md:w-1/3 lg:w-1/4"
            key={teacher.uid}
          >
            <Teacher teacher={teacher} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TeacherSection;
