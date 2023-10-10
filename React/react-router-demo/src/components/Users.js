import { Link, Outlet, useSearchParams } from "react-router-dom";

export const Users = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const showActiveUsers = searchParams.get("filter") === "active";
  return (
    <div>
      <Link
        to="/users/1"
        className="block font-semibold text-2xl text-center my-2 bg-indigo-500 py-2 px-3 text-white w-[200px] rounded-lg mx-auto transition duration-300 hover:bg-indigo-600"
      >
        User 1
      </Link>
      <Link
        to="/users/2"
        className="block font-semibold text-2xl text-center my-2 bg-indigo-500 py-2 px-3 text-white w-[200px] rounded-lg mx-auto transition duration-300 hover:bg-indigo-600"
      >
        User 2
      </Link>
      <Link
        to="/users/3"
        className="block font-semibold text-2xl text-center my-2 bg-indigo-500 py-2 px-3 text-white w-[200px] rounded-lg mx-auto transition duration-300 hover:bg-indigo-600"
      >
        User 3
      </Link>
      <Outlet />
      <div>
        <button
          onClick={() => setSearchParams({ filter: "active" })}
          className="block font-semibold text-2xl text-center my-2 bg-sky-500 py-2 px-3 text-white w-[200px] rounded-lg mx-auto transition duration-300 hover:bg-sky-600"
        >
          Active Users
        </button>
        <button
          onClick={() => setSearchParams({})}
          className="block font-semibold text-2xl text-center my-2 bg-sky-500 py-2 px-3 text-white w-[200px] rounded-lg mx-auto transition duration-300 hover:bg-sky-600"
        >
          Reset Filter
        </button>
      </div>
      {showActiveUsers ? (
        <h2 className="p-2 text-center text-2xl font-semibold">
          Showing Active Users
        </h2>
      ) : (
        <h2 className="p-2 text-center text-2xl font-semibold">
          Showing All Users
        </h2>
      )}
    </div>
  );
};
