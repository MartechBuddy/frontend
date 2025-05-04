
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "@/components/PostLogin/Header";
import Sidebar from "@/components/PostLogin/Sidebar";

const DashboardLayout = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-grow p-6 overflow-y-auto">
          {children || <Outlet />}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
