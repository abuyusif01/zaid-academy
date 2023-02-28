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
  where,
} from "firebase/firestore";

const InstructorContext = createContext();

export const useInstructor = () => useContext(InstructorContext);

const InstructorProvider = ({ children }) => {
  const [instructors, setInstructors] = useState([]);
  const [loggedInAdmin, setLoggedInAdmin] = useState([]);

  const addNewInstructor = async (instructor) => {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      instructor.email,
      instructor.password
    );
    console.log(userCredential.user);
  };

  const getAdminUser = (email) => {
    const q = query(collection(db, "instructors"), where("email", "==", email));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const msg = [];
      querySnapshot.forEach((doc) => {
        msg.push({ id: doc.id, ...doc.data() });
      });
      setClasses(msg);
    });
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

  const checkRole = async (email) => {
    console.log(email);
    const q = query(collection(db, "instructors"), where("email", "==", email));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let role;
      const data = [];
      querySnapshot.forEach((doc) => {
        if (doc.exists()) {
          data.push(doc.data());
        } else {
          console.log("Student doees not exist yet");
        }
      });
      setLoggedInAdmin(data);
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
        loggedInAdmin,
        checkRole,
        getAdminUser,
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
