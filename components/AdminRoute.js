import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { UseAuth } from "../context/AuthContext";

const AdminRoute = ({ children }) => {
  const { adminUser } = UseAuth();
  const router = useRouter();
  useEffect(() => {
    if (!adminUser) {
      router.push("/admin");
    }
  }, [adminUser, router]);
  return <div>{adminUser ? children : null}</div>;
};

export default AdminRoute;
