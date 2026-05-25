import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { axiosinstance } from "../axios/axiosinstance";
import toast from "react-hot-toast";

const ProtectedRoute = ({ children, role }) => {
  const [status, setStatus] = useState("loading"); 
  // loading | authorized | unauthorized

  useEffect(() => {
    const verifyUser = async () => {
      try {
        const res = await axiosinstance.get("/auth/check");

        const userRole = res.data?.user?.role?.toLowerCase();
        const requiredRole = role?.toLowerCase();

        if (userRole === requiredRole) {
          setStatus("authorized");
        } else {
          toast.error("No entry ❌");
          setStatus("unauthorized");
        }
      } catch (error) {
        setStatus("unauthorized");
      }
    };

    verifyUser();
  }, [role]);

  if (status === "loading") {
    return <p className="text-center text-white mt-10">Loading...</p>;
  }

  if (status === "unauthorized") {
    return <Navigate to={`/${role}/login`} replace />;
  }

  return children;
};

export default ProtectedRoute;