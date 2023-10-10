import React, { useState } from "react";
// import { Child } from "./Child";

export const ParentOne = ({ children }) => {
  const [count, setCount] = useState(0);
  console.log("ParentOne Render...");
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>Count - {count}</button>
      <br />
      {children}
    </div>
  );
};
