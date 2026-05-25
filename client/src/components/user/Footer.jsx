import React from "react";

function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 border-b border-gray-800">
        {/* Brand */}
        <div>
          <h1 className="text-3xl font-extrabold tracking-widest mb-4">NIKE</h1>

          <p className="text-gray-400 leading-7 text-sm">
            Bringing inspiration and innovation to every athlete in the world.
            Premium footwear, apparel, and lifestyle collections designed for
            performance and style.
          </p>
        </div>

        {/* Products */}
        <div>
          <h2 className="footer-title text-white text-lg mb-5">Products</h2>

          <ul className="space-y-3 text-gray-400">
            <li>
              <a className="hover:text-white transition duration-300 cursor-pointer">
                Running Shoes
              </a>
            </li>

            <li>
              <a className="hover:text-white transition duration-300 cursor-pointer">
                Sneakers
              </a>
            </li>

            <li>
              <a className="hover:text-white transition duration-300 cursor-pointer">
                Sportswear
              </a>
            </li>

            <li>
              <a className="hover:text-white transition duration-300 cursor-pointer">
                Accessories
              </a>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h2 className="footer-title text-white text-lg mb-5">Company</h2>

          <ul className="space-y-3 text-gray-400">
            <li>
              <a className="hover:text-white transition duration-300 cursor-pointer">
                About Us
              </a>
            </li>

            <li>
              <a className="hover:text-white transition duration-300 cursor-pointer">
                Careers
              </a>
            </li>

            <li>
              <a className="hover:text-white transition duration-300 cursor-pointer">
                News
              </a>
            </li>

            <li>
              <a className="hover:text-white transition duration-300 cursor-pointer">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h2 className="footer-title text-white text-lg mb-5">Stay Updated</h2>

          <p className="text-gray-400 text-sm mb-4 leading-6">
            Subscribe to get updates on new arrivals, exclusive offers, and
            latest collections.
          </p>

          <div className="flex items-center gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full bg-black border-gray-700 text-white focus:outline-none"
            />

            <button className="btn bg-white text-black hover:bg-gray-200 border-none">
              Join
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-5">
        {/* Copyright */}
        <p className="text-gray-500 text-sm text-center md:text-left">
          © 2026 Nike. All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex items-center gap-5">
          {/* Twitter */}
          <a className="hover:scale-110 transition duration-300 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              className="fill-white"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
            </svg>
          </a>

          {/* YouTube */}
          <a className="hover:scale-110 transition duration-300 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              className="fill-white"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
            </svg>
          </a>

          {/* Facebook */}
          <a className="hover:scale-110 transition duration-300 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              className="fill-white"
            >
              <path d="M9 8H6v4h3v12h5V12h3.642l.358-4H14V6.333c0-.955.192-1.333 1.115-1.333H18v-5h-3.808C10.596 0 9 1.583 9 4.615V8z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
