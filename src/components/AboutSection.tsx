import React from 'react';
import { CAFE_INFO, IMAGES } from '../data/cafeData';
import { Heart, Coffee, Users, MapPin, Smile } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative bg-[#FAF7F2] py-16 md:py-24 overflow-hidden">
      
      {/* Hand-drawn Star Sparkles Motif */}
      <div className="absolute top-8 left-8 text-[#0F4C81] opacity-20 pointer-events-none">
        <svg className="w-16 h-16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
        </svg>
      </div>
      <div className="absolute bottom-8 right-8 text-[#FF5B00] opacity-20 pointer-events-none">
        <svg className="w-20 h-20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white rounded-3xl p-6 sm:p-10 md:p-12 shadow-xl border-2 border-[#0F4C81]/20 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Mascot Boy Graphic Anchor */}
          <div className="md:col-span-5 flex flex-col items-center justify-center text-center">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-[#FF5B00] to-[#0F4C81] rounded-3xl blur opacity-30 group-hover:opacity-70 transition duration-500" />
              <div className="relative bg-white p-3 rounded-2xl border-4 border-[#0F4C81] shadow-xl overflow-hidden max-w-xs">
                <img 
                  src={IMAGES.mascot} 
                  alt="Eleven97 1197 Mascot Sign" 
                  className="w-full h-auto rounded-xl object-cover transform group-hover:scale-105 transition duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            
            <div className="mt-4 inline-flex items-center gap-2 bg-[#0F4C81] text-white px-4 py-1.5 rounded-full text-xs font-bold font-fredoka shadow">
              <Smile className="w-4 h-4 text-[#FF5B00]" />
              <span>Friendly Baristas & Neighborhood Vibes</span>
            </div>
          </div>

          {/* About Copy */}
          <div className="md:col-span-7 space-y-5 text-center md:text-left">
            <div className="space-y-1">
              <span className="font-fredoka text-sm uppercase font-bold text-[#FF5B00] tracking-widest">
                Established 2023 · Mandaluyong
              </span>
              <h2 className="font-fredoka text-3xl sm:text-4xl font-extrabold text-[#0F4C81] tracking-tight">
                Welcome to <span className="text-[#FF5B00]">Eleven97</span>
              </h2>
              <p className="font-script text-xl text-amber-700">
                Your go-to neighborhood cafe in Plainview
              </p>
            </div>

            <p className="text-slate-600 leading-relaxed text-base">
              At <strong>Eleven97 Neighborhood Cafe</strong> (shorthand "1197"), we believe coffee is more than just caffeine — it's community. Founded in 2023 in Mandaluyong, Philippines, we set out to build a welcoming space that feels warm, playful, and genuinely local.
            </p>

            <p className="text-slate-600 leading-relaxed text-base">
              Whether you're grabbing your daily morning <strong>Americano</strong>, sharing a <strong>Buy 2 Get 1</strong> signature layered sip with friends, or fueling up with our loaded <strong>Heavy Hitter's Mac & Cheese</strong>, we're here to brighten your day.
            </p>

            {/* Three Pillars */}
            <div className="grid grid-cols-3 gap-3 pt-3">
              <div className="bg-[#FAF7F2] p-3 rounded-xl border border-slate-200 text-center">
                <Coffee className="w-6 h-6 text-[#FF5B00] mx-auto mb-1" />
                <h4 className="font-fredoka text-xs sm:text-sm font-bold text-[#0F4C81]">Handcrafted</h4>
                <p className="text-[10px] text-slate-500">Premium Beans & Ube</p>
              </div>
              <div className="bg-[#FAF7F2] p-3 rounded-xl border border-slate-200 text-center">
                <Users className="w-6 h-6 text-[#0F4C81] mx-auto mb-1" />
                <h4 className="font-fredoka text-xs sm:text-sm font-bold text-[#0F4C81]">Community</h4>
                <p className="text-[10px] text-slate-500">Share the Vibe</p>
              </div>
              <div className="bg-[#FAF7F2] p-3 rounded-xl border border-slate-200 text-center">
                <Heart className="w-6 h-6 text-[#FF5B00] mx-auto mb-1" />
                <h4 className="font-fredoka text-xs sm:text-sm font-bold text-[#0F4C81]">Catering</h4>
                <p className="text-[10px] text-slate-500">Coffee Party Carts</p>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-4">
              <a 
                href="#menu" 
                className="font-fredoka font-bold text-sm text-[#0F4C81] hover:text-[#FF5B00] flex items-center gap-1.5 transition-colors"
              >
                <span>Browse Menu Items</span>
                <span>→</span>
              </a>
              <span className="text-slate-300">•</span>
              <a 
                href="#catering" 
                className="font-fredoka font-bold text-sm text-[#FF5B00] hover:text-[#0F4C81] flex items-center gap-1.5 transition-colors"
              >
                <span>Book Event Catering</span>
                <span>→</span>
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Wavy Orange/Blue Color-Block Divider Motif */}
      <div className="mt-16 relative w-full overflow-hidden leading-none">
        <svg 
          className="relative block w-full h-12 md:h-16 text-[#0F4C81]" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path 
            d="M0,0 C150,90 350,-40 500,60 C650,160 900,10 1200,40 L1200,120 L0,120 Z" 
            fill="currentColor"
          />
        </svg>
      </div>

    </section>
  );
};
