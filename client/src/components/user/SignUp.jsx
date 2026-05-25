import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { userSignUp } from "../../services/userServices";
import { Eye, EyeOff } from "lucide-react";

function Signup() {
  const [showPassword, setShowPassword] = useState(false);

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    username: "",
    phone: "",
    password: "",
    confirmpassword: "",
  });

  const navigate = useNavigate();

  // Handle Input
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmpassword) {
      return toast.error("Passwords do not match ❌");
    }

    try {
      const res = await userSignUp(formData);

      console.log(res);

      toast.success("Account created successfully ✅");

      navigate("/login");
    } catch (error) {
      console.log(error);

      toast.error(error.response?.data?.error || "Signup failed ❌");
    }
  };

  return (
    <div className="min-h-screen bg-white grid lg:grid-cols-2">
      {/* LEFT SIDE */}
      <div className="hidden lg:flex relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1600&auto=format&fit=crop"
          alt="Nike Signup"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Branding */}
        <div className="absolute top-10 left-10 text-white z-10">
          <h1 className="text-5xl font-black tracking-widest">NIKE</h1>

          <p className="mt-4 text-white/80 max-w-sm text-lg leading-relaxed">
            Become a member and unlock premium sneakers, exclusive drops, and
            personalized experiences.
          </p>
        </div>

        {/* Quote */}
        <div className="absolute bottom-10 left-10 text-white z-10">
          <p className="text-3xl font-bold leading-snug max-w-md">
            “Greatness Starts Here.”
          </p>

          <p className="mt-2 text-white/70">Join the movement today.</p>
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
          <div className="mb-8 text-center">
            <h2 className="text-4xl font-black text-black">Create Account</h2>

            <p className="text-gray-500 mt-3">
              Sign up to access the latest drops and exclusive collections.
            </p>
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Full Name */}
            <div>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 h-14 px-4 text-black focus:outline-none focus:border-black transition"
              />
            </div>

            {/* Username */}
            <div>
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 h-14 px-4 text-black focus:outline-none focus:border-black transition"
              />
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 h-14 px-4 text-black focus:outline-none focus:border-black transition"
              />
            </div>

            {/* Phone */}
            <div>
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 h-14 px-4 text-black focus:outline-none focus:border-black transition"
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
                className="w-full border border-gray-300 h-14 px-4 pr-12 text-black focus:outline-none focus:border-black transition"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {/* Confirm Password */}
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmpassword"
                placeholder="Confirm Password"
                value={formData.confirmpassword}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 h-14 px-4 pr-12 text-black focus:outline-none focus:border-black transition"
              />

              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
              >
                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {/* Terms */}
            <div className="flex items-start gap-3 text-sm text-gray-600">
              <input
                type="checkbox"
                className="checkbox checkbox-sm mt-1"
                required
              />

              <p>I agree to Nike’s Terms of Use and Privacy Policy.</p>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-black text-white h-14 text-sm font-semibold tracking-wider uppercase hover:bg-gray-900 transition"
            >
              Create Account
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

          {/* Login */}
          <p className="text-center text-sm text-gray-500 mt-8">
            Already a member?{" "}
            <Link
              to="/login"
              className="text-black font-semibold hover:underline"
            >
              Sign In
            </Link>
          </p>

          {/* Footer */}
          <p className="text-center text-xs text-gray-400 mt-10 leading-relaxed">
            By creating an account, you agree to our Terms and Conditions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
