"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  // const { data: session } = useSession();

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-600">
          ShopNest
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center">
          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>

          <Link href="/products" className="hover:text-blue-600">
            Products
          </Link>

          <Link href="/add-product" className="hover:text-blue-600">
            Add Product
          </Link>

          <Link href="/manage-products" className="hover:text-blue-600">
            Manage Products
          </Link>
          
          <Link
            href="/login"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Login
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
      </div>

      {/* Mobile Menu */}

      {menuOpen && (
        <div className="md:hidden flex flex-col gap-4 px-6 pb-4">
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/add-product">Add Product</Link>
          <Link href="/manage-products">Manage Products</Link>
          <Link href="/login">Login</Link>

          {/* {session ? (
            <button onClick={() => signOut()}>Logout</button>
          ) : (
            <Link href="/login">Login</Link>
          )} */}
        </div>
      )}
    </nav>
  );
}
