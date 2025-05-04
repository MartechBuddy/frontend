
import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "@/components/PostLogin/Sidebar";
import Header from "@/components/PostLogin/Header";

const DashboardLayout = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <Header />
      
      <main className="ml-64 pt-16 min-h-screen">
        <div className="container mx-auto p-6">
          {children || <Outlet />}
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
