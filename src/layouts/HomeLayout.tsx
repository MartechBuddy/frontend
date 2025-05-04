import React from "react";
import { Outlet } from "react-router-dom";
import Header from "@/components/PreLogin/Header";

const HomeLayout = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <Outlet />
      </main>
      
      {/* TODO: Add PreLogin Footer component */}
    </div>
  );
};

export default HomeLayout;
