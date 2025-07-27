import React, { useEffect, useRef, useState } from "react";
import AuthHeader from "../components/AuthHeader";
import { NavLink } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import Spinner from "../components/Spinner";
import { useSpinner } from "../context/SpinnerContext";
import axios from "axios";
function Register() {
  const emailRef = useRef();
  const userNameRef = useRef();
  const passwordRef = useRef();
  const { spinning, setSpinning } = useSpinner();

  const handleRegister = async (e) => {
    e.preventDefault();
    setSpinning(true);

    const payload = {
      email: emailRef.current.value,
      username: userNameRef.current.value,
      password: passwordRef.current.value,
    };

    setSpinning(true);
    axios
      .post("http://127.0.0.1:8000/api/register", payload)
      .then((response) => {
        setSpinning(false);
        toast.success("Registration Successfull.", {
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
        emailRef.current.value = "";
        userNameRef.current.value = "";
        passwordRef.current.value = "";
      })
      .catch((error) => {
        toast("Account Already Taken!", {
          icon: "😞",
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
        setSpinning(false);
      });
  };

  return (
    <section>
      <AuthHeader />
      <Toaster />

      <div className="flex flex-col justify-between gap-3 mt-10">
        <h1 className="text-center text-xl font-medium">Create Your Account</h1>
        <form
          className="flex flex-col gap-5 items-center"
          onSubmit={(e) => handleRegister(e)}
        >
          <label className="input validator">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </g>
            </svg>
            <input
              type="text"
              required
              placeholder="New Username"
              pattern="[A-Za-z][A-Za-z0-9\-]*"
              minlength="3"
              maxlength="30"
              title="Only letters, numbers or dash"
              ref={userNameRef}
            />
          </label>
          <p className="validator-hint">
            Must be 3 to 30 characters
            <br />
            containing only letters, numbers or dash
          </p>
          <label className="input validator">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </g>
            </svg>
            <input
              type="email"
              placeholder="mail@site.com"
              ref={emailRef}
              required
            />
          </label>
          <div className="validator-hint hidden">Enter valid email address</div>

          <label className="input validator">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
              </g>
            </svg>
            <input
              type="password"
              required
              placeholder="New Password"
              minlength="8"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
              ref={passwordRef}
            />
          </label>
          <p className="validator-hint hidden">
            Must be more than 8 characters, including
            <br />
            At least one number <br />
            At least one lowercase letter <br />
            At least one uppercase letter
          </p>
          <button className="btn btn-outline w-90">
            {spinning ? <Spinner /> : "Register"}
          </button>

          <button className="btn btn-outline btn-accent">
            <NavLink to="/">Already Have An Account</NavLink>
            <i class="fa-solid fa-arrow-left-long"></i>
          </button>
        </form>
      </div>
    </section>
  );
}

export default Register;
