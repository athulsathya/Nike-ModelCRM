import React, { useEffect, useState } from "react";
import CartCard from "../components/user/CartCard";
import { getCartItem } from "../services/userServices";

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  const updateCartFromChild = (id, totalPrice) => {
    const updatedItems = cartItems.filter((item) => item.productId._id !== id);

    setCartItems(updatedItems);
    setTotal(totalPrice);
  };

  useEffect(() => {
    getCartItem()
      .then((res) => {
        setCartItems(res.data.products || []);
        setTotal(res.data.totalPrice || 0);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* TOP HERO */}
      <div className="bg-black text-white py-16 px-6 md:px-14">
        <div className="max-w-7xl mx-auto">
          <p className="uppercase tracking-[4px] text-sm text-gray-400 mb-3">
            Nike Cart
          </p>

          <h1 className="text-4xl md:text-6xl font-black uppercase">
            Your Bag
          </h1>

          <p className="text-gray-300 mt-4 max-w-2xl">
            Review your items and proceed to secure checkout with premium
            Nike-inspired experience.
          </p>
        </div>
      </div>

      {/* MAIN SECTION */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        {cartItems.length > 0 ? (
          <div className="flex flex-col xl:flex-row gap-10">
            {/* LEFT SIDE */}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-3xl font-bold text-black">Cart Items</h2>

                  <p className="text-gray-500 mt-1">
                    {cartItems.length} Items Added
                  </p>
                </div>

                <button className="hidden md:block border border-gray-300 px-5 py-2 rounded-full hover:border-black transition font-medium">
                  Continue Shopping
                </button>
              </div>

              {/* ITEMS */}
              <div className="space-y-6">
                {cartItems.map((item) => (
                  <div
                    key={item._id}
                    className="bg-white border border-gray-200 rounded-3xl p-4 shadow-sm hover:shadow-xl transition duration-300"
                  >
                    <CartCard
                      item={item}
                      updateCartFromChild={updateCartFromChild}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="w-full xl:w-[420px]">
              <div className="bg-[#f7f7f7] rounded-3xl p-8 sticky top-10 border border-gray-200 shadow-lg">
                <h2 className="text-2xl font-bold text-black mb-8">
                  Order Summary
                </h2>

                {/* PRICE DETAILS */}
                <div className="space-y-5">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span className="font-semibold text-black">₹{total}</span>
                  </div>

                  <div className="flex justify-between text-gray-600">
                    <span>Shipping</span>
                    <span className="text-green-600 font-semibold">Free</span>
                  </div>

                  <div className="flex justify-between text-gray-600">
                    <span>Taxes</span>
                    <span className="font-semibold text-black">Included</span>
                  </div>
                </div>

                <div className="border-t border-gray-300 my-8"></div>

                {/* TOTAL */}
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-black">Total</span>

                  <span className="text-2xl font-black text-black">
                    ₹{total}
                  </span>
                </div>

                {/* CHECKOUT BUTTON */}
                <button className="w-full mt-8 bg-black hover:bg-gray-900 text-white py-4 rounded-full font-semibold text-lg transition duration-300 hover:scale-[1.02]">
                  Checkout
                </button>

                {/* PAYMENT TEXT */}
                <p className="text-xs text-gray-500 text-center mt-5 leading-6">
                  Secure payment powered by Nike Store. All transactions are
                  encrypted and protected.
                </p>

                {/* DELIVERY INFO */}
                <div className="mt-8 bg-white rounded-2xl p-5 border border-gray-200">
                  <h3 className="font-bold text-black mb-3">Free Delivery</h3>

                  <p className="text-sm text-gray-500 leading-6">
                    Your order qualifies for free standard delivery anywhere in
                    India.
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* EMPTY STATE */
          <div className="flex flex-col items-center justify-center text-center py-24">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
              className="w-40 opacity-80"
              alt="Empty Cart"
            />

            <p className="uppercase tracking-[4px] text-gray-400 text-sm mt-8">
              Your Nike Bag
            </p>

            <h2 className="text-4xl font-black mt-3 text-black">
              Cart Is Empty
            </h2>

            <p className="text-gray-500 mt-4 max-w-md leading-7">
              Looks like you haven’t added any premium products yet. Explore the
              latest Nike-inspired collection now.
            </p>

            <button
              onClick={() => (window.location.href = "/product")}
              className="mt-10 bg-black text-white px-10 py-4 rounded-full font-semibold hover:bg-gray-900 hover:scale-105 transition duration-300"
            >
              Start Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
