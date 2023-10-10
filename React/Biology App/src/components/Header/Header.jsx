import React from "react";

// import logo from "../../assets/biologo2-01.png";

import "../Header/header.scss";

import { faDna } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const users = useSelector((state) => state.users);
  console.log(users);
  return (
    <nav className="bg-white flex justify-between items-center p-[15px] px-[20px]">
      <NavLink to="/" className="flex font-bold text-3xl items-center gap-2 ">
        <FontAwesomeIcon icon={faDna} className="text-3xl up" />
      </NavLink>
      <div>{users.user.length !== 0 && "asd"}</div>
      <div>
        <NavLink
          to="/sign-in"
          className="block link py-2 px-8 rounded-md font-semibold"
        >
          Sign in
        </NavLink>
      </div>
    </nav>
  );
};

export default Header;
