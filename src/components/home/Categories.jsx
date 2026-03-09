import categories from "@/data/categories";

const Categories = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">

      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold">Shop by Categories</h2>
        <p className="text-gray-500 mt-3">
          Discover products from different categories
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {categories.map((category) => (
          <div
            key={category.id}
            className="relative group overflow-hidden rounded-2xl cursor-pointer"
          >

            <img
              src={category.image}
              alt={category.name}
              className="h-64 w-full object-cover group-hover:scale-110 transition duration-500"
            />

            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">

              <h3 className="text-white text-2xl font-semibold tracking-wide">
                {category.name}
              </h3>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
};

export default Categories;