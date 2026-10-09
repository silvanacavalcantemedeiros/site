import React from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  MessageCircle,
  ShoppingBag,
  ShieldCheck,
  Heart,
  Award,
  ArrowRight,
} from "lucide-react";
import { FloralBranch, FloralCorner, FloatingPetal } from "./FloralDecorations";
import logoImg from "../data/brandAssets";
import BrandsCarousel from "./BrandsCarousel";

export default function Hero() {
  const whatsappUrl =
    "https://wa.me/5534997827143?text=Ol%C3%A1%20Silvana!%20Vim%20pelo%20site%20e%20gostaria%20de%20fazer%20um%20pedido%20ou%20tirar%20uma%20d%C3%BAvida.";

  return (
    <section
      id="inicio"
      className="relative min-h-[92vh] pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-rose-50/70 via-cream-50 to-white"
    >
      {/* Decorative Floral Background Elements */}
      <FloralCorner className="absolute top-16 left-0 w-36 h-36 md:w-56 md:h-56 text-rose-200/50 pointer-events-none" />
      <FloralCorner className="absolute bottom-4 right-0 w-40 h-40 md:w-64 md:h-64 text-pink-200/40 rotate-180 pointer-events-none" />

      {/* Floating Animated Petals */}
      <FloatingPetal
        style={{ top: "15%", left: "8%" }}
        size="w-5 h-5"
        delay={0}
      />
      <FloatingPetal
        style={{ top: "35%", right: "12%" }}
        size="w-6 h-6"
        delay={1.5}
      />
      <FloatingPetal
        style={{ bottom: "20%", left: "15%" }}
        size="w-4 h-4"
        delay={2.5}
      />
      <FloatingPetal
        style={{ top: "60%", right: "5%" }}
        size="w-5 h-5"
        delay={3}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & Content Animations */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Animated Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-100/80 border border-rose-200 text-rose-800 text-xs sm:text-sm font-semibold mb-6 shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping"></span>
              <span>🌸 Consultora & Revendedora Oficial Autorizada</span>
            </motion.div>

            {/* Main Headline with Staggered Reveal */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-800 leading-[1.15]"
            >
              O cuidado e a beleza que você merece, com{" "}
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-pink-600 to-amber-600">
                carinho e confiança.
                <span className="absolute left-0 bottom-1 w-full h-2 bg-rose-200/50 -z-10 rounded-full"></span>
              </span>
            </motion.h1>

            {/* Subheading / Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-6 text-base sm:text-lg md:text-xl text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              {/* Prazer, eu sou a <strong>Silvana</strong>! Há mais de 20 anos */}
              {/* conectando você aos melhores produtos de{" "} */}
              {/* <strong className="text-orange-600">Natura</strong>,{" "} */}
              {/* <strong className="text-pink-600">Avon</strong> e{" "} */}
              {/* <strong className="text-purple-600">Jequiti</strong> com */}
              {/* pronta-entrega, catálogos atualizados e atendimento humanizado. */}
            </motion.p>

            {/* Brand Tags Bar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-2.5"
            >
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-orange-100/90 text-orange-800 border border-orange-200 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>{" "}
                Natura Consultoria Oficial
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-pink-100/90 text-pink-800 border border-pink-200 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-pink-500"></span>{" "}
                Avon Revenda Autorizada
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-100/90 text-purple-800 border border-purple-200 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>{" "}
                Jequiti Queima de Estoque
              </span>
            </motion.div>

            {/* Brands Carousel com Temporizador Lento */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <BrandsCarousel />
            </motion.div>

            {/* Call to Action Buttons */}
            {/* <motion.div */}
            {/*   initial={{ opacity: 0, y: 20 }} */}
            {/*   animate={{ opacity: 1, y: 0 }} */}
            {/*   transition={{ duration: 0.7, delay: 0.5 }} */}
            {/*   className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4" */}
            {/* > */}
            {/*   <a */}
            {/*     href={whatsappUrl} */}
            {/*     target="_blank" */}
            {/*     rel="noopener noreferrer" */}
            {/*     className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-full text-white font-semibold text-base bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/35 transition-all duration-300 transform hover:-translate-y-0.5" */}
            {/*   > */}
            {/*     <MessageCircle className="w-5 h-5 fill-white/20" /> */}
            {/*     <span>Pedir no WhatsApp (34) 99782-7143</span> */}
            {/*   </a> */}
            {/**/}
            {/*   <a */}
            {/*     href="#destaques" */}
            {/*     className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-slate-700 font-semibold text-base bg-white/90 hover:bg-white border border-rose-200 hover:border-rose-300 shadow-sm hover:shadow-md transition-all duration-300" */}
            {/*   > */}
            {/*     <span>Ver Produtos em Destaque</span> */}
            {/*     <ArrowRight className="w-4 h-4 text-rose-500" /> */}
            {/*   </a> */}
            {/* </motion.div> */}

            {/* Trust Mini-Highlights */}
            {/* <motion.div */}
            {/*   initial={{ opacity: 0 }} */}
            {/*   animate={{ opacity: 1 }} */}
            {/*   transition={{ duration: 0.8, delay: 0.65 }} */}
            {/*   className="mt-10 pt-8 border-t border-rose-200/60 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0 text-center" */}
            {/* > */}
            {/*   <div> */}
            {/*     <p className="font-serif text-2xl sm:text-3xl font-bold text-rose-600"> */}
            {/*       +20 */}
            {/*     </p> */}
            {/*     <p className="text-xs sm:text-sm text-slate-600 font-medium"> */}
            {/*       Anos em Vendas */}
            {/*     </p> */}
            {/*   </div> */}
            {/*   <div> */}
            {/*     <p className="font-serif text-2xl sm:text-3xl font-bold text-amber-600"> */}
            {/*       100% */}
            {/*     </p> */}
            {/*     <p className="text-xs sm:text-sm text-slate-600 font-medium"> */}
            {/*       Originais de Fábrica */}
            {/*     </p> */}
            {/*   </div> */}
            {/*   <div> */}
            {/*     <p className="font-serif text-2xl sm:text-3xl font-bold text-emerald-600"> */}
            {/*       Mimos */}
            {/*     </p> */}
            {/*     <p className="text-xs sm:text-sm text-slate-600 font-medium"> */}
            {/*       Amostras em Pedidos */}
            {/*     </p> */}
            {/*   </div> */}
            {/* </motion.div> */}
          </div>

          {/* Right Column: Visual Photo Composition with Framer Motion */}
          <div className="lg:col-span-5 relative flex justify-center">
            {/* Glowing Floral Aura */}
            <div className="absolute inset-0 bg-gradient-to-tr from-rose-200/60 via-pink-100/50 to-amber-100/40 rounded-full blur-3xl -z-10 transform scale-110"></div>

            {/* Main Interactive Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
              className="relative w-full max-w-md bg-white/80 backdrop-blur-md p-6 sm:p-7 rounded-3xl border border-rose-100 shadow-xl"
            >
              {/* Photo Frame with Floral Border */}
              <div className="relative group overflow-hidden rounded-2xl bg-gradient-to-br from-rose-100 to-amber-50 p-2 border-2 border-dashed border-rose-300">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.4 }}
                  className="relative rounded-xl overflow-hidden shadow-inner aspect-square bg-white flex items-center justify-center"
                >
                  <img
                    src={logoImg}
                    alt="Silvana Cavalcante Medeiros - Consultora de Beleza"
                    className="w-full h-full object-cover rounded-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-60"></div>

                  <div className="absolute bottom-3 left-3 right-3 text-white text-left">
                    <p className="font-serif text-lg font-bold drop-shadow-md">
                      Silvana Cavalcante Medeiros
                    </p>
                    <p className="text-xs text-rose-100 drop-shadow-md">
                      Atendimento com carinho e dedicação
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Floating Badge 1: 25 anos em Saúde e Cuidado */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute -top-4 -left-4 sm:-left-6 bg-white/95 backdrop-blur-sm border border-rose-200 rounded-2xl p-3 shadow-lg flex items-center gap-3 animate-float-gentle"
              >
                <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center font-bold">
                  <Heart className="w-5 h-5 fill-rose-500 text-rose-500" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-slate-800">
                    Atendimento Humanizado
                  </p>
                  <p className="text-[11px] text-slate-500">
                    +25 anos de dedicação
                  </p>
                </div>
              </motion.div>

              {/* Floating Badge 2: Pronta-Entrega */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.55 }}
                className="absolute -bottom-4 -right-4 sm:-right-6 bg-white/95 backdrop-blur-sm border border-emerald-200 rounded-2xl p-3 shadow-lg flex items-center gap-3 animate-float-reverse"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold">
                  <Sparkles className="w-5 h-5 text-emerald-600" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-slate-800">
                    Pronta-Entrega
                  </p>
                  <p className="text-[11px] text-emerald-600 font-semibold">
                    Uberlândia e Região
                  </p>
                </div>
              </motion.div>

              {/* Card Footer Quote */}
              <div className="mt-5 text-center">
                <p className="text-xs italic text-slate-500 font-serif">
                  "Experiência, confiança e carinho em cada atendimento. 💕"
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
