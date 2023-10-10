import { NavLink } from "react-router-dom";
import { useAuth } from "./auth";

export const Navbar = () => {
  const navLinkStyles = ({ isActive }) => {
    return isActive ? "bg-white text-indigo-600 " : "";
  };

  const auth = useAuth();

  return (
    <nav className="bg-gradient-to-r flex flex-wrap justify-center sm:block sm:justify-start from-indigo-700 from-30% to-violet-700 to-60% p-5 box-shadow shadow-lg shadow-indigo-100">
      <NavLink className={navLinkStyles} to="/">
        Home
      </NavLink>
      <NavLink className={navLinkStyles} to="/about">
        About
      </NavLink>
      <NavLink className={navLinkStyles} to="/product">
        Product
      </NavLink>
      <NavLink className={navLinkStyles} to="/users">
        Users
      </NavLink>
      <NavLink className={navLinkStyles} to="/profile">
        Profile
      </NavLink>
      {!auth.user && (
        <NavLink className={navLinkStyles} to="/login">
          Login
        </NavLink>
      )}
    </nav>
  );
};
