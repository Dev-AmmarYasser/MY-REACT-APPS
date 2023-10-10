import React, { useState } from "react";
import { MemoizedChildThree } from "./ChildThree";
import { MemoizedChildFour } from "./ChildFour";
// import { Child } from "./Child";

export const ParentThree = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Ammar");
  console.log("ParentThree Render...");
  return (
    <div>
      {/* On Click Of Count btn both of parent and memoized will re-render because of children prop passed inside memoized child */}
      <button onClick={() => setCount((c) => c + 1)}>Count - {count}</button>
      <br />
      <button onClick={() => setName("Doro")}>Change name</button>
      <br />
      <MemoizedChildFour name={name} />
      {/* <MemoizedChildThree name={name}>
        <strong>Hello</strong>
      </MemoizedChildThree> */}
    </div>
  );
};
