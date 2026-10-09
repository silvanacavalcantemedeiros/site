import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { carouselBrands } from "../data/carouselBrands";

export default function BrandsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [itemOffset, setItemOffset] = useState(0);
  const trackRef = useRef(null);
  const total = carouselBrands.length;

  // Atualiza a largura exata de cada item para animação precisa em qualquer tela
  useEffect(() => {
    const calculateOffset = () => {
      if (trackRef.current && trackRef.current.children.length > 0) {
        const first = trackRef.current.children[0];
        const second = trackRef.current.children[1];
        if (first && second) {
          const distance = second.offsetLeft - first.offsetLeft;
          setItemOffset(distance);
        } else if (first) {
          setItemOffset(first.offsetWidth + 12);
        }
      }
    };

    calculateOffset();
    const handleResize = () => calculateOffset();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Temporizador lento: avança suavemente a cada 4 segundos
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
    }, 4000);

    return () => clearInterval(timer);
  }, [isPaused, total]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  // Itens duplicados para garantir rolagem contínua sem espaços vazios
  const displayItems = [
    ...carouselBrands,
    ...carouselBrands,
    ...carouselBrands,
  ];

  return (
    <div
      className="mt-7 w-full max-w-xl mx-auto lg:mx-0 select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Título de apoio do Carrossel */}
      <div className="flex items-center justify-between mb-2.5 px-1">
        <span className="flex items-center gap-1.5 text-lg font-semibold text-slate-600 tracking-wide uppercase">
          <Sparkles className="w-3.5 h-3.5 text-rose-500 animate-pulse" />
          Marcas que Represento
        </span>

        {/* Controles manuais discretos */}
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Marca anterior"
            className="w-6 h-6 rounded-full bg-white/90 hover:bg-white border border-rose-200 text-slate-600 hover:text-rose-600 flex items-center justify-center transition-all shadow-xs hover:shadow-sm cursor-pointer"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
          </button>
          <button
            type="button"
            onClick={handleNext}
            aria-label="Próxima marca"
            className="w-6 h-6 rounded-full bg-white/90 hover:bg-white border border-rose-200 text-slate-600 hover:text-rose-600 flex items-center justify-center transition-all shadow-xs hover:shadow-sm cursor-pointer"
          >
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Caixa do Carrossel contida estritamente na coluna esquerda (sem invadir a foto) */}
      <div className="relative overflow-hidden rounded-2xl bg-white/70 backdrop-blur-xs border border-rose-200/70 p-2.5 shadow-sm">
        {/* Fade suave nas extremidades */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-cream-50/90 to-transparent z-10 rounded-l-2xl" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-cream-50/90 to-transparent z-10 rounded-r-2xl" />

        {/* Trilho de rolagem com temporização lenta */}
        <div className="overflow-hidden">
          <motion.div
            ref={trackRef}
            className="flex gap-3"
            animate={{
              x: -currentIndex * itemOffset,
            }}
            transition={{
              duration: 1.1, // transição lenta e suave
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            {displayItems.map((brand, idx) => (
              <div
                key={`${brand.id}-${idx}`}
                className="shrink-0 w-[calc(50%-6px)] sm:w-[calc(33.333%-8px)]"
              >
                <div className="h-20 bg-white rounded-xl border border-rose-100/90 shadow-2xs hover:shadow-sm hover:border-rose-300 transition-all p-2 flex flex-col items-center justify-center text-center group">
                  <div className="h-10 w-full flex items-center justify-center overflow-hidden">
                    <img
                      src={brand.image}
                      alt={brand.alt}
                      className="max-h-9 max-w-[85%] object-contain group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-medium text-slate-500 group-hover:text-rose-700 transition-colors truncate w-full mt-1">
                    {brand.badge}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Indicadores de pontinhos (dots) */}
        <div className="flex justify-center items-center gap-1.5 mt-2.5">
          {carouselBrands.map((brand, index) => (
            <button
              key={brand.id}
              type="button"
              onClick={() => setCurrentIndex(index)}
              aria-label={`Ir para ${brand.name}`}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                currentIndex === index
                  ? "w-5 bg-rose-500"
                  : "w-1.5 bg-rose-200 hover:bg-rose-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
