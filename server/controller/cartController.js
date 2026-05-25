const Product = require("../models/productModel");
const Cart = require("../models/cartModel");
const mongoose = require("mongoose");

const getCart = async (req, res) => {
  try {
    const userId = req.user;

    // Find cart and populate product details
    const cart = await Cart.findOne({ userId }).populate("products.productId");
    console.log(cart);

    if (!cart || cart.products.length === 0) {
      return res.status(400).json({ error: "Cart is empty" });
    }

    return res.status(200).json(cart);
  } catch (error) {
    console.error("Error fetching cart:", error);
    return res.status(error.status || 500).json({
      error: error.message || "Internal server error",
    });
  }
};

const addToCart = async (req, res) => {
  try {
    const userId = req.user;
    let { productId } = req.params;
    productId = productId.trim();

    // ✅ Step 2: Validate ObjectId before using it
    if (!mongoose.Types.ObjectId.isValid(productId)) {
      return res.status(400).json({ error: "Invalid product ID" });
    }

    const product = await Product.findById(productId);
    // console.log("ProductId from params:", productId)
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    let cart = await Cart.findOne({ userId });

    if (!cart) {
      cart = new Cart({ userId, products: [] });
    }

    const productAlreadyExist = cart.products.some(
      (item) => item.productId.toString() === productId,
    );

    if (productAlreadyExist) {
      return res.status(400).json({ error: "Already in cart" });
    }

    cart.products.push({
      productId,
      price: product.price,
    });
    cart.calculateTotalPrice();

    await cart.save();

    return res.status(200).json({ message: "Added to cart", cart });
  } catch (error) {
    console.log(error);

    return res
      .status(error.status || 500)
      .json({ error: error.message } || "internal server error");
  }
};

const removeFromCart = async (req, res) => {
  try {
    const userId = req.user;
    //which product to remove will put in params
    const { productId } = req.params;

    let cart = await Cart.findOne({ userId });
    if (!cart) {
      return res.status(404).json({ error: "cart not found" });
    }
    cart.products = cart.products.filter(
      (item) => !item.productId.equals(productId),
    );
    cart.calculateTotalPrice();
    await cart.save();

    return res.status(200).json({ message: "product removed fom cart", cart });
  } catch (error) {
    console.log(error);

    return res
      .status(error.status || 500)
      .json({ error: error.message } || "internal server error");
  }
};

module.exports = {
  addToCart,
  getCart,
  removeFromCart,
};
