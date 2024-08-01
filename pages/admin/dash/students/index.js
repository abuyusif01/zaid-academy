import Head from "next/head";
import React, { useEffect } from "react";
import { useStudent } from "../../../../context/StudentContext";
import Student1 from "../../../../components/Student1";

const Students = () => {
  const { students, getStudents } = useStudent();

  useEffect(() => {
    getStudents();

    const scrollPosition = localStorage.getItem('scrollPosition');
    if (scrollPosition) {
      window.scrollTo(0, parseInt(scrollPosition, 10));
    }

    const handleScroll = () => {
      localStorage.setItem('scrollPosition', window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative">
      <Head>
        <title>Admin Students</title>
      </Head>
      <div className="flex flex-wrap justify-start">
        {[...students]
          .filter((stud) => !stud.active)
          .sort((a, b) => b.date - a.date)
          .map((student) => (
            <div
              key={student.uid}
              className="w-full sm:w-1/2 xl:w-1/3 2xl:w-1/4 p-4"
            >
              <Student1 student={student} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Students;
