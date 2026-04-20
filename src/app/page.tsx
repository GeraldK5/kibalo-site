import Navbar from "@/components/landing_page/top_nav_bar";
import HeroSection from "@/components/landing_page/home/hero_section";
import WhatWeOffer from "@/components/landing_page/home/what_we_offer";
import HowItWorks from "@/components/landing_page/home/how_it_works";
import Reviews from "@/components/landing_page/home/reviews";
import Footer from "@/components/landing_page/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F2F2F2]">
      <Navbar />
      <HeroSection />
      <WhatWeOffer />
      <HowItWorks />
      <Reviews />
      <Footer />
    </main>
  );
}