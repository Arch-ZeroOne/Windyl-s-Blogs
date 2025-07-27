import React, { useRef } from "react";
import Logo from "/blogger.png";
import AuthHeader from "../components/AuthHeader";
import toast, { Toaster } from "react-hot-toast";
import { NavLink } from "react-router-dom";
import { useSpinner } from "../context/SpinnerContext";
import { useNavigate } from "react-router-dom";

import axiosClient from "../axiosclient";
import Spinner from "../components/Spinner";
function Login() {
  const emaiLRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const { spinning, setSpinning } = useSpinner();

  const handleValidation = (e) => {
    e.preventDefault();

    const payLoad = {
      email: emaiLRef.current.value,
      password: passwordRef.current.value,
    };
    setSpinning(true);
    axiosClient
      .post("http://127.0.0.1:8000/api/login", payLoad)
      .then((response) => {
        const { loggedIn } = response.data;

        if (loggedIn) {
          setSpinning(false);
          toast.success("Log In Successfull.", {
            style: {
              border: "1px solid #713200",
              padding: "16px",
              color: "#713200",
            },
            iconTheme: {
              primary: "#713200",
              secondary: "#FFFAEE",
            },
          });

          navigate("/home");
        } else {
          toast("Account not Found!", {
            icon: "😞",
            style: {
              borderRadius: "10px",
              background: "#333",
              color: "#fff",
            },
          });
        }
      })
      .catch((error) => {
        setSpinning(false);
        console.log(error);
      });
  };

  return (
    <div className="flex flex-col items-center  gap-5">
      <AuthHeader />
      <Toaster />
      <img src={Logo} className="h-20 mt-8"></img>

      <form
        className="flex flex-col gap-5  p-10  rounded-xl h-90 "
        onSubmit={(e) => handleValidation(e)}
      >
        <section className="flex flex-col gap-4 justify-center">
          <div className="flex items-center gap-2">
            <i class="fa-solid fa-user"></i>
            <input
              type="username"
              placeholder="Username or email "
              className="input input-primary"
              ref={emaiLRef}
            />
          </div>

          <div className="flex items-center gap-2">
            <i class="fa-solid fa-lock"></i>
            <input
              type="password"
              placeholder="Password"
              className="input input-primary"
              ref={passwordRef}
            />
          </div>
        </section>
        <section className="flex flex-col items-center gap-5">
          <button className="btn btn-primary w-80">
            {spinning ? <Spinner /> : "Log in"}
          </button>
          <a className="font-medium text-sm hover:underline underline-offset-10 cursor-pointer">
            Forgot Password?
          </a>
        </section>
      </form>
      <section className="flex flex-col gap-5 items-center">
        <button className="btn btn-outline btn-accent">
          <NavLink to="/register">
            Create New Account<i class="fa-solid fa-arrow-right-long"></i>
          </NavLink>
        </button>
        <p className="text-center font-medium opacity-50 cursor-pointer">
          <i class="fa-solid fa-blog text-xl"></i> Windyl's Blogs
        </p>
      </section>
    </div>
  );
}

export default Login;
