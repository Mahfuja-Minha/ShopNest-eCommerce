// import Link from "next/link";

// export default function ProductCard({ product }) {
//   return (
//     <div className="border rounded-xl p-4 shadow hover:shadow-lg transition">

//       <img
//         src={product.image}
//         alt={product.title}
//         className="rounded-lg h-40 w-full object-cover"
//       />

//       <h3 className="mt-4 text-lg font-semibold">
//         {product.title}
//       </h3>

//       <p className="text-blue-600 font-bold mt-1">
//         ${product.price}
//       </p>

//       <Link
//         href={`/products/${product.id}`}
//         className="inline-block mt-4 bg-blue-600 text-white px-4 py-2 rounded"
//       >
//         Details
//       </Link>

//     </div>
//   );
// }

import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden">

      {/* Product Image */}
      <div className="overflow-hidden">
        <img src={product.image}
          alt={product.title}
          className="w-full h-56 object-cover group-hover:scale-110 transition duration-300"
        />
      </div>

      {/* Product Content */}
      <div className="p-5">

        <h3 className="text-lg font-semibold text-gray-800">
          {product.title}
        </h3>

        <p className="text-gray-500 text-sm mt-1 line-clamp-2">
          {product.description}
        </p>

        {/* Price + Button */}
        <div className="flex items-center justify-between mt-4">

          <span className="text-xl font-bold text-blue-600">
            ${product.price}
          </span>

          <Link
            href={`/products/${product.id}`}
            className="bg-blue-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            View
          </Link>

        </div>

      </div>

    </div>
  );
}