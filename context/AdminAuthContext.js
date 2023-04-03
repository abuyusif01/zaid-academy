import { createContext, useContext, useEffect, useState } from "react";
import {
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "../config/firebase";
import { collection, onSnapshot, query, where } from "firebase/firestore";

const AdminAuthContext = createContext({});
export const useAdminAuth = () => useContext(AdminAuthContext);

const AdminAuthProvider = ({ children }) => {
  const [adminUser, setAdminUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAdminUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
        });
      } else setAdminUser(null);
      setLoading(false);
    });
  }, []);

  const signInWithEmail = async (email, password) => {
    try {
      const credential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      await credential.user;
    } catch (error) {
      console.log(error.message);
    }
  };

  const adminSignOut = async () => {
    setAdminUser(null);
    await signOut(auth);
  };

  return (
    <AdminAuthContext.Provider
      value={{
        adminUser,
        signInWithEmail,
        adminSignOut,
      }}
    >
      {loading ? null : children}
    </AdminAuthContext.Provider>
  );
};

export default AdminAuthProvider;
