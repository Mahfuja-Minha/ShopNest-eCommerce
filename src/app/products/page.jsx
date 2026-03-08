import products from "../../data/products";
import ProductCard from "./_components/ProductCard";


export default function Products() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">

      <h2 className="text-3xl font-bold mb-10 text-center">
        Our Products
      </h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

        {products.map(product => (
          <ProductCard key={product.id} product={product}/>
        ))}

      </div>

    </section>
  );
}