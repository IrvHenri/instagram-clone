import React, { useState, useEffect, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import logo from "../images/logo.png";
import * as ROUTES from "../constants/routes";
export default function SignUp() {
  const [state, setState] = useState({
    username: "",
    fullName: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const { username, fullName, email, password } = state;
  const isInvalid =
    username === "" || fullName === "" || password === "" || email === "";
  useEffect(() => {
    document.title = "Sign Up - Instagram";
  }, []);
  const handleChange = (evt) => {
    const value = evt.target.value;
    if (evt.target.name === "username" || evt.target.name === "email") {
      setState({
        ...state,
        [evt.target.name]: value.toLowerCase(),
      });
    } else {
      setState({
        ...state,
        [evt.target.name]: value,
      });
    }
  };
  console.log(state);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, fullName, email, password } = state;
  };
  return (
    <div className="container flex mx-auto max-w-xs items-center h-screen">
      <div className="flex flex-col">
        <div className="flex flex-col items-center bg-white p-4 border mb-4">
          <h1 className="flex justify-center w-full">
            <img src={logo} alt="Instagram" className="mt-2 w-6/12 mb-4" />
          </h1>
          <form method="POST" onSubmit={handleSubmit}>
            <input
              aria-label="Enter your username"
              className="text-sm text-gray w-full mr-3 py-5 px-4 h-2 border bg-gray-background rounded mb-2"
              type="text"
              placeholder="Username"
              name="username"
              onChange={handleChange}
              value={state.username}
            />
            <input
              aria-label="Enter your full name"
              className="text-sm text-gray w-full mr-3 py-5 px-4 h-2 border bg-gray-background rounded mb-2"
              type="text"
              placeholder="Full name"
              name="fullName"
              onChange={handleChange}
              value={state.fullName}
            />
            <input
              aria-label="Enter your email address"
              className="text-sm text-gray w-full mr-3 py-5 px-4 h-2 border bg-gray-background rounded mb-2"
              type="text"
              placeholder="Email address"
              name="email"
              onChange={handleChange}
              value={state.email}
            />
            <input
              aria-label="Enter your password"
              className="text-sm text-gray w-full mr-3 py-5 px-4 h-2 border bg-gray-background rounded mb-2"
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={state.password}
            />
            <button
              disabled={isInvalid}
              type="submit"
              className={`bg-blue-500 text-white w-full rounded h-8 font-bold ${
                isInvalid && "cursor-not-allowed opacity-50"
              }`}
            >
              Sign Up
            </button>
          </form>
        </div>
        <div className="flex justify-center items-center flex-col w-full bg-white p-4 border">
          <p className="text-sm">
            Have an account?{` `}
            <Link to={ROUTES.LOGIN} className="font-bold text-blue">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
