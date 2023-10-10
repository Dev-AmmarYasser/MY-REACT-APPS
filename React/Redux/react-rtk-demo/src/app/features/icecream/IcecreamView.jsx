import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./icecreamSlice";
import { useState } from "react";

export const IcecreamView = () => {
  const [value, setValue] = useState(1);
  const numOfIcecreams = useSelector((state) => state.icecream.numOfIceCreams);
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <h2 className="font-bold text-2xl my-2">
          Number Of Ice Creams : {numOfIcecreams}{" "}
        </h2>
        <button
          onClick={() => dispatch(ordered())}
          className="inline-block bg-sky-500 py-2 shadow-lg shadow-sky-100 px-3 text-white rounded-xl font-semibold mx-1 hover:bg-sky-600 transition duration-150"
        >
          Order Ice Cream
        </button>
        <input
          type="number"
          className="block bg-gray-100 mx-auto my-4 p-2 rounded-lg focus:outline-sky-500 focus:outline-none"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          onClick={() => dispatch(restocked(parseInt(value)))}
          className="inline-block bg-red-500 py-2 shadow-lg shadow-red-100 px-3 text-white rounded-xl font-semibold mx-1 hover:bg-red-600 transition duration-150 mb-2"
        >
          Restock Ice Creams
        </button>
      </div>
    </div>
  );
};
