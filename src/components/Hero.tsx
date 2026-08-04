import React from 'react';
import { CAFE_INFO, IMAGES, SIGNATURE_DRINKS } from '../data/cafeData';
import { MapPin, Coffee, Sparkles, ChevronDown, ArrowRight, Heart } from 'lucide-react';

interface HeroProps {
  onOpenCatering: () => void;
  onSelectDrink: (drinkId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCatering, onSelectDrink }) => {
  return (
    <section id="hero" className="relative bg-[#0F4C81] text-white overflow-hidden pt-8 pb-16 md:pt-12 md:pb-24 border-b-4 border-[#FF5B00]">
      {/* Background Graphic Accents */}
      <div className="absolute inset-0 bg-[radial-gradient(#FF5B00_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />
      <div className="absolute top-10 left-5 w-32 h-32 bg-[#FF5B00]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-5 w-48 h-48 bg-[#003893]/40 rounded-full blur-3xl pointer-events-none" />

      {/* Retro Star Sparkles */}
      <div className="absolute top-12 left-10 text-[#FF5B00] opacity-80 animate-bounce hidden sm:block">
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
        </svg>
      </div>
      <div className="absolute bottom-16 right-12 text-[#FF5B00] opacity-70 hidden md:block">
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Hero Left Column Text & CTAs */}
          <div className="lg:col-span-6 text-center lg:text-left space-y-6">
            
            {/* Badge EST. 2023 */}
            <div className="inline-flex items-center gap-2 bg-[#003893] border border-[#FF5B00] px-3.5 py-1.5 rounded-full shadow-inner">
              <span className="w-2 h-2 rounded-full bg-[#FF5B00] animate-ping" />
              <span className="font-fredoka text-xs md:text-sm font-semibold tracking-wide text-blue-100">
                Mandaluyong, Philippines · {CAFE_INFO.established}
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="font-fredoka text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Your <span className="text-[#FF5B00] underline decoration-[#003893] underline-offset-4">Neighborhood</span> Cafe
              </h1>
              <p className="font-script text-2xl sm:text-3xl text-orange-200">
                "Share the Vibe, Sip the Good Stuff"
              </p>
            </div>

            {/* Subheadline description */}
            <p className="text-base sm:text-lg text-blue-100 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Welcome to <strong>Eleven97</strong> (1197), your cozy corner cafe located in Brgy. Plainview, Mandaluyong. Crafting handcrafted espresso, layered signature sips, signature mac & cheese, and mobile coffee party catering!
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#menu"
                className="bg-[#FF5B00] hover:bg-[#EE5100] text-white font-fredoka font-bold text-base px-6 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 flex items-center gap-2 group border-2 border-white/20"
              >
                <Coffee className="w-5 h-5" />
                <span>View Full Menu</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#visit-us"
                className="bg-white/10 hover:bg-white/20 text-white font-fredoka font-semibold text-base px-5 py-3.5 rounded-full border-2 border-white/30 backdrop-blur-sm transition-all flex items-center gap-2"
              >
                <MapPin className="w-5 h-5 text-[#FF5B00]" />
                <span>Get Directions</span>
              </a>

              <button
                onClick={onOpenCatering}
                className="bg-[#003893] hover:bg-[#002868] text-white font-fredoka font-bold text-base px-5 py-3.5 rounded-full border border-[#FF5B00] shadow transition-all flex items-center gap-2"
              >
                <Sparkles className="w-5 h-5 text-[#FF5B00]" />
                <span>Catering Packages</span>
              </button>
            </div>

            {/* Quick Highlights Row */}
            <div className="pt-4 grid grid-cols-3 gap-3 text-center lg:text-left border-t border-blue-800/80 max-w-md mx-auto lg:mx-0">
              <div className="bg-white/5 p-2.5 rounded-xl border border-white/10">
                <div className="font-fredoka text-lg font-bold text-[#FF5B00]">Buy 2 Get 1</div>
                <div className="text-[11px] text-blue-200">Mon – Wed Promo</div>
              </div>
              <div className="bg-white/5 p-2.5 rounded-xl border border-white/10">
                <div className="font-fredoka text-lg font-bold text-white">5% OFF</div>
                <div className="text-[11px] text-blue-200">QR & Card Payment</div>
              </div>
              <div className="bg-white/5 p-2.5 rounded-xl border border-white/10">
                <div className="font-fredoka text-lg font-bold text-[#FF5B00]">50–100 PAX</div>
                <div className="text-[11px] text-blue-200">Coffee Party Cart</div>
              </div>
            </div>

          </div>

          {/* Hero Right Column - Signature Drinks Showcase Collage */}
          <div className="lg:col-span-6 relative">
            
            {/* Main Oval Brand Logo Backdrop */}
            <div className="relative mx-auto max-w-lg">
              <div className="bg-[#003893]/60 p-4 sm:p-6 rounded-3xl border-4 border-[#FF5B00] shadow-2xl backdrop-blur-md">
                
                {/* Header Logo Mark inside Hero */}
                <div className="flex justify-center mb-4">
                  <div className="p-1.5 bg-black rounded-3xl border-3 border-[#FF5B00] shadow-2xl overflow-hidden max-w-xs">
                    <img 
                      src={IMAGES.logoOval} 
                      alt="Eleven97 Official Oval Logo" 
                      className="h-32 sm:h-40 object-cover scale-125 rounded-2xl transform"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>

                {/* Grid of 5 Signature Drink Previews */}
                <div className="text-center mb-3">
                  <span className="font-fredoka text-xs uppercase tracking-widest text-[#FF5B00] font-bold">
                    Featured Signature Drinks
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {SIGNATURE_DRINKS.map((drink) => (
                    <button
                      key={drink.id}
                      onClick={() => onSelectDrink(drink.id)}
                      className="group relative bg-slate-900 rounded-xl overflow-hidden border border-white/20 text-left hover:border-[#FF5B00] transition-all transform hover:scale-105 shadow-md focus:outline-none"
                    >
                      <div className="aspect-square relative overflow-hidden">
                        <img
                          src={drink.imagePath}
                          alt={drink.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        
                        <span className="absolute top-1.5 right-1.5 bg-[#FF5B00] text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full">
                          TRY ME
                        </span>

                        <div className="absolute bottom-2 left-2 right-2">
                          <h4 className="font-script text-xs sm:text-sm text-amber-200 truncate group-hover:text-white transition-colors">
                            {drink.scriptTitle}
                          </h4>
                          <p className="text-[9px] text-blue-100 line-clamp-1">
                            {drink.tagline}
                          </p>
                        </div>
                      </div>
                    </button>
                  ))}
                  
                  {/* Heavy Hitter Mac & Cheese Card Mini */}
                  <a
                    href="#mac-and-cheese"
                    className="group relative bg-amber-900 rounded-xl overflow-hidden border border-[#FF5B00] text-left hover:border-white transition-all transform hover:scale-105 shadow-md"
                  >
                    <div className="aspect-square relative overflow-hidden">
                      <img
                        src={IMAGES.macAndCheese}
                        alt="Heavy Hitter's Mac & Cheese"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                      <span className="absolute top-1.5 right-1.5 bg-yellow-400 text-black text-[9px] font-extrabold px-1.5 py-0.5 rounded-full starburst-badge">
                        ₱250
                      </span>
                      <div className="absolute bottom-2 left-2 right-2">
                        <h4 className="font-fredoka text-xs text-yellow-300 font-bold truncate">
                          Mac & Cheese
                        </h4>
                        <p className="text-[9px] text-yellow-100">Heavy Hitter's</p>
                      </div>
                    </div>
                  </a>
                </div>

                <div className="mt-4 text-center">
                  <p className="text-xs text-blue-200 italic">
                    Tap any signature sip to view ingredients & flavor profile!
                  </p>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Ticker Banner directly under hero */}
      <div className="mt-10 bg-[#FF5B00] text-white py-3 border-y border-orange-400 font-fredoka font-bold text-sm tracking-wide overflow-hidden">
        <div className="animate-marquee whitespace-nowrap flex gap-8 items-center">
          <span>☕ BUY 2 GET 1 EVERY MON–WED</span>
          <span>✦</span>
          <span>💳 5% OFF ON QR & CARD PAYMENTS</span>
          <span>✦</span>
          <span>📍 9B LOURDES ST., PLAINVIEW, MANDALUYONG</span>
          <span>✦</span>
          <span>🎉 COFFEE PARTY CATERING AVAILABLE (50-100 PAX)</span>
          <span>✦</span>
          <span>🧀 HEAVY HITTER'S MAC & CHEESE ₱250</span>
          <span>✦</span>
          <span>☕ BUY 2 GET 1 EVERY MON–WED</span>
          <span>✦</span>
          <span>💳 5% OFF ON QR & CARD PAYMENTS</span>
          <span>✦</span>
          <span>📍 9B LOURDES ST., PLAINVIEW, MANDALUYONG</span>
          <span>✦</span>
          <span>🎉 COFFEE PARTY CATERING AVAILABLE (50-100 PAX)</span>
        </div>
      </div>
    </section>
  );
};
