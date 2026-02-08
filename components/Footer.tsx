"use client";

import { motion } from "framer-motion";
import {
  Castle,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      {/* Contact Section */}
      <section
        id="contact"
        className="py-24 md:py-32 bg-white overflow-hidden relative scroll-mt-0"
      >
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Large Circle - Top Right */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-yellow-600/5 rounded-full blur-3xl"></div>

          {/* Medium Circle - Bottom Left */}
          <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-yellow-600/10 rounded-full blur-2xl"></div>

          {/* Small Accent Circle - Center */}
          <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-yellow-600/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-2 mb-6">
                <span className="w-2 h-2 rounded-full bg-yellow-600"></span>
                <span className="text-yellow-600 text-sm font-medium tracking-wide uppercase">
                  Kontakt
                </span>
              </div>

              <h2 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6 font-serif">
                Rozpocznij swój <br />
                <span className="text-yellow-600 italic">projekt</span> z nami
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed mb-10">
                Skontaktuj się z nami, aby omówić szczegóły Twojego projektu.
                Doradzimy najlepsze rozwiązania i przygotujemy wycenę.
              </p>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="p-3 bg-yellow-600/10 rounded-lg group-hover:bg-yellow-600/20 transition-colors duration-300">
                    <Phone className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Telefon</p>
                    <a
                      href="tel:+48123456789"
                      className="text-xl font-semibold text-gray-900 hover:text-yellow-600 transition-colors"
                    >
                      +48 123 456 789
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="p-3 bg-yellow-600/10 rounded-lg group-hover:bg-yellow-600/20 transition-colors duration-300">
                    <Mail className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Email</p>
                    <a
                      href="mailto:kontakt@km-bud.pl"
                      className="text-xl font-semibold text-gray-900 hover:text-yellow-600 transition-colors"
                    >
                      kontakt@km-bud.pl
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="p-3 bg-yellow-600/10 rounded-lg group-hover:bg-yellow-600/20 transition-colors duration-300">
                    <MapPin className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Adres</p>
                    <p className="text-xl font-semibold text-gray-900">
                      Węgierska Górka, Polska
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="bg-gray-50 rounded-2xl p-8 md:p-12 h-full flex flex-col justify-center"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 font-serif">
                Wyślij wiadomość
              </h3>

              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Imię i nazwisko
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-600 focus:border-transparent transition-all outline-none"
                    placeholder="Jan Kowalski"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-600 focus:border-transparent transition-all outline-none"
                    placeholder="jan@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-600 focus:border-transparent transition-all outline-none"
                    placeholder="+48 123 456 789"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Wiadomość
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-600 focus:border-transparent transition-all outline-none resize-none"
                    placeholder="Opisz swój projekt..."
                  />
                </div>

                <button
                  type="submit"
                  aria-label="Wyślij wiadomość"
                  className="group w-full flex items-center justify-center gap-3 bg-yellow-600 hover:bg-yellow-700 text-white font-medium px-8 py-4 rounded-lg transition-all duration-300"
                >
                  <span>Wyślij wiadomość</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-900 text-white">
        <div className="container mx-auto px-6 md:px-12">
          {/* Main Footer Content */}
          <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-yellow-600/10 rounded-lg">
                  <Castle
                    className="h-7 w-7 text-yellow-600"
                    strokeWidth={1.5}
                  />
                </div>
                <span className="text-2xl font-bold tracking-wider">
                  KM-BUD
                </span>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                Profesjonalne wykończenia wnętrz klasy premium. Przekuwamy wizje
                w rzeczywistość.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="p-2 bg-white/5 rounded-lg hover:bg-yellow-600 transition-colors duration-300"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="p-2 bg-white/5 rounded-lg hover:bg-yellow-600 transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="p-2 bg-white/5 rounded-lg hover:bg-yellow-600 transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-6">Szybkie linki</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/"
                    className="text-gray-400 hover:text-yellow-600 transition-colors"
                  >
                    Strona główna
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#about"
                    className="text-gray-400 hover:text-yellow-600 transition-colors"
                  >
                    O nas
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#services"
                    className="text-gray-400 hover:text-yellow-600 transition-colors"
                  >
                    Usługi
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#gallery"
                    className="text-gray-400 hover:text-yellow-600 transition-colors"
                  >
                    Realizacje
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#contact"
                    className="text-gray-400 hover:text-yellow-600 transition-colors"
                  >
                    Kontakt
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-bold mb-6">Nasze usługi</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-yellow-600 transition-colors"
                  >
                    Wykończenia
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-yellow-600 transition-colors"
                  >
                    Gładzie natryskowe
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-yellow-600 transition-colors"
                  >
                    Sufity podwieszane
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-yellow-600 transition-colors"
                  >
                    Malowanie
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-yellow-600 transition-colors"
                  >
                    Układanie podłóg
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-yellow-600 transition-colors"
                  >
                    Biały montaż
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-bold mb-6">Kontakt</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-yellow-600 mt-1 shrink-0" />
                  <a
                    href="tel:+48123456789"
                    className="text-gray-400 hover:text-yellow-600 transition-colors"
                  >
                    +48 123 456 789
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-yellow-600 mt-1 shrink-0" />
                  <a
                    href="mailto:kontakt@km-bud.pl"
                    className="text-gray-400 hover:text-yellow-600 transition-colors"
                  >
                    kontakt@km-bud.pl
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-yellow-600 mt-1 shrink-0" />
                  <span className="text-gray-400">Warszawa, Polska</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} KM-BUD. Wszelkie prawa zastrzeżone.
              </p>
              <div className="flex gap-6 text-sm">
                <Link
                  href="#"
                  className="text-gray-400 hover:text-yellow-600 transition-colors"
                >
                  Polityka prywatności
                </Link>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-yellow-600 transition-colors"
                >
                  Regulamin
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
