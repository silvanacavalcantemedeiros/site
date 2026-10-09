import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, MessageCircle, Sparkles } from 'lucide-react';
import { faqList } from '../data/reviews';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold mb-3"
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Tire suas Dúvidas</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 tracking-tight"
          >
            Perguntas <span className="text-rose-600">Frequentes</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-600"
          >
            Respostas rápidas para as principais dúvidas sobre pedidos, formas de pagamento e catálogos.
          </motion.p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqList.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen ? 'border-rose-300 bg-rose-50/30 shadow-sm' : 'border-slate-200 hover:border-rose-200 bg-white'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full py-5 px-6 flex items-center justify-between text-left focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-base sm:text-lg font-bold text-slate-800 pr-4">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="shrink-0 text-rose-500 p-1 rounded-full bg-rose-50"
                  >
                    <ChevronDown className="w-5 h-5" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="px-6 pb-6 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-rose-100/60 pt-4"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center p-8 rounded-3xl bg-cream-50/80 border border-rose-100">
          <h3 className="font-serif text-xl font-bold text-slate-800 mb-2">
            Ainda ficou com alguma dúvida?
          </h3>
          <p className="text-sm text-slate-600 mb-6 max-w-md mx-auto">
            A Silvana responde rapidamente no WhatsApp e te ajuda a escolher o produto perfeito!
          </p>
          <a
            href="https://wa.me/5534997827143?text=Ol%C3%A1%20Silvana!%20Fiquei%20com%20uma%20d%C3%BAvida%20e%20gostaria%20de%20conversar%20com%20voc%C3%AA."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold text-sm bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 shadow-md transition-all hover:scale-[1.02]"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Falar com a Silvana no WhatsApp (34) 99782-7143</span>
          </a>
        </div>

      </div>
    </section>
  );
}
