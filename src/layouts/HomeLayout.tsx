
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "@/components/PreLogin/Header";
import Footer from "@/components/layout/Footer";

interface HomeLayoutProps {
  children?: React.ReactNode;
}

const HomeLayout: React.FC<HomeLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {children ? children : <Outlet />}
      </main>
      <Footer />
    </div>
  );
};

export default HomeLayout;
