"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  MapPin,
  Award,
  Users,
  Target,
  CheckCircle2,
} from "lucide-react";

export default function About() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="about" className="py-24 bg-white overflow-hidden scroll-mt-0">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
          {/* LEFT COLUMN - TEXT */}
          <div className="flex flex-col items-start">
            {/* Tagline */}
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-yellow-600/80"></span>
              <span className="text-gray-600 text-sm font-medium tracking-wide uppercase">
                O Nas
              </span>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-[1.1] mb-8 font-serif">
              Wnętrza, które są <br />
              inwestycją w Twój
              <br />
              <span className="text-yellow-600/90 italic">Komfort</span>
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-10 max-w-lg font-sans">
              KM-BUD to więcej niż firma wykończeniowa – to partner w kreowaniu
              przestrzeni klasy premium. Specjalizujemy się w realizacji
              wymagających projektów, gdzie liczy się każdy milimetr i
              perfekcyjne łączenie materiałów.
            </p>

            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="group flex items-center gap-3 px-8 py-4 rounded-full border border-gray-200 hover:border-gray-900 transition-all duration-300"
            >
              <span className="text-gray-900 font-medium">
                {isExpanded ? "Zwiń" : "Poznaj nas lepiej"}
              </span>
              <ArrowRight
                className={`w-5 h-5 text-gray-900 transition-transform duration-300 ${
                  isExpanded ? "rotate-90" : "group-hover:translate-x-1"
                }`}
              />
            </button>
          </div>

          {/* RIGHT COLUMN - IMAGE */}
          <div className="relative">
            <div className="relative w-full aspect-[3/2]">
              <Image
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2574&auto=format&fit=crop"
                alt="Modern Interior Design"
                fill
                className="object-cover shadow-2xl rounded-[3rem] md:rounded-tl-[3rem] md:rounded-bl-[6rem] md:rounded-tr-[5rem] md:rounded-br-[3rem]"
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={60}
                loading="lazy"
              />

              {/* Floating Badge */}
              <div className="absolute bottom-6 right-6 bg-black/40 backdrop-blur-md px-5 py-2.5 rounded-full flex items-center gap-2">
                <MapPin className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                <span className="text-white text-sm font-medium">
                  Węgierska Górka, Polska
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* EXPANDED SECTION - More About Us */}
        <div
          className={`overflow-hidden transition-all duration-500 ${
            isExpanded ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="mt-16 pt-16 border-t border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Left Column - Our Story */}
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6 font-serif">
                  Nasza <span className="text-yellow-600 italic">Historia</span>
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Od ponad 15 lat KM-BUD realizuje projekty wykończeniowe
                  najwyższej jakości. Rozpoczęliśmy od małych remontów mieszkań,
                  a dziś specjalizujemy się w kompleksowych wykończeniach domów,
                  apartamentów i obiektów komercyjnych.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Przekuwamy wizje architektów w rzeczywistość, gwarantując
                  najwyższą kulturę techniczną i wykonanie, które opiera się
                  próbie czasu. Każdy projekt traktujemy indywidualnie, dbając o
                  najdrobniejsze detale.
                </p>

                {/* Values */}
                <div className="space-y-4 mt-8">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-yellow-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        Perfekcja w Detalu
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Każdy milimetr ma znaczenie - dbamy o precyzję wykonania
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-yellow-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        Terminowość
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Dotrzymujemy ustalonych terminów i harmonogramów prac
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-yellow-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        Najwyższa Jakość
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Używamy tylko sprawdzonych materiałów i technologii
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Why Choose Us */}
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6 font-serif">
                  Dlaczego <span className="text-yellow-600 italic">My?</span>
                </h3>

                <div className="space-y-6">
                  {/* Feature 1 */}
                  <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl">
                    <div className="p-3 bg-yellow-600/10 rounded-lg">
                      <Award className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">
                        Doświadczenie i Certyfikaty
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Ponad 15 lat doświadczenia, certyfikowani specjaliści,
                        setki zrealizowanych projektów
                      </p>
                    </div>
                  </div>

                  {/* Feature 2 */}
                  <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl">
                    <div className="p-3 bg-yellow-600/10 rounded-lg">
                      <Users className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">
                        Profesjonalny Zespół
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Wykwalifikowana kadra, stała współpraca z najlepszymi
                        rzemieślnikami i podwykonawcami
                      </p>
                    </div>
                  </div>

                  {/* Feature 3 */}
                  <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl">
                    <div className="p-3 bg-yellow-600/10 rounded-lg">
                      <Target className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">
                        Kompleksowa Obsługa
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Od projektu przez realizację po odbiór - wszystko w
                        jednym miejscu, pełna koordynacja prac
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
