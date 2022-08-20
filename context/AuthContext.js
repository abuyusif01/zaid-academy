import { createContext, useContext, useEffect, useState } from "react";
import {
  onAuthStateChanged,
  signInWithPopup,
  FacebookAuthProvider,
  GoogleAuthProvider,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { collection, doc, getDoc, query, setDoc } from "firebase/firestore";
import { auth } from "../config/firebase";
import { db } from "../config/firebase";

const AuthContext = createContext({});
export const UseAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

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
      console.log(user);
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

  return (
    <AuthContext.Provider
      value={{
        user,
        signInWithFacebook,
        signInWithGoogle,
        signInWithEmail,
        logout,
      }}
    >
      {loading ? null : children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;