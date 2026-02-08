"use client";

import {
  Search,
  ArrowUpRight,
  ChevronRight,
  ChevronLeft,
  Castle,
} from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Services from "@/components/Services";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Stats from "@/components/Stats";
import Process from "@/components/Process";
import Footer from "@/components/Footer";

const heroImages = [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2574&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2653&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2670&auto=format&fit=crop",
];

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? heroImages.length - 1 : prev - 1,
    );
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  const scrollToSection = (e: React.MouseEvent<HTMLElement>, id: string) => {
    e.preventDefault();
    const targetId = id.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      // Add offset only for mobile devices to scroll deeper into the section
      const offset = window.innerWidth < 768 ? 10 : 0;
      const y = element.getBoundingClientRect().top + window.scrollY + offset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <main className="font-sans">
      {/* HERO SECTION */}
      <section
        id="home"
        className="relative h-screen w-full overflow-hidden bg-black"
        suppressHydrationWarning
      >
        {/* Background Image Slider */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <Image
              src={heroImages[currentImageIndex]}
              alt="Luksusowe wykończenia wnętrz"
              fill
              priority
              fetchPriority="high"
              className="object-cover"
              sizes="100vw"
              quality={65}
            />
            {/* Strong Left Gradient for readability */}
            <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/40 to-transparent" />
          </motion.div>
        </AnimatePresence>

        {/* NAVBAR */}
        <nav className="absolute top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/20 border-b border-white/10">
          <div className="container mx-auto px-6 md:px-12 py-6 md:py-8 flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3 text-white group cursor-pointer">
              <div className="p-2 bg-yellow-600/10 rounded-lg group-hover:bg-yellow-600/20 transition-colors duration-300">
                <Castle className="h-7 w-7 text-yellow-600" strokeWidth={1.5} />
              </div>
              <span className="text-2xl font-bold tracking-wider">KM-BUD</span>
            </div>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-10">
              <a
                href="#home"
                onClick={(e) => scrollToSection(e, "#home")}
                className="group relative text-base font-medium text-white/90 hover:text-white transition-colors duration-300"
              >
                Strona główna
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-600 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a
                href="#about"
                onClick={(e) => scrollToSection(e, "#about")}
                className="group relative text-base font-medium text-white/90 hover:text-white transition-colors duration-300"
              >
                O nas
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-600 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a
                href="#services"
                onClick={(e) => scrollToSection(e, "#services")}
                className="group relative text-base font-medium text-white/90 hover:text-white transition-colors duration-300"
              >
                Usługi
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-600 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, "#contact")}
                className="group relative text-base font-medium text-white/90 hover:text-white transition-colors duration-300"
              >
                Kontakt
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-600 group-hover:w-full transition-all duration-300"></span>
              </a>
            </div>
          </div>
        </nav>

        {/* MAIN HERO CONTENT */}
        <div className="relative z-10 flex h-full flex-col justify-center px-6 md:px-12 max-w-7xl mx-auto">
          <div className="max-w-2xl">
            <h1 className="animate-fade-in-up text-5xl md:text-7xl font-bold text-white leading-tight tracking-tight mb-6">
              NOWY WYMIAR
              <br />
              TWOJEGO WNĘTRZA
            </h1>
            <p className="animate-fade-in-up-delay-1 text-gray-300 text-lg md:text-xl max-w-md mb-10 leading-relaxed font-light">
              Łączymy techniczną precyzję z unikalnym stylem. Przekształcamy
              Twoją wizję w rzeczywistość, dbając o każdy detal.
            </p>

            <button
              onClick={(e) => scrollToSection(e as any, "#gallery")}
              className="animate-fade-in-up-delay-2 group flex w-fit items-center gap-3 bg-yellow-700 hover:bg-yellow-600 text-white font-medium px-8 py-4 transition-all hover:pr-10 cursor-pointer border-none"
              type="button"
            >
              <span className="uppercase tracking-wider text-sm">
                Zobacz nasze realizacje
              </span>
              <ArrowUpRight className="h-5 w-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>

        {/* SLIDER CONTROLS */}
        <div className="absolute right-6 md:right-12 bottom-12 md:bottom-24 z-20 flex flex-col gap-4">
          {/* Prev/Next Buttons */}
          <div className="flex gap-4">
            <button
              onClick={prevImage}
              aria-label="Poprzednie zdjęcie"
              className="flex items-center justify-center w-12 h-12 rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition-all"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={nextImage}
              aria-label="Następne zdjęcie"
              className="flex items-center justify-center w-12 h-12 rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition-all"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* PAGINATION DOTS */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToImage(index)}
              aria-label={`Przejdź do zdjęcia ${index + 1}`}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentImageIndex
                  ? "bg-white w-8"
                  : "bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      </section>

      {/* OTHER SECTIONS */}
      <About />
      <Services />
      <Process />
      <Stats />
      <Gallery />
      <Footer />
    </main>
  );
}
