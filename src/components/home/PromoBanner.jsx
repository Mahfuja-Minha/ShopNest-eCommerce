import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function PromoBanner() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">

      <div className="bg-blue-50 rounded-3xl p-10 grid md:grid-cols-2 items-center gap-8">

        {/* text */}
        <div>

          <span className="text-blue-600 font-semibold uppercase text-sm">
            Special Offer
          </span>

          <h2 className="text-3xl md:text-4xl font-bold mt-3">
            Get up to <span className="text-blue-600">50% Discount</span>
          </h2>

          <p className="text-gray-600 mt-4">
            Discover amazing deals on electronics, gadgets and accessories.
            Limited time offer – grab your favorite product today.
          </p>

          <Link
            href="/products"
            className="inline-flex items-center gap-2 mt-6 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
          >
            Shop Now
            <ArrowRight size={18} />
          </Link>

        </div>

        {/* image */}
        <div>
          <img
            src="https://previews.123rf.com/images/maxxyustas/maxxyustas1409/maxxyustas140900017/31615457-computer-devices-mobile-phone-laptop-printer-camera-and-tablet-pc-3d.jpg"
            className="rounded-xl"
          />
        </div>

      </div>

    </section>
  );
}