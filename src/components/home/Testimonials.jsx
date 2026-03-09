const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    review:
      "Amazing quality products and super fast delivery. Highly recommended!",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 2,
    name: "Michael Brown",
    review:
      "Great shopping experience. The prices are reasonable and service is excellent.",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  {
    id: 3,
    name: "Emma Wilson",
    review:
      "One of the best ecommerce websites I’ve used. Love the UI and product quality.",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">

      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">Customer Reviews</h2>
        <p className="text-gray-500 mt-2">
          See what our customers say about us
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">

        {testimonials.map((item) => (
          <div
            key={item.id}
            className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
          >

            <p className="text-gray-600 mb-6">
              {item.review}
            </p>

            <div className="flex items-center gap-4">

              <img
                src={item.image}
                className="w-12 h-12 rounded-full"
              />

              <div>
                <h4 className="font-semibold">{item.name}</h4>
                <span className="text-sm text-gray-500">
                  Verified Buyer
                </span>
              </div>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}