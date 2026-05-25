import React, { useEffect, useState } from "react";
import { FaEdit, FaTrashAlt, FaPlus } from "react-icons/fa";

const AdminProductsPage = () => {
  const [products, setProducts] = useState([]);

  // Temporary dummy data (later you can fetch from backend)
  useEffect(() => {
    setProducts([
      {
        _id: 1,
        title: "Wooden Chair",
        price: 1200,
        category: "Furniture",
        image:
          "https://images.unsplash.com/photo-1616627784274-dc5d408e98e9?w=500",
      },
      {
        _id: 2,
        title: "Smart Watch",
        price: 4500,
        category: "Electronics",
        image:
          "https://images.unsplash.com/photo-1603791452906-c903e3b2e0d7?w=500",
      },
    ]);
  }, []);

  const handleDelete = (id) => {
    setProducts(products.filter((item) => item._id !== id));
  };

  return (
    <div>
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-orange-500">Products</h1>
       
      </div>

      {/* Product Table */}
      <div className="overflow-x-auto bg-gray-800 rounded-xl border border-gray-700 shadow-md">
        <table className="w-full text-left">
          <thead className="bg-gray-700 text-gray-300">
            <tr>
              <th className="p-3">Image</th>
              <th className="p-3">Title</th>
              <th className="p-3">Category</th>
              <th className="p-3">Price</th>
              <th className="p-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item) => (
              <tr
                key={item._id}
                className="border-b border-gray-700 hover:bg-gray-700/30"
              >
                <td className="p-3">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                </td>
                <td className="p-3 text-white">{item.title}</td>
                <td className="p-3 text-gray-400">{item.category}</td>
                <td className="p-3 text-gray-300">₹{item.price}</td>
                <td className="p-3 text-right space-x-3">
                  <button className="text-blue-400 hover:text-blue-500">
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="text-red-400 hover:text-red-500"
                  >
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminProductsPage;
