
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "@/components/PreLogin/Header";

const HomeLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-16">
        <Outlet />
      </main>
    </div>
  );
};

export default HomeLayout;
