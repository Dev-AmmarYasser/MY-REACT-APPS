import logo from "./logo.svg";
import "./App.css";
import React, { useReducer, useContext } from "react";
import DocTitleOne from "./components/DocTitleOne";
import DocTitleTwo from "./components/DocTitleTwo";
import CounterOne from "./components/CounterOne";
import CounterTwo from "./components/CounterTwo";
import UserForm from "./components/UserForm";

function App() {
  return (
    <div className="App">
      <UserForm />
    </div>
  );
}

export default App;
