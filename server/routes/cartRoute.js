const express = require("express");
const {
  addToCart,
  getCart,
  removeFromCart,
} = require("../controller/cartController");
const authUser = require("../middleware/authUser");

const router = express.Router();

// ✅ Add product to cart
router.post("/addtocart/:productId", authUser, addToCart);

// ✅ Get user's cart
router.get("/getcart", authUser, getCart);

// ✅ Delete user's cart
router.delete("/removefromcart/:productId", authUser, removeFromCart);

module.exports = router;
