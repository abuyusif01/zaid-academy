import { createContext, useContext, useState } from "react";
import {
  collection,
  doc,
  getDoc,
  query,
  setDoc,
  onSnapshot,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../config/firebase";

const StudentContext = createContext();
export const useStudent = () => useContext(StudentContext);

const StudentProvider = ({ children }) => {
  const [student, setStudent] = useState({});
  const [students, setStudents] = useState([]);
  const [classes, setClasses] = useState([]);

  const getStudents = () => {
    const q = query(collection(db, "students"));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const stud = [];
      querySnapshot.forEach((doc) => {
        stud.push(doc.data());
      });
      setStudents(stud);
    });
  };

  const getStudentByInstructor = (lecturer) => {
    const q = query(
      collection(db, "students"),
      where("lecturer", "==", lecturer)
    );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const msg = [];
      querySnapshot.forEach((doc) => {
        msg.push({ id: doc.id, ...doc.data() });
      });
      setClasses(msg);
    });
  };

  const updateStudent = async (id, data) => {
    try {
      const studentRef = doc(db, "students", id);
      await updateDoc(studentRef, data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const selfRegister = async (student) => {
    await setDoc(doc(db, "students", student.id), student);
  };

  return (
    <StudentContext.Provider
      value={{
        student,
        students,
        classes,
        getStudents,
        selfRegister,
        updateStudent,
        getStudentByInstructor,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
};

export default StudentProvider;
