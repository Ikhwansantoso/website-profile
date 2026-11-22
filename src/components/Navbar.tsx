"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageContext";
import { languages } from "@/i18n/translations";

function LanguageToggle() {
  const { lang, setLang, t } = useLanguage();

  return (
    <div
      role="group"
      aria-label={t.nav.switchLanguage}
      className="flex items-center rounded-full border border-slate-200 bg-white/70 p-0.5 text-xs font-semibold"
    >
      {languages.map((code) => (
        <button
          key={code}
          onClick={() => setLang(code)}
          aria-pressed={lang === code}
          className={`px-2.5 py-1 rounded-full uppercase transition-colors ${
            lang === code ? "bg-brand-600 text-white shadow-sm" : "text-slate-500 hover:text-brand-600"
          }`}
        >
          {code}
        </button>
      ))}
    </div>
  );
}

export default function Navbar() {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prefixed with "/" so the links also work from the /projects page.
  const links = [
    { name: t.nav.home, href: "/#home" },
    { name: t.nav.about, href: "/#about" },
    { name: t.nav.projects, href: "/#projects" },
    { name: t.nav.contact, href: "/#contact" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-lg shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-b border-brand-100/50 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-end items-center">
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-slate-600 hover:text-brand-600 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <LanguageToggle />
        </div>

        {/* Mobile: language toggle + menu button */}
        <div className="flex md:hidden items-center gap-3">
          <LanguageToggle />
          <button className="text-slate-800 hover:text-brand-600" onClick={() => setIsOpen(!isOpen)} aria-label="Menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-lg shadow-xl py-6 flex flex-col items-center gap-6 md:hidden border-t border-brand-100/50"
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-slate-700 hover:text-brand-600 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
