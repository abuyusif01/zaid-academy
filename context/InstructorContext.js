import React, { createContext, useContext } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";

const InstructorContext = createContext();

export const useInstructor = () => useContext(InstructorContext);

const InstructorProvider = ({ children }) => {
  const addNewInstructor = async (email, password) => {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(userCredential.user);
  };
  const addInstructorToDb = () => {};
  return (
    <InstructorContext.Provider value={{ addNewInstructor, addInstructorToDb }}>
      {children}
    </InstructorContext.Provider>
  );
};

export default InstructorProvider;
