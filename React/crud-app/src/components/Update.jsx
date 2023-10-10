import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { useParams, useNavigate } from "react-router-dom";
import { updateUser } from "../UserReducer";

const Update = () => {
  const { id } = useParams();
  const users = useSelector((state) => state.users);
  const existingUser = users.filter((f) => f.id == id);
  const { name, email } = existingUser[0];
  const [uname, setName] = useState(name);
  const [uemail, setEmail] = useState(email);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // console.log(existingUser);

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(
      updateUser({
        id: id,
        name: uname,
        email: uemail,
      })
    );
    navigate("/");
  };

  return (
    <>
      <div className="absolute w-[100%] h-[100%] create-bg" />

      <div className="bg-white border-1  rounded-xl create p-7 shadow-xl">
        <h3 className="text-xl  text-center mb-4   tracking-wide">
          Let's edit user data !
        </h3>
        <form onSubmit={handleUpdate}>
          <div className="flex flex-col gap-3 mb-4 ">
            <label htmlFor="name" className="text-md font-bold text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter user name"
              value={uname}
              onChange={(e) => setName(e.target.value)}
              className="bg-gray-100 py-2 px-3 rounded-md w-[300px] md:w-[500px]  focus:outline-none caret-blue-500 "
            />
          </div>
          <div className="flex flex-col gap-3 mb-8  ">
            <label htmlFor="email" className="text-md font-bold text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={uemail}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter user email"
              className="bg-gray-100 py-2 px-3  rounded-md w-[300px] md:w-[500px]  focus:outline-none caret-blue-500"
            />
          </div>
          <button
            type="submit"
            className="btn bg-blue-600 hover:bg-blue-700 transition duration-200  py-2 font-semibold px-3 w-full rounded-md uppercase text-white flex items-center justify-center gap-2 "
          >
            <FontAwesomeIcon icon={faPen} /> Edit
          </button>
        </form>
      </div>
    </>
  );
};

export default Update;
