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
  arrayUnion,
  getDocs,
} from "firebase/firestore";
import { db } from "../config/firebase";

const StudentContext = createContext();
export const useStudent = () => useContext(StudentContext);

const StudentProvider = ({ children }) => {
  const [studentExit, setStudentExist] = useState(false);
  const [pupil, setPupil] = useState({});
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
    await setDoc(doc(db, "students", student.uid), student);
  };

  const addAttendance = async (id, attendance) => {
    const studentRef = doc(db, "students", id);
    try {
      await updateDoc(studentRef, {
        attendance: arrayUnion(attendance),
      });
    } catch (error) {
      console.log(error);
    }
  };

  const checkStudent = async (email, action = () => {}) => {
    const q = query(collection(db, "students"), where("email", "==", email));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const student = [];
      querySnapshot.forEach((doc) => {
        if (doc.exists()) {
          student.push(doc.data());
        } else {
          console.log("Student doees not exist yet");
        }
      });
      setPupil(student[0]);
    });
  };

  return (
    <StudentContext.Provider
      value={{
        pupil,
        studentExit,
        students,
        classes,
        checkStudent,
        getStudents,
        selfRegister,
        updateStudent,
        getStudentByInstructor,
        addAttendance,
        // registerNewStudent,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
};

export default StudentProvider;
