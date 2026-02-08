"use client";

import { motion } from "framer-motion";
import {
  ShowerHead,
  Paintbrush,
  LayoutTemplate,
  Sparkles,
  Home,
} from "lucide-react";
import { useState } from "react";
import ServiceModal from "./ServiceModal";

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

const services = [
  {
    id: "wykonczenia",
    title: "Wykończenia",
    category: "Kompleksowe rozwiązania",
    description:
      "Kompleksowe realizacje wnętrz od stanu deweloperskiego aż pod klucz. Koordynacja wszystkich etapów prac, dbałość o detale i pełna obsługa remontowa.",
    fullDescription:
      "Oferujemy kompleksowe wykończenia wnętrz na najwyższym poziomie. Nasz zespół doświadczonych specjalistów zajmie się wszystkimi etapami prac - od przygotowania powierzchni, przez montaż instalacji, aż po finalne wykończenie. Dbamy o każdy detal, koordynujemy pracę wszystkich branż i zapewniamy terminową realizację. Pracujemy zarówno z mieszkaniami deweloperskimi, jak i przy remontach starszych budynków.",
    icon: Home,
    images: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2574",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070",
    ],
    subServices: [
      "Przygotowanie powierzchni i podkłady",
      "Montaż instalacji elektrycznych i hydraulicznych",
      "Zabudowy z płyt G-K",
      "Gładzie i malowanie",
      "Układanie podłóg i glazury",
      "Montaż drzwi i listew",
      "Biały montaż",
      "Sprzątanie końcowe",
    ],
    process: [
      {
        title: "Oględziny i wycena",
        description:
          "Wizyta na miejscu, pomiary, ustalenie zakresu prac i przygotowanie szczegółowej wyceny.",
      },
      {
        title: "Planowanie",
        description: "Harmonogram prac, dobór materiałów, koordynacja dostaw.",
      },
      {
        title: "Realizacja",
        description:
          "Wykonanie prac zgodnie z ustalonym planem, bieżące raportowanie postępów.",
      },
      {
        title: "Odbiór",
        description:
          "Końcowy odbiór prac, przekazanie dokumentacji i gwarancji.",
      },
    ],
    duration: "4-12 tygodni",
    priceRange: "od 400 zł/m²",
    pricingFactors: [
      "Powierzchnia do wykończenia",
      "Stan wyjściowy (deweloperski/do remontu)",
      "Wybrane materiały i wyposażenie",
      "Złożoność projektu i niestandardowe rozwiązania",
      "Lokalizacja (dostępność, parking)",
    ],
  },
  {
    id: "gladzie",
    title: "Gładzie natryskowe",
    category: "Technologia natryskowa",
    description:
      "Idealnie gładkie ściany i sufity dzięki technologii natryskowej. Szybka realizacja i perfekcyjne wykończenie powierzchni.",
    fullDescription:
      "Gładzie natryskowe to nowoczesna technologia pozwalająca na szybkie i efektywne wyrównanie ścian i sufitów. Dzięki zastosowaniu specjalistycznego sprzętu natryskowego uzyskujemy idealnie gładkie powierzchnie gotowe pod malowanie. Metoda ta jest znacznie szybsza od tradycyjnego gładziowania ręcznego i zapewnia równomierną grubość warstwy na całej powierzchni.",
    icon: Sparkles,
    images: [
      "https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=2070",
      "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?q=80&w=2070",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2070",
    ],
    subServices: [
      "Przygotowanie podłoża",
      "Gruntowanie powierzchni",
      "Natrysk gładzi maszynowej",
      "Szlifowanie i wygładzanie",
      "Gruntowanie pod malowanie",
      "Zabezpieczenie podłóg i mebli",
    ],
    process: [
      {
        title: "Przygotowanie",
        description:
          "Zabezpieczenie pomieszczeń, przygotowanie podłoża, gruntowanie.",
      },
      {
        title: "Natrysk",
        description: "Aplikacja gładzi maszynowej na ściany i sufity.",
      },
      {
        title: "Wykończenie",
        description: "Szlifowanie, wygładzanie i gruntowanie pod malowanie.",
      },
    ],
    duration: "2-5 dni",
    priceRange: "od 25 zł/m²",
    pricingFactors: [
      "Powierzchnia do pokrycia",
      "Stan podłoża",
      "Grubość warstwy gładzi",
      "Wysokość pomieszczeń",
      "Dostępność do obiektu",
    ],
  },
  {
    id: "sufity",
    title: "Sufity podwieszane",
    category: "Zabudowy G-K",
    description:
      "Zabudowy z płyt gipsowo-kartonowych, sufity wielopoziomowe i dekoracyjne oświetlenie LED.",
    fullDescription:
      "Specjalizujemy się w montażu sufitów podwieszanych z płyt gipsowo-kartonowych. Tworzymy zarówno proste sufity podwieszane, jak i skomplikowane konstrukcje wielopoziomowe z oświetleniem LED. Nasze realizacje łączą funkcjonalność z estetyką - ukrywamy instalacje, poprawiamy akustykę pomieszczeń i tworzymy efektowne elementy dekoracyjne.",
    icon: LayoutTemplate,
    images: [
      "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?q=80&w=2070",
      "https://images.unsplash.com/photo-1600566753151-384129cf4e3e?q=80&w=2070",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498b?q=80&w=2070",
    ],
    subServices: [
      "Sufity jednopoziomowe",
      "Sufity wielopoziomowe",
      "Oświetlenie LED (taśmy, profile)",
      "Sufity napinane",
      "Ścianki działowe G-K",
      "Zabudowy instalacji",
    ],
    process: [
      {
        title: "Projekt",
        description: "Ustalenie projektu sufitu, rozmieszczenia oświetlenia.",
      },
      {
        title: "Montaż konstrukcji",
        description: "Montaż rusztu metalowego, prowadzenie instalacji.",
      },
      {
        title: "Płyty i wykończenie",
        description: "Montaż płyt G-K, szpachlowanie, malowanie, montaż LED.",
      },
    ],
    duration: "3-7 dni",
    priceRange: "od 80 zł/m²",
    pricingFactors: [
      "Typ sufitu (jedno/wielopoziomowy)",
      "Powierzchnia",
      "Oświetlenie LED (ilość i rodzaj)",
      "Kształty i zaokrąglenia",
      "Wysokość pomieszczenia",
    ],
  },
  {
    id: "malowanie",
    title: "Malowanie",
    category: "Wykończenie powierzchni",
    description:
      "Precyzyjne malowanie ścian i sufitów agregatem oraz tradycyjnie. Najwyższa jakość farb dla trwałego efektu.",
    fullDescription:
      "Oferujemy profesjonalne usługi malarskie z wykorzystaniem najwyższej jakości farb renomowanych producentów. Pracujemy zarówno metodą tradycyjną (wałek, pędzel), jak i agregatem natryskowym, który zapewnia idealnie równomierne pokrycie. Doradzamy w doborze kolorów i rodzaju farb dostosowanych do charakteru pomieszczenia.",
    icon: Paintbrush,
    images: [
      "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2070",
      "https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=2070",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070",
    ],
    subServices: [
      "Malowanie ścian i sufitów",
      "Malowanie agregatem natryskowym",
      "Malowanie tradycyjne",
      "Gruntowanie powierzchni",
      "Malowanie dekoracyjne",
      "Dobór kolorystyki",
    ],
    process: [
      {
        title: "Przygotowanie",
        description: "Zabezpieczenie pomieszczeń, gruntowanie powierzchni.",
      },
      {
        title: "Malowanie",
        description: "Aplikacja farby agregatem lub tradycyjnie, 2-3 warstwy.",
      },
      {
        title: "Wykończenie",
        description: "Poprawki, usunięcie zabezpieczeń, sprzątanie.",
      },
    ],
    duration: "1-4 dni",
    priceRange: "od 15 zł/m²",
    pricingFactors: [
      "Powierzchnia do malowania",
      "Rodzaj farby (standard/premium)",
      "Ilość kolorów",
      "Metoda (tradycyjna/natrysk)",
      "Stan podłoża",
    ],
  },
  {
    id: "podlogi",
    title: "Układanie podłóg",
    category: "Podłogi i posadzki",
    description:
      "Profesjonalny montaż paneli, desek podłogowych i parkietów. Dbałość o dylatacje i estetyczne wykończenie.",
    fullDescription:
      "Zajmujemy się profesjonalnym montażem wszystkich rodzajów podłóg - od paneli laminowanych, przez deski podłogowe LVT, aż po klasyczne parkiety. Dbamy o prawidłowe przygotowanie podłoża, odpowiednie dylatacje i estetyczne wykończenie progami i listwami. Gwarantujemy trwałość i bezproblemowe użytkowanie przez lata.",
    icon: LayoutTemplate,
    images: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2070",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2070",
    ],
    subServices: [
      "Panele laminowane",
      "Deski podłogowe LVT/SPC",
      "Parkiet drewniany",
      "Podkłady wygłuszające",
      "Listwy przypodłogowe",
      "Progi i profile przejściowe",
    ],
    process: [
      {
        title: "Przygotowanie podłoża",
        description: "Wyrównanie, oczyszczenie, położenie podkładu.",
      },
      {
        title: "Układanie",
        description: "Montaż paneli/desek z zachowaniem dylatacji.",
      },
      {
        title: "Wykończenie",
        description: "Montaż listew, progów, uszczelnienie.",
      },
    ],
    duration: "1-3 dni",
    priceRange: "od 25 zł/m²",
    pricingFactors: [
      "Powierzchnia",
      "Rodzaj podłogi",
      "Stan podłoża",
      "Kształt pomieszczenia",
      "Dodatkowe elementy (listwy, progi)",
    ],
  },
  {
    id: "bialy-montaz",
    title: "Biały montaż",
    category: "Instalacje sanitarne",
    description:
      "Precyzyjny montaż ceramiki sanitarnej, armatury, wanien i kabin prysznicowych. Gwarancja szczelności i estetyki.",
    fullDescription:
      "Biały montaż to finałowy etap wykończenia łazienki. Zajmujemy się profesjonalnym montażem wszystkich elementów wyposażenia łazienki - od ceramiki sanitarnej, przez baterie, aż po wanny i kabiny prysznicowe. Gwarantujemy szczelność wszystkich połączeń, prawidłowe odprowadzenie wody i estetyczne wykończenie. Współpracujemy z najlepszymi producentami wyposażenia łazienek.",
    icon: ShowerHead,
    images: [
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070",
    ],
    subServices: [
      "Montaż muszli i umywalek",
      "Montaż baterii i armatury",
      "Montaż wanien i brodzików",
      "Montaż kabin prysznicowych",
      "Podłączenie pralki i zmywarki",
      "Uszczelnienia silikonowe",
    ],
    process: [
      {
        title: "Przygotowanie",
        description: "Sprawdzenie instalacji, przygotowanie narzędzi.",
      },
      {
        title: "Montaż",
        description: "Montaż ceramiki, baterii, kabin, podłączenia.",
      },
      {
        title: "Wykończenie",
        description: "Uszczelnienia, regulacja, test szczelności.",
      },
    ],
    duration: "1-2 dni",
    priceRange: "od 800 zł",
    pricingFactors: [
      "Ilość elementów do montażu",
      "Rodzaj wyposażenia",
      "Złożoność instalacji",
      "Dodatkowe prace (np. zabudowy)",
      "Dostępność do instalacji",
    ],
  },
];

export default function Services() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (service: Service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedService(null), 300);
  };

  return (
    <>
      <section
        id="services"
        className="py-16 md:py-20 bg-zinc-900 overflow-hidden relative scroll-mt-0"
      >
        {/* Decorative top border */}
        <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-yellow-600/20 to-transparent"></div>

        <div className="container mx-auto px-6 md:px-12">
          {/* Header */}
          <div className="max-w-3xl mb-12">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px", amount: 0.3 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="flex items-center gap-2 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-yellow-600"></span>
              <span className="text-yellow-600 text-sm font-medium tracking-wide uppercase">
                Nasze Usługi
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px", amount: 0.3 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4 font-serif"
            >
              Kompleksowe wykończenia <br />
              na{" "}
              <span className="text-yellow-600 italic">
                najwyższym poziomie
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px", amount: 0.3 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="text-gray-300 text-base leading-relaxed"
            >
              Od kompleksowych wykończeń po najdrobniejsze detale - oferujemy
              pełen zakres usług remontowych i wykończeniowych.
            </motion.p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px", amount: 0.2 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                onClick={() => openModal(service)}
                aria-label={`Dowiedz się więcej o ${service.title}`}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-yellow-600/50 transition-all duration-300 text-left w-full cursor-pointer"
              >
                {/* Icon */}
                <div className="mb-4">
                  <div className="inline-flex p-4 bg-yellow-600/10 rounded-2xl group-hover:bg-yellow-600 transition-all duration-300">
                    <service.icon
                      className="w-12 h-12 text-yellow-600 group-hover:text-white transition-colors duration-300"
                      strokeWidth={1.5}
                    />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3 font-serif group-hover:text-yellow-600 transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* CTA Text */}
                <div className="inline-flex items-center gap-2 text-yellow-600 font-medium text-sm group-hover:gap-3 transition-all duration-300">
                  <span>Dowiedz się więcej</span>
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>

                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-yellow-600/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Service Modal */}
      <ServiceModal
        service={selectedService}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </>
  );
}
