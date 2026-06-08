import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

export default function ProtectedRoute() {
  const userSession = localStorage.getItem("user_session");

  if (!userSession) {
    return <Navigate to="/login" replace />;
  }

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <div className="main-content">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}