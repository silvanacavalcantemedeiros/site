import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Sparkles, Filter, Check, ShoppingCart, Tag } from 'lucide-react';
import { products, productCategories } from '../data/products';
import confetti from 'canvas-confetti';

export default function FeaturedProducts() {
  const [activeCategory, setActiveCategory] = useState('Todos');

  const filteredProducts = products.filter((prod) => {
    if (activeCategory === 'Todos') return true;
    if (activeCategory === 'Natura') return prod.brand === 'Natura';
    if (activeCategory === 'Avon') return prod.brand === 'Avon';
    if (activeCategory === 'Jequiti') return prod.brand === 'Jequiti';
    return prod.category === activeCategory;
  });

  const handleOrderClick = (product) => {
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#f43f5e', '#fb7185', '#fda4af', '#f59e0b', '#10b981']
    });

    const msg = encodeURIComponent(`Olá Silvana! Vi no seu site o produto "${product.name}" por ${product.pricePromo} e gostaria de saber se está disponível para pronta-entrega ou encomenda!`);
    window.open(`https://wa.me/5534997827143?text=${msg}`, '_blank');
  };

  return (
    <section id="destaques" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold mb-3"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Seleção Especial</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 tracking-tight"
          >
            Queridinhos & <span className="text-rose-600">Pronta-Entrega</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-600"
          >
            Confira alguns dos produtos mais pedidos. Clique no botão para tirar dúvidas ou reservar o seu diretamente pelo WhatsApp com a Silvana.
          </motion.p>
        </div>

        {/* Filter Categories Horizontal Scroll */}
        <div className="flex items-center justify-start lg:justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {productCategories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-rose-600 text-white shadow-md shadow-rose-600/20 scale-105'
                    : 'bg-rose-50/80 text-slate-700 hover:bg-rose-100/70 hover:text-rose-700 border border-rose-200/60'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Products Grid with Framer Motion AnimatePresence */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {filteredProducts.map((product) => (
              <motion.div
                layout
                key={product.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35 }}
                className="bg-white rounded-2xl overflow-hidden border border-rose-100/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                {/* Product Image Container */}
                <div className="relative aspect-square overflow-hidden bg-rose-50/50">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Brand Tag Top Left */}
                  <div className="absolute top-3 left-3">
                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md shadow-sm ${
                        product.brand === 'Natura'
                          ? 'bg-orange-500 text-white'
                          : product.brand === 'Avon'
                          ? 'bg-pink-600 text-white'
                          : product.brand === 'Jequiti'
                          ? 'bg-purple-600 text-white'
                          : 'bg-rose-600 text-white'
                      }`}
                    >
                      {product.brand}
                    </span>
                  </div>

                  {/* Badge Top Right */}
                  <div className="absolute top-3 right-3">
                    <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full border shadow-sm ${product.badgeColor}`}>
                      {product.badge}
                    </span>
                  </div>

                  {/* Status Tag Bottom Left */}
                  <div className="absolute bottom-3 left-3">
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-white/95 text-slate-700 shadow-sm backdrop-blur-sm">
                      ✨ {product.status}
                    </span>
                  </div>
                </div>

                {/* Product Content Details */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-[11px] font-semibold text-rose-600 uppercase tracking-wider mb-1">
                      {product.category}
                    </p>
                    <h3 className="font-serif text-base font-bold text-slate-800 line-clamp-2 leading-snug group-hover:text-rose-600 transition-colors">
                      {product.name}
                    </h3>
                    <p className="mt-1.5 text-xs text-slate-500 line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  {/* Price & Action Button */}
                  <div className="mt-4 pt-4 border-t border-slate-100">
                    <div className="flex items-baseline gap-2 mb-3">
                      <span className="text-xs text-slate-400 line-through">
                        {product.priceOriginal}
                      </span>
                      <span className="font-serif text-xl font-bold text-slate-900">
                        {product.pricePromo}
                      </span>
                    </div>

                    <button
                      onClick={() => handleOrderClick(product)}
                      className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer active:scale-95"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Pedir no WhatsApp</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-rose-50 via-pink-50 to-amber-50 border border-rose-200 text-center max-w-2xl mx-auto">
          <p className="text-sm text-slate-700 font-medium">
            Procurando algum outro perfume, batom ou hidratante específico? 🌷
          </p>
          <a
            href="https://wa.me/5534997827143?text=Ol%C3%A1%20Silvana!%20Estou%20procurando%20um%20produto%20espec%C3%ADfico%20e%20gostaria%20de%20saber%20se%20voc%C3%AA%20tem%20ou%20consegue%20encomendar."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-2 font-bold text-xs sm:text-sm text-rose-700 hover:text-rose-900 underline underline-offset-4"
          >
            <MessageCircle className="w-4 h-4 text-emerald-600" />
            <span>Perguntar para a Silvana no WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
