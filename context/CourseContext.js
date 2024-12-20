import { createContext, useContext, useEffect, useState } from "react";
import {
  collection,
  addDoc,
  doc,
  updateDoc,
  query,
  getDocs,
  where,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../config/firebase";

const CourseContext = createContext({});
export const useCourse = () => useContext(CourseContext);

const CourseProvider = ({ children }) => {
  const [courses, setCourses] = useState();
  const [oldMessages, setOldMessages] = useState([]);
  const [newMessages, setNewMessages] = useState([]);

  const requestCourse = async (student) => {
    try {
      await addDoc(collection(db, "request"), student);
    } catch (error) {
      console.log(error.message);
    }
  };

  const getOldMessages = async () => {
    const q = query(collection(db, "messages"), where("completed", "==", true));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const msg = [];
      querySnapshot.forEach((doc) => {
        msg.push({ id: doc.id, ...doc.data() });
      });
      setOldMessages(msg);
    });
  };

  const getNewMessages = async () => {
    const q = query(
      collection(db, "messages"),
      where("completed", "==", false)
    );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const msg = [];
      querySnapshot.forEach((doc) => {
        msg.push({ id: doc.id, ...doc.data() });
      });
      setNewMessages(msg);
    });
  };

  const sendMessage = async (message) => {
    try {
      await addDoc(collection(db, "messages"), message);
    } catch (error) {
      console.log(error.message);
    }
  };

  const answerMessage = async (id) => {
    try {
      const messageRef = doc(db, "messages", id);
      await updateDoc(messageRef, { completed: true });
    } catch (error) {
      console.log(error.message);
    }
  };

  const undoMessage = async (id) => {
    try {
      const messageRef = doc(db, "messages", id);
      await updateDoc(messageRef, { completed: false });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <CourseContext.Provider
      value={{
        courses,
        oldMessages,
        newMessages,
        requestCourse,
        sendMessage,
        getOldMessages,
        getNewMessages,
        answerMessage,
        undoMessage,
      }}
    >
      {children}
    </CourseContext.Provider>
  );
};

export default CourseProvider;
