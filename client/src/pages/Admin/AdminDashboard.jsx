import React, { useEffect, useState } from "react";
import {
  FaBoxOpen,
  FaUsers,
  FaHome,
  FaShoppingCart,
  FaDollarSign,
} from "react-icons/fa";
import { MdPendingActions } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { axiosinstance } from "../axios/axiosinstance";

const AdminDashboardPage = () => {
  const navigate = useNavigate();

  const [stats, setStats] = useState({
    products: 0,
    users: 0,
    orders: 0,
    revenue: 0,
    pendingOrders: 0,
  });

  const [error, setError] = useState("");

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await axiosinstance.get(
          "/admin/dashboard-stats"
        );

        setStats(res.data.stats);

        setError("");
      } catch (err) {
        console.log(err);

        setError(
          "Failed to load dashboard stats"
        );
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white p-6">

      {/* TOP HEADER */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-5">

        <div>
          <h1 className="text-4xl font-extrabold tracking-wide">
            NIKE ADMIN
          </h1>

          <p className="text-gray-400 mt-2">
            Manage your store analytics & products
          </p>
        </div>

        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 bg-white text-black px-5 py-3 rounded-full font-semibold hover:scale-105 transition duration-300"
        >
          <FaHome />
          Back To Store
        </button>
      </div>

      {/* ERROR */}
      {error && (
        <div className="bg-red-500 p-4 rounded-xl mb-6">
          {error}
        </div>
      )}

      {/* HERO BANNER */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 mb-10 border border-gray-700 shadow-2xl">

        <div className="flex flex-col lg:flex-row justify-between items-center">

          <div>
            <p className="text-gray-400 uppercase tracking-[4px]">
              Today's Overview
            </p>

            <h2 className="text-5xl font-black mt-3 leading-tight">
              JUST <span className="text-orange-500">DO IT.</span>
            </h2>

            <p className="text-gray-400 mt-4 max-w-lg">
              Monitor products, users, orders and revenue
              with your modern e-commerce dashboard.
            </p>
          </div>

          <div className="mt-8 lg:mt-0">
            <img
              src="https://static.nike.com/a/images/t_default/f6f5efc7-0f2d-4ef5-8fd5-32e4f9cb5d5d/air-jordan-1-mid-shoes-SQf7DM.png"
              alt="nike-shoe"
              className="w-72 drop-shadow-[0_20px_40px_rgba(255,255,255,0.15)]"
            />
          </div>

        </div>
      </div>

      {/* STATS CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

        {/* PRODUCTS */}
        <div className="bg-[#111111] border border-gray-800 rounded-3xl p-6 hover:scale-105 transition duration-300 shadow-lg">

          <div className="flex justify-between items-center">

            <div>
              <p className="text-gray-400 text-sm">
                Total Products
              </p>

              <h2 className="text-4xl font-bold mt-2">
                {stats.products}
              </h2>
            </div>

            <div className="bg-orange-500/20 p-4 rounded-2xl">
              <FaBoxOpen className="text-orange-500 text-3xl" />
            </div>

          </div>
        </div>

        {/* USERS */}
        <div className="bg-[#111111] border border-gray-800 rounded-3xl p-6 hover:scale-105 transition duration-300 shadow-lg">

          <div className="flex justify-between items-center">

            <div>
              <p className="text-gray-400 text-sm">
                Total Users
              </p>

              <h2 className="text-4xl font-bold mt-2">
                {stats.users}
              </h2>
            </div>

            <div className="bg-blue-500/20 p-4 rounded-2xl">
              <FaUsers className="text-blue-400 text-3xl" />
            </div>

          </div>
        </div>

        {/* ORDERS */}
        <div className="bg-[#111111] border border-gray-800 rounded-3xl p-6 hover:scale-105 transition duration-300 shadow-lg">

          <div className="flex justify-between items-center">

            <div>
              <p className="text-gray-400 text-sm">
                Total Orders
              </p>

              <h2 className="text-4xl font-bold mt-2">
                {stats.orders || 0}
              </h2>
            </div>

            <div className="bg-green-500/20 p-4 rounded-2xl">
              <FaShoppingCart className="text-green-400 text-3xl" />
            </div>

          </div>
        </div>

        {/* REVENUE */}
        <div className="bg-[#111111] border border-gray-800 rounded-3xl p-6 hover:scale-105 transition duration-300 shadow-lg">

          <div className="flex justify-between items-center">

            <div>
              <p className="text-gray-400 text-sm">
                Revenue
              </p>

              <h2 className="text-4xl font-bold mt-2">
                ₹ {stats.revenue || 0}
              </h2>
            </div>

            <div className="bg-yellow-500/20 p-4 rounded-2xl">
              <FaDollarSign className="text-yellow-400 text-3xl" />
            </div>

          </div>
        </div>

        {/* PENDING ORDERS */}
        <div className="bg-[#111111] border border-gray-800 rounded-3xl p-6 hover:scale-105 transition duration-300 shadow-lg">

          <div className="flex justify-between items-center">

            <div>
              <p className="text-gray-400 text-sm">
                Pending Orders
              </p>

              <h2 className="text-4xl font-bold mt-2">
                {stats.pendingOrders || 0}
              </h2>
            </div>

            <div className="bg-red-500/20 p-4 rounded-2xl">
              <MdPendingActions className="text-red-400 text-3xl" />
            </div>

          </div>
        </div>

        {/* PERFORMANCE */}
        <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl p-6 hover:scale-105 transition duration-300 shadow-lg">

          <p className="text-sm uppercase tracking-widest">
            Performance
          </p>

          <h2 className="text-5xl font-black mt-4">
            98%
          </h2>

          <p className="mt-4 text-sm">
            Store performance increased this month
          </p>
        </div>

      </div>

      {/* RECENT ACTIVITY */}
      <div className="bg-[#111111] border border-gray-800 rounded-3xl p-8 mt-10">

        <div className="flex justify-between items-center mb-6">

          <h2 className="text-2xl font-bold">
            Recent Activity
          </h2>

          <button className="text-orange-500 hover:text-orange-400">
            View All
          </button>
        </div>

        <div className="space-y-5">

          <div className="flex justify-between items-center border-b border-gray-800 pb-4">
            <div>
              <p className="font-semibold">
                New Product Added
              </p>

              <p className="text-gray-400 text-sm">
                Nike Air Max 270
              </p>
            </div>

            <span className="text-gray-500 text-sm">
              2 mins ago
            </span>
          </div>

          <div className="flex justify-between items-center border-b border-gray-800 pb-4">
            <div>
              <p className="font-semibold">
                New User Registered
              </p>

              <p className="text-gray-400 text-sm">
                user@gmail.com
              </p>
            </div>

            <span className="text-gray-500 text-sm">
              10 mins ago
            </span>
          </div>

          <div className="flex justify-between items-center">
            <div>
              <p className="font-semibold">
                Order Delivered
              </p>

              <p className="text-gray-400 text-sm">
                Order #NIKE2031
              </p>
            </div>

            <span className="text-gray-500 text-sm">
              1 hour ago
            </span>
          </div>

        </div>

      </div>
    </div>
  );
};

export default AdminDashboardPage;