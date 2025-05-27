
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const AuthLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow animate-fade-in">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default AuthLayout;
