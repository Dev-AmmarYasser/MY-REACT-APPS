import React, { useState } from "react";
import { addUser } from "../UserReducer";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const users = useSelector((state) => state.users);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addUser({
        id: users[users.length - 1] ? users[users.length - 1].id + 1 : 0 + 1,
        name,
        email,
      })
    );
    navigate("/");
  };

  return (
    <>
      <div className="absolute w-[100%] h-[100%] create-bg" />

      <div className="bg-white border-1  rounded-xl create p-7 shadow-xl">
        <h3 className="text-xl  text-center mb-4   tracking-wide">
          Let's add a new user !
        </h3>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-3 mb-4 ">
            <label htmlFor="name" className="text-md font-bold text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter user name"
              onChange={(e) => setName(e.target.value)}
              className="bg-gray-100 py-2 px-3 rounded-md w-[300px] md:w-[500px]  focus:outline-none caret-blue-500 "
            />
          </div>
          <div className="flex flex-col gap-3 mb-8  ">
            <label htmlFor="email" className="text-md font-bold text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter user email"
              onChange={(e) => setEmail(e.target.value)}
              className="bg-gray-100 py-2 px-3  rounded-md w-[300px] md:w-[500px]  focus:outline-none caret-blue-500"
            />
          </div>
          <button
            type="submit"
            className="btn bg-blue-600 hover:bg-blue-700 transition duration-200  py-2 font-semibold px-3 w-full rounded-md uppercase text-white flex items-center justify-center gap-2 "
          >
            <FontAwesomeIcon icon={faUser} /> Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Create;
