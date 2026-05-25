import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userLogin } from "../../services/userServices";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { saveUser } from "../../redux/feature/userSlice";
import { Eye, EyeOff } from "lucide-react";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle Login Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await userLogin(formData);

      console.log("LOGIN RESPONSE:", res.data);

      const token = res.data?.token || res.data?.data?.token;

      console.log("EXTRACTED TOKEN:", token);

      if (!token) {
        toast.error("Token not coming from backend");
        return;
      }

      localStorage.setItem("adminToken", token);

      console.log("SAVED TOKEN:", localStorage.getItem("adminToken"));

      toast.success("Welcome Back 👋");

      dispatch(saveUser(res.data.user));

      navigate("/");
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data?.message || "Login failed ❌");
    }
  };

  return (
    <div className="min-h-screen bg-white grid lg:grid-cols-2">
      {/* LEFT SIDE */}
      <div className="hidden lg:flex relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1600&auto=format&fit=crop"
          alt="Nike"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Branding */}
        <div className="absolute top-10 left-10 text-white z-10">
          <h1 className="text-5xl font-black tracking-widest">NIKE</h1>

          <p className="mt-4 text-white/80 max-w-sm text-lg leading-relaxed">
            Unleash your potential with premium performance footwear and
            apparel.
          </p>
        </div>

        {/* Bottom Quote */}
        <div className="absolute bottom-10 left-10 text-white z-10">
          <p className="text-3xl font-bold leading-snug max-w-md">
            “Just Do It.”
          </p>

          <p className="mt-2 text-white/70">
            Performance starts with confidence.
          </p>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center justify-center px-6 py-10 bg-white">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg"
              alt="Nike"
              className="w-20"
            />
          </div>

          {/* Heading */}
          <div className="mb-10 text-center">
            <h2 className="text-4xl font-black text-black">Welcome Back</h2>

            <p className="text-gray-500 mt-3">
              Sign in to continue shopping the latest collections.
            </p>
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-none h-14 px-4 text-black focus:outline-none focus:border-black transition"
              />
            </div>

            {/* Password */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-none h-14 px-4 pr-12 text-black focus:outline-none focus:border-black transition"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {/* Options */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer text-gray-600">
                <input type="checkbox" className="checkbox checkbox-sm" />
                Remember me
              </label>

              <a className="text-black hover:underline cursor-pointer">
                Forgot Password?
              </a>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-black text-white h-14 text-sm font-semibold tracking-wider uppercase hover:bg-gray-900 transition"
            >
              Sign In
            </button>
          </form>

          {/* Divider */}
          <div className="divider text-gray-400 my-8">OR</div>

          {/* Google */}
          <button className="w-full border border-black h-14 flex items-center justify-center gap-3 text-sm font-medium hover:bg-black hover:text-white transition">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="google"
              className="w-5 h-5"
            />
            Continue with Google
          </button>

          {/* Signup */}
          <p className="text-center text-sm text-gray-500 mt-8">
            Not a member?{" "}
            <Link
              to="/signup"
              className="text-black font-semibold hover:underline"
            >
              Join Us
            </Link>
          </p>
          <p className="text-center text-sm text-gray-500 mt-8">
            Are you a{" "}
            <Link
              to="/admin/dashboard"
              className="text-black font-semibold hover:underline"
            >
              {" "}
              Admin?
            </Link>
          </p>

          {/* Footer */}
          <p className="text-center text-xs text-gray-400 mt-10 leading-relaxed">
            By logging in, you agree to Nike's Privacy Policy and Terms of Use.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
