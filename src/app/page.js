import Categories from "@/components/home/Categories";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import HeroSection from "@/components/home/HeroSection";
import LatestProducts from "@/components/home/LatestProducts";
import Newsletter from "@/components/home/Newsletter";
import PromoBanner from "@/components/home/PromoBanner";
import Testimonials from "@/components/home/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturedProducts />
      <Categories />
      <PromoBanner />
      <LatestProducts />
      <Testimonials />
      <Newsletter/>
    </main>
  );
}
