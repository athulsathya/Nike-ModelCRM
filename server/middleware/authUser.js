const jwt = require("jsonwebtoken");

const authUser = (req, res, next) => {
  try {
    const { token } = req.cookies;

    if (!token) {
      return res.status(401).json({
        error: "JWT token not found",
      });
    }

    const verifiedToken = jwt.verify(token, process.env.SECRET_KEY);

    req.user = verifiedToken.id;

    next();
  } catch (error) {
    res.status(401).json({
      error: error.message || "User authorization failed",
    });
  }
};

module.exports = authUser;
