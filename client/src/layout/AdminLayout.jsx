import React from "react";
import {
  FaBoxOpen,
  FaPlusCircle,
  FaSignOutAlt,
  FaTachometerAlt,
} from "react-icons/fa";

import { Outlet, useNavigate, useLocation } from "react-router-dom";

import toast from "react-hot-toast";

import { axiosinstance } from "../axios/axiosinstance";

const AdminLayout = () => {
  const navigate = useNavigate();

  const location = useLocation();

  const handleLogout = async () => {
    try {
      await axiosinstance.post("/admin/logout");

      toast.success("Logged out successfully");

      navigate("/admin/login");
    } catch (error) {
      toast.error("Logout failed");
    }
  };

  const navItems = [
    {
      name: "Dashboard",
      icon: <FaTachometerAlt />,
      path: "/admin/dashboard",
    },

    {
      name: "Products",
      icon: <FaBoxOpen />,
      path: "/admin/products",
    },

    {
      name: "Add Product",
      icon: <FaPlusCircle />,
      path: "/admin/addproduct",
    },
  ];

  return (
    <div className="min-h-screen flex bg-black text-white overflow-hidden">
      {/* SIDEBAR */}
      <aside className="w-[290px] bg-[#0a0a0a] border-r border-gray-800 flex flex-col justify-between px-6 py-8">
        {/* TOP */}
        <div>
          {/* LOGO */}
          <div
            className="mb-14 cursor-pointer"
            onClick={() => navigate("/admin/dashboard")}
          >
            <h1 className="text-4xl font-black tracking-wider">NIKE</h1>

            <p className="text-gray-500 text-sm mt-1 tracking-[3px] uppercase">
              Admin Panel
            </p>
          </div>

          {/* PROFILE CARD */}
          <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl p-5 mb-10 shadow-2xl">
            <p className="text-sm uppercase tracking-[3px]">Welcome Back</p>

            <h2 className="text-2xl font-bold mt-2">Admin</h2>

            <p className="text-sm mt-3 text-white/80">
              Manage your Nike store seamlessly
            </p>
          </div>

          {/* NAVIGATION */}
          <div className="space-y-3">
            {navItems.map((item, index) => {
              const isActive = location.pathname === item.path;

              return (
                <div
                  key={index}
                  onClick={() => navigate(item.path)}
                  className={`flex items-center gap-4 px-5 py-4 rounded-2xl cursor-pointer transition-all duration-300
                  
                  ${
                    isActive
                      ? "bg-white text-black shadow-lg"
                      : "hover:bg-[#171717] text-gray-300"
                  }`}
                >
                  <span
                    className={`text-xl ${
                      isActive ? "text-black" : "text-orange-500"
                    }`}
                  >
                    {item.icon}
                  </span>

                  <span className="font-medium tracking-wide">{item.name}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* BOTTOM */}
        <div>
          {/* STORE BUTTON */}
          <button
            onClick={() => navigate("/")}
            className="w-full bg-white text-black py-4 rounded-2xl font-bold hover:scale-105 transition duration-300 mb-4"
          >
            Go To Store
          </button>

          {/* LOGOUT */}
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-3 bg-[#171717] hover:bg-red-500 py-4 rounded-2xl transition duration-300"
          >
            <FaSignOutAlt />
            Logout
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 bg-[#050505] overflow-y-auto">
        {/* TOP NAVBAR */}
        <div className="sticky top-0 z-50 bg-black/70 backdrop-blur-lg border-b border-gray-800 px-10 py-6 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-black tracking-wide">JUST DO IT.</h1>

            <p className="text-gray-500 text-sm mt-1">
              Nike Store Management System
            </p>
          </div>

          {/* SEARCH + ADMIN */}
          <div className="flex items-center gap-5">
            <input
              type="text"
              placeholder="Search..."
              className="bg-[#171717] border border-gray-700 rounded-2xl px-5 py-3 outline-none focus:border-orange-500 w-64"
            />

            <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center text-xl font-bold">
              A
            </div>
          </div>
        </div>

        {/* PAGE CONTENT */}
        <div className="p-10">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
