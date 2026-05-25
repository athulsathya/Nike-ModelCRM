import React from "react";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div className="bg-base-100">
      {/* Hero Section */}
      <div
        className="hero min-h-screen bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/736x/f8/e9/4f/f8e94f76f19ab7799cec43cce4a261c9.jpg')",
        }}
      >
        {/* Overlay */}
        <div className="hero-overlay bg-black/5"></div>

        {/* Content */}
        <div className="hero-content text-center text-white relative z-10 px-4">
          <div className="max-w-4xl">
            {/* Badge */}
            <div className="mb-6">
              <span className="badge badge-primary badge-lg px-5 py-4 font-semibold">
                Premium Fashion Store
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
              Discover Your
              <span className="text-primary"> Perfect Style</span>
            </h1>

            {/* Description */}
            <p className="py-8 text-lg md:text-xl opacity-90 leading-relaxed">
              Explore trending sneakers, premium outfits, and modern fashion
              collections designed for comfort, confidence, and performance.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-5">
              <Link to="/product">
                <button className="btn btn-primary btn-lg w-56">
                  Shop Now
                </button>
              </Link>

              <Link to="/signup">
                <button className="btn btn-outline btn-lg text-white border-white hover:bg-white hover:text-black w-56">
                  Create Account
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Section */}
      <section className="py-20 px-6 lg:px-20">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold">Featured Collections</h2>

          <p className="mt-4 text-base-content/70 text-lg">
            Explore our latest premium fashion collections
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="card bg-base-200 shadow-xl hover:scale-105 transition duration-300">
            <figure>
              <img
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1470&auto=format&fit=crop"
                alt="Shoes"
                className="h-72 w-full object-cover"
              />
            </figure>

            <div className="card-body">
              <h2 className="card-title text-2xl">Sneakers Collection</h2>

              <p>
                Trendy and comfortable sneakers designed for everyday lifestyle
                and performance.
              </p>

              <div className="card-actions justify-end mt-4">
                <button className="btn btn-primary">Explore</button>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="card bg-base-200 shadow-xl hover:scale-105 transition duration-300">
            <figure>
              <img
                src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1374&auto=format&fit=crop"
                alt="Fashion"
                className="h-72 w-full object-cover"
              />
            </figure>

            <div className="card-body">
              <h2 className="card-title text-2xl">Modern Fashion</h2>

              <p>
                Premium fashion wear crafted for modern style, comfort, and
                confidence.
              </p>

              <div className="card-actions justify-end mt-4">
                <button className="btn btn-primary">Explore</button>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="card bg-base-200 shadow-xl hover:scale-105 transition duration-300">
            <figure>
              <img
                src="https://images.unsplash.com/photo-1514996937319-344454492b37?q=80&w=1470&auto=format&fit=crop"
                alt="Accessories"
                className="h-72 w-full object-cover"
              />
            </figure>

            <div className="card-body">
              <h2 className="card-title text-2xl">Accessories</h2>

              <p>
                Complete your look with premium watches, bags, and modern
                accessories.
              </p>

              <div className="card-actions justify-end mt-4">
                <button className="btn btn-primary">Explore</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-neutral text-neutral-content text-center px-6">
        <h2 className="text-4xl md:text-5xl font-bold">
          Upgrade Your Fashion Today
        </h2>

        <p className="max-w-2xl mx-auto mt-6 text-lg opacity-80">
          Join thousands of fashion lovers discovering premium products and
          exclusive collections.
        </p>

        <div className="mt-10">
          <Link to="/signup">
            <button className="btn btn-primary btn-lg w-56">Get Started</button>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Homepage;
