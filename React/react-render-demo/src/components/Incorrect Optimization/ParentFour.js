import React, { useState, useMemo, useCallback } from "react";
import { MemoizedChildThree } from "./ChildThree";
import { MemoizedChildFive } from "./ChildFive";

export const ParentFour = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Ammar");

  const person = {
    fname: "Doro",
    lname: "Koro",
  };

  const MemoizedPerson = useMemo(() => person, []);

  const handleClick = () => {};

  const MemoizedHandleClick = useCallback(handleClick, []);

  console.log("ParentFour Render...");
  return (
    <div>
      {/* On Click Of Count btn both of parent and memoized will re-render because of children prop passed inside memoized child */}
      <button onClick={() => setCount((c) => c + 1)}>Count - {count}</button>
      <br />
      <button onClick={() => setName("Doro")}>Change name</button>
      <br />
      <MemoizedChildFive
        name={name}
        handleClick={MemoizedHandleClick}
        person={MemoizedPerson}
      />
    </div>
  );
};
