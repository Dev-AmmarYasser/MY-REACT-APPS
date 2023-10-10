import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { deleteUser } from "../UserReducer";

const Home = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteUser({ id }));
  };
  const navigate = useNavigate();
  console.log(users);
  return (
    <>
      <div className="flex  h-[50vh] mb-[50px] border-b overflow-hidden flex-col lg:flex-row ">
        <div className="flex-1 bg-white flex justify-center px-[30px] lg:px-[100px] flex-col">
          <h1 className="font-bold text-3xl text-center  lg:text-start lg:text-6xl leading-[40px] mt-[50px] lg:mt-0 lg:leading-[80px] mb-[12px] ">
            Crud App With Json Server
          </h1>
          <p className="text-gray-500 text-sm lg:text-[17px] text-center lg:text-start  mb-10 lg:mb-0 leading-[30px]">
            The easiest way to create a fake REST API for CRUD apps. With JSON
            Server, you can quickly and easily spin up a local REST API with
            dummy data for your front-end development.
          </p>
        </div>
        <div className="flex-1 landing"></div>
      </div>
      <div className="container data-cont border  border-[#e6e9ef] mx-auto bg-gray-100 p-10 pb-14 rounded-xl mt-10 overflow-scroll md:overflow-hidden">
        {/* <h2 className="text-center text-5xl mt-10 font-bold bg-blue-600 py-7 w-fit px-7 rounded-xl shadow-sm  mx-auto text-white ">
        Crud App With Json Server
      </h2> */}
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-3xl font-bold">Users Table</h3>
          <button
            className="btn bg-blue-500 py-2 px-3 hover:bg-blue-600 rounded-lg transition duration-200  text-white"
            onClick={() => navigate("/create")}
          >
            <FontAwesomeIcon icon={faUser} /> Create
          </button>
        </div>
        <table className="table-auto overflow-hidden   border-spacing-6 w-[100%] shadow-xl   bg-white rounded-xl ">
          <thead>
            <tr className="bg-gray-50 border-b-2">
              <th className="p-3 border-r-2">ID</th>
              <th className="p-3 border-r-2">Name</th>
              <th className="p-3 border-r-2">Email</th>
              <th className="p-3 w-[190px]">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.length == 0 && (
              <tr>
                <td
                  colSpan={4}
                  className="text-center p-3 font-bold uppercase tracking-wider text-gray-500"
                >
                  No Users Created
                </td>
              </tr>
            )}
            {users.map((user, index) => (
              <tr
                key={index}
                className={` ${index % 2 !== 0 && "bg-gray-50"} `}
              >
                <td className="p-2 px-3 border-r-2 border-b-2 border-gray-100 ">
                  {user.id}
                </td>
                <td className="p-2 px-3 border-r-2 border-b-2 border-gray-100 ">
                  {user.name}
                </td>
                <td className="p-2 px-3 border-r-2 border-b-2  border-gray-100 ">
                  {user.email}
                </td>
                <td className="p-2 px-3   flex items-center justify-between">
                  <Link
                    to={`/edit/${user.id}`}
                    className="btn bg-blue-500 py-1 px-4 hover:bg-blue-600 transition duration-200  rounded-md text-white mr-4 "
                  >
                    Edit
                  </Link>
                  <button
                    className="btn bg-blue-50 hover:bg-blue-100 transition duration-200 border border-blue-200 py-1 px-4  rounded-md text-blue-500 font-semibold "
                    onClick={() => handleDelete(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Home;
