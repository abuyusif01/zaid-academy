import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useInstructor } from "../../../../context/InstructorContext";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../../../../config/firebase";
import Head from "next/head";
import Student1 from "../../../../components/Student1";

const InstructorDetails = () => {
  const { getInstructorById, instructorById } = useInstructor();
  const [students, setStudents] = useState([]);
  const router = useRouter();
  const { id } = router.query;

  const getStudents = () => {
    const q = query(collection(db, "students"), where("instructor", "==", id));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const student = [];
      querySnapshot.forEach((doc) => {
        if (doc.exists()) {
          student.push(doc.data());
        } else {
          console.log("Student doees not exist yet");
        }
      });
      setStudents(student);
    });
  };

  useEffect(() => {
    (async () => {
      await getInstructorById(id);
    })();
    getStudents();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(students);
  return (
    <div>
      <Head>
        <title>{instructorById.fullName}</title>
      </Head>
      <div>
        <div>
          <p className="text-xl font-semibold">{instructorById.fullName}</p>
        </div>
        <div>
          {students.length === 0 ? (
            <p className="text-center my-10">
              No Student registered to Instructor {instructorById.fullName}
            </p>
          ) : null}
        </div>
        <div className="flex flex-wrap justify-start">
          {students.map((student) => (
            <div key={student.uid} className="w-[360px] p-4">
              <Student1 student={student} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InstructorDetails;
