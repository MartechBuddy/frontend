
import React from "react";
import { Outlet } from "react-router-dom";

const SettingsPage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold">Settings</h1>
      <Outlet />
    </div>
  );
};

export default SettingsPage;
