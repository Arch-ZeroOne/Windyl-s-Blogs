import React from "react";
import Sidebar from "../../components/Sidebar";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
function IndexPage() {
  return (
    <section className="font-[Poppins] flex  ">
      <Sidebar />
      <div className="flex flex-col w-full gap-3">
        <Header />
        <Outlet />
      </div>
    </section>
  );
}

export default IndexPage;
