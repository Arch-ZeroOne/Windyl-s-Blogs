import React from "react";
import AdminProfile from "../assets/images/admin/admin-profile.png";
import { NavLink } from "react-router-dom";
function Sidebar() {
  const links = [
    {
      name: "Dashboard",
      icon: "fa-solid fa-chart-line text-2xl",
    },
    {
      name: "Post",
      icon: "fa-solid fa-blog text-2xl",
    },
    {
      name: "Recent",
      icon: "fa-solid fa-clock-rotate-left text-2xl",
    },
    {
      name: "Activities",
      icon: "fa-solid fa-bell text-2xl",
    },
  ];

  return (
    <section className="w-[20%]">
      <div className="flex flex-col bg-white text-black  h-screen font-medium gap-10 ">
        <User />
        <div className="flex flex-col gap-10 p-3 ">
          {links.map((item) => (
            <NavLink to={`${item.name.toLowerCase()}`}>
              <Links name={item.name} icon={item.icon} />
            </NavLink>
          ))}
        </div>
      </div>
    </section>
  );
}

function User() {
  return (
    <section className="flex justify-around mt-5 items-center">
      <div className="flex  items-center gap-2">
        <img src={AdminProfile} className="h-10 rounded-2xl"></img>
        <p className="text-sm">Admin1</p>
      </div>

      <div className="flex items-center">
        <i className="fa-solid fa-atom text-3xl text-blue-600"></i>
        <p className="text-sm">Admin</p>
      </div>
    </section>
  );
}

function Links({ name, icon }) {
  return (
    <div className="flex gap-2 items-center">
      <i className={icon}></i>
      <li>{name}</li>
    </div>
  );
}

export default Sidebar;
