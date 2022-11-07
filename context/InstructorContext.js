import React, { createContext, useContext, useState } from "react";
import {
  createUserWithEmailAndPassword,
  deleteUser,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "../config/firebase";
import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  setDoc,
} from "firebase/firestore";

const InstructorContext = createContext();

export const useInstructor = () => useContext(InstructorContext);

const InstructorProvider = ({ children }) => {
  const [instructors, setInstructors] = useState([]);

  const addNewInstructor = async (instructor) => {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      instructor.email,
      instructor.password
    );
    console.log(userCredential.user);
  };

  const addInstructorToDb = async (instructor) => {
    await setDoc(doc(db, "instructors", instructor.uid), {
      displayName: instructor.displayName,
      email: instructor.email,
      uid: instructor.uid,
      role: instructor.role,
      password: instructor.password,
    });
  };

  const getInstructors = () => {
    const q = query(collection(db, "instructors"));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const data = [];
      querySnapshot.forEach((doc) => {
        data.push(doc.data());
      });
      setInstructors(data);
    });
  };

  const deleteInstructor = async (instructor) => {
    await deleteDoc(doc(db, "instructors", instructor.uid));
  };

  return (
    <InstructorContext.Provider
      value={{
        instructors,
        getInstructors,
        addNewInstructor,
        addInstructorToDb,
        deleteInstructor,
      }}
    >
      {children}
    </InstructorContext.Provider>
  );
};

export default InstructorProvider;
