import { createContext, useContext, useEffect, useState } from "react";
import {
  onAuthStateChanged,
  signInWithPopup,
  FacebookAuthProvider,
  GoogleAuthProvider,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "../config/firebase";
import { collection, onSnapshot, query, where } from "firebase/firestore";

const AuthContext = createContext({});
export const UseAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [adminUser, setAdminUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loggedInAdmin, setLoggedInAdmin] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
        });
      } else setUser(null);
      setLoading(false);
    });
  }, []);

  const signInWithFacebook = async () => {
    try {
      const provider = new FacebookAuthProvider();
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.log(error.message);
    }
  };

  const signInWithEmail = async (email, password) => {
    try {
      const credential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = await credential.user;
      setAdminUser(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const signInWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    setUser(null);
    await signOut(auth);
  };

  const adminSignOut = async () => {
    setAdminUser(null);
    await signOut(auth);
  };

  const roleCheck = async (email) => {
    if (email) {
      const q = query(
        collection(db, "instructors"),
        where("email", "==", email)
      );
      let data = [];
      onSnapshot(q, (querySnapshot) => {
        querySnapshot.forEach((doc) => {
          if (doc.exists()) {
            data.push(doc.data());
            setLoggedInAdmin(doc.data());
          } else {
            console.log("Student doees not exist yet");
            setLoggedInAdmin(null);
          }
        });
      });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        adminUser,
        loggedInAdmin,
        signInWithFacebook,
        signInWithGoogle,
        signInWithEmail,
        adminSignOut,
        logout,
        roleCheck,
      }}
    >
      {loading ? null : children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
