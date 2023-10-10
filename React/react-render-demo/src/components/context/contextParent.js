import React, { useState } from "react";
import { MemoizedChildA } from "./contextChild";

export const CountContext = React.createContext();

const CountProvider = CountContext.Provider;

export const ContextParent = ({ children }) => {
  const [count, setCount] = useState(0);

  console.log("Context Parent Render...");

  return (
    <>
      <button onClick={() => setCount((c) => c + 1)}>Count {count}</button>
      <CountProvider value={count}>{children}</CountProvider>
    </>
  );
};
