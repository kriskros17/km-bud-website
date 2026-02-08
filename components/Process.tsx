"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  MessageSquare,
  FileText,
  Hammer,
  Key,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Konsultacja",
    description:
      "Poznajemy Twoje potrzeby i wizję. Omawiamy zakres prac i możliwości.",
    icon: MessageSquare,
  },
  {
    number: "02",
    title: "Wycena",
    description:
      "Przygotowujemy szczegółową wycenę i harmonogram realizacji projektu.",
    icon: FileText,
  },
  {
    number: "03",
    title: "Realizacja",
    description:
      "Profesjonalny zespół wykonuje prace zgodnie z ustalonym planem.",
    icon: Hammer,
  },
  {
    number: "04",
    title: "Odbiór",
    description:
      "Przekazujemy gotowe wnętrze i zapewniamy pełną gwarancję na wykonane prace.",
    icon: Key,
  },
];

export default function Process() {
  return (
    <section className="py-20 md:py-24 bg-linear-to-b from-white to-gray-100 overflow-hidden relative">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-yellow-600/30 to-transparent"></div>

      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px", amount: 0.3 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="flex items-center justify-center gap-2 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-yellow-600"></span>
            <span className="text-yellow-600 text-sm font-medium tracking-wide uppercase">
              Jak Działamy
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px", amount: 0.3 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-4 font-serif"
          >
            Prosty i <span className="text-yellow-600 italic">przejrzysty</span>{" "}
            proces
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px", amount: 0.3 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="text-gray-600 text-base leading-relaxed"
          >
            Od pierwszego kontaktu do odbioru gotowego wnętrza - każdy etap jest
            starannie zaplanowany.
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px", amount: 0.2 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative h-full"
              >
                {/* Step Card */}
                <div className="relative bg-white shadow-sm hover:shadow-lg rounded-2xl p-6 hover:bg-gray-50 transition-all duration-300 group h-full flex flex-col">
                  {/* Step Number Badge */}
                  <div className="absolute -top-4 left-6 w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-lg">
                      {step.number}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="mt-8 mb-4">
                    <div className="inline-flex p-3 bg-yellow-600/10 rounded-xl group-hover:bg-yellow-600 transition-all duration-300">
                      <step.icon
                        className="w-8 h-8 text-yellow-600 group-hover:text-white transition-colors duration-300"
                        strokeWidth={1.5}
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 font-serif">
                    {step.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                    {step.description}
                  </p>

                  {/* Check Icon - appears on hover */}
                  <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <CheckCircle2 className="w-6 h-6 text-yellow-600" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px", amount: 0.3 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-6">
            Gotowy, aby rozpocząć transformację swojego wnętrza?
          </p>
          <button
            onClick={() => {
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            aria-label="Skontaktuj się z nami"
            className="group inline-flex items-center gap-3 bg-yellow-600 hover:bg-yellow-700 text-white font-medium px-8 py-4 rounded-full transition-all duration-300"
          >
            <span>Skontaktuj się z nami</span>
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
