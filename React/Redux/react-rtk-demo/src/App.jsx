import { useState } from "react";
import "./App.css";
import { CakeView } from "./app/features/cake/CakeView";
import { IcecreamView } from "./app/features/icecream/IcecreamView";
import { UserView } from "./app/features/user/UserView";

function App() {
  return (
    <>
      <CakeView />
      <div className="my-8 bg-indigo-200 h-[1px] w-[100%]" />
      <IcecreamView />
      <div className="my-8 bg-indigo-200 h-[1px] w-[100%]" />
      <UserView />
    </>
  );
}

export default App;
