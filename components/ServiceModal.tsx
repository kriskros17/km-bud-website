"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Check,
  Clock,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface ProcessStep {
  title: string;
  description: string;
}

interface Service {
  id: string;
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  images: string[];
  subServices: string[];
  process: ProcessStep[];
  duration: string;
  priceRange: string;
  pricingFactors: string[];
}

interface ServiceModalProps {
  service: Service | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ServiceModal({
  service,
  isOpen,
  onClose,
}: ServiceModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!service) return null;

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === service.images.length - 1 ? 0 : prev + 1,
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? service.images.length - 1 : prev - 1,
    );
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-4 md:inset-8 lg:inset-16 bg-white rounded-3xl shadow-2xl z-50 overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white p-6 md:p-8">
              <button
                onClick={onClose}
                aria-label="Zamknij modal"
                className="absolute top-6 right-6 p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="flex items-center gap-4">
                <div className="p-4 bg-yellow-600 rounded-2xl">
                  <service.icon
                    className="w-8 h-8 text-white"
                    strokeWidth={1.5}
                  />
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold font-serif">
                    {service.title}
                  </h2>
                  <p className="text-gray-300 mt-1">{service.category}</p>
                </div>
              </div>
            </div>

            {/* Content - Scrollable */}
            <div className="flex-1 overflow-y-auto p-6 md:p-8">
              <div className="max-w-4xl mx-auto space-y-8">
                {/* Image Gallery */}
                <div className="relative">
                  <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-100">
                    <Image
                      src={service.images[currentImageIndex]}
                      alt={`${service.title} - zdjęcie ${currentImageIndex + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 800px"
                      quality={75}
                    />

                    {/* Navigation Arrows */}
                    {service.images.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          aria-label="Poprzednie zdjęcie"
                          className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-black/70 rounded-full transition-colors"
                        >
                          <ChevronLeft className="w-6 h-6 text-white" />
                        </button>
                        <button
                          onClick={nextImage}
                          aria-label="Następne zdjęcie"
                          className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-black/70 rounded-full transition-colors"
                        >
                          <ChevronRight className="w-6 h-6 text-white" />
                        </button>
                      </>
                    )}

                    {/* Image Counter */}
                    <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/70 rounded-full text-white text-sm">
                      {currentImageIndex + 1} / {service.images.length}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 font-serif">
                    O usłudze
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.fullDescription}
                  </p>
                </div>

                {/* Sub-services */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 font-serif">
                    Co obejmuje usługa
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {service.subServices.map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="p-1 bg-yellow-600/10 rounded-lg mt-0.5">
                          <Check className="w-5 h-5 text-yellow-600" />
                        </div>
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Process Timeline */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 font-serif">
                    Proces realizacji
                  </h3>
                  <div className="space-y-4">
                    {service.process.map((step, index) => (
                      <div key={index} className="flex gap-4">
                        <div className="flex-shrink-0 w-10 h-10 bg-yellow-600 rounded-full flex items-center justify-center text-white font-bold">
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-900 mb-1">
                            {step.title}
                          </h4>
                          <p className="text-gray-600 text-sm">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Duration & Pricing */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Duration */}
                  <div className="bg-gray-50 rounded-2xl p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Clock className="w-6 h-6 text-yellow-600" />
                      <h4 className="font-bold text-gray-900">
                        Czas realizacji
                      </h4>
                    </div>
                    <p className="text-2xl font-bold text-gray-900">
                      {service.duration}
                    </p>
                  </div>

                  {/* Pricing */}
                  <div className="bg-yellow-50 rounded-2xl p-6">
                    <h4 className="font-bold text-gray-900 mb-3">
                      Orientacyjna cena
                    </h4>
                    <p className="text-2xl font-bold text-yellow-600 mb-2">
                      {service.priceRange}
                    </p>
                    <p className="text-sm text-gray-600">
                      Dokładna wycena po oględzinach
                    </p>
                  </div>
                </div>

                {/* Pricing Factors */}
                <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-2xl p-6">
                  <h4 className="font-bold text-gray-900 mb-3">
                    Co wpływa na cenę?
                  </h4>
                  <ul className="space-y-2">
                    {service.pricingFactors.map((factor, index) => (
                      <li
                        key={index}
                        className="text-gray-700 text-sm flex items-start gap-2"
                      >
                        <span className="text-blue-500 mt-1">•</span>
                        <span>{factor}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Footer CTA */}
            <div className="border-t border-gray-200 p-6 md:p-8 bg-gray-50">
              <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">
                    Zainteresowany tą usługą?
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Skontaktuj się z nami, aby uzyskać bezpłatną wycenę
                  </p>
                </div>
                <button
                  onClick={() => {
                    onClose();
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="group flex items-center gap-3 bg-yellow-600 hover:bg-yellow-700 text-white font-medium px-8 py-4 rounded-full transition-all duration-300 whitespace-nowrap"
                >
                  <span>Zapytaj o wycenę</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
