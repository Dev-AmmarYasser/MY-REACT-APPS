import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";

function App() {
  const [num, setNum] = useState(0);

  let numbers = ["="];

  for (let i = 0; i < 10; i++) {
    numbers.unshift(i);
  }

  let operations = ["+", "-", "x", "/"];

  return (
    <>
      <div className="calc-body w-[350px] shadow-xl  p-4 rounded-xl">
        <div className="calc-result">
          <input
            type="number"
            className="w-full h-[50px] focus:outline-none border-[1px] border-gray-100 p-4 rounded-md mb-4"
            value={num}
          />
        </div>
        <div className="flex justify-between items-center">
          <div className="calc-nums w-[250px] grid grid-cols-3 gap-3">
            {numbers.map((num) => (
              <button
                key={num}
                className={`border-[1px] p-2 ${
                  num === 0 ? "col-span-2" : ""
                }  ${
                  num === "="
                    ? "bg-blue-600 block text-white hover:bg-blue-500 "
                    : ""
                }rounded-md text-center h-[50px] hover:bg-gray-100 transition duration-200 text-[18px]`}
                onClick={(e) => setNum(num)}
              >
                {num}
              </button>
            ))}
          </div>
          <div className="calc-operations grid  gap-3">
            {operations.map((operation) => (
              <button
                key={operation}
                className="border-[1px] border-blue-100 text-blue-600 bg-blue-100 w-[50px] p-2 flex justify-center items-center rounded-md text-center h-[50px] hover:bg-blue-200 transition duration-200 text-[18px]"
              >
                {operation}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
