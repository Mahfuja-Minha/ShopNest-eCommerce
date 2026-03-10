export default function Newsletter() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">

      <div className="bg-gray-100 rounded-3xl py-12 px-6 text-center">

        <h2 className="text-3xl font-bold text-gray-600">
          Subscribe to Our Newsletter
        </h2>

        <p className="text-gray-600 mt-3">
          Get updates about new products and exclusive discounts.
        </p>

        <form className="mt-6 flex flex-col sm:flex-row justify-center gap-4">

          <input
            type="email"
            placeholder="Enter your email"
            className="px-5 py-3 rounded-xl border outline-none w-full sm:w-80 text-gray-500"
          />

          <button
            className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
          >
            Subscribe
          </button>

        </form>

      </div>

    </section>
  );
}