import React, { useContext } from "react";
import logo from "../../../assets/images/logo/logo.jpg";
import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { AuthContext } from "../../../providers/AuthProviders";

const Navbar = () => {

  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const navItems = (
    <>
      <li className="font-medium">
        <Link to="/">Home</Link>
      </li>
      <li className="font-medium">
        <Link to="/allToys">All Toys</Link>
      </li>
      <li className="font-medium">
        <Link to="/">My Toys</Link>
      </li>
      <li className="font-medium">
        <Link to="/toys">Add A Toy</Link>
      </li>
      <li className="font-medium">
        <Link to="/blogs">Blogs</Link>
      </li>
      <div>
        {user?.email ? (
          <>
            <li>
              <button
                onClick={handleLogOut}
                className="btn btn-outline btn-secondary capitalize"
              >
                Log Out
              </button>
            </li>
          </>
        ) : (
          <li>
            <Link to="/login">
              <button className="btn btn-outline btn-secondary capitalize">
                Login
              </button>
            </Link>
          </li>
        )}
      </div>
      <li className="font-medium text-3xl">
        <Link to="/">
          <FaUserAlt></FaUserAlt>
        </Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-200">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <div className="flex">
          <div>
            <img src={logo} className="w-24 h-14" alt="" />
          </div>
          <a className="btn btn-ghost normal-case text-2xl font-bold">
            Toy Street
          </a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navItems}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
