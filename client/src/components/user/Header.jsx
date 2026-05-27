import React from "react";
import DarkMode from "../Shared/DarkMode";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { persistor } from "../../redux/store";
import { clearUser } from "../redux/feature/userSlice";
import { userLogOut } from "../services/userServices";
import { PiShoppingCartSimpleLight } from "react-icons/pi";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userData = useSelector((state) => state.user);

  const handleLogOut = async () => {
    try {
      await userLogOut();

      persistor.purge();
      dispatch(clearUser());

      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="bg-base-200 shadow-sm w-full rounded-md sticky top-0 z-50">
      <input id="navbar-1-toggle" className="peer hidden" type="checkbox" />

      {/* Mobile Overlay */}
      <label
        htmlFor="navbar-1-toggle"
        className="fixed inset-0 bg-black/30 hidden peer-checked:block lg:hidden"
      ></label>

      <div className="navbar px-4">
        {/* Navbar Start */}
        <div className="navbar-start">
          <label htmlFor="navbar-1-toggle" className="btn btn-ghost lg:hidden">
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

          <button
            onClick={() => navigate("/")}
            className="btn btn-ghost text-2xl font-bold tracking-wide"
          >
            NIKE
          </button>
        </div>

        {/* Navbar Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-2 px-1 font-medium">
            <li>
              <button onClick={() => navigate("/")}>Home</button>
            </li>

            <li>
              <button onClick={() => navigate("/about")}>About</button>
            </li>

            <li>
              <button onClick={() => navigate("/product")}>Products</button>
            </li>
          </ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end gap-3">
          {/* Cart */}
          <button
            className="btn btn-ghost btn-circle text-2xl"
            onClick={() => navigate("/cart")}
          >
            <PiShoppingCartSimpleLight />
          </button>

          {/* Dark Mode */}
          <DarkMode />

          {/* User Section */}
          {userData?.user?.name ? (
            <div className="flex items-center gap-3 px-3 py-1.5 rounded-full bg-base-100 border border-base-300 shadow-sm hover:shadow-md transition-all duration-300">
              {/* Profile */}
              <div className="relative">
                <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-primary/30">
                  {userData?.user?.profileImage ? (
                    <img
                      src={userData.user.profileImage}
                      alt={userData.user.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-primary text-primary-content flex items-center justify-center font-semibold uppercase">
                      {userData.user.name.charAt(0)}
                    </div>
                  )}
                </div>

                {/* Online Indicator */}
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-base-100 rounded-full"></span>
              </div>

              {/* User Details */}
              <div className="hidden md:flex flex-col leading-tight">
                <span className="font-semibold text-sm">
                  {userData.user.name}
                </span>

                <span className="text-xs text-base-content/60">
                  {userData.user.email}
                </span>
              </div>

              {/* Logout */}
              <button
                className="btn btn-sm btn-error rounded-full text-white"
                onClick={handleLogOut}
              >
                Logout
              </button>
            </div>
          ) : (
            <button
              className="btn btn-primary rounded-full px-6"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="fixed top-0 left-0 h-full w-72 bg-base-100 z-50 transform -translate-x-full peer-checked:translate-x-0 transition-transform duration-300 lg:hidden shadow-xl">
        <div className="p-5">
          <h2 className="text-2xl font-bold mb-6">Menu</h2>

          <ul className="menu gap-3">
            <li>
              <button onClick={() => navigate("/")}>Home</button>
            </li>

            <li>
              <button onClick={() => navigate("/about")}>About</button>
            </li>

            <li>
              <button onClick={() => navigate("/product")}>Products</button>
            </li>

            <li>
              <button onClick={() => navigate("/cart")}>Cart</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
