const Admin = require("../models/adminModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Product = require("../models/productModel");
const User = require("../models/userModel");

// Create Token
const createToken = (admin) => {
  return jwt.sign(
    {
      _id: admin._id,
      role: admin.role,
    },
    process.env.SECRET_KEY,
    {
      expiresIn: "7d",
    },
  );
};

// register admin
exports.regAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validation
    if (!email || !password) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    // Check Existing Admin
    const alreadyExist = await Admin.findOne({ email });

    if (alreadyExist) {
      return res.status(400).json({
        message: "Email already exists",
      });
    }

    // Hash Password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create Admin
    const newAdmin = new Admin({
      email,
      password: hashedPassword,
    });

    // Save Admin
    const saved = await newAdmin.save();

    res.status(201).json({
      success: true,
      message: "Admin Created Successfully",
      saved,
    });
  } catch (err) {
    console.log(err);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// login admin
exports.loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validation
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and Password are required",
      });
    }

    // Check Admin
    const admin = await Admin.findOne({ email });

    if (!admin) {
      return res.status(400).json({
        success: false,
        message: "Invalid Email",
      });
    }

    // Compare Password
    const isMatch = await bcrypt.compare(password, admin.password);

    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Invalid Password",
      });
    }

    // Generate Token
    const token = createToken(admin);

    // Store Cookie
    // res.cookie("adminToken", token, {
    //   httpOnly: true,
    //   secure: true,
    //   sameSite: "none",
    //   path: "/",
    //   maxAge: 7 * 24 * 60 * 60 * 1000,
    // });

    res.cookie("adminToken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
      path: "/",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    // Response
    res.status(200).json({
      success: true,
      message: "Admin Login Successful",
      token,
      admin: {
        id: admin._id,
        email: admin.email,
        role: admin.role,
      },
    });
  } catch (err) {
    console.log(err);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

//logout Admin
exports.logoutAdmin = async (req, res) => {
  try {
    res.clearCookie("adminToken", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    });

    res.status(200).json({
      success: true,
      message: "Admin Logout Successful",
    });
  } catch (err) {
    console.log(err);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

exports.getDashboardStats = async (req, res) => {
  try {
    // count total users from registered data
    const totalUsers = await User.countDocuments();

    // count total products
    const totalProducts = await Product.countDocuments();

    res.status(200).json({
      stats: {
        users: totalUsers, // total registered users
        products: totalProducts, // total uploaded products
      },
    });
  } catch (error) {
    console.error("Error fetching dashboard stats:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
