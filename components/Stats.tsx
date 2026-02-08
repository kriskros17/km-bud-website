"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";

const stats = [
  { number: 150, label: "Ukończone Projekty", suffix: "+" },
  { number: 50, label: "Zaufani Partnerzy", suffix: "+" },
  { number: 500, label: "Zadowoleni Klienci", suffix: "+" },
  { number: 1000, label: "Zrealizowane Prace", suffix: "+" },
];

function AnimatedCounter({
  value,
  suffix = "",
}: {
  value: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: "0px", amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, isInView, value]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toLocaleString() + suffix;
      }
    });

    return () => unsubscribe();
  }, [springValue, suffix]);

  return <div ref={ref} className="min-h-[1.2em]" />;
}

export default function Stats() {
  return (
    <section className="py-24 md:py-32 bg-white overflow-hidden relative">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-yellow-600/20 to-transparent"></div>

      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3 hidden lg:block"
          >
            <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
                alt="Luksusowe wnętrze"
                fill
                className="object-cover"
                sizes="25vw"
                quality={50}
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Center Content */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <div className="flex items-center justify-center gap-2 mb-6">
                <span className="w-2 h-2 rounded-full bg-yellow-600"></span>
                <span className="text-yellow-600 text-sm font-medium tracking-wide uppercase">
                  Dlaczego My
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6 font-serif">
                Tworzymy Innowacyjne <br />
                <span className="text-yellow-600 italic">
                  Przestrzenie
                </span>{" "}
                Codziennie
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
                Nasz zespół łączy kreatywność z doświadczeniem, aby dostarczać
                projekty, które inspirują i podnoszą wartość każdego wnętrza.
              </p>

              <button
                onClick={() => {
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                aria-label="Poznaj nas"
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-full border-2 border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white transition-all duration-300"
              >
                <span className="font-medium">Poznaj nas</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 font-serif">
                    <AnimatedCounter value={stat.number} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3 hidden lg:block"
          >
            <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2574&auto=format&fit=crop"
                alt="Nowoczesny salon"
                fill
                className="object-cover"
                sizes="25vw"
                quality={50}
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
