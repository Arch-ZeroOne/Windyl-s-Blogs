import React from "react";
import { Outlet } from "react-router-dom";
function ClientLayout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default ClientLayout;
