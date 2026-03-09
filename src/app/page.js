import Categories from "@/components/home/Categories";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import HeroSection from "@/components/home/HeroSection";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturedProducts />
      <Categories/>
    </main>
  );
}
