import { useAuth } from "./auth";
import { useNavigate } from "react-router-dom";

export const Profile = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.logout();
    navigate("/");
  };

  return (
    <div className="p-4 text-2xl font-semibold text-center">
      Welcome {auth.user}
      <button
        onClick={handleLogout}
        className="bg-red-600 px-3 py-2 w-[150px] my-4 text-white block mx-auto rounded-full"
      >
        Logout
      </button>
    </div>
  );
};
