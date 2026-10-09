import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, Sparkles, Heart } from 'lucide-react';
import { testimonials } from '../data/reviews';
import { FloralBranch } from './FloralDecorations';

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-20 md:py-28 bg-gradient-to-b from-white via-rose-50/40 to-cream-50 relative overflow-hidden">
      <FloralBranch className="absolute top-10 right-4 w-36 h-36 text-pink-200/50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-100/70 border border-rose-200 text-rose-800 text-xs font-semibold mb-3"
          >
            <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
            <span>Histórias & Carinho Real</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 tracking-tight"
          >
            O Que Dizem Nossas <span className="text-rose-600">Clientes</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-600"
          >
            Relatos verdadeiros de quem confia no atendimento dedicado e carinhoso da Silvana.
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((review, idx) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-3xl p-6 border border-rose-100/80 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Rating stars & Tag */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-rose-50 text-rose-700 border border-rose-200">
                    {review.tag}
                  </span>
                </div>

                <Quote className="w-6 h-6 text-rose-300 mb-2 opacity-60" />

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic mb-6">
                  "{review.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-rose-50 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden shadow-sm ring-2 ring-rose-200 flex-shrink-0 bg-gradient-to-tr from-rose-400 to-pink-500 flex items-center justify-center">
                  {review.photo ? (
                    <img
                      src={review.photo}
                      alt={review.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement.innerHTML = `<span class="text-white font-serif font-bold text-sm">${review.name.charAt(0)}</span>`;
                      }}
                    />
                  ) : (
                    <span className="text-white font-serif font-bold text-sm">
                      {review.name.charAt(0)}
                    </span>
                  )}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-800">{review.name}</h4>
                  <p className="text-[11px] text-slate-400">{review.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
