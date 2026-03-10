import ProductCard from "@/app/products/_components/ProductCard";
import products from "@/data/products";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const FeaturedProducts = () => {
  const featuredProducts = products.filter(
    (product) => product.featured === true,
  );

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      {/* <h2 className="text-3xl font-bold text-center mb-10">
        Featured Products
      </h2> */}

      <div className="flex justify-between items-center mb-10">
        <h2 className="text-3xl font-bold">Featured Products</h2>

        <Link
          href="/products"
          className="text-blue-600 font-semibold hover:underline"
        >
          View All →
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* <Link
        href="/products"
        className="flex justify-center mt-10 gap-2 items-center"
      >
        <span className="text-blue-600 font-semibold hover:underline">
          View All Products
        </span>
        <ArrowRight className="w-5" />
      </Link> */}
    </section>
  );
};

export default FeaturedProducts;
