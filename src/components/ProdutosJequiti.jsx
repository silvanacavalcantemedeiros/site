import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// ✅ Para adicionar mais imagens: coloque o arquivo em public/ProdutosJequiti/
// e adicione um objeto no array abaixo — sem precisar de import!
const slides = [
  { id: 1, src: '/ProdutosJequiti/produto1.jpeg', alt: 'Produto Jequiti 1' },
  { id: 2, src: '/ProdutosJequiti/produto2.jpeg', alt: 'Produto Jequiti 2' },
  { id: 3, src: '/ProdutosJequiti/produto3.jpeg', alt: 'Produto Jequiti 3' },
  { id: 4, src: '/ProdutosJequiti/produto4.jpeg', alt: 'Produto Jequiti 4' },
  { id: 5, src: '/ProdutosJequiti/produto5.jpeg', alt: 'Produto Jequiti 5' },
];

const WHATSAPP_URL =
  'https://wa.me/5534997827143?text=Ol%C3%A1%20Silvana!%20Vi%20a%20queima%20de%20estoque%20Jequiti%20e%20quero%20saber%20mais!';

const variants = {
  enter: (dir) => ({ x: dir > 0 ? '100%' : '-100%', opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir) => ({ x: dir > 0 ? '-100%' : '100%', opacity: 0 }),
};

export default function ProdutosJequiti() {
  const [[current, direction], setCurrent] = useState([0, 0]);

  const paginate = useCallback(
    (dir) => {
      setCurrent(([prev]) => [
        (prev + dir + slides.length) % slides.length,
        dir,
      ]);
    },
    []
  );

  // Auto-play a cada 4 segundos
  useEffect(() => {
    const timer = setInterval(() => paginate(1), 4000);
    return () => clearInterval(timer);
  }, [paginate]);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-purple-50/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-100 border border-purple-200 text-purple-800 text-xs font-semibold mb-3"
          >
            🔥 Ofertas Exclusivas
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 tracking-tight"
          >
            Queima de Estoque{' '}
            <span className="text-purple-600">Jequiti</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-3 text-base sm:text-lg text-slate-500"
          >
            Produtos selecionados com preços imperdíveis. Aproveite enquanto durar o estoque!
          </motion.p>
        </div>

        {/* Carrossel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="relative w-full rounded-3xl overflow-hidden shadow-2xl select-none"
          style={{ aspectRatio: '16/7' }}
        >
          {/* Slides */}
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.img
              key={current}
              src={slides[current].src}
              alt={slides[current].alt}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="absolute inset-0 w-full h-full object-cover"
              draggable={false}
            />
          </AnimatePresence>

          {/* Botão CLIQUE AQUI - canto inferior direito (fiel ao design) */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-6 right-6 z-20 bg-white rounded-2xl px-5 py-3 shadow-lg font-black text-purple-700 text-sm sm:text-base uppercase tracking-wide hover:scale-105 hover:shadow-xl transition-all duration-200 border-2 border-purple-200"
          >
            Clique Aqui!
          </a>

          {/* Seta Esquerda */}
          <button
            onClick={() => paginate(-1)}
            aria-label="Anterior"
            className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/80 hover:bg-white shadow-md flex items-center justify-center transition-all duration-200 hover:scale-110"
          >
            <ChevronLeft className="w-5 h-5 text-slate-700" />
          </button>

          {/* Seta Direita */}
          <button
            onClick={() => paginate(1)}
            aria-label="Próximo"
            className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/80 hover:bg-white shadow-md flex items-center justify-center transition-all duration-200 hover:scale-110"
          >
            <ChevronRight className="w-5 h-5 text-slate-700" />
          </button>

          {/* Overlay gradiente leve nas bordas */}
          <div className="absolute inset-0 pointer-events-none rounded-3xl ring-1 ring-black/10" />
        </motion.div>

        {/* Dots de navegação */}
        <div className="flex justify-center gap-2 mt-5">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent([i, i > current ? 1 : -1])}
              aria-label={`Ir para slide ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? 'bg-purple-500 w-6 h-2.5'
                  : 'bg-purple-200 hover:bg-purple-300 w-2.5 h-2.5'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
