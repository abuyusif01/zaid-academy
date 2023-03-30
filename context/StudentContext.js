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
  deleteDoc,
  FieldValue,
  arrayRemove,
} from "firebase/firestore";
import { db, storage } from "../config/firebase";
import { getDownloadURL, ref } from "firebase/storage";

const StudentContext = createContext();
export const useStudent = () => useContext(StudentContext);

const StudentProvider = ({ children }) => {
  const [studentExit, setStudentExist] = useState(false);
  const [pupil, setPupil] = useState([]);
  const [students, setStudents] = useState([]);
  const [classes, setClasses] = useState([]);
  const [studentById, setStudentById] = useState({});

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

  const getStudentById = async (uid) => {
    const studentRef = doc(db, "students", uid);
    const docSnap = await getDoc(studentRef);

    if (docSnap.exists()) {
      setStudentById(docSnap.data());
    } else {
      console.log("No such document!");
    }
  };

  const updateStudent = async (id, data) => {
    console.log(data);
    // try {
    //   const studentRef = doc(db, "students", id);
    //   await updateDoc(studentRef, data);
    // } catch (error) {
    //   console.log(error.message);
    // }
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
      setPupil(student);
    });
  };

  const checkUser = async (user) => {
    const docRef = doc(db, "students", user.uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return true;
    } else {
      return false;
    }
  };

  const deleteStudent = async (student) => {
    await deleteDoc(doc(db, "students", student.uid));
  };

  const addClass = async (uid, data) => {
    const studentRef = doc(db, "students", uid);
    await updateDoc(studentRef, {
      classes: arrayUnion(data),
    });
  };

  const removeClass = async (uid, data) => {
    const studentRef = doc(db, "students", uid);
    await updateDoc(studentRef, {
      classes: data,
    });
  };

  const addToPaymentHistory = async (uid, data) => {
    const studentRef = doc(db, "students", uid);
    await updateDoc(studentRef, {
      payments: arrayUnion(data),
    });
  };

  const setExpiry = async (uid, data) => {
    const studentRef = doc(db, "students", uid);
    await updateDoc(studentRef, {
      expiry: data,
      active: true,
    });
  };

  const getVideo = async () => {
    return "https://firebasestorage.googleapis.com/v0/b/zaid-276fa.appspot.com/o/video%2Fabout.MP4?alt=media&token=3a63c2eb-d2b5-4676-b085-e1ad4042eb2d";
  };

  return (
    <StudentContext.Provider
      value={{
        pupil,
        studentExit,
        students,
        classes,
        checkStudent,
        checkUser,
        getStudents,
        selfRegister,
        updateStudent,
        getStudentByInstructor,
        addAttendance,
        deleteStudent,
        getVideo,
        getStudentById,
        studentById,
        addClass,
        removeClass,
        addToPaymentHistory,
        setExpiry,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
};

export default StudentProvider;
