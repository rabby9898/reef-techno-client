import { Link, NavLink } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
const Nav = () => {
  const links = (
    <>
      <li className="text-sm text-white hover:text-[#00A3D1] uppercase mr-8">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#00A3D1] underline font-bold"
              : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li className="text-sm text-white hover:text-[#00A3D1] uppercase mr-8">
        <NavLink
          to="/addProduct"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#00A3D1] underline font-bold"
              : ""
          }
        >
          Add Product
        </NavLink>
      </li>
      <li className="text-sm text-white hover:text-[#00A3D1] uppercase mr-8">
        <NavLink
          to="/myCart"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#00A3D1] underline font-bold"
              : ""
          }
        >
          My Cart
        </NavLink>
      </li>
      <li className="text-sm text-white hover:text-[#00A3D1] uppercase mr-8">
        <NavLink
          to="/register"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#00A3D1] underline font-bold"
              : ""
          }
        >
          Register
        </NavLink>
      </li>
      <li className="text-sm text-white hover:text-[#00A3D1] uppercase mr-8">
        <NavLink
          to="/login"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#00A3D1] underline font-bold"
              : ""
          }
        >
          Login
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="px-5 py-5 md:px-10 md:py-5 lg:px-36 lg:py-5 bg-black">
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost text-white lg:hidden">
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
              className="bg-black text-white dropdown-content hover:text-white mt-3 z-[1] p-2 w-52"
            >
              {links}
            </ul>
          </div>
          <Link to="/">
            <img
              className="w-[130px] h-[40px]"
              src="https://i.ibb.co/CWT5wrP/Black-White-Minimalist-Business-Logo.png"
              alt="logo"
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className=" menu-horizontal px-1 hover:text-white">{links}</ul>
        </div>
        <div className="navbar-end">
          <Link to="/login">
            <button className="">
              <FaUserCircle className="text-white text-3xl hover:text-[#00A3D1] hover:bg-white hover:border hover:border-white hover:rounded-full" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
