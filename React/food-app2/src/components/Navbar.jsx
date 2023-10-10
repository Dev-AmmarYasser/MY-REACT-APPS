import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="h-[75px] shadow-md shadow-gray-200 transition duration-200  ">
      <div className="container h-[75px] mx-auto flex justify-between align-center">
        <a
          href="#"
          className="block select-none flex-none sm:flex-1 h-fit  my-auto font-bold ml-4 sm:ml-0 text-4xl text-rose-600 tracking-wide "
        >
          FoodiesHub
        </a>
        <div className="hidden sm:flex w-[350px] justify-between items-center text-xl font-semibold  ">
          <NavLink
            to="/"
            className="  h-[100%] flex items-center px-6 transition duration-200  hover:text-white hover:bg-rose-600 "
            href="#!"
          >
            Home
          </NavLink>
          <NavLink
            to="/recipes"
            className=" h-[100%] flex items-center px-6 transition duration-200  hover:text-white hover:bg-rose-600"
            href="#!"
          >
            Recipes
          </NavLink>
          <NavLink
            to="/settings"
            className=" h-[100%] flex items-center px-6 transition duration-200  hover:text-white hover:bg-rose-600"
            href="#!"
          >
            Settings
          </NavLink>
        </div>
        <FontAwesomeIcon
          onClick={() => setOpen(!open)}
          className={`${
            open ? "text-rose-600" : ""
          } block sm:hidden  text-[30px] cursor-pointer my-auto mr-4`}
          icon={faBars}
        />
        <div
          className={`${
            open ? "absolute" : "hidden"
          } transition duration-200 sm:hidden right-4 top-[90px] bg-rose-600 p-4 rounded-xl    justify-between items-center text-xl font-semibold  `}
        >
          <NavLink
            to="/"
            className="select-none justify-center py-2   h-[100%] flex items-center px-6 transition duration-200 rounded-lg hover:text-rose-700  text-white hover:bg-rose-200 "
            href="#!"
          >
            Home
          </NavLink>
          <NavLink
            to="/recipes"
            className="select-none justify-center py-2  h-[100%] flex items-center px-6 transition duration-200 rounded-lg hover:text-rose-700  text-white hover:bg-rose-200"
            href="#!"
          >
            Recipes
          </NavLink>
          <NavLink
            to="/settings"
            className="select-none justify-center py-2  h-[100%] flex items-center px-6 transition duration-200 rounded-lg hover:text-rose-700  text-white hover:bg-rose-200"
            href="#!"
          >
            Settings
          </NavLink>
        </div>
      </div>
    </div>
  );
};
