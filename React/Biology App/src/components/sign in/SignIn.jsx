import React, { useState } from "react";

import "./signIn.scss";
import { NavLink } from "react-router-dom";

import { faDna } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { addUser } from "../State Managment/UserReducer";

const SignIn = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  // console.log(name);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser({ user: name, password: password }));
  };

  return (
    <section className="sign-in ">
      <FontAwesomeIcon icon={faDna} className="text-3xl bg" />
      <FontAwesomeIcon icon={faDna} className="text-3xl bg-2" />
      <form className="bg-white  p-[40px] " onSubmit={handleSubmit}>
        <h3 className="text-center text-4xl font-bold mb-[30px]">Sign In</h3>
        <div className="flex flex-col gap-[20px]">
          <div className="flex flex-col gap-[8px]">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Type your name here"
              required
              className="p-3 rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-[8px]">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Type your password here"
              className="p-3 rounded-lg mb-6"
            />
          </div>
        </div>
        <NavLink
          to="/"
          className="block w-full sign rounded-xl text-xl font-semibold tracking-wide mb-6"
        >
          <button type="submit">Sign in</button>
        </NavLink>
        <div className="flex items-center justify-between ">
          <a href="#" className="font-bold">
            Forgot your password ?
          </a>
          <NavLink className="font-bold" to="/">
            Don’t have an account ?
          </NavLink>
        </div>
      </form>
    </section>
  );
};

export default SignIn;
