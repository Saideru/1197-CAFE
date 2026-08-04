import React from 'react';
import { CAFE_INFO, IMAGES } from '../data/cafeData';
import { ArrowUp, Heart, MapPin, Mail, Coffee } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-white pt-16 pb-12 border-t-8 border-[#FF5B00] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800 items-start">
          
          {/* Brand & Mascot Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-1 bg-black rounded-2xl border-2 border-[#FF5B00] shadow-md overflow-hidden">
                <img 
                  src={IMAGES.logoOval} 
                  alt="Eleven97 Official Oval Logo" 
                  className="h-20 sm:h-24 w-auto object-cover scale-125 rounded-xl"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h3 className="font-fredoka text-2xl font-bold text-[#FF5B00]">
                  Eleven97
                </h3>
                <span className="font-script text-sm text-blue-200 block">
                  Neighborhood Cafe
                </span>
                <span className="text-[10px] text-slate-400 font-mono">
                  {CAFE_INFO.established} · Mandaluyong
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Your favorite cozy neighborhood coffee shop in Mandaluyong, Philippines. Crafting artisanal espresso, signature layered drinks, and Heavy Hitter's Mac & Cheese.
            </p>

            {/* Mascot Sign Thumbnail */}
            <div className="flex items-center gap-3 pt-2">
              <div className="w-10 h-10 rounded-full bg-white p-0.5 border border-[#FF5B00] overflow-hidden">
                <img 
                  src={IMAGES.mascot} 
                  alt="1197 Mascot" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="text-xs font-fredoka text-slate-300 font-semibold">
                Shorthand Mark: "1197"
              </span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-fredoka text-sm font-bold text-[#FF5B00] uppercase tracking-wider">
              Explore Site
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li><a href="#hero" className="hover:text-[#FF5B00] transition-colors">Home & Intro</a></li>
              <li><a href="#about" className="hover:text-[#FF5B00] transition-colors">About 1197 Cafe</a></li>
              <li><a href="#menu" className="hover:text-[#FF5B00] transition-colors">Full Beverage Menu</a></li>
              <li><a href="#signature-drinks" className="hover:text-[#FF5B00] transition-colors">5 Signature Drinks</a></li>
              <li><a href="#mac-and-cheese" className="hover:text-[#FF5B00] transition-colors">Heavy Hitter's Mac & Cheese</a></li>
              <li><a href="#promos" className="hover:text-[#FF5B00] transition-colors">Buy 2 Get 1 & 5% Promos</a></li>
              <li><a href="#catering" className="hover:text-[#FF5B00] transition-colors">Coffee Party Catering</a></li>
              <li><a href="#visit-us" className="hover:text-[#FF5B00] transition-colors">Location & Map</a></li>
            </ul>
          </div>

          {/* Contact Summary */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-fredoka text-sm font-bold text-[#FF5B00] uppercase tracking-wider">
              Cafe Location
            </h4>
            
            <div className="space-y-2 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#FF5B00] flex-shrink-0 mt-0.5" />
                <span>{CAFE_INFO.address}</span>
              </div>
              
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#FF5B00] flex-shrink-0" />
                <a href={`mailto:${CAFE_INFO.email}`} className="hover:underline text-amber-200">
                  {CAFE_INFO.email}
                </a>
              </div>

              <div className="pt-2">
                <span className="bg-[#0F4C81] text-white text-[10px] font-bold px-2.5 py-1 rounded-full border border-blue-500">
                  Est. 2023 · Mandaluyong, PH
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 Eleven97 Neighborhood Cafe (1197). All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="bg-[#0F4C81] hover:bg-[#FF5B00] text-white p-2.5 rounded-full transition-colors shadow-lg flex items-center gap-1 font-fredoka font-bold text-xs"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
            <span>Top</span>
          </button>
        </div>

      </div>
    </footer>
  );
};
