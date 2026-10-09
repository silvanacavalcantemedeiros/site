import React from "react";
import { motion } from "framer-motion";
import {
  Heart,
  Sparkles,
  Award,
  Shield,
  UserCheck,
  MessageCircle,
} from "lucide-react";
import { FloralBranch, FloralCorner } from "./FloralDecorations";
import logoImg from "../data/brandAssets";

export default function AboutMe() {
  const whatsappUrl =
    "https://wa.me/5534997827143?text=Ol%C3%A1%20Silvana!%20Li%20sua%20hist%C3%B3ria%20no%20site%20e%20gostaria%20de%20conversar%20com%20voc%C3%AA.";

  const values = [
    {
      icon: Heart,
      title: "Carinho & Empatia",
      desc: "Mais de 25 anos na área da saúde me ensinaram a ouvir de verdade e cuidar de cada pessoa.",
      color: "bg-rose-50 text-rose-600 border-rose-200",
    },
    {
      icon: Award,
      title: "20+ Anos de Vendas",
      desc: "Trajetória sólida conectando famílias aos melhores produtos e cosméticos do Brasil.",
      color: "bg-amber-50 text-amber-600 border-amber-200",
    },
    {
      icon: Shield,
      title: "Confiança & Originalidade",
      desc: "Apenas produtos 100% originais das marcas oficiais, lacrados e com garantia.",
      color: "bg-emerald-50 text-emerald-600 border-emerald-200",
    },
  ];

  return (
    <section
      id="sobre"
      className="py-20 md:py-28 bg-white relative overflow-hidden"
    >
      {/* Floral Background Touches */}
      <FloralCorner className="absolute top-0 right-0 w-44 h-44 text-rose-100/60 pointer-events-none" />
      <FloralBranch className="absolute bottom-10 left-4 w-32 h-32 text-pink-100/70 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold mb-3"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Conheça a sua consultora</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 tracking-tight"
          >
            Prazer, eu sou a <span className="text-rose-600">Silvana! 🌷</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-600"
          >
            Mais de duas décadas dedicadas ao atendimento de pessoas com
            carinho, respeito e responsabilidade.
          </motion.p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Photo & Badge Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex flex-col items-center"
          >
            <div className="relative w-72 sm:w-80 md:w-96 aspect-square">
              {/* Decorative Circle & Frame */}
              <div className="absolute inset-0 rounded-full border-4 border-dashed border-rose-300 animate-spin-slow"></div>
              <div className="absolute inset-3 rounded-full bg-gradient-to-tr from-rose-200 via-pink-100 to-amber-100 p-2 shadow-2xl">
                <img
                  src={logoImg}
                  alt="Silvana Cavalcante Medeiros"
                  className="w-full h-full object-cover rounded-full shadow-md"
                />
              </div>

              {/* Floating Quote Stamp */}
              <div className="absolute -bottom-4 right-2 sm:right-4 bg-white/95 backdrop-blur-md border border-rose-200 px-4 py-2.5 rounded-2xl shadow-lg flex items-center gap-2">
                <span className="text-xl">🌸</span>
                <div className="text-left">
                  <p className="text-xs font-bold text-slate-800">
                    Silvana Cavalcante Medeiros
                  </p>
                  <p className="text-[10px] text-rose-600 font-medium">
                    Sua Consultora de Confiança
                  </p>
                </div>
              </div>
            </div>

            {/* Signature banner below photo */}
            <div className="mt-8 text-center bg-rose-50/70 border border-rose-200/60 rounded-2xl p-4 w-full max-w-sm">
              <p className="font-serif italic text-sm text-slate-700">
                "Experiência, confiança e carinho em cada atendimento."
              </p>
              <p className="text-xs text-rose-700 font-bold mt-1">
                Silvana Cavalcante Medeiros 💕
              </p>
            </div>
          </motion.div>

          {/* Story & Biography Side */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-7 space-y-5 text-slate-700 text-base leading-relaxed"
          >
            <div className="bg-rose-50/40 rounded-2xl p-6 border-l-4 border-rose-500 shadow-sm">
              <p className="text-slate-800 font-medium leading-relaxed">
                Há mais de <strong>20 anos</strong>, faço das vendas uma forma
                de estar perto das pessoas, conhecer suas histórias e ajudá-las
                a encontrar produtos que combinam com seus momentos,
                necessidades e estilos.
              </p>
            </div>

            <p>
              Ao longo dessa trajetória, trabalhei com grandes marcas e produtos
              que fazem parte do dia a dia de muitas famílias, como{" "}
              <strong>Natura</strong>, <strong>Avon</strong>,{" "}
              <strong>Jequiti</strong> e <strong>Tupperware</strong>.
            </p>

            <p>
              Minha história profissional também foi construída na{" "}
              <strong>área da saúde</strong>, onde atuei como agente técnica de
              saúde por mais de <strong>25 anos</strong>. Essa experiência me
              ensinou valores que levo comigo até hoje:{" "}
              <em>responsabilidade, cuidado, respeito, dedicação</em> e,
              principalmente, a importância de tratar cada pessoa com{" "}
              <strong>atenção e carinho</strong>.
            </p>

            <p>
              Agora, chegando a uma nova fase da minha vida, decidi dedicar
              ainda mais tempo a uma atividade que sempre fez parte da minha
              trajetória e que eu amo:{" "}
              <strong>vender, atender e estar em contato com pessoas</strong>.
            </p>

            <div className="pt-2">
              <p className="font-medium text-slate-800">
                Criei este espaço para tornar minhas vendas ainda mais práticas
                e especiais. Aqui você encontrará produtos de beleza,
                perfumaria, cuidados pessoais e utilidades, sempre escolhidos
                pensando em oferecer qualidade e opções para diferentes gostos.
              </p>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {values.map((val, idx) => {
                const IconComponent = val.icon;
                return (
                  <div
                    key={idx}
                    className={`p-4 rounded-xl border ${val.color} transition-all duration-300 hover:shadow-sm`}
                  >
                    <IconComponent className="w-6 h-6 mb-2" />
                    <h4 className="font-bold text-sm text-slate-800">
                      {val.title}
                    </h4>
                    <p className="text-xs text-slate-600 mt-1">{val.desc}</p>
                  </div>
                );
              })}
            </div>

            {/* Direct WhatsApp Call */}
            {/* <div className="pt-4 flex flex-col sm:flex-row items-center gap-4"> */}
            {/*   <a */}
            {/*     href={whatsappUrl} */}
            {/*     target="_blank" */}
            {/*     rel="noopener noreferrer" */}
            {/*     className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold text-sm bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 shadow-md transition-all hover:scale-[1.02]" */}
            {/*   > */}
            {/*     <MessageCircle className="w-4 h-4" /> */}
            {/*     <span>Conversar com a Silvana no WhatsApp</span> */}
            {/*   </a> */}
            {/**/}
            {/*   <span className="text-xs text-slate-500 font-medium"> */}
            {/*     🌷 Resposta rápida e atendimento atencioso */}
            {/*   </span> */}
            {/* </div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
