import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "./userSlice";

export const UserView = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  return (
    <div>
      <h2 className="font-bold text-3xl my-6">List of users :</h2>
      {user.loading && <div>Loading...</div>}
      {!user.loading && user.err ? <div>Error : {user.err}</div> : null}
      {!user.loading && user.users.length ? (
        <ul>
          {user.users.map((user) => (
            <li
              key={user.id}
              className="bg-emerald-500 w-[400px] block mx-auto px-4 py-6 my-6 rounded-lg text-white font-semibold text-2xl shadow-md shadow-emerald-200 "
            >
              {user.name}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};
