import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-10">
        {/* Logo */}
        <div>
          <h2 className="text-2xl font-bold text-blue-600">ShopNest</h2>

          <p className="text-gray-600 mt-4">
            Your trusted online store for gadgets, electronics and accessories.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>

          <ul className="space-y-2 text-gray-600">
            <li>
              <Link href="/">Home</Link>
            </li>

            <li>
              <Link href="/products">Products</Link>
            </li>

            <li>
              <Link href="/add-product">Add Product</Link>
            </li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="font-semibold mb-4">Categories</h3>

          <ul className="space-y-2 text-gray-600">
            <li>Audio</li>
            <li>Mobile</li>
            <li>Gaming</li>
            <li>Computer</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-4">Contact</h3>

          <p className="text-gray-600">Email: support@shopnest.com</p>

          <p className="text-gray-600 mt-2">Phone: +880 1234 567890</p>

          <div className="flex gap-2 mt-2">
            <Facebook className="w-4"/>
            <Instagram className="w-4"/>
            <Twitter className="w-4"/>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t text-center py-6 text-gray-500 text-sm">
        © {new Date().getFullYear()} ShopNest. All rights reserved.
      </div>
    </footer>
  );
}
