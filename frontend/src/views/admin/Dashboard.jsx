import React from "react";
import Sidebar from "../../components/Sidebar";
import { Outlet } from "react-router-dom";
function Dashboard() {
  return (
    <section className="font-[Ubuntu] flex  gap-2">
      <Sidebar />
      <Outlet />
    </section>
  );
}

export default Dashboard;
