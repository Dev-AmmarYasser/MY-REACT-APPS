import React, { useState } from "react";
import useCounter from "./hooks/useCounter";

function CounterOne() {
  const [count, increment, decrement, reset] = useCounter(5, 100);

  return (
    <div>
      <h2>Count =&gt; {count}</h2>
      <button onClick={increment}>Increment</button>
      <br />
      <button onClick={decrement}>Deccrement</button>
      <br />
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default CounterOne;
