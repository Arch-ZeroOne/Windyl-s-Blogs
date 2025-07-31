import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./assets/css/output.css";
import router from "./router.jsx";
import SpinnerContext from "./context/SpinnerContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>  
    <div className="font-[Poppins]">
      <SpinnerContext>
        <RouterProvider router={router} />
      </SpinnerContext>
    </div>
  </StrictMode>
);
