import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Sparkles,
  MessageCircle,
  Heart,
  ShoppingBag,
  BookOpen,
} from "lucide-react";
import logoImg from "../data/brandAssets";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", href: "#inicio" },
    { name: "Sobre Mim", href: "#sobre" },
    { name: "Marcas", href: "#marcas" },
    // { name: "Destaques", href: "#destaques" },
    // { name: "Revistas Digitais", href: "#revistas" },
    { name: "Por Que Comprar", href: "#beneficios" },
    { name: "Depoimentos", href: "#depoimentos" },
    { name: "Dúvidas", href: "#faq" },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const whatsappUrl =
    "https://wa.me/5534997827143?text=Ol%C3%A1%20Silvana!%20Vim%20pelo%20site%20e%20gostaria%20de%20ver%20as%20novidades%20e%20produtos%20dispon%C3%ADveis.";

  return (
    <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-300">
      {/* Top Announcement Bar */}
      <div className="bg-gradient-to-r from-rose-500 via-pink-500 to-rose-600 text-white text-xs md:text-sm py-2 px-4 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 mx-auto sm:mx-0 font-medium tracking-wide">
            <span className="flex items-center justify-center w-5 h-5 rounded-full bg-white/20 text-white text-[11px]">
              🌸
            </span>
            <span>Pedidos abertos do ciclo Natura, Avon & Jequiti</span>
            {/* <span className="hidden md:inline text-rose-200">|</span> */}
            {/* <span className="hidden md:inline text-rose-100"> */}
            {/*   Pronta-entrega em mãos ! */}
            {/* </span> */}
          </div>
          {/* <a */}
          {/*   href={whatsappUrl} */}
          {/*   target="_blank" */}
          {/*   rel="noopener noreferrer" */}
          {/*   className="hidden sm:flex items-center gap-1.5 text-xs bg-white text-rose-600 hover:bg-rose-50 font-semibold px-2.5 py-1 rounded-full transition-all duration-200 shadow-sm" */}
          {/* > */}
          {/*   <MessageCircle className="w-3.5 h-3.5" /> */}
          {/*   <span>(34) 99782-7143</span> */}
          {/* </a> */}
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-md border-b border-rose-100 py-2.5"
            : "bg-white/70 backdrop-blur-sm border-b border-rose-100/60 py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Brand Name */}
          <a href="#inicio" className="flex items-center gap-3 group">
            <div className="relative">
              <img
                src={logoImg}
                alt="Silvana Cavalcante Medeiros"
                className="w-11 h-11 sm:w-13 sm:h-13 rounded-full object-cover border-2 border-rose-300 shadow-sm group-hover:scale-105 transition-transform duration-300"
              />
              <span className="absolute -bottom-1 -right-1 bg-rose-500 text-white p-0.5 rounded-full ring-2 ring-white">
                <Heart className="w-2.5 h-2.5 fill-current" />
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-slate-800 group-hover:text-rose-600 transition-colors">
                Silvana Cavalcante Medeiros
              </span>
              <span className="text-[11px] sm:text-xs text-rose-700/80 font-medium flex items-center gap-1">
                <span>Natura</span> • <span>Avon</span> • <span>Jequiti</span>
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-700 hover:text-rose-600 transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-rose-500 hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action Button & Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            {/* <a */}
            {/*   href={whatsappUrl} */}
            {/*   target="_blank" */}
            {/*   rel="noopener noreferrer" */}
            {/*   className="hidden sm:inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-medium text-xs sm:text-sm px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02]" */}
            {/* > */}
            {/*   <MessageCircle className="w-4 h-4 fill-white/20" /> */}
            {/*   <span>Chamar no WhatsApp</span> */}
            {/* </a> */}

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-700 hover:text-rose-600 hover:bg-rose-50 focus:outline-none transition-colors"
              aria-label="Abrir menu"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden bg-white/95 backdrop-blur-lg border-b border-rose-100 shadow-xl overflow-hidden"
            >
              <div className="px-4 pt-3 pb-6 space-y-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={handleLinkClick}
                    className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-700 hover:text-rose-600 hover:bg-rose-50 transition-colors"
                  >
                    {link.name}
                  </a>
                ))}

                <div className="pt-4 border-t border-rose-100 flex flex-col gap-2">
                  <a
                    href="https://www.minhaloja.natura.com/consultoria/silvanacavalcantemedeiros"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-semibold bg-orange-50 text-orange-600 border border-orange-200"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    Loja Online Natura Oficial
                  </a>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold bg-gradient-to-r from-emerald-500 to-green-600 text-white shadow-md"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Falar com Silvana no WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
