import { createContext, useContext, useState } from "react";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../config/firebase";

const StudentContext = createContext();
export const useStudent = () => useContext(StudentContext);

const StudentProvider = ({ children }) => {
  const [student, setStudent] = useState({});
  const [students, setStudents] = useState([]);

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

  const registerNewStudent = async (user) => {
    const studentRef = doc(db, "students", user.uid);
    const docSnap = await getDoc(studentRef);
    if (!docSnap.exists()) {
      await setDoc(doc(db, "students", user.uid), {
        id: user.uid,
        name: user.displayName,
        email: user.email,
        gender: "",
        nationality: "",
        language: "",
        course: "",
        lecturer: "",
        payment: "",
        expiryDate: "",
        attendance: [{ date: "", status: "Upcoming" }],
      });
      setStudent({
        id: user.uid,
        name: user.displayName,
        email: user.email,
        gender: "",
        nationality: "",
        language: "",
        course: "",
        lecturer: "",
        payment: "",
        expiryDate: "",
        attendance: [{ date: "", status: "Upcoming" }],
      });
    } else {
      setStudent(docSnap.data());
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
        getStudents,
        registerNewStudent,
        selfRegister,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
};

export default StudentProvider;
