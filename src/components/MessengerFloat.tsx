import React, { useState } from 'react';
import { CAFE_INFO } from '../data/cafeData';
import { MessageCircle, ExternalLink, X, Check, Copy, Sparkles } from 'lucide-react';

export const MessengerFloat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const defaultMsg = "Hi Eleven97 Cafe! I'd like to inquire about your coffee drinks / catering services.";

  const handleOpenMessenger = () => {
    // Open Messenger URL (m.me works on both Mobile App & Desktop Browser)
    window.open(CAFE_INFO.messengerUrl, '_blank', 'noopener,noreferrer');
  };

  const handleCopyAndOpen = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(defaultMsg);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
    handleOpenMessenger();
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 font-sans">
      {/* Quick Popup Box when toggled */}
      {isOpen && (
        <div className="bg-white text-slate-800 rounded-3xl p-5 shadow-2xl border-2 border-[#0084FF] w-72 sm:w-80 animate-fadeIn relative mb-2">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-3 right-3 text-slate-400 hover:text-slate-600 p-1 rounded-full hover:bg-slate-100 transition-colors"
            aria-label="Close message preview"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#0084FF] via-[#0099FF] to-[#A833E6] flex items-center justify-center text-white shadow-md">
              <MessageCircle className="w-6 h-6 fill-current" />
            </div>
            <div>
              <h4 className="font-fredoka font-bold text-sm text-[#0F4C81]">
                Eleven97 Cafe Messenger
              </h4>
              <p className="text-[11px] text-emerald-600 font-semibold flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Active now · ID: 293478050507482
              </p>
            </div>
          </div>

          <p className="text-xs text-slate-600 mb-4 leading-relaxed bg-slate-50 p-3 rounded-2xl border border-slate-100">
            Have a question about our menu or want to book a <strong>Coffee Party Catering Cart</strong>? Chat directly with us on Facebook Messenger!
          </p>

          <div className="space-y-2">
            <button
              onClick={handleOpenMessenger}
              className="w-full bg-gradient-to-r from-[#0084FF] to-[#00C6FF] hover:from-[#0073E6] hover:to-[#00B4EE] text-white font-fredoka font-bold text-xs py-3 px-4 rounded-xl shadow-md flex items-center justify-center gap-2 transition-all transform active:scale-95"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Chat on Messenger</span>
              <ExternalLink className="w-3.5 h-3.5 ml-auto opacity-80" />
            </button>

            <button
              onClick={handleCopyAndOpen}
              className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-fredoka font-semibold text-[11px] py-2 px-3 rounded-xl flex items-center justify-center gap-1.5 transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-slate-500" />}
              <span>{copied ? 'Greeting Copied & Opening!' : 'Copy Inquiry & Launch Chat'}</span>
            </button>
          </div>

          <div className="text-[10px] text-slate-400 text-center mt-3">
            Direct Link: <span className="font-mono text-[#0084FF]">m.me/293478050507482</span>
          </div>
        </div>
      )}

      {/* Main Trigger Button */}
      <div className="flex items-center gap-2">
        {/* Tooltip badge for Desktop */}
        {!isOpen && (
          <span className="hidden sm:inline-flex items-center gap-1.5 bg-[#0F4C81] text-white text-xs font-fredoka font-bold px-3 py-1.5 rounded-full shadow-lg border border-white/20 animate-bounce">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            Inquire on Messenger!
          </span>
        )}

        <button
          onClick={() => {
            if (isOpen) {
              handleOpenMessenger();
            } else {
              setIsOpen(true);
            }
          }}
          className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#0084FF] via-[#0099FF] to-[#A833E6] text-white flex items-center justify-center shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all border-2 border-white relative group"
          aria-label="Open Facebook Messenger inquiry"
        >
          <MessageCircle className="w-7 h-7 fill-current transform group-hover:rotate-12 transition-transform" />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full"></span>
        </button>
      </div>
    </div>
  );
};
