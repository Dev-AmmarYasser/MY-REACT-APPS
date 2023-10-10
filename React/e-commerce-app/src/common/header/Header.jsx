import React from "react";
import { Head } from "./head";
import { Search } from "./search";
import { Navbar } from "./Navbar";

export const Header = () => {
  return (
    <div>
      <Head />
      <Search />
      <Navbar />
    </div>
  );
};
