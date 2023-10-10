import React, { useReducer } from "react";

const initialState = 0;

const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

export const UseReducer = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  console.log("Use Reducer Render...");

  return (
    <div>
      <h4>{count}</h4>
      <br />
      <button onClick={() => dispatch("increment")}>Increment</button>
      <br />
      <button onClick={() => dispatch("decrement")}>Decrement</button>
      <br />
      <button onClick={() => dispatch("reset")}>Reset</button>
    </div>
  );
};
