import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./cakeSlice";

export const CakeView = () => {
  const dispatch = useDispatch();
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  return (
    <div>
      <h2 className="font-bold text-2xl my-2">
        Number Of Cakes : {numOfCakes}{" "}
      </h2>
      <button
        onClick={() => dispatch(ordered())}
        className="inline-block bg-sky-500 py-2 px-3 shadow-lg shadow-sky-100 text-white rounded-xl font-semibold mx-1 hover:bg-sky-600 transition duration-150"
      >
        Order Cake
      </button>
      <button
        onClick={() => dispatch(restocked(5))}
        className="inline-block bg-red-500 py-2 px-3 shadow-lg shadow-red-100 text-white rounded-xl font-semibold mx-1 hover:bg-red-600 transition duration-150 mb-2"
      >
        Restock Cakes
      </button>
    </div>
  );
};
