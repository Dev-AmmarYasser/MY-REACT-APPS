import { useState } from "react";

import "./App.scss";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Subscribe from "./components/Subscribe/Subscribe";
import Who from "./components/Who/Who";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import { Routes, Route } from "react-router-dom";
import SignIn from "./components/sign in/SignIn";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
