import React from "react";
import { removeCartItem } from "../../services/userServices";

function CartCard({ item, updateCartFromChild }) {
  const removeItem = async (productId) => {
    try {
      const res = await removeCartItem(productId);

      updateCartFromChild(productId, res.data.cart.totalPrice);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-full flex justify-center">
      <div className="group relative w-full max-w-5xl overflow-hidden rounded-[32px] bg-white border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500">
        {/* SOFT BACKGROUND EFFECT */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-50 via-white to-gray-50 opacity-80"></div>

        <div className="relative flex flex-col md:flex-row items-center gap-8 p-6 md:p-8">
          {/* IMAGE SECTION */}
          <div className="relative">
            {/* GLOW */}
            <div className="absolute inset-0 bg-black/5 blur-2xl rounded-full scale-90"></div>

            <figure className="relative w-44 h-44 md:w-52 md:h-52 bg-[#f8f8f8] rounded-[28px] flex items-center justify-center overflow-hidden">
              <img
                src={item.productId?.image}
                alt={item.productId?.name}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
            </figure>
          </div>

          {/* CONTENT */}
          <div className="flex-1 flex flex-col justify-between">
            <div>
              {/* CATEGORY */}
              <p className="text-[11px] uppercase tracking-[4px] text-gray-400 font-semibold mb-3">
                {item.productId?.category || "Nike Collection"}
              </p>

              {/* PRODUCT NAME */}
              <h2 className="text-3xl md:text-4xl font-black tracking-tight text-gray-900 leading-tight">
                {item.productId?.name}
              </h2>

              {/* DESCRIPTION */}
              <p className="text-gray-500 text-[15px] leading-7 mt-4 max-w-2xl font-light">
                {item.productId?.description}
              </p>
            </div>

            {/* BOTTOM SECTION */}
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mt-8">
              {/* PRICE */}
              <div>
                <p className="text-xs uppercase tracking-[3px] text-gray-400 font-semibold mb-2">
                  Price
                </p>

                <h3 className="text-4xl font-black text-black tracking-tight">
                  ₹{item.productId?.price}
                </h3>
              </div>

              {/* REMOVE BUTTON */}
              <button
                className="group/button relative overflow-hidden border border-black text-black px-8 py-3 rounded-full font-semibold tracking-wide hover:text-white transition duration-300"
                onClick={() => removeItem(item.productId?._id)}
              >
                <span className="relative z-10">Remove Item</span>

                <div className="absolute inset-0 bg-black translate-y-full group-hover/button:translate-y-0 transition duration-300"></div>
              </button>
            </div>
          </div>
        </div>

        {/* BOTTOM LIGHT */}
        <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-gray-200/40 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
}

export default CartCard;
