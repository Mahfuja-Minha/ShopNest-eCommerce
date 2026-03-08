"use client";

import { useState } from "react";

export default function AddProductPage() {
  const [product, setProduct] = useState({
    title: "",
    price: "",
    image: "",
    category: "",
    description: "",
  });

  function handleChange(e) {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newProduct = {
      id: Date.now(),
      ...product,
    };

    console.log(newProduct);
  }

  return (
    <main className="min-h-screen py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Page header */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold">Add New Product</h1>
          <p className="text-gray-500 mt-1">
            Fill the information below to publish a product in your store.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-2 bg-white rounded-2xl shadow-sm border p-8 space-y-6"
          >
            {/* Product Title */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Product Title
              </label>

              <input
                name="title"
                type="text"
                placeholder="Example: Apple AirPods Pro"
                onChange={handleChange}
                className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none"
              />
            </div>

            {/* Grid inputs */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Price
                </label>

                <input
                  name="price"
                  type="number"
                  placeholder="199"
                  onChange={handleChange}
                  className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Category
                </label>

                <input
                  name="category"
                  type="text"
                  placeholder="Electronics"
                  onChange={handleChange}
                  className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none"
                />
              </div>
            </div>

            {/* Image URL */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Product Image URL
              </label>

              <input
                name="image"
                type="text"
                placeholder="https://example.com/product-image.jpg"
                onChange={handleChange}
                className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Description
              </label>

              <textarea
                rows="4"
                name="description"
                placeholder="Write product description..."
                onChange={handleChange}
                className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none"
              />
            </div>

            {/* Buttons */}
            <div className="flex gap-4 pt-4">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition"
              >
                Publish Product
              </button>

              <button
                type="reset"
                className="border border-gray-300 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition"
              >
                Reset
              </button>
            </div>
          </form>

          {/* PREVIEW PANEL */}
          <div className="bg-white rounded-2xl border shadow-sm p-6 h-fit">
            <h2 className="font-semibold text-gray-800 mb-4">
              Product Preview
            </h2>

            <div className="border rounded-xl overflow-hidden">
              {product.image ? (
                <img src={product.image} className="w-full h-52 object-cover" />
              ) : (
                <div className="h-52 flex items-center justify-center text-gray-400 text-sm">
                  Image preview
                </div>
              )}

              <div className="p-4">
                <h3 className="font-semibold text-gray-800">
                  {product.title || "Product title"}
                </h3>

                <p className="text-blue-600 font-bold mt-1">
                  ${product.price || "0"}
                </p>

                <p className="text-gray-500 text-sm mt-2">
                  {product.description ||
                    "Product description will appear here."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
