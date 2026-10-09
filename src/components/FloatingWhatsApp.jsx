import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Sparkles, Heart } from 'lucide-react';
import logoImg from '../data/brandAssets';

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = "5534997827143";

  const quickMessages = [
    {
      title: '🛍️ Quero produtos de pronta-entrega',
      message: 'Olá Silvana! Gostaria de saber quais produtos você tem disponíveis para pronta-entrega no momento.'
    },
    {
      title: '📖 Quero a revista digital do ciclo',
      message: 'Olá Silvana! Gostaria de receber os catálogos digitais da Natura, Avon ou Jequiti.'
    },
    {
      title: '🎁 Quero indicação de kit para presente',
      message: 'Olá Silvana! Preciso de sugestões de presentes com embalagem caprichada. Pode me ajudar?'
    },
    {
      title: '💬 Tirar uma dúvida geral',
      message: 'Olá Silvana! Vi seu site e gostaria de conversar com você sobre os produtos.'
    }
  ];

  const handleSendMessage = (text) => {
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/${phoneNumber}?text=${encoded}`, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end">
      
      {/* Quick Chat Popover Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 20 }}
            transition={{ duration: 0.25, type: 'spring', bounce: 0.2 }}
            className="mb-3 w-[calc(100vw-2.5rem)] sm:w-84 max-w-sm bg-white rounded-3xl shadow-2xl border border-rose-200 overflow-hidden"
          >
            {/* Popover Header */}
            <div className="bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 p-4 text-white flex items-center justify-between relative">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <img
                    src={logoImg}
                    alt="Silvana Cavalcante"
                    className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm"
                  />
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-300 border-2 border-emerald-700 rounded-full animate-pulse"></span>
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm leading-tight">Silvana Cavalcante</h4>
                  <p className="text-[11px] text-emerald-100 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-300"></span>
                    Online para te atender
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Fechar popover"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Popover Body */}
            <div className="p-4 bg-gradient-to-b from-emerald-50/40 via-white to-rose-50/30">
              <div className="bg-white p-3 rounded-2xl border border-emerald-100 shadow-sm mb-3">
                <p className="text-xs text-slate-700 leading-relaxed">
                  Olá, seja muito bem-vinda(o)! 🌷 Como posso te ajudar hoje? Selecione um assunto abaixo ou mande sua mensagem:
                </p>
              </div>

              {/* Quick Choice Buttons */}
              <div className="space-y-2 mb-3">
                {quickMessages.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSendMessage(item.message)}
                    className="w-full text-left text-xs font-medium text-slate-700 bg-white hover:bg-emerald-50 hover:text-emerald-800 p-2.5 rounded-xl border border-slate-200/80 hover:border-emerald-300 transition-all flex items-center justify-between group cursor-pointer"
                  >
                    <span>{item.title}</span>
                    <Send className="w-3 h-3 text-slate-400 group-hover:text-emerald-600 transition-colors shrink-0" />
                  </button>
                ))}
              </div>

              {/* Direct Open WhatsApp Button */}
              <button
                onClick={() => handleSendMessage('Olá Silvana! Gostaria de conversar com você.')}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 shadow-md transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Abrir Conversa no WhatsApp</span>
              </button>

              <p className="text-[10px] text-center text-slate-400 mt-2 font-medium">
                WhatsApp: (34) 99782-7143
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Main Button Trigger */}
      <div className="relative group">
        
        {/* Pulsing Aura Rings */}
        <span className="absolute -inset-1 rounded-full bg-emerald-400 opacity-60 blur-sm group-hover:opacity-100 animate-ping"></span>
        <span className="absolute -inset-2 rounded-full bg-rose-400/30 blur-md pointer-events-none"></span>

        {/* The Action Button */}
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Contato WhatsApp 34997827143"
          className="relative flex items-center gap-2.5 bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-600 text-white px-4 sm:px-5 py-3.5 sm:py-4 rounded-full shadow-2xl border-2 border-white cursor-pointer"
        >
          {/* Animated WhatsApp Icon */}
          <div className="relative">
            <MessageCircle className="w-6 h-6 fill-white text-emerald-600" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-rose-400 border-2 border-white rounded-full"></span>
          </div>

          <div className="hidden sm:flex flex-col text-left">
            <span className="text-xs font-bold leading-tight tracking-wide">Falar no WhatsApp</span>
            <span className="text-[10px] text-emerald-100 font-medium leading-tight">34 99782-7143</span>
          </div>
        </motion.button>
      </div>

    </div>
  );
}
