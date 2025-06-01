
import React from "react";
import { Outlet } from "react-router-dom";
import AppHeader from "@/components/layout/AppHeader";
import Sidebar from "@/components/layout/Sidebar";
import FloatingAIAssistant from "@/components/ai/FloatingAIAssistant";

const DashboardLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex bg-gray-900">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <AppHeader />

        {/* Main Content */}
        <main className="flex-1 p-6 md:p-8 overflow-y-auto bg-gray-900 text-gray-100">
          <Outlet />
        </main>
      </div>

      {/* Floating AI Assistant */}
      <FloatingAIAssistant />
    </div>
  );
};

export default DashboardLayout;
