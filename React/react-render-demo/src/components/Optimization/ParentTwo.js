import React, { useState } from "react";
import { MemoizedChildTwo } from "./ChildTwo";
// import { Child } from "./Child";

export const ParentTwo = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Ammar");
  console.log("ParentTwo Render...");
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>Count - {count}</button>
      <br />
      <button onClick={() => setName("Doro")}>Change name</button>
      <br />
      <MemoizedChildTwo name={name} />
    </div>
  );
};
