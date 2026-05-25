import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { axiosinstance } from "../../axios/axiosinstance";

function AdminLoginPage() {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axiosinstance.post("/admin/login", values);

      localStorage.setItem("adminToken", res.data.token);

      toast.success("Admin login successful ✅");

      navigate("/admin/dashboard");
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="w-full max-w-5xl bg-white rounded-3xl overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-2">
        {/* Left Side */}
        <div className="bg-black text-white flex flex-col justify-center p-10">
          <div className="mb-6">
            <h1 className="text-4xl font-bold tracking-wide">NIKE ADMIN</h1>
          </div>

          <h2 className="text-5xl font-extrabold leading-tight mb-6">
            Just Do It.
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed">
            Manage products, orders, users and analytics from your Nike
            administration dashboard.
          </p>
        </div>

        {/* Right Side */}
        <div className="flex items-center justify-center p-8 bg-white">
          <div className="w-full max-w-md">
            <h2 className="text-3xl font-bold text-black mb-2">Admin Login</h2>

            <p className="text-gray-500 mb-8">
              Sign in to continue to the dashboard
            </p>

            <form className="space-y-5" onSubmit={handleSubmit}>
              {/* Email */}
              <div>
                <label className="block mb-2 text-sm font-semibold text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-white text-black placeholder-gray-500 border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-black"
                  value={values.email}
                  onChange={(e) =>
                    setValues({
                      ...values,
                      email: e.target.value,
                    })
                  }
                />
              </div>

              {/* Password */}
              <div>
                <label className="block mb-2 text-sm font-semibold text-black-700 text-black placeholder-gray-400">
                  Password
                </label>

                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full bg-white text-black placeholder-gray-500 border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-black"
                  value={values.password}
                  onChange={(e) =>
                    setValues({
                      ...values,
                      password: e.target.value,
                    })
                  }
                />
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded-xl font-semibold hover:bg-gray-800 transition duration-300"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminLoginPage;


// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import toast from "react-hot-toast";
// import { axiosinstance } from "../../axios/axiosinstance";


// const AdminLoginPage = () => {
//   const [values, setValues] = useState({ email: "", password: "" });
//   const navigate = useNavigate();

//   const handleSubmit = async () => {
//     try {
//       const res = await axiosinstance.post("/admin/login", values);
//       toast.success("Admin login successful ✅");
//       navigate("/admin/dashboard");
//     } catch (error) {
//       toast.error(error.response?.data?.error || "Login failed ");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-950 text-white px-4">
//       <div className="w-full max-w-md bg-neutral-900 rounded-2xl shadow-2xl p-8 border border-orange-600/40 relative">
//         <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-5 py-2 rounded-full font-bold text-xl shadow-lg">
//           Admin <span className="text-black">Panel</span>
//         </div>

//         <h1 className="text-3xl font-extrabold text-center mb-6">
//           Admin Login 🔐
//         </h1>

//         <fieldset className="space-y-5">
//           <div>
//             <label className="block text-sm text-gray-300 mb-1">Email</label>
//             <input
//               type="email"
//               name="email"
//               placeholder="Enter email"
//               className="w-full input bg-black border border-gray-700 text-white focus:border-orange-500 focus:outline-none"
//               onChange={(e) =>
//                 setValues({ ...values, [e.target.name]: e.target.value })
//               }
//             />
//           </div>

//           <div>
//             <label className="block text-sm text-gray-300 mb-1">Password</label>
//             <input
//               type="password"
//               name="password"
//               placeholder="Enter password"
//               className="w-full input bg-black border border-gray-700 text-white focus:border-orange-500 focus:outline-none"
//               onChange={(e) =>
//                 setValues({ ...values, [e.target.name]: e.target.value })
//               }
//             />
//           </div>

//           <button
//             onClick={handleSubmit}
//             className="w-full btn bg-orange-500 hover:bg-orange-600 border-none text-white font-semibold rounded-full mt-3 transition-all"
//           >
//             Login
//           </button>
//         </fieldset>
//       </div>
//     </div>
//   );
// };

// export default AdminLoginPage;
