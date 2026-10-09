import React from "react";
import { motion } from "framer-motion";
import {
  ExternalLink,
  MessageCircle,
  Sparkles,
  CheckCircle2,
  ShoppingBag,
  ArrowUpRight,
  Flame,
} from "lucide-react";
import { brands } from "../data/brands";
import { FloralCorner } from "./FloralDecorations";

export default function BrandsSection() {
  const whatsappUrl = "https://wa.me/5534997827143";

  return (
    <section
      id="marcas"
      className="py-20 md:py-28 bg-gradient-to-b from-white via-rose-50/40 to-cream-50 relative overflow-hidden"
    >
      {/* Background Ornaments */}
      <FloralCorner className="absolute -top-10 -left-10 w-48 h-48 text-rose-200/40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-100/70 border border-rose-200 text-rose-800 text-xs font-semibold mb-3"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Marcas Parceiras & Ofertas Exclusivas</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 tracking-tight"
          >
            Você sabia que a Avon foi incorporada à Natura a partir do ano de
            2020?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-600"
          >
            Acesse meu link abaixo e compre seus produtos com promoções
            exclusivas para clientes, direto da minha loja, com entrega na sua
            casa! Por temo limitado e enquanto durarem os estoques!
          </motion.p>
        </div>
        <a
          href="https://www.minhaloja.natura.com/consultoria/silvanacavalcantemedeiros"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white shadow-sm hover:shadow transition-all"
        >
          <span>Acessar Minha Loja Natura Oficial</span>
          <ExternalLink className="w-4 h-4" />
        </a>

        {/* Brands 3-Column Grid */}
      </div>
    </section>
  );
}
