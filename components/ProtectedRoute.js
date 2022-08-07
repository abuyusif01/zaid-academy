import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { UseAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { user } = UseAuth();
  const router = useRouter();
  useEffect(() => {
    if (!user) {
      router.push("/signin");
    }
  }, [user, router]);
  return <div>{user ? children : null}</div>;
};

export default ProtectedRoute;
