const jwt = require("jsonwebtoken");

// ✅ Controller for checking authentication (user/admin)
exports.checkAuth = (req, res) => {
  try {
    const { token, adminToken } = req.cookies;

    //  No cookie found
    if (!token && !adminToken) {
      return res.status(401).json({ error: "No token found" });
    }

    //  Verify whichever token exists
    let verified;
    if (token) {
      verified = jwt.verify(token, process.env.SECRET_KEY);
    } else if (adminToken) {
      verified = jwt.verify(adminToken, process.env.SECRET_KEY);
    }

    // 3️⃣ If verification fails
    if (!verified) {
      return res.status(401).json({ error: "Invalid token" });
    }

    // 4️⃣ Send decoded user/admin data
    return res.status(200).json({ user: verified });
  } catch (error) {
    console.error("Auth check error:", error);
    return res
      .status(401)
      .json({ error: "Authentication failed", details: error.message });
  }
};