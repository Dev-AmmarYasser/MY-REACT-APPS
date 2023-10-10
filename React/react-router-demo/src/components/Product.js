import { Link, Outlet } from "react-router-dom";

export const Product = () => {
  return (
    <>
      <div className="p-4">
        <div className=" w-full">
          <input
            type="search"
            placeholder="Search products"
            className="p-3 bg-gray-100 rounded-xl mx-auto block w-[300px]  focus:outline-indigo-500 caret-indigo-500"
          />
        </div>
        <div className=" my-2 w-full ">
          <Link
            to="featured"
            className="inline-block text-center w-[100px] my-2 bg-indigo-700 p-3 text-white rounded-lg mr-2"
          >
            Featured
          </Link>
          <Link
            to="new"
            className="inline-block text-center w-[100px] my-2 bg-indigo-700 p-3 text-white rounded-lg mr-2"
          >
            New
          </Link>
        </div>
        <Outlet />
      </div>
    </>
  );
};

// You Have to write the full path in (to) attr or right the name of path without salshes( which is known as relative links ) ans it will automatically procced
