import React, { createContext, useContext, useState } from "react";
import {
  createUserWithEmailAndPassword,
  deleteUser,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, db, storage } from "../config/firebase";
import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

const InstructorContext = createContext();

export const useInstructor = () => useContext(InstructorContext);

const InstructorProvider = ({ children }) => {
  const [instructors, setInstructors] = useState([]);
  const [loggedInAdmin, setLoggedInAdmin] = useState([]);
  const [imgUrl, setImgUrl] = useState("");
  const [progress, setProgress] = useState(0);

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
    await setDoc(doc(db, "instructors", instructor.uid), instructor);
  };

  const checkRole = async (email) => {
    console.log(email);
    const q = query(collection(db, "instructors"), where("email", "==", email));
    onSnapshot(q, (querySnapshot) => {
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

  const uploadPicture = (file) => {
    const storageRef = ref(storage, `/instructors/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(prog);
      },
      (err) => console.log(err),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          // console.log("downloadable url", url);
          setImgUrl(url);
          // return url;
        });
      }
    );
    return imgUrl;
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

  const clearImgUrl = () => {
    setImgUrl("");
  };

  return (
    <InstructorContext.Provider
      value={{
        progress,
        imgUrl,
        instructors,
        loggedInAdmin,
        checkRole,
        getAdminUser,
        getInstructors,
        addNewInstructor,
        addInstructorToDb,
        deleteInstructor,
        uploadPicture,
        clearImgUrl,
      }}
    >
      {children}
    </InstructorContext.Provider>
  );
};

export default InstructorProvider;
