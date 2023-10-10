import React, { Component } from "react";
import "./App.css";
import FRParentInput from "./Components/FRParentInput";
import PortalDemo from "./Components/PortalDemo";
import Hero from "./Components/Hero";
import ErrBoundary from "./Components/ErrBoundary";
import ClickCounter from "./Components/ClickCounter";
import HoverCounter from "./Components/HoverCounter";
import ClickCounterTwo from "./Components/ClickCounterTwo";
import HoverCounterTwo from "./Components/HoverCounterTwo";
import User from "./Components/User";
import Counter from "./Components/Counter";
import ComponentC from "./Components/ComponentE";
import { UserProvider } from "./Components/userContext";

function App() {
  return (
    <div className="App">
      {/* <UserProvider> */}
      <ComponentC />
      {/* </UserProvider> */}
    </div>
  );
}

export default App;
