const express = require("express");
const {
  regUser,
  loginUser,
  logoutUser,
} = require("../controller/userController");

const router = express.Router();

router.post("/register", regUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);

module.exports = router;
