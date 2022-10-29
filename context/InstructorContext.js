import React, { createContext, useContext, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../config/firebase";
import { collection, doc, onSnapshot, query, setDoc } from "firebase/firestore";

const InstructorContext = createContext();

export const useInstructor = () => useContext(InstructorContext);

const InstructorProvider = ({ children }) => {
  const [instructors, setInstructors] = useState([]);
  const addNewInstructor = async (email, password) => {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(userCredential.user);
  };
  const addInstructorToDb = async (instructor) => {
    await setDoc(doc(db, "instructors", instructor.uid), instructor);
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
  return (
    <InstructorContext.Provider
      value={{
        instructors,
        getInstructors,
        addNewInstructor,
        addInstructorToDb,
      }}
    >
      {children}
    </InstructorContext.Provider>
  );
};

export default InstructorProvider;
