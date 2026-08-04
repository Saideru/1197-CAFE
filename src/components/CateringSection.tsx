import React from 'react';
import { CATERING_PACKAGES, CATERING_TERMS, CAFE_INFO } from '../data/cafeData';
import { Sparkles, Check, Calendar, Users, Clock, Coffee, Send, FileText, AlertCircle, MessageCircle } from 'lucide-react';

interface CateringSectionProps {
  onOpenBookingModal: (packageType?: '50pax' | '100pax') => void;
}

export const CateringSection: React.FC<CateringSectionProps> = ({ onOpenBookingModal }) => {
  return (
    <section id="catering" className="relative bg-[#FAF7F2] py-16 md:py-24 border-b-4 border-[#0F4C81] overflow-hidden">
      
      {/* Decorative Starbursts & Coffee Cart Pattern */}
      <div className="absolute top-10 right-10 text-[#FF5B00] opacity-15 pointer-events-none">
        <svg className="w-32 h-32" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header matching exact prompt title */}
        <div className="text-center space-y-3 max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-[#0F4C81] text-white text-xs font-bold font-fredoka px-4 py-1.5 rounded-full uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-[#FF5B00]" />
            <span>Mobile Bar & Catering Carts</span>
          </div>
          <h2 className="font-righteous text-4xl sm:text-6xl text-[#0F4C81] tracking-tight">
            Coffee Party
          </h2>
          <div className="font-fredoka text-xl font-extrabold text-[#FF5B00] uppercase tracking-widest">
            — OUR PACKAGES —
          </div>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            Bring the Eleven97 espresso bar experience to your weddings, corporate events, birthdays, and private gatherings!
          </p>
        </div>

        {/* Catering Package Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-14 max-w-5xl mx-auto">
          {CATERING_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={`bg-white rounded-3xl p-6 sm:p-8 shadow-xl border-4 flex flex-col justify-between transition-all transform hover:-translate-y-1 ${
                pkg.pax === 100 
                  ? 'border-[#FF5B00] relative bg-gradient-to-b from-white to-orange-50/50' 
                  : 'border-[#0F4C81]'
              }`}
            >
              {pkg.pax === 100 && (
                <div className="absolute -top-4 right-8 bg-[#FF5B00] text-white font-fredoka text-xs font-bold px-4 py-1.5 rounded-full shadow border-2 border-white animate-pulse">
                  MOST POPULAR FOR EVENTS
                </div>
              )}

              <div className="space-y-6">
                
                {/* Package Header */}
                <div className="flex items-center justify-between border-b-2 border-slate-100 pb-4">
                  <div>
                    <span className="font-fredoka text-xs font-bold text-[#FF5B00] uppercase tracking-wider">
                      CATERING OPTION
                    </span>
                    <h3 className="font-righteous text-3xl sm:text-4xl text-[#0F4C81]">
                      {pkg.pax} PAX
                    </h3>
                  </div>
                  <div className="text-right">
                    <span className="font-righteous text-3xl sm:text-4xl text-[#FF5B00]">
                      ₱{pkg.price.toLocaleString()}
                    </span>
                    <span className="block text-[10px] text-slate-400 font-medium">All-inclusive mobile setup</span>
                  </div>
                </div>

                {/* Inclusions List */}
                <div className="space-y-3">
                  <h4 className="font-fredoka text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Coffee className="w-3.5 h-3.5 text-[#FF5B00]" />
                    <span>Package Inclusions:</span>
                  </h4>
                  <ul className="space-y-2.5">
                    {pkg.inclusions.map((inclusion, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                        <div className="mt-0.5 w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 font-bold text-[10px]">
                          ✓
                        </div>
                        <span className="font-medium">{inclusion}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Action Button */}
              <div className="pt-8 mt-6 border-t border-slate-100">
                <button
                  onClick={() => onOpenBookingModal(pkg.pax === 50 ? '50pax' : '100pax')}
                  className={`w-full font-fredoka font-bold text-sm py-3.5 rounded-2xl shadow-lg transition-all flex items-center justify-center gap-2 ${
                    pkg.pax === 100
                      ? 'bg-[#FF5B00] hover:bg-[#EE5100] text-white border-2 border-white/20 hover:scale-102'
                      : 'bg-[#0F4C81] hover:bg-[#003893] text-white'
                  }`}
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book {pkg.pax} PAX Coffee Party</span>
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Terms & Conditions Box matching exact prompt copy */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-8 border-2 border-[#0F4C81]/30 shadow-md space-y-4">
          <div className="flex items-center gap-2 text-[#0F4C81] font-righteous text-xl border-b border-slate-200 pb-3">
            <FileText className="w-5 h-5 text-[#FF5B00]" />
            <h3>Terms & Conditions</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {CATERING_TERMS.map((term, i) => (
              <div key={i} className="bg-[#FAF7F2] p-4 rounded-2xl border border-slate-200 space-y-1">
                <div className="flex items-center gap-2 text-[#FF5B00] font-fredoka text-xs font-bold">
                  <AlertCircle className="w-4 h-4" />
                  <span>Term #{i + 1}</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  {term}
                </p>
              </div>
            ))}
          </div>

          <div className="pt-2 text-center text-xs text-slate-600 font-medium flex flex-col sm:flex-row items-center justify-center gap-3">
            <span>Questions regarding event locations or custom drink selections?</span>
            <a 
              href={CAFE_INFO.messengerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-[#0084FF] hover:bg-[#0073E6] text-white font-fredoka font-bold text-xs px-3 py-1.5 rounded-xl shadow transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Inquire via Messenger (ID: 293478050507482)</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
