import React from 'react';
import { PROMOS, IMAGES } from '../data/cafeData';
import { Sparkles, Calendar, CreditCard, Gift, ShieldAlert, CheckCircle2 } from 'lucide-react';

export const PromosSection: React.FC = () => {
  return (
    <section id="promos" className="relative bg-[#0F4C81] text-white py-16 md:py-24 border-b-4 border-[#FF5B00] overflow-hidden">
      
      {/* Hand-Drawn Stars & Wavy Dividers Motif */}
      <div className="absolute top-10 left-10 text-[#FF5B00] opacity-30 pointer-events-none">
        <svg className="w-20 h-20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
        </svg>
      </div>
      <div className="absolute bottom-10 right-10 text-white opacity-20 pointer-events-none">
        <svg className="w-24 h-24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-[#FF5B00] text-white text-xs font-bold font-fredoka px-3.5 py-1 rounded-full uppercase tracking-wider">
            <Gift className="w-3.5 h-3.5" />
            <span>Exclusive Deals & Perks</span>
          </div>
          <h2 className="font-fredoka text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Cafe Specials & <span className="text-[#FF5B00]">Promos</span>
          </h2>
          <p className="font-script text-2xl text-orange-200">
            "Sip more, save more with your neighbors"
          </p>
        </div>

        {/* 3 Promo Blocks Grid matching exact reference designs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          
          {/* Promo 1: August Promo Tile */}
          <div className="bg-gradient-to-br from-[#FF5B00] to-[#E64A00] text-white rounded-3xl p-6 sm:p-8 border-4 border-white shadow-2xl flex flex-col justify-between relative overflow-hidden group">
            
            {/* Pop Starburst Decorative Accent */}
            <div className="absolute top-3 right-3 bg-white text-[#FF5B00] font-righteous text-xs font-bold px-3 py-1 rounded-full starburst-badge shadow-md">
              SEASONAL
            </div>

            <div className="space-y-4 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
                <Sparkles className="w-6 h-6 text-yellow-200" />
              </div>

              <div>
                <span className="text-xs font-bold font-fredoka text-amber-200 uppercase tracking-widest">
                  Featured Event
                </span>
                <h3 className="font-righteous text-3xl sm:text-4xl text-white tracking-tight mt-0.5">
                  August Promo
                </h3>
                <p className="font-script text-lg text-yellow-100">
                  "Share the Love, Feel the Vibe"
                </p>
              </div>

              <p className="text-xs text-white/90 leading-relaxed bg-black/10 p-3 rounded-xl border border-white/10">
                Exclusive seasonal drink specials and bundle rewards available in-store. Visit Eleven97 this month to explore rotating flavor creations!
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-white/20 relative z-10 space-y-3">
              <div className="flex items-center gap-1.5 text-[11px] text-yellow-100">
                <ShieldAlert className="w-3.5 h-3.5 flex-shrink-0 text-white" />
                <span>Valid for in-store purchases during August.</span>
              </div>
              <a
                href="#visit-us"
                className="block w-full bg-white text-[#FF5B00] hover:bg-yellow-100 font-fredoka font-bold text-xs py-2.5 rounded-xl shadow text-center transition-colors"
              >
                Claim In-Store
              </a>
            </div>

          </div>

          {/* Promo 2: Buy 2 Get 1 Tile */}
          <div className="bg-gradient-to-br from-[#003893] to-[#0F4C81] text-white rounded-3xl p-6 sm:p-8 border-4 border-[#FF5B00] shadow-2xl flex flex-col justify-between relative overflow-hidden group">
            
            <div className="absolute top-3 right-3 bg-[#FF5B00] text-white font-righteous text-xs font-bold px-3 py-1 rounded-full shadow-md">
              MON – WED
            </div>

            <div className="space-y-4 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-[#FF5B00] flex items-center justify-center border border-white/30">
                <Calendar className="w-6 h-6 text-white" />
              </div>

              <div>
                <span className="text-xs font-bold font-fredoka text-[#FF5B00] uppercase tracking-widest bg-white/10 px-2 py-0.5 rounded">
                  Every Mon – Wed
                </span>
                <h3 className="font-righteous text-3xl sm:text-4xl text-white tracking-tight text-stroke-black mt-1">
                  BUY 2 GET 1
                </h3>
                <p className="font-script text-xl text-orange-200">
                  "Share the Vibe"
                </p>
              </div>

              {/* Drinks Graphic Overlay */}
              <div className="bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/20 flex items-center justify-around gap-2">
                <img 
                  src={IMAGES.strawberryCloud} 
                  alt="Strawberry Cloud" 
                  className="w-14 h-14 object-cover rounded-xl border border-white/30"
                  referrerPolicy="no-referrer"
                />
                <img 
                  src={IMAGES.sunnyNana} 
                  alt="Sunny Nana" 
                  className="w-14 h-14 object-cover rounded-xl border border-white/30"
                  referrerPolicy="no-referrer"
                />
                <img 
                  src={IMAGES.ubeMatcha} 
                  alt="Ube Matcha" 
                  className="w-14 h-14 object-cover rounded-xl border border-white/30"
                  referrerPolicy="no-referrer"
                />
              </div>

              <p className="text-xs text-blue-100 leading-relaxed">
                Bring your coffee buddy! Buy any 2 handcrafted beverages every Monday through Wednesday and get 1 free.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-white/20 relative z-10 space-y-3">
              <div className="flex items-center gap-1.5 text-[11px] text-orange-200">
                <ShieldAlert className="w-3.5 h-3.5 flex-shrink-0 text-[#FF5B00]" />
                <span className="italic">Not valid with other promo or discount.</span>
              </div>
              <a
                href="#visit-us"
                className="block w-full bg-[#FF5B00] hover:bg-[#EE5100] text-white font-fredoka font-bold text-xs py-2.5 rounded-xl shadow text-center transition-colors"
              >
                Visit Cafe Mon–Wed
              </a>
            </div>

          </div>

          {/* Promo 3: 5% Cashless Discount Tile */}
          <div className="bg-gradient-to-br from-[#1E3A8A] to-[#0F4C81] text-white rounded-3xl p-6 sm:p-8 border-4 border-white shadow-2xl flex flex-col justify-between relative overflow-hidden group">
            
            <div className="absolute top-3 right-3 bg-emerald-500 text-white font-righteous text-xs font-bold px-3 py-1 rounded-full shadow-md">
              EVERYDAY
            </div>

            <div className="space-y-4 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-emerald-600 flex items-center justify-center border border-white/30">
                <CreditCard className="w-6 h-6 text-white" />
              </div>

              <div>
                <span className="text-xs font-bold font-fredoka text-emerald-300 uppercase tracking-widest">
                  Cashless Perks
                </span>
                <h3 className="font-righteous text-3xl sm:text-4xl text-[#FF5B00] text-stroke-black tracking-tight mt-0.5">
                  5% DISCOUNT
                </h3>
                <p className="font-fredoka text-xs text-blue-100 font-semibold uppercase mt-1">
                  When you pay using QR or Card
                </p>
              </div>

              {/* Payment Logos Box */}
              <div className="bg-white p-3 rounded-2xl text-slate-900 grid grid-cols-2 gap-2 text-center text-xs font-bold border-2 border-[#FF5B00]">
                <div className="p-2 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="text-blue-600 font-extrabold block text-xs">QR PAYMENT</span>
                  <span className="text-[10px] text-slate-500 font-normal">GCash / Maya</span>
                </div>
                <div className="p-2 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="text-blue-900 font-extrabold block text-xs">CARD PAYMENT</span>
                  <span className="text-[10px] text-slate-500 font-normal">Visa / Mastercard</span>
                </div>
              </div>

              <p className="text-xs text-blue-100 leading-relaxed">
                Save 5% instantly on your total receipt whenever you scan a QR code or tap your bank card at the counter!
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-white/20 relative z-10 space-y-3">
              <div className="flex items-center gap-1.5 text-[11px] text-blue-200">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                <span className="font-script text-sm text-yellow-200">"Thank you for supporting your neighborhood cafe."</span>
              </div>
              <a
                href="#visit-us"
                className="block w-full bg-emerald-500 hover:bg-emerald-600 text-white font-fredoka font-bold text-xs py-2.5 rounded-xl shadow text-center transition-colors"
              >
                Pay & Save 5%
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
