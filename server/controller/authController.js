const jwt = require("jsonwebtoken");

exports.checkAuth = (req, res) => {
  try {
    const { token, adminToken } = req.cookies;

    if (!token && !adminToken) {
      return res.status(401).json({
        error: "No token found",
      });
    }

    let verified;

    // Admin gets priority
    if (adminToken) {
      verified = jwt.verify(
        adminToken,
        process.env.SECRET_KEY
      );
    } else {
      verified = jwt.verify(
        token,
        process.env.SECRET_KEY
      );
    }

    return res.status(200).json({
      user: verified,
    });

  } catch (error) {
    console.error("Auth check error:", error);

    return res.status(401).json({
      error: "Authentication failed",
      details: error.message,
    });
  }
};