import React, { useContext } from "react";
import { CountContext } from "./contextParent";

export const ChildA = () => {
  console.log("Child A Render...");
  return (
    <>
      <div>Child A</div>
      <ChildB />
    </>
  );
};

export const MemoizedChildA = React.memo(ChildA);

export const ChildB = () => {
  console.log("Child B Render...");
  return (
    <>
      <div>ChildB</div>
      <ChildC />
    </>
  );
};

export const ChildC = () => {
  const count = useContext(CountContext);
  console.log("Child C Render...");
  return (
    <>
      <div>ChildC - {count}</div>
    </>
  );
};
