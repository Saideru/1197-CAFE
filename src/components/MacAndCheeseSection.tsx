import React, { useState } from 'react';
import { MAC_AND_CHEESE_INFO } from '../data/cafeData';
import { Flame, Check, Sparkles, Utensils, ShoppingBag } from 'lucide-react';

export const MacAndCheeseSection: React.FC = () => {
  const [selectedVariant, setSelectedVariant] = useState(2); // Heavy Hitter default
  const [orderedToast, setOrderedToast] = useState(false);

  const handleOrder = () => {
    setOrderedToast(true);
    setTimeout(() => setOrderedToast(false), 4000);
  };

  return (
    <section id="mac-and-cheese" className="relative bg-[#FFB800] py-16 md:py-24 border-b-4 border-[#0F4C81] overflow-hidden">
      
      {/* Yellow / Orange Swirl Pop-Art Background Motif */}
      <div className="absolute inset-0 bg-[radial-gradient(#FF5B00_2px,transparent_2px)] [background-size:20px_20px] opacity-15 pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Comic Pop-Art Promo Container */}
        <div className="bg-[#FAF7F2] rounded-3xl p-6 sm:p-10 md:p-12 border-4 border-[#0F4C81] shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Image with "NEW" and "₱250" Pop Badges */}
          <div className="lg:col-span-6 relative flex justify-center">
            
            {/* Pop Art Image Wrapper */}
            <div className="relative max-w-md w-full">
              
              {/* Starburst "NEW" Badge */}
              <div className="absolute -top-4 -left-3 z-20 bg-red-600 text-yellow-300 font-righteous text-lg md:text-xl font-extrabold px-4 py-3 rounded-full starburst-badge shadow-xl transform -rotate-12 border-2 border-black animate-bounce">
                NEW!
              </div>

              {/* Starburst Price Tag "250" */}
              <div className="absolute -top-3 -right-3 z-20 bg-yellow-400 text-black font-righteous text-xl md:text-2xl font-extrabold px-5 py-4 rounded-full starburst-badge shadow-xl transform rotate-12 border-2 border-black">
                ₱250
              </div>

              {/* Food Photo Container */}
              <div className="relative rounded-3xl overflow-hidden border-4 border-[#0F4C81] bg-amber-100 shadow-xl group">
                <img
                  src={MAC_AND_CHEESE_INFO.imagePath}
                  alt="Heavy Hitter's Mac & Cheese Bowl"
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-4 text-white text-center">
                  <span className="font-fredoka text-xs text-yellow-300 font-bold uppercase tracking-wider">
                    Freshly Prepared In-Store
                  </span>
                </div>
              </div>

              {/* Bottom Decorative Label */}
              <div className="mt-3 text-center">
                <span className="inline-flex items-center gap-1.5 bg-[#0F4C81] text-white text-xs font-bold font-fredoka px-3.5 py-1 rounded-full shadow">
                  <Flame className="w-3.5 h-3.5 text-yellow-400" />
                  <span>Extra Cheese Sauce & Crispy Chicken Tenders</span>
                </span>
              </div>

            </div>

          </div>

          {/* Right Column: Title, Copy, and Variant Selector */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            
            {/* Header Title styled matching reference */}
            <div className="space-y-1">
              <span className="font-fredoka text-xs uppercase font-extrabold text-[#FF5B00] tracking-widest bg-orange-100 px-3 py-1 rounded-full border border-orange-300">
                HOT FOOD SPOTLIGHT
              </span>
              <h2 className="font-righteous text-3xl sm:text-5xl font-extrabold text-red-600 tracking-tight text-stroke-black drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">
                Heavy Hitter's <br className="hidden sm:inline" />
                <span className="text-amber-500">Mac & Cheese</span>
              </h2>
              <p className="font-script text-xl text-[#0F4C81]">
                "The Ultimate Comfort Bowl in Mandaluyong"
              </p>
            </div>

            {/* Description */}
            <p className="text-slate-700 font-medium text-base sm:text-lg leading-relaxed bg-amber-50 p-4 rounded-2xl border-2 border-amber-200">
              "{MAC_AND_CHEESE_INFO.mainDescription}"
            </p>

            {/* Also Available Variants List */}
            <div className="space-y-3 pt-2">
              <h4 className="font-fredoka font-bold text-sm text-[#0F4C81] uppercase tracking-wider flex items-center justify-center lg:justify-start gap-2">
                <Utensils className="w-4 h-4 text-[#FF5B00]" />
                <span>Choose Your Bowl Variant:</span>
              </h4>

              <div className="space-y-2.5">
                {MAC_AND_CHEESE_INFO.variants.map((variant, idx) => (
                  <div
                    key={variant.name}
                    onClick={() => setSelectedVariant(idx)}
                    className={`p-3.5 rounded-2xl border-2 transition-all cursor-pointer text-left flex items-start gap-3 ${
                      selectedVariant === idx
                        ? 'bg-[#0F4C81] text-white border-[#0F4C81] shadow-md'
                        : 'bg-white text-slate-800 border-slate-200 hover:border-[#FF5B00]'
                    }`}
                  >
                    <div className={`mt-1 w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                      selectedVariant === idx ? 'border-[#FF5B00] bg-[#FF5B00]' : 'border-slate-300'
                    }`}>
                      {selectedVariant === idx && <Check className="w-3 h-3 text-white" />}
                    </div>

                    <div className="flex-1 space-y-0.5">
                      <div className="flex items-center justify-between">
                        <span className={`font-fredoka font-bold text-sm ${selectedVariant === idx ? 'text-yellow-300' : 'text-[#0F4C81]'}`}>
                          {variant.name}
                        </span>
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full font-fredoka ${
                          selectedVariant === idx 
                            ? 'bg-[#FF5B00] text-white' 
                            : 'bg-slate-100 text-slate-600'
                        }`}>
                          {variant.badge}
                        </span>
                      </div>
                      <p className={`text-xs ${selectedVariant === idx ? 'text-blue-100' : 'text-slate-500'}`}>
                        {variant.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Action Buttons */}
            <div className="pt-3 flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={handleOrder}
                className="w-full sm:w-auto flex-1 bg-red-600 hover:bg-red-700 text-white font-righteous text-lg px-6 py-3.5 rounded-2xl shadow-lg border-2 border-black hover:scale-105 transition-all text-center flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-5 h-5 text-yellow-300" />
                <span>Order In-Store (₱250)</span>
              </button>

              <a
                href="#visit-us"
                className="w-full sm:w-auto bg-[#0F4C81] hover:bg-[#003893] text-white font-fredoka font-bold text-sm px-5 py-3.5 rounded-2xl border-2 border-white/20 transition-colors text-center"
              >
                Find Cafe Map
              </a>
            </div>

            {orderedToast && (
              <div className="bg-emerald-600 text-white text-xs font-bold p-3 rounded-xl shadow-md text-center animate-fadeIn">
                ✓ Added to your visit wishlist! Visit 9B Lourdes St. to enjoy hot Heavy Hitter's Mac & Cheese.
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
