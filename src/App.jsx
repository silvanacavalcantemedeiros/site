import React from "react";
import AvonCatalogos from "./components/AvonCatalogos";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import BrandsSection from "./components/BrandsSection";
import ProdutosJequiti from "./components/ProdutosJequiti";
import FeaturedProducts from "./components/FeaturedProducts";
import DigitalMagazines from "./components/DigitalMagazines";
import WhyChooseMe from "./components/WhyChooseMe";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

export default function App() {
  return (
    <div className="min-h-screen bg-cream-50 font-sans selection:bg-rose-200 selection:text-rose-900 relative">
      {/* Sticky Header Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <AboutMe />
        <BrandsSection />
        <AvonCatalogos />
        <ProdutosJequiti />
        {/* <FeaturedProducts /> */}
        {/* <DigitalMagazines /> */}
        <WhyChooseMe />
        <Testimonials />
        <FAQ />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Contact Button (Lado Direito da Tela - 34997827143) */}
      <FloatingWhatsApp />
    </div>
  );
}
