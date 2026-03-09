// import ProductCard from "@/app/products/_components/ProductCard";

// export default function FeaturedProducts() {

//   const products = [
//     { id: 1, name: "Wireless Headphone", price: "$120", image: "/p1.jpg" },
//     { id: 2, name: "Smart Watch", price: "$90", image: "/p2.jpg" },
//     { id: 3, name: "Laptop Stand", price: "$45", image: "/p3.jpg" },
//     { id: 4, name: "Bluetooth Speaker", price: "$70", image: "/p4.jpg" },
//   ];

//   return (
//     <section className="max-w-7xl mx-auto px-6 py-16">

//       <h2 className="text-3xl font-bold text-center mb-10">
//         Featured Products
//       </h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

// {products.map((product) => (
//   <ProductCard key={product.id} product={product} />
// ))}

//       </div>

//     </section>
//   );
// }

import ProductCard from "@/app/products/_components/ProductCard";
import products from "@/data/products";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const FeaturedProducts = () => {
  const featuredProducts = products.slice(0, 4);

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-center mb-10">
        Featured Products
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <Link href={"products"} className="flex justify-center mt-10 gap-2 items-center">
        <span className="text-blue-600">view all products</span>
        <ArrowRight className="w-5" />
      </Link>
    </section>
  );
};

export default FeaturedProducts;
