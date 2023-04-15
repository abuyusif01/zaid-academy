import React, { createContext, useContext, useState } from "react";
import {
  createUserWithEmailAndPassword,
  deleteUser,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, db, storage } from "../config/firebase";
import {
  arrayUnion,
  collection,
  deleteDoc,
  doc,
  getDoc,
  onSnapshot,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

const InstructorContext = createContext();

export const useInstructor = () => useContext(InstructorContext);

const InstructorProvider = ({ children }) => {
  const [instructors, setInstructors] = useState([]);
  const [loggedInAdmin, setLoggedInAdmin] = useState([]);
  const [instructorById, setInstructorById] = useState({});
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

  const getInstructorById = async (uid) => {
    const studentRef = doc(db, "instructors", uid);
    const docSnap = await getDoc(studentRef);

    if (docSnap.exists()) {
      setInstructorById(docSnap.data());
    } else {
      console.log("No such document!");
    }
  };

  const addToPaymentHistory = async (uid, data) => {
    const studentRef = doc(db, "instructors", uid);
    await updateDoc(studentRef, {
      payments: arrayUnion(data),
    });
  };

  const clearImgUrl = () => {
    setImgUrl("");
  };

  return (
    <InstructorContext.Provider
      value={{
        progress,
        instructorById,
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
        getInstructorById,
        addToPaymentHistory,
      }}
    >
      {children}
    </InstructorContext.Provider>
  );
};

export default InstructorProvider;
