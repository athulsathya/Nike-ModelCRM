import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import { axiosinstance } from "../../axios/axiosinstance";

import {
  FaCloudUploadAlt,
  FaArrowLeft,
} from "react-icons/fa";

const AddProductPage = () => {

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [preview, setPreview] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    image: null,
  });

  // HANDLE INPUT CHANGE
  const handleChange = (e) => {

    const { name, value, files } = e.target;

    // IMAGE INPUT
    if (name === "image") {

      const file = files[0];

      setFormData({
        ...formData,
        image: file,
      });

      setPreview(URL.createObjectURL(file));

    } else {

      // TEXT INPUTS
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  // HANDLE SUBMIT
  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      setLoading(true);

      const data = new FormData();

      data.append("name", formData.name);
      data.append("description", formData.description);
      data.append("price", formData.price);
      data.append("category", formData.category);
      data.append("image", formData.image);

      await axiosinstance.post(
        "/product/create",
        data
      );

      alert("Product Added Successfully");

      navigate("/admin/products");

    } catch (error) {

      console.log(error);

      alert(
        error?.response?.data?.error ||
        "Failed to Add Product"
      );

    } finally {

      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-10">

        <div>

          <h1 className="text-4xl font-bold">
            Add Product
          </h1>

          <p className="text-gray-400 mt-2">
            Add new products to your store
          </p>

        </div>

        <button
          onClick={() => navigate("/admin/products")}
          className="flex items-center gap-2 bg-white text-black px-5 py-3 rounded-xl font-medium hover:bg-gray-200 transition"
        >

          <FaArrowLeft />

          Back

        </button>

      </div>

      {/* MAIN SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* FORM SECTION */}
        <div className="bg-[#111111] border border-gray-800 rounded-3xl p-8">

          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >

            {/* PRODUCT NAME */}
            <div>

              <label className="block text-sm text-gray-300 mb-2">
                Product Name
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter product name"
                className="w-full bg-black border border-gray-700 rounded-xl px-4 py-3 outline-none focus:border-orange-500"
              />

            </div>

            {/* DESCRIPTION */}
            <div>

              <label className="block text-sm text-gray-300 mb-2">
                Description
              </label>

              <textarea
                rows={5}
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                placeholder="Enter product description"
                className="w-full bg-black border border-gray-700 rounded-xl px-4 py-3 outline-none focus:border-orange-500 resize-none"
              />

            </div>

            {/* PRICE + CATEGORY */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

              {/* PRICE */}
              <div>

                <label className="block text-sm text-gray-300 mb-2">
                  Price
                </label>

                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  required
                  placeholder="Enter price"
                  className="w-full bg-black border border-gray-700 rounded-xl px-4 py-3 outline-none focus:border-orange-500"
                />

              </div>

              {/* CATEGORY */}
              <div>

                <label className="block text-sm text-gray-300 mb-2">
                  Category
                </label>

                <input
                  type="text"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                  placeholder="Enter category"
                  className="w-full bg-black border border-gray-700 rounded-xl px-4 py-3 outline-none focus:border-orange-500"
                />

              </div>

            </div>

            {/* IMAGE */}
            <div>

              <label className="block text-sm text-gray-300 mb-2">
                Product Image
              </label>

              <label className="border border-dashed border-gray-700 rounded-2xl p-8 flex flex-col items-center justify-center cursor-pointer hover:border-orange-500 transition bg-black">

                <FaCloudUploadAlt className="text-4xl text-orange-500 mb-3" />

                <p className="text-gray-300">
                  Click to upload image
                </p>

                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange={handleChange}
                  required
                  hidden
                />

              </label>

            </div>

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-orange-500 hover:bg-orange-600 py-3 rounded-xl font-semibold transition"
            >

              {loading
                ? "Uploading..."
                : "Add Product"}

            </button>

          </form>

        </div>

        {/* PREVIEW SECTION */}
        <div className="bg-[#111111] border border-gray-800 rounded-3xl p-8 flex flex-col justify-between">

          <div>

            <h2 className="text-3xl font-bold">
              Product Preview
            </h2>

            <p className="text-gray-400 mt-2">
              Preview of your product
            </p>

          </div>

          {/* IMAGE PREVIEW */}
          <div className="flex justify-center items-center py-10">

            {preview ? (

              <img
                src={preview}
                alt="preview"
                className="w-[350px] object-contain hover:scale-105 transition duration-300"
              />

            ) : (

              <div className="w-[320px] h-[220px] bg-black border border-gray-800 rounded-2xl flex items-center justify-center text-gray-600">
                Image Preview
              </div>

            )}

          </div>

          {/* PRODUCT DETAILS */}
          <div className="border-t border-gray-800 pt-5">

            <h3 className="text-2xl font-semibold">
              {formData.name || "Product Name"}
            </h3>

            <p className="text-gray-400 mt-2">
              {formData.description ||
                "Product description will appear here"}
            </p>

            <div className="flex justify-between items-center mt-5">

              <span className="bg-orange-500/20 text-orange-400 px-4 py-2 rounded-full text-sm">
                {formData.category || "Category"}
              </span>

              <h3 className="text-3xl font-bold text-orange-500">
                ₹ {formData.price || "0"}
              </h3>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default AddProductPage;