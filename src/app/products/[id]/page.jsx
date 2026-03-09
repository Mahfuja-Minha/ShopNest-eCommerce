import products from "@/data/products";
import { ArrowLeft, Star, Truck } from "lucide-react";
import Link from "next/link";

export default async function ProductDetails({ params }) {
  const { id } = await params;
  const product = products.find((p) => String(p.id) === id);

  if (!product) {
    return (
      <div className="text-center py-20">
        <h1 className="text-3xl font-bold">Product Not Found</h1>
        <Link
          href="/products"
          className="text-blue-600 underline mt-4 inline-block"
        >
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      {/* Back */}
      <Link
        href="/products"
        className="text-blue-600 flex items-center gap-2 mb-10 hover:underline"
      >
        <ArrowLeft size={18} /> Back to Products
      </Link>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="bg-gray-100 rounded-2xl p-6">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-[420px] object-cover rounded-xl hover:scale-105 transition duration-300"
          />
        </div>

        {/* Product Info */}
        <div>
          {/* Category */}
          {product.category && (
            <span className="text-sm bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
              {product.category}
            </span>
          )}

          {/* Title */}
          <h1 className="text-4xl font-bold mt-4 text-gray-800">
            {product.title}
          </h1>

          {/* Rating */}
          <div className="flex items-center gap-2 mt-3 text-yellow-500">
            <Star size={18} fill="currentColor" />
            <Star size={18} fill="currentColor" />
            <Star size={18} fill="currentColor" />
            <Star size={18} fill="currentColor" />
            <Star size={18} />
            <span className="text-gray-500 text-sm">(4.0 Reviews)</span>
          </div>

          {/* Price */}
          <p className="text-3xl text-blue-600 font-bold mt-6">
            ${product.price}
          </p>

          {/* Description */}
          <p className="text-gray-600 mt-6 leading-relaxed">
            {product.description}
          </p>
          {/* Buttons */}
          <div className="flex gap-4 mt-8">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-xl hover:bg-blue-700 transition">
              Add to Cart
            </button>

            <button className="border px-8 py-3 rounded-xl hover:bg-gray-100 transition">
              Buy Now
            </button>
          </div>

          {/* Delivery Info */}
          <div className="flex items-center gap-3 text-gray-500 mt-8">
            <Truck size={20} />

            <span>Free Delivery within 3-5 days</span>
          </div>
        </div>
      </div>
    </section>
  );
}
