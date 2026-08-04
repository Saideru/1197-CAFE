import React, { useState, useEffect } from 'react';
import { CAFE_INFO, IMAGES } from '../data/cafeData';
import { Menu as MenuIcon, X, MapPin, Coffee, Sparkles, Calendar } from 'lucide-react';

interface NavbarProps {
  onOpenCatering: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCatering }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Signature Drinks', href: '#signature-drinks' },
    { name: 'Mac & Cheese', href: '#mac-and-cheese' },
    { name: 'Promos', href: '#promos' },
    { name: 'Catering', href: '#catering' },
    { name: 'Visit Us', href: '#visit-us' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Banner Ticker */}
      <div className="bg-[#0F4C81] text-white text-xs md:text-sm py-2 px-4 font-semibold tracking-wide overflow-hidden border-b border-[#003893]">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="bg-[#FF5B00] text-white text-[10px] uppercase font-bold px-2 py-0.5 rounded-full animate-pulse">
              PROMO
            </span>
            <span className="truncate">☕ <strong>Buy 2 Get 1</strong> every Mon–Wed · <strong>5% OFF</strong> on QR & Card payments</span>
          </div>
          <div className="hidden md:flex items-center gap-4 text-xs font-normal text-blue-100">
            <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-[#FF5B00]" /> Mandaluyong, PH</span>
            <span>•</span>
            <span>{CAFE_INFO.established}</span>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#0F4C81]/95 backdrop-blur-md shadow-lg py-2 border-b border-[#FF5B00]/30' 
          : 'bg-[#0F4C81] py-3'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo & Brand Identity */}
          <a 
            href="#hero" 
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-2.5 group focus:outline-none"
          >
            {/* Official Logo Badge */}
            <div className="relative h-14 sm:h-16 md:h-20 w-auto rounded-2xl overflow-hidden border-2 sm:border-3 border-[#FF5B00] shadow-xl group-hover:scale-105 transition-all bg-black flex items-center justify-center p-0.5">
              <img 
                src={IMAGES.logoOval} 
                alt="Eleven97 Official Oval Logo" 
                className="h-full w-auto object-cover scale-125 transform transition-transform"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Retro Script Wordmark */}
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-fredoka text-xl md:text-2xl font-bold tracking-tight text-[#FF5B00] drop-shadow-[0_1.5px_1.5px_rgba(0,0,0,0.8)]">
                  Eleven97
                </span>
                <span className="bg-[#FF5B00] text-white text-[10px] font-bold px-1.5 py-0.2 rounded font-fredoka">
                  1197
                </span>
              </div>
              <span className="font-script text-xs text-blue-100 tracking-wide -mt-1">
                Neighborhood Cafe
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-1.5 text-xs xl:text-sm font-semibold text-white/90 hover:text-[#FF5B00] hover:bg-white/10 rounded-full transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenCatering}
              className="bg-[#FF5B00] hover:bg-[#EE5100] text-white font-fredoka font-bold text-xs md:text-sm px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 flex items-center gap-1.5 border border-white/20"
            >
              <Calendar className="w-4 h-4 text-white" />
              <span>Book a Coffee Party</span>
            </button>
          </div>

          {/* Mobile Menu Hamburger Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenCatering}
              className="bg-[#FF5B00] text-white font-fredoka font-bold text-xs px-3 py-1.5 rounded-full"
            >
              Catering
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white p-2 rounded-lg hover:bg-white/10 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#FF5B00]" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0F4C81] border-t border-[#FF5B00]/30 px-4 pt-3 pb-6 space-y-2 animate-fadeIn">
            <div className="grid grid-cols-2 gap-2 pb-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="block px-3 py-2 text-sm font-semibold text-white hover:bg-[#FF5B00] rounded-lg transition-colors text-center"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="pt-2 border-t border-blue-800">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCatering();
                }}
                className="w-full bg-[#FF5B00] hover:bg-[#EE5100] text-white font-fredoka font-bold text-sm py-2.5 rounded-xl shadow text-center flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Book Coffee Party Catering</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
