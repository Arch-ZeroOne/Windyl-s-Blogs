import React from "react";

function Header() {
  return (
    <div className="navbar bg-primary text-primary-content flex justify-between">
      <div className="flex w-full items-center gap-4">
        <button className="btn btn-ghost text-xl">Posts</button>
        <SearchBar />
      </div>
      <Notification />
    </div>
  );
}

function SearchBar() {
  return (
    <label className="input">
      <i className="fa-solid fa-magnifying-glass opacity-100"></i>
      <input
        type="search"
        required
        placeholder="Search"
        className="placeholder-gray-500"
      />
    </label>
  );
}

function Notification() {
  return <i class="fa-solid fa-bell text-2xl"></i>;
}

export default Header;
