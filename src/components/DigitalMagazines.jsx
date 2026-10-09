import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ExternalLink, Download, MessageCircle, Sparkles, CheckCircle2 } from 'lucide-react';
import { FloralCorner } from './FloralDecorations';

export default function DigitalMagazines() {
  const magazines = [
    {
      title: 'Revista Digital Natura',
      brand: 'Natura',
      badge: 'Ciclo Vigente',
      badgeColor: 'bg-orange-100 text-orange-800',
      description: 'Navegue pelos lançamentos da perfumaria, cuidados com a pele, linha Ekos e monte seu carrinho com descontos especiais.',
      features: ['Preços promocionais do ciclo', 'Cupons aplicados na finalização', 'Entrega direta em sua casa'],
      ctaText: 'Abrir Loja & Revista Natura',
      ctaUrl: 'https://www.minhaloja.natura.com/consultoria/silvanacavalcantemedeiros',
      isExternal: true,
      color: 'border-orange-200 hover:border-orange-400',
      buttonBg: 'bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600'
    },
    {
      title: 'Revista Digital Avon',
      brand: 'Avon',
      badge: 'Novidades & Makes',
      badgeColor: 'bg-pink-100 text-pink-800',
      description: 'Descubra as novas fórmulas Renew com Protinol, batons de alta fixação, maquiagens e produtos para o lar com os melhores preços.',
      features: ['Tecnologia Renew anti-sinais', 'Promoções "Compre 1 e Leve 2"', 'Pedido direto pelo WhatsApp'],
      ctaText: 'Pedir Revista Avon no WhatsApp',
      ctaUrl: 'https://wa.me/5534997827143?text=Ol%C3%A1%20Silvana!%20Por%20favor%2C%20me%20envie%20a%20Revista%20Digital%20da%20Avon%20do%20ciclo%20atual.',
      isExternal: false,
      color: 'border-pink-200 hover:border-pink-400',
      buttonBg: 'bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700'
    },
    {
      title: 'Catálogo Jequiti Minas Gerais',
      brand: 'Jequiti',
      badge: 'Região MG & Queima',
      badgeColor: 'bg-purple-100 text-purple-800',
      description: 'Catálogo online oficial da Jequiti com preços e produtos atualizados para a região de Minas Gerais. Perfumaria e kits presenteáveis.',
      features: ['Fragrâncias das maiores estrelas', 'Linha de cuidados e banho', 'Queima de estoque imediata'],
      ctaText: 'Ver Catálogo Jequiti Minas Gerais',
      ctaUrl: 'https://revenda.jequiti.com.br/?catalogo=?page=1&regiao=minas-gerais',
      isExternal: true,
      color: 'border-purple-200 hover:border-purple-400',
      buttonBg: 'bg-gradient-to-r from-purple-600 to-violet-700 hover:from-purple-700 hover:to-violet-800'
    }
  ];

  return (
    <section id="revistas" className="py-20 md:py-28 bg-gradient-to-b from-cream-50 via-rose-50/30 to-white relative overflow-hidden">
      <FloralCorner className="absolute bottom-0 right-0 w-48 h-48 text-rose-200/40 rotate-180 pointer-events-none" />

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
            <BookOpen className="w-3.5 h-3.5" />
            <span>Folheie sem sair de casa</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 tracking-tight"
          >
            Revistas Digitais & <span className="text-rose-600">Catálogos do Ciclo</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-600"
          >
            Acesse as revistas digitais interativas para conferir todas as páginas, lançamentos e ofertas exclusivas de cada marca.
          </motion.p>
        </div>

        {/* 3 Magazine Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {magazines.map((mag, idx) => (
            <motion.div
              key={mag.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              whileHover={{ y: -6 }}
              className={`bg-white rounded-3xl p-7 border-2 ${mag.color} shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${mag.badgeColor}`}>
                    {mag.badge}
                  </span>
                  <BookOpen className="w-5 h-5 text-slate-400" />
                </div>

                <h3 className="font-serif text-2xl font-bold text-slate-800 mb-2">
                  {mag.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {mag.description}
                </p>

                <div className="space-y-2 mb-6">
                  {mag.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <a
                  href={mag.ctaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold text-white shadow-sm hover:shadow-md transition-all ${mag.buttonBg}`}
                >
                  {mag.isExternal ? (
                    <>
                      <span>{mag.ctaText}</span>
                      <ExternalLink className="w-4 h-4" />
                    </>
                  ) : (
                    <>
                      <MessageCircle className="w-4 h-4" />
                      <span>{mag.ctaText}</span>
                    </>
                  )}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Help box */}
        <div className="mt-12 text-center">
          <p className="text-sm text-slate-600">
            Deseja o catálogo em PDF no seu celular?{' '}
            <a
              href="https://wa.me/5534997827143?text=Ol%C3%A1%20Silvana!%20Gostaria%20de%20receber%20os%20cat%C3%A1logos%20em%20PDF%20pelo%20WhatsApp."
              target="_blank"
              rel="noopener noreferrer"
              className="text-rose-600 font-bold hover:underline"
            >
              Clique aqui para pedir diretamente pelo WhatsApp 🌸
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}
