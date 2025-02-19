import React, { useState } from "react";
import { useActionState } from "react";

const Login = ({handleLogin}) => {

    

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submithandler = (e) => {
    e.preventDefault();
    handleLogin(email,password)
    console.log("email is", email);
    console.log("password is", password);

    setEmail("");
    setPassword("");
  };

  return (
    <div className="d-flex justify-content-center align-items-center w-100 vh-100">
      <div className="border border-3 border-success h-50 py-5 px-4 rounded-4 ">
        <form
          className="d-flex flex-column"
          onSubmit={(e) => {
            submithandler(e);
          }}
        >
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            className="border border-success border-3 rounded-pill py-2 px-4 outline-none"
            type="email"
            name=""
            id="email"
            placeholder="Enter Your Email..."
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            className="border border-success border-3 rounded-pill py-2 px-4 mt-3 outline-none"
            type="password"
            name=""
            id="password"
            placeholder="Enter Your password..."
          />
          <button
            type="submit"
            className="border border-success border-3 bg-success text-white rounded-pill py-2 px-4 mt-5 fs-5"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
