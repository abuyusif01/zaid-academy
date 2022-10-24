import React, { createContext, useContext } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";

const InstructorContext = createContext();

export const useInstructor = () => useContext(InstructorContext);

const InstructorProvider = ({ children }) => {
  const addNewInstructor = async (email, password) => {
    await createUserWithEmailAndPassword(auth, email, password);
  };
  return (
    <InstructorContext.Provider value={{ addNewInstructor }}>
      {children}
    </InstructorContext.Provider>
  );
};

export default InstructorProvider;
