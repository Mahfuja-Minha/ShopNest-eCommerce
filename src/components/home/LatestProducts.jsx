import ProductCard from "@/app/products/_components/ProductCard";
import products from "@/data/products";
import Link from "next/link";

const LatestProducts = () => {
  const latestProducts = products.slice(-4);

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="flex flex-col md:flex-row justify-between items-center mb-10">
        <div>
          <h2 className="text-3xl font-bold">Latest Products</h2>
          <p className="text-gray-500 mt-5">
            Discover our newest collection of high quality products designed for
            modern lifestyle and technology lovers.
          </p>
        </div>

        <Link
          href="/products"
          className="text-blue-600 font-semibold hover:underline"
        >
          View All →
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {latestProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default LatestProducts;
