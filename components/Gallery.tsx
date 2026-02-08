"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const featuredProjects = [
  {
    id: 1,
    title: "Apartament w Centrum",
    category: "Wykończenie kompleksowe",
    description:
      "Nowoczesne wykończenie 120m² apartamentu z autorskimi rozwiązaniami i premium materiałami.",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2574&auto=format&fit=crop",
    location: "Kraków",
  },
  {
    id: 2,
    title: "Luksusowa Łazienka",
    category: "Biały montaż",
    description:
      "Elegancka łazienka z marmurowymi płytkami, deszczownicą i designerską armaturą.",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop",
    location: "Warszawa",
  },
  {
    id: 3,
    title: "Salon z Sufitem LED",
    category: "Sufity podwieszane",
    description:
      "Wielopoziomowy sufit G-K z ukrytym oświetleniem LED i efektownymi zaokrągleniami.",
    image:
      "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?q=80&w=2070&auto=format&fit=crop",
    location: "Katowice",
  },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="py-16 md:py-24 bg-zinc-900 overflow-hidden scroll-mt-0 relative"
    >
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-yellow-600/20 to-transparent"></div>

      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px", amount: 0.3 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="flex items-center gap-2 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-yellow-600"></span>
            <span className="text-yellow-600 text-sm font-medium tracking-wide uppercase">
              Nasze Realizacje
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px", amount: 0.3 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4 font-serif"
          >
            Projekty, którymi się{" "}
            <span className="text-yellow-600 italic">szczycimy</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px", amount: 0.3 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="text-gray-300 text-base leading-relaxed"
          >
            Każdy projekt to unikalna historia. Zobacz, jak przekształcamy
            przestrzenie w miejsca pełne charakteru i stylu.
          </motion.p>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px", amount: 0.2 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: index * 0.1,
              }}
              className="group relative bg-zinc-800/50 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-yellow-600/10 hover:border-yellow-600/50 transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative h-80 md:h-96 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  quality={75}
                  loading="lazy"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500"></div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-block px-4 py-1.5 bg-yellow-600 text-white text-xs font-medium uppercase tracking-wide rounded-full">
                    {project.category}
                  </span>
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                  <h3 className="text-2xl font-bold text-white mb-2 font-serif group-hover:text-yellow-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-200 text-sm leading-relaxed mb-3">
                    {project.description}
                  </p>
                  <div className="flex items-center gap-2 text-gray-300 text-xs">
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
                </div>

                {/* Hover Icon */}
                <div className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
                  <ArrowUpRight className="w-5 h-5 text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px", amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
          className="flex justify-center"
        >
          <Link
            href="/galeria"
            className="group inline-flex items-center gap-3 bg-yellow-700 hover:bg-yellow-600 text-white font-medium px-10 py-5 rounded-full transition-all duration-300 hover:shadow-xl hover:scale-105"
          >
            <span className="uppercase tracking-wider text-sm">
              Zobacz pełną galerię
            </span>
            <ArrowUpRight className="h-5 w-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
