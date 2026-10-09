import React from "react";
import {
  Heart,
  MessageCircle,
  ShoppingBag,
  ShieldCheck,
  Sparkles,
  MapPin,
  Phone,
  Clock,
} from "lucide-react";
import { FloralBranch } from "./FloralDecorations";
import logoImg from "../data/brandAssets";
import lgaLogo from "../../assets/lgafortech-logo.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const whatsappUrl = "https://wa.me/5534997827143";

  return (
    <footer className="bg-gradient-to-b from-cream-50 via-rose-50/50 to-rose-100/60 pt-16 pb-12 border-t border-rose-200/80 relative overflow-hidden">
      <FloralBranch className="absolute bottom-4 right-6 w-32 h-32 text-rose-200/40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-rose-200/70">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={logoImg}
                alt="Silvana Cavalcante Medeiros"
                className="w-12 h-12 rounded-full object-cover border-2 border-rose-300 shadow-sm"
              />
              <div>
                <h3 className="font-serif text-xl font-bold text-slate-800">
                  Silvana Cavalcante Medeiros
                </h3>
                <p className="text-xs text-rose-700 font-semibold">
                  Consultora de Beleza Multimarcas
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed max-w-sm">
              Mais de 20 anos conectando você aos melhores produtos Natura, Avon
              e Jequiti com carinho, dedicação e confiança comprovada.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-600 text-white text-xs font-semibold hover:bg-emerald-700 transition-colors shadow-sm"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>(34) 99782-7143</span>
              </a>

              <a
                href="https://www.minhaloja.natura.com/consultoria/silvanacavalcantemedeiros"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-orange-100 text-orange-800 hover:bg-orange-200 text-xs font-semibold transition-colors border border-orange-200"
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>Loja Natura</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif text-base font-bold text-slate-800 tracking-wide">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
              <li>
                <a
                  href="#inicio"
                  className="hover:text-rose-600 transition-colors"
                >
                  Início
                </a>
              </li>
              <li>
                <a
                  href="#sobre"
                  className="hover:text-rose-600 transition-colors"
                >
                  Sobre a Silvana
                </a>
              </li>
              <li>
                <a
                  href="#marcas"
                  className="hover:text-rose-600 transition-colors"
                >
                  Marcas Parceiras
                </a>
              </li>
              <li>
                <a
                  href="#destaques"
                  className="hover:text-rose-600 transition-colors"
                >
                  Pronta-Entrega
                </a>
              </li>
              <li>
                <a
                  href="#revistas"
                  className="hover:text-rose-600 transition-colors"
                >
                  Revistas Digitais
                </a>
              </li>
              <li>
                <a
                  href="#beneficios"
                  className="hover:text-rose-600 transition-colors"
                >
                  Diferenciais
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="hover:text-rose-600 transition-colors"
                >
                  Dúvidas Frequentes
                </a>
              </li>
            </ul>
          </div>

          {/* Brands Links */}

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-base font-bold text-slate-800 tracking-wide">
              Atendimento Direto
            </h4>
            <div className="space-y-2.5 text-xs text-slate-600">
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <span>WhatsApp: (34) 99782-7143</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <span>Atendimento On-line para todo Brasil</span>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <span>Segunda a Sábado com resposta rápida</span>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer & Client Tribute */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left text-xs text-slate-500">
          <p className="max-w-xl leading-relaxed">
            * Silvana Cavalcante Medeiros é consultora e revendedora
            independente autorizada. As marcas Natura, Avon e Jequiti são
            propriedades registradas de suas respectivas companhias.
          </p>

          <p className="flex items-center justify-center gap-1 text-slate-600 font-medium shrink-0">
            <span>Criado com carinho</span>
            <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
            <span>para Silvana Cavalcante Medeiros</span>
          </p>
        </div>

        {/* Developer Attribution & LGAFORTECH Logo Link */}
        <div className="mt-8 pt-6 border-t border-rose-200/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <p className="text-center sm:text-left font-medium">
            Desenvolvido por{" "}
            <a
              href="https://lgafortech.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-slate-800 hover:text-sky-600 transition-colors"
            >
              LGAFORTECH
            </a>{" "}
            {currentYear} aos direitos reservados
          </p>

          <a
            href="https://lgafortech.com.br"
            target="_blank"
            rel="noopener noreferrer"
            title="LGAFORTECH - Desenvolvimento Web e Soluções Digitais"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/90 hover:bg-white border border-rose-200/80 hover:border-sky-400 shadow-2xs hover:shadow-xs transition-all duration-300 group"
          >
            <img
              src={lgaLogo}
              alt="LGAFORTECH"
              className="h-7 w-auto object-contain group-hover:scale-105 transition-transform"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
