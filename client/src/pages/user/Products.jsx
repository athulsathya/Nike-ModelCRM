import React, { useEffect, useState } from "react";
import Card from "../components/user/Card";
import { listProducts } from "../services/userServices";

function Products() {
  const [products, setProducts] = useState([]);  //this is the state where courses to update which taken from (res)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await listProducts();    //this hitting api is created as a function in services (listProduct)

        console.log(res.data);

        setProducts(res.data);  //by this we got our data in [products] usig this products we 
      } catch (err) {
        console.log(err);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* HERO SECTION */}
      <div className="relative h-[55vh] w-full overflow-hidden">
        <img
          src="https://i.pinimg.com/1200x/1d/05/89/1d05891a227b694a056aa268ae67f6a5.jpg"
          alt="Nike Banner"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <p className="text-white uppercase tracking-[6px] text-sm mb-3">
            New Collection
          </p>

          <h1 className="text-white text-4xl sm:text-6xl lg:text-7xl font-black uppercase leading-tight">
            Move Faster
          </h1>

          <p className="text-gray-200 mt-4 max-w-2xl text-sm sm:text-base">
            Discover premium sneakers, apparel and performance essentials
            inspired by Nike official collections.
          </p>

          <button className="mt-8 bg-white text-black px-8 py-3 rounded-full font-semibold hover:scale-105 transition duration-300">
            Shop Now
          </button>
        </div>
      </div>

      {/* PRODUCTS SECTION */}
      <div className="px-4 sm:px-8 lg:px-16 py-16">
        {/* Top Bar */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-black">Featured Products</h2>

            <p className="text-gray-500 mt-2">
              Curated performance and lifestyle products
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex gap-3 flex-wrap">
            <button className="px-5 py-2 rounded-full bg-black text-white text-sm font-medium">
              All
            </button>

            <button className="px-5 py-2 rounded-full border border-gray-300 hover:border-black text-sm font-medium transition">
              Shoes
            </button>

            <button className="px-5 py-2 rounded-full border border-gray-300 hover:border-black text-sm font-medium transition">
              Men
            </button>

            <button className="px-5 py-2 rounded-full border border-gray-300 hover:border-black text-sm font-medium transition">
              Women
            </button>

            <button className="px-5 py-2 rounded-full border border-gray-300 hover:border-black text-sm font-medium transition">
              Sportswear
            </button>
          </div>
        </div>

        {/* PRODUCTS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10">
          {products &&   //if produucts are there map method will initiate
            products.map((product) => {  //products will apper as single(product) we will return this product as card
              return (
                <div key={product._id} className="group">
                  <div className="transition duration-300 group-hover:-translate-y-2">
                    <Card product={product} />
                  </div>
                </div>
              );
            })}
        </div>
      </div>

      {/* BOTTOM BANNER */}
      <div className="bg-black text-white py-20 px-6 text-center">
        <p className="uppercase tracking-[5px] text-sm text-gray-400">
          Nike Inspired
        </p>

        <h2 className="text-4xl md:text-5xl font-black mt-4">
          JUST KEEP MOVING
        </h2>

        <p className="max-w-2xl mx-auto mt-5 text-gray-300">
          Performance meets style with the latest generation collection designed
          for athletes and everyday wear.
        </p>

        <button className="mt-8 bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
          Explore More
        </button>
      </div>
    </div>
  );
}

export default Products;
