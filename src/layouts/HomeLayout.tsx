
import React from "react";
import { Outlet } from "react-router-dom";
import PublicHeader from "@/components/layout/PublicHeader";
import Footer from "@/components/layout/Footer";

interface HomeLayoutProps {
  children?: React.ReactNode;
}

const HomeLayout: React.FC<HomeLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <PublicHeader />
      <main className="flex-grow">
        {children ? children : <Outlet />}
      </main>
      <Footer />
    </div>
  );
};

export default HomeLayout;
