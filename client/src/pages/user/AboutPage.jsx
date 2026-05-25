import React from "react";

function AboutPage() {
  return (
    <div className="bg-base-100 text-base-content">
      {/* Hero Section */}
      <div
        className="hero min-h-[60vh]"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1470&auto=format&fit=crop')",
        }}
      >
        <div className="hero-overlay bg-black/60"></div>

        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-3xl">
            <h1 className="mb-5 text-5xl font-bold">About Nike</h1>
            <p className="text-lg leading-relaxed">
              At Nike, we believe every step has a story and every athlete has
              the power to push beyond limits. Our mission is to bring
              inspiration and innovation to every athlete in the world.
            </p>
          </div>
        </div>
      </div>

      {/* About Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?q=80&w=1470&auto=format&fit=crop"
              alt="Nike Shoes"
              className="rounded-2xl shadow-2xl w-full"
            />
          </div>

          {/* Text */}
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Designed For Performance & Style
            </h2>

            <p className="text-lg leading-8 mb-5">
              Nike combines innovation, comfort, and modern fashion to create
              products that inspire athletes and creators worldwide. From iconic
              sneakers to premium sportswear, every product is crafted with
              passion and precision.
            </p>

            <p className="text-lg leading-8 mb-8">
              Whether you're training hard, exploring the streets, or embracing
              everyday comfort, Nike is built to move with you.
            </p>

            <button className="btn btn-primary px-8">Explore Collection</button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-base-200 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            Why Choose Nike?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body text-center">
                <h3 className="text-2xl font-semibold">Innovation</h3>
                <p>Advanced sportswear technology built for top performance.</p>
              </div>
            </div>

            <div className="card bg-base-100 shadow-xl">
              <div className="card-body text-center">
                <h3 className="text-2xl font-semibold">Comfort</h3>
                <p>Premium quality materials designed for everyday wear.</p>
              </div>
            </div>

            <div className="card bg-base-100 shadow-xl">
              <div className="card-body text-center">
                <h3 className="text-2xl font-semibold">Style</h3>
                <p>
                  Trend-setting collections inspired by sports and street
                  culture.
                </p>
              </div>
            </div>

            <div className="card bg-base-100 shadow-xl">
              <div className="card-body text-center">
                <h3 className="text-2xl font-semibold">Global Trust</h3>
                <p>Trusted by athletes and millions of customers worldwide.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quote Section */}
      <div className="py-20 text-center px-6">
        <h2 className="text-5xl font-bold italic">“Just Do It.”</h2>
        <p className="mt-4 text-lg opacity-80">
          More than a slogan — it’s a mindset.
        </p>
      </div>
    </div>
  );
}

export default AboutPage;
