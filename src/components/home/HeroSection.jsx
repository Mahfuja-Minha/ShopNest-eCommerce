import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-10">
        
        <div>
          <h1 className="text-4xl md:text-5xl font-bold">
            Discover the Best Products at
            <span className="text-blue-600"> ShopNest</span>
          </h1>

          <p className="mt-6 text-gray-600 text-lg">
            Explore gadgets, electronics and accessories at the best prices.
          </p>

          <div className="mt-8 flex gap-4">
            <Link
              href="/products"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg"
            >
              Shop Now
            </Link>

            <Link
              href="/add-product"
              className="border border-blue-600 px-6 py-3 rounded-lg"
            >
              Add Product
            </Link>
          </div>
        </div>

        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1SbGmy9x7AGkFuq3RB6pjCw0tON0ZeK5sUA&s"
            alt="shopping"
            className="rounded-xl shadow-lg"
          />
        </div>

      </div>
    </section>
  );
}