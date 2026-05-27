import React from "react";
import { addToCart } from "../services/userServices";
import { toast } from "react-toastify";

function Card({ product }) {  //calling product from product.jsx stored in state that one 
  const addProductToCart = (productId) => {
    addToCart(productId)
      .then((res) => {
        toast.success(res.data.message);
      })
      .catch((err) => {
        toast.error(err?.response?.data?.error || "Something went wrong");
      });
  };

  return (
    <div className="w-full flex justify-center">
      {/* MAIN CARD */}
      <div className="group relative w-full max-w-[340px] rounded-[30px] overflow-hidden bg-[#f7f7f5] border border-gray-100 shadow-[0_15px_45px_rgba(0,0,0,0.06)] hover:shadow-[0_25px_65px_rgba(0,0,0,0.10)] transition-all duration-500 hover:-translate-y-1">
        {/* SOFT GLOW */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-gray-100 opacity-80"></div>

        {/* BRAND */}
        <div className="absolute top-5 left-1/2 -translate-x-1/2 z-20">
          <p className="text-[10px] tracking-[8px] font-medium text-gray-400 uppercase">
            Nike
          </p>
        </div>

        {/* IMAGE SECTION */}
        <div className="relative pt-16 px-6 overflow-hidden">
          {/* LIGHT EFFECT */}
          <div className="absolute top-10 left-1/2 -translate-x-1/2 w-44 h-44 bg-gray-200 rounded-full blur-3xl opacity-40"></div>

          {/* PRODUCT IMAGE */}
          <img
            src={product?.image}
            alt={product?.name}
            className="relative z-10 w-full h-[220px] object-contain group-hover:scale-105 transition duration-700"
          />
        </div>

        {/* CONTENT */}
        <div className="relative z-10 px-7 pb-7 text-center">
          {/* CATEGORY */}
          <p className="text-[9px] uppercase tracking-[4px] text-gray-400 font-medium">
            {product?.category || "Premium Collection"}
          </p>

          {/* PRODUCT NAME */}
          <h2 className="mt-3 text-[24px] leading-tight font-extrabold tracking-[-0.8px] text-gray-900 uppercase">
            {product?.name}
          </h2>

          {/* DESCRIPTION */}
          <p className="text-gray-500 text-[12px] leading-6 mt-4 h-12 overflow-hidden font-light px-2">
            {product?.description ||
              "Designed for comfort, movement and premium everyday performance."}
          </p>

          {/* COLOR OPTIONS */}
          <div className="flex justify-center gap-3 mt-6">
            <div className="w-4 h-4 rounded-full bg-black ring-2 ring-white shadow-sm"></div>

            <div className="w-4 h-4 rounded-full bg-gray-400 ring-2 ring-white shadow-sm"></div>

            <div className="w-4 h-4 rounded-full bg-zinc-200 ring-2 ring-white border border-gray-300"></div>
          </div>

          {/* PRICE */}
          <div className="mt-7">
            <p className="text-[9px] uppercase tracking-[3px] text-gray-400 font-medium">
              Price
            </p>

            <h3 className="text-4xl font-black tracking-tight text-gray-800 mt-1">
              ₹{product?.price}
            </h3>
          </div>

          {/* BUTTON */}
          <button
            onClick={() => addProductToCart(product?._id)}
            className="mt-7 w-full py-3 rounded-full bg-black text-white text-[11px] tracking-[2px] font-semibold uppercase hover:bg-gray-900 transition duration-300"
          >
            Add To Cart
          </button>
        </div>

        {/* BOTTOM BLUR */}
        <div className="absolute -bottom-16 -right-10 w-36 h-36 bg-gray-300/30 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
}

export default Card;
