import React from 'react';
import { SIGNATURE_DRINKS, IMAGES } from '../data/cafeData';
import { SignatureDrink } from '../types';
import { Sparkles, Eye, Coffee, Heart, CheckCircle } from 'lucide-react';

interface SignatureDrinksSectionProps {
  onSelectDrink: (drinkId: string) => void;
  onOpenCatering: () => void;
}

export const SignatureDrinksSection: React.FC<SignatureDrinksSectionProps> = ({ onSelectDrink, onOpenCatering }) => {
  return (
    <section id="signature-drinks" className="relative bg-[#FAF7F2] py-16 md:py-24 overflow-hidden">
      
      {/* Decorative Sparkles & Star Accents */}
      <div className="absolute top-10 right-10 text-[#FF5B00] opacity-20 pointer-events-none">
        <svg className="w-24 h-24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
        </svg>
      </div>
      <div className="absolute bottom-10 left-10 text-[#0F4C81] opacity-20 pointer-events-none">
        <svg className="w-28 h-28" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-[#0F4C81] text-white text-xs font-bold font-fredoka px-3.5 py-1 rounded-full uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#FF5B00]" />
            <span>Featured Spotlight</span>
          </div>
          <h2 className="font-fredoka text-3xl sm:text-5xl font-extrabold text-[#0F4C81] tracking-tight">
            Our 5 <span className="text-[#FF5B00]">Signature Drinks</span>
          </h2>
          <p className="font-script text-2xl text-amber-700">
            "Artisan flavor pairings you can't get anywhere else"
          </p>
          <p className="text-sm text-slate-600">
            Designed with top & bottom ingredient textures, a central hero photo, playful script typography, and the Eleven97 seal.
          </p>
        </div>

        {/* 5 Spotlight Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {SIGNATURE_DRINKS.map((drink, idx) => (
            <div
              key={drink.id}
              className={`group bg-white rounded-3xl overflow-hidden border-4 border-[#0F4C81] shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col transform hover:-translate-y-1 ${
                idx === 0 ? 'lg:col-span-1' : ''
              }`}
            >
              
              {/* Split Photo Presentation Card (Top Macro / Center Hero / Bottom Macro & Logo) */}
              <div 
                onClick={() => onSelectDrink(drink.id)}
                className="relative cursor-pointer overflow-hidden bg-slate-900 aspect-[4/5] flex flex-col justify-between"
              >
                {/* Full-bleed drink photo with textures baked in */}
                <img
                  src={drink.imagePath}
                  alt={`${drink.name} - Eleven97 Signature Drink`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />

                {/* Badge Overlay */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                  <span className="bg-[#FF5B00] text-white font-fredoka text-xs font-bold px-3 py-1 rounded-full shadow border border-white/20">
                    SIGNATURE #{idx + 1}
                  </span>
                  <span className="bg-[#0F4C81]/80 backdrop-blur-md text-white font-fredoka text-[11px] px-2.5 py-0.5 rounded-full border border-white/20">
                    Est. 2023
                  </span>
                </div>

                {/* Hover Quick View Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                  <div className="bg-[#FF5B00] text-white font-fredoka font-bold text-sm px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
                    <Eye className="w-4 h-4" />
                    <span>View Ingredients</span>
                  </div>
                </div>
              </div>

              {/* Card Bottom Details & Actions */}
              <div className="p-6 bg-white flex-1 flex flex-col justify-between border-t-2 border-slate-100">
                <div className="space-y-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-script text-2xl text-[#0F4C81] leading-tight">
                        {drink.scriptTitle}
                      </h3>
                      <p className="font-fredoka text-xs font-bold text-[#FF5B00] tracking-wide uppercase mt-0.5">
                        {drink.tagline}
                      </p>
                    </div>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FF5B00] mt-2 animate-ping" />
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {drink.description}
                  </p>

                  {/* Key Ingredients List */}
                  <div className="pt-2 border-t border-slate-100">
                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                      Ingredients:
                    </span>
                    <div className="flex flex-wrap gap-1.5 mt-1">
                      {drink.ingredients.map((ing, i) => (
                        <span 
                          key={i} 
                          className="bg-[#FAF7F2] text-slate-700 text-[11px] font-medium px-2 py-0.5 rounded-md border border-slate-200 flex items-center gap-1"
                        >
                          <CheckCircle className="w-3 h-3 text-[#FF5B00]" />
                          {ing}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="pt-5 mt-4 border-t border-slate-100 flex items-center gap-2">
                  <button
                    onClick={() => onSelectDrink(drink.id)}
                    className="flex-1 bg-[#0F4C81] hover:bg-[#003893] text-white font-fredoka font-bold text-xs py-2.5 px-3 rounded-xl shadow transition-colors text-center flex items-center justify-center gap-1.5"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Details</span>
                  </button>

                  <a
                    href="#visit-us"
                    className="bg-[#FF5B00] hover:bg-[#EE5100] text-white font-fredoka font-bold text-xs py-2.5 px-3 rounded-xl shadow transition-colors text-center"
                  >
                    Order In-Store
                  </a>
                </div>

              </div>

            </div>
          ))}
        </div>

        {/* Catering Callout Strip */}
        <div className="mt-14 bg-gradient-to-r from-[#0F4C81] to-[#003893] text-white rounded-3xl p-6 sm:p-8 border-4 border-[#FF5B00] shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="font-fredoka text-2xl font-bold text-white">
              Want these Signature Drinks served live at your event?
            </h4>
            <p className="text-sm text-blue-100">
              Our <strong>Coffee Party Mobile Cart</strong> brings baristas, espresso machines, and custom drink menus right to your celebration!
            </p>
          </div>

          <button
            onClick={onOpenCatering}
            className="whitespace-nowrap bg-[#FF5B00] hover:bg-[#EE5100] text-white font-fredoka font-bold text-sm px-6 py-3 rounded-full shadow-lg border-2 border-white/20 hover:scale-105 transition-all"
          >
            Explore Coffee Party Packages
          </button>
        </div>

      </div>
    </section>
  );
};
