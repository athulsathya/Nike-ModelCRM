const express = require("express");

const {checkAuth}=require('../controller/authController')

const router = express.Router();

// /api/auth/check
router.get("/check", checkAuth);

module.exports = router;