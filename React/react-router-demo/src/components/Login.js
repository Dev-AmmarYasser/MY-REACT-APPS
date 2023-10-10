import { useState } from "react";
import { useNavigate, useLocation } from "react-router";
import { useAuth } from "./auth";

export const Login = () => {
  const [user, setUser] = useState("");
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const redirectPath = location.state?.path || "/";

  const handleLogin = () => {
    auth.login(user);
    navigate(redirectPath, { replace: true });
  };

  return (
    <div className="p-4">
      <label className="font-semibold text-center text-2xl block ">
        Username :{" "}
        <input
          type="text"
          onChange={(e) => setUser(e.target.value)}
          className="p-3 bg-gray-100 rounded-xl mt-4 mx-auto block w-[300px]  focus:outline-sky-500 caret-sky-500"
        />
      </label>
      <button
        onClick={handleLogin}
        className="bg-sky-600 px-3 py-2 w-[150px] my-4 text-white block mx-auto rounded-full"
      >
        Login
      </button>
    </div>
  );
};
