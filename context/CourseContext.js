import { createContext, useContext, useEffect, useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../config/firebase";

const CourseContext = createContext({});
export const useCourse = () => useContext(CourseContext);

const CourseProvider = ({ children }) => {
  const [courses, setCourses] = useState();
  const [messages, setMessages] = useState();
  const getStudents = async () => {};
  const requestCourse = async (student) => {
    try {
      await addDoc(collection(db, "students"), student);
    } catch (error) {
      console.log(error.message);
    }
  };

  const sendMessage = async (message) => {
    try {
      await addDoc(collection(db, "messages"), message);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <CourseContext.Provider value={{ courses, requestCourse, sendMessage }}>
      {children}
    </CourseContext.Provider>
  );
};

export default CourseProvider;
