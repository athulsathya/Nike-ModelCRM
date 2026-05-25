import { createBrowserRouter, Navigate } from "react-router-dom";

import UserLayout from "../layout/UserLayout";
import Homepage from "../pages/user/Homepage";
import AboutPage from "../pages/user/AboutPage";
import Products from "../pages/user/Products";
import Login from "../pages/shared/Login";
import Signup from "../components/user/SignUp";
import Cart from "../pages/Cart";
import AddProductPage from "../pages/Admin/AddProductPage";
import AdminLayout from "../layout/AdminLayout";
import AdminLoginPage from "../pages/Admin/AdminLoginPage";
import AdminDashboard from "../pages/Admin/AdminDashboard";
import AdminProductPage from "../pages/Admin/AdminProducts"
import ProtectedRoute from "./ProtectedRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <UserLayout />,
    errorElement: <h1>Error page</h1>,

    children: [
      { index: true, element: <Homepage /> },
      { path: "about", element: <AboutPage /> },
      { path: "product", element: <Products /> },
      { path: "cart", element: <Cart /> },
      { path: "login", element: <Login /> },
      { path: "signup", element: <Signup /> },
    ],
  },

  // Admin Login
  {
    path: "/admin/login",
    element: <AdminLoginPage />,
  },

  // Protected Admin Routes
  {
    path: "/admin",
    element: (
      <ProtectedRoute role="admin">
        <AdminLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <Navigate to="dashboard" replace />,
      },
      {
        path: "dashboard",
        element: <AdminDashboard />,
      },
      {
        path: "products",
        element: <AdminProductPage />,
      },
      {
        path: "addproduct",
        element: <AddProductPage />,
      },
    ],
  },
]);
