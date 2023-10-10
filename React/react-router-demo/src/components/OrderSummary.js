import React from "react";
import { useNavigate } from "react-router";

export const OrderSummary = () => {
  const navigate = useNavigate();

  return (
    <>
      <div>Order Confirmed !</div>
      <button
        onClick={() => navigate(-1)}
        className="bg-sky-600 text-white py-2 px-3  hover:bg-sky-700 font-semibold rounded-lg"
      >
        Go back !
      </button>
    </>
  );
};
