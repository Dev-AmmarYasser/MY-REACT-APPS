import React from "react";
import { faDna } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

import "./footer.scss";

const Footer = () => {
  return (
    <footer className="relative">
      <div className="container mx-auto flex items-center justify-between">
        <NavLink to="/" className="flex font-bold text-3xl items-center gap-2 ">
          <FontAwesomeIcon icon={faDna} className="text-3xl up" />
        </NavLink>
        <div>
          <p className="font-semibold">All Rights Reserved @2023</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
