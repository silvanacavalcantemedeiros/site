import React from "react";
import { motion } from "framer-motion";
import {
  Truck,
  Gift,
  Sparkles,
  CreditCard,
  HeartHandshake,
  ShieldCheck,
} from "lucide-react";
import { FloralCorner } from "./FloralDecorations";

export default function WhyChooseMe() {
  const benefits = [
    // {
    //   icon: Truck,
    //   title: "Pronta-Entrega Rápida",
    //   description:
    //     "Estoque selecionado dos produtos mais amados para entrega ágil em Uberlândia e cidades vizinhas.",
    //   color: "bg-emerald-50 text-emerald-600 border-emerald-100",
    //   tag: "Agilidade",
    // },
    {
      icon: Gift,
      title: "Embalagens para Presente",
      description:
        "Montamos kits especiais com sacola personalizada prontinhos para encantar.",
      color: "bg-pink-50 text-pink-600 border-pink-100",
      tag: "Carinho",
    },
    {
      icon: CreditCard,
      title: "Pagamento Facilitado",
      description:
        "Aceitamos Pix com desconto, dinheiro e cartões de débito e crédito com opções de parcelamento.",
      color: "bg-blue-50 text-blue-600 border-blue-100",
      tag: "Praticidade",
    },
    {
      icon: HeartHandshake,
      title: "Atendimento Humanizado",
      description:
        "Dedicamos tempo a entender sua necessidade e sugerir produtos que realmente combinam com você.",
      color: "bg-rose-50 text-rose-600 border-rose-100",
      tag: "Confiança",
    },
    // {
    //   icon: ShieldCheck,
    //   title: "100% Originais e Lacrados",
    //   description:
    //     "Garantia de procedência direta das fábricas da Natura, Avon e Jequiti com lotes recentes.",
    //   color: "bg-purple-50 text-purple-600 border-purple-100",
    //   tag: "Segurança",
    // },
  ];

  return (
    <section
      id="beneficios"
      className="py-20 md:py-28 bg-white relative overflow-hidden"
    >
      <FloralCorner className="absolute top-0 left-0 w-40 h-40 text-rose-100/50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold mb-3"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Diferenciais Exclusivos</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 tracking-tight"
          >
            Por Que Comprar com a{" "}
            <span className="text-rose-600">Silvana?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-600"
          >
            Mais do que vender cosméticos, nosso compromisso é oferecer cuidado,
            atenção e os melhores momentos para você.
          </motion.p>
        </div>

        {/* 6 Benefit Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-7 rounded-3xl bg-cream-50/60 border border-rose-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center border ${item.color} shadow-sm`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white text-slate-600 border border-slate-200">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-slate-800 mb-2">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
