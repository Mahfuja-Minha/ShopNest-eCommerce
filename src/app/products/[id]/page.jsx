import products from "@/data/products";
import Link from "next/link";

export default async function ProductDetails({ params }) {
  const { id } = await params;

  const product = products.find((p) => String(p.id) === id);
  console.log(product);

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
    <section className="max-w-6xl mx-auto px-6 py-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Product Image */}
        <div className="bg-gray-100 rounded-2xl overflow-hidden">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-[400px] object-cover hover:scale-105 transition duration-300"
          />
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-4xl font-bold text-gray-800">{product.title}</h1>

          <p className="text-2xl text-blue-600 font-semibold mt-4">
            ${product.price}
          </p>

          <p className="text-gray-600 mt-6 leading-relaxed">
            {product.description}
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mt-8">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
              Add to Cart
            </button>

            <Link
              href="/products"
              className="border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-100 transition"
            >
              Back
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
