"use client";

import productsData from "@/data/products";
import Link from "next/link";
import { useState } from "react";
import { Pencil, Trash2 } from "lucide-react";

export default function ManageProducts() {

  const [products, setProducts] = useState(productsData);

  const handleDelete = (id) => {
    const confirmDelete = confirm("Are you sure you want to delete?");
    if (!confirmDelete) return;

    const updatedProducts = products.filter((p) => p.id !== id);
    setProducts(updatedProducts);
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">

      <h1 className="text-3xl font-bold mb-10 text-center">
        Manage Products
      </h1>

      <div className="overflow-x-auto shadow rounded-xl">

        <table className="w-full text-left">

          <thead className="">
            <tr>
              <th className="p-4">Image</th>
              <th className="p-4">Title</th>
              <th className="p-4">Category</th>
              <th className="p-4">Price</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>

          <tbody>

            {products.map((product) => (

              <tr key={product.id} className="border-t">

                <td className="p-4">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                </td>

                <td className="p-4 font-medium">
                  {product.title}
                </td>

                <td className="p-4">
                  {product.category}
                </td>

                <td className="p-4 text-blue-600 font-semibold">
                  ${product.price}
                </td>

                <td className="p-4 flex gap-3">

                  <Link
                    href={`/edit-product/${product.id}`}
                    className="flex items-center gap-1 bg-yellow-400 px-3 py-1 rounded-md text-sm"
                  >
                    <Pencil size={16} />
                    Edit
                  </Link>

                  <button
                    onClick={() => handleDelete(product.id)}
                    className="flex items-center gap-1 bg-red-500 text-white px-3 py-1 rounded-md text-sm"
                  >
                    <Trash2 size={16} />
                    Delete
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </section>
  );
}