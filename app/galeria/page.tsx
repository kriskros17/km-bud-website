"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowLeft, X, ChevronLeft, ChevronRight } from "lucide-react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const allProjects = [
  {
    id: 1,
    title: "Apartament w Centrum",
    category: "Wykończenie kompleksowe",
    location: "Kraków",
    date: "2024",
    thumbnail:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2574&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2574&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2653&auto=format&fit=crop",
    ],
  },
  {
    id: 2,
    title: "Luksusowa Łazienka",
    category: "Biały montaż",
    location: "Warszawa",
    date: "2024",
    thumbnail:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop",
    ],
  },
  {
    id: 3,
    title: "Salon z Sufitem LED",
    category: "Sufity podwieszane",
    location: "Katowice",
    date: "2023",
    thumbnail:
      "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?q=80&w=2070&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566753151-384129cf4e3e?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498b?q=80&w=2070&auto=format&fit=crop",
    ],
  },
  {
    id: 4,
    title: "Nowoczesna Kuchnia",
    category: "Wykończenie kompleksowe",
    location: "Gdańsk",
    date: "2023",
    thumbnail:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2670&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2574&auto=format&fit=crop",
    ],
  },
  {
    id: 5,
    title: "Elegancka Sypialnia",
    category: "Malowanie",
    location: "Wrocław",
    date: "2023",
    thumbnail:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2574&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
    ],
  },
  {
    id: 6,
    title: "Biuro Premium",
    category: "Gładzie natryskowe",
    location: "Poznań",
    date: "2023",
    thumbnail:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2670&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2670&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2653&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
    ],
  },
  {
    id: 7,
    title: "Dom Jednorodzinny",
    category: "Wykończenie kompleksowe",
    location: "Łódź",
    date: "2022",
    thumbnail:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2653&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2653&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2574&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop",
    ],
  },
  {
    id: 8,
    title: "Łazienka Spa",
    category: "Biały montaż",
    location: "Szczecin",
    date: "2022",
    thumbnail:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop",
    ],
  },
  {
    id: 9,
    title: "Mieszkanie Studio",
    category: "Układanie podłóg",
    location: "Bydgoszcz",
    date: "2022",
    thumbnail:
      "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?q=80&w=2070&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566753151-384129cf4e3e?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070&auto=format&fit=crop",
    ],
  },
];

const categories = [
  "Wszystkie",
  "Wykończenie kompleksowe",
  "Biały montaż",
  "Sufity podwieszane",
  "Malowanie",
  "Gładzie natryskowe",
  "Układanie podłóg",
];

export default function GaleriaPage() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState("Wszystkie");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [currentProjectImages, setCurrentProjectImages] = useState<string[]>(
    [],
  );

  const filteredProjects =
    selectedCategory === "Wszystkie"
      ? allProjects
      : allProjects.filter((project) => project.category === selectedCategory);

  const openLightbox = (project: (typeof allProjects)[0]) => {
    setCurrentProjectImages(project.images);
    setLightboxIndex(0);
    setLightboxOpen(true);
  };

  return (
    <main className="min-h-screen bg-zinc-900">
      {/* Header Section */}
      <section className="relative py-20 md:py-32 bg-linear-to-b from-black to-zinc-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[linear-gradient(30deg,#f59e0b_12%,transparent_12.5%,transparent_87%,#f59e0b_87.5%,#f59e0b),linear-gradient(150deg,#f59e0b_12%,transparent_12.5%,transparent_87%,#f59e0b_87.5%,#f59e0b),linear-gradient(30deg,#f59e0b_12%,transparent_12.5%,transparent_87%,#f59e0b_87.5%,#f59e0b),linear-gradient(150deg,#f59e0b_12%,transparent_12.5%,transparent_87%,#f59e0b_87.5%,#f59e0b)] bg-size-[80px_140px] bg-position-[0_0,0_0,40px_70px,40px_70px]"></div>
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <button
              onClick={() => {
                router.push("/");
                // Wait for navigation to complete, then scroll to gallery
                setTimeout(() => {
                  const gallerySection = document.getElementById("gallery");
                  if (gallerySection) {
                    gallerySection.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }
                }, 300);
              }}
              className="inline-flex items-center gap-2 text-gray-400 hover:text-yellow-600 transition-colors duration-300 group cursor-pointer"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
              <span className="text-sm font-medium">
                Powrót do strony głównej
              </span>
            </button>
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-yellow-600"></span>
              <span className="text-yellow-600 text-sm font-medium tracking-wide uppercase">
                Portfolio
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6 font-serif">
              Galeria <span className="text-yellow-600 italic">Realizacji</span>
            </h1>

            <p className="text-gray-300 text-lg leading-relaxed">
              Odkryj nasze najlepsze projekty wykończeniowe. Każda realizacja to
              dowód naszego zaangażowania w perfekcję i dbałość o detale.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="sticky top-0 z-40 bg-zinc-900/98 backdrop-blur-md border-b border-white/10 will-change-transform">
        <div className="container mx-auto px-6 md:px-12 py-6">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4 }}
            className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-yellow-600 text-white shadow-lg shadow-yellow-600/30"
                    : "bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-6 md:px-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.05,
                    ease: "easeOut",
                  }}
                  onClick={() => openLightbox(project)}
                  className="group relative bg-zinc-800/50 rounded-2xl overflow-hidden cursor-pointer hover:bg-zinc-800 transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-600/10"
                >
                  {/* Image */}
                  <div className="relative h-72 md:h-80 overflow-hidden">
                    <Image
                      src={project.thumbnail}
                      alt={project.title}
                      fill
                      className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-75"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      quality={75}
                      loading="lazy"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="inline-block px-3 py-1 bg-yellow-600/90 backdrop-blur-sm text-white text-xs font-medium uppercase tracking-wide rounded-full">
                        {project.category}
                      </span>
                    </div>

                    {/* Expand Icon */}
                    <div className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
                        />
                      </svg>
                    </div>

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-2 font-serif group-hover:text-yellow-600 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <div className="flex items-center justify-between text-gray-300 text-sm">
                        <div className="flex items-center gap-2">
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                          <span>{project.location}</span>
                        </div>
                        <span className="text-gray-400">{project.date}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* No Results */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-gray-400 text-lg">
                Brak projektów w tej kategorii
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={currentProjectImages.map((src) => ({ src }))}
        index={lightboxIndex}
        on={{
          view: ({ index }) => setLightboxIndex(index),
        }}
        styles={{
          container: { backgroundColor: "rgba(0, 0, 0, 0.95)" },
        }}
        controller={{ closeOnBackdropClick: true }}
      />
    </main>
  );
}
