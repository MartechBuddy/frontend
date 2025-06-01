
import React from "react";
import { Outlet } from "react-router-dom";
import AppHeader from "@/components/layout/AppHeader";
import Sidebar from "@/components/layout/Sidebar";

const DashboardLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <AppHeader />

      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content Area */}
        <main className="flex-1 p-6 md:p-8 overflow-y-auto animate-fade-in">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
