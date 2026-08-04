import React, { useState, useMemo } from 'react';
import { MENU_ITEMS } from '../data/cafeData';
import { MenuItem } from '../types';
import { Search, Coffee, Sparkles, Heart, Flame, Snowflake, Info } from 'lucide-react';

interface MenuSectionProps {
  onSelectItem: (item: MenuItem) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onSelectItem }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'coffee' | 'non-coffee' | 'flavored-soda'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [favorites, setFavorites] = useState<string[]>([]);

  const toggleFavorite = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setFavorites((prev) => 
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
    );
  };

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            (item.description && item.description.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const coffeeItems = useMemo(() => filteredItems.filter(i => i.category === 'coffee'), [filteredItems]);
  const nonCoffeeItems = useMemo(() => filteredItems.filter(i => i.category === 'non-coffee'), [filteredItems]);
  const sodaItems = useMemo(() => filteredItems.filter(i => i.category === 'flavored-soda'), [filteredItems]);

  return (
    <section id="menu" className="relative bg-[#0F4C81] text-white py-16 md:py-24 border-b-4 border-[#FF5B00]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 bg-[#FF5B00] text-white text-xs font-bold font-fredoka px-3.5 py-1 rounded-full uppercase tracking-wider">
            <Coffee className="w-3.5 h-3.5" />
            <span>Handcrafted Beverages</span>
          </div>
          <h2 className="font-fredoka text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Our Full Cafe <span className="text-[#FF5B00]">Menu</span>
          </h2>
          <p className="font-script text-xl text-orange-200">
            "Made fresh daily in Mandaluyong"
          </p>
          <p className="text-xs text-blue-200 italic">
            Note: Standard menu prices are available in-store. Select any drink to view details or add to catering inquiry!
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 mb-10 max-w-4xl mx-auto space-y-4">
          
          {/* Search Input */}
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-200" />
            <input
              type="text"
              placeholder="Search drinks (e.g. Ube Latte, Spanish Latte, Matcha)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/10 border border-white/20 text-white placeholder-blue-200 text-sm rounded-xl pl-10 pr-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#FF5B00] transition"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-blue-200 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {[
              { id: 'all', label: 'All Drinks' },
              { id: 'coffee', label: 'Coffee (Ice / Hot)' },
              { id: 'non-coffee', label: 'Non-Coffee' },
              { id: 'flavored-soda', label: 'Flavored Soda' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id as any)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-fredoka font-bold transition-all ${
                  activeCategory === tab.id
                    ? 'bg-[#FF5B00] text-white shadow-md'
                    : 'bg-white/10 hover:bg-white/20 text-blue-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

        </div>

        {/* Menu Columns matching reference image layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          
          {/* Column 1: COFFEE (Ice/Hot) */}
          {(activeCategory === 'all' || activeCategory === 'coffee') && (
            <div className="bg-[#FAF7F2] text-slate-800 rounded-3xl p-6 shadow-xl border-4 border-[#FF5B00]">
              <div className="flex items-center justify-between border-b-2 border-slate-200 pb-3 mb-4">
                <div>
                  <h3 className="font-righteous text-3xl text-[#0F4C81] tracking-tight">
                    coffee
                  </h3>
                  <span className="font-script text-xs text-[#FF5B00] font-bold">
                    served ice / hot
                  </span>
                </div>
                <div className="flex items-center gap-1 bg-amber-100 text-amber-900 text-[10px] font-bold px-2 py-1 rounded-full border border-amber-300">
                  <Snowflake className="w-3 h-3 text-blue-500" />
                  <Flame className="w-3 h-3 text-red-500" />
                  <span>Dual Temp</span>
                </div>
              </div>

              <div className="space-y-3">
                {coffeeItems.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => onSelectItem(item)}
                    className="group bg-white p-3 rounded-xl border border-slate-200 hover:border-[#FF5B00] hover:shadow-md transition-all cursor-pointer flex items-center justify-between"
                  >
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-2">
                        <span className="font-fredoka font-bold text-sm sm:text-base text-slate-800 group-hover:text-[#FF5B00] transition-colors">
                          {item.name}
                        </span>
                        {item.isPopular && (
                          <span className="bg-[#FF5B00] text-white text-[9px] font-bold px-1.5 py-0.5 rounded uppercase">
                            POPULAR
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-500 line-clamp-1">
                        {item.description}
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-mono border border-slate-200">
                        In-Store
                      </span>
                      <button
                        onClick={(e) => toggleFavorite(item.id, e)}
                        className="p-1 rounded-full hover:bg-slate-100 text-slate-400 hover:text-red-500 transition-colors"
                      >
                        <Heart className={`w-4 h-4 ${favorites.includes(item.id) ? 'fill-red-500 text-red-500' : ''}`} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Column 2: NON-COFFEE */}
          {(activeCategory === 'all' || activeCategory === 'non-coffee') && (
            <div className="bg-[#FAF7F2] text-slate-800 rounded-3xl p-6 shadow-xl border-4 border-[#0F4C81]">
              <div className="flex items-center justify-between border-b-2 border-slate-200 pb-3 mb-4">
                <div>
                  <h3 className="font-righteous text-3xl text-[#0F4C81] tracking-tight">
                    non-coffee
                  </h3>
                  <span className="font-script text-xs text-amber-700 font-bold">
                    creamy & comforting
                  </span>
                </div>
                <span className="bg-purple-100 text-purple-900 text-[10px] font-bold px-2 py-1 rounded-full border border-purple-300">
                  Dairy / Oat
                </span>
              </div>

              <div className="space-y-3">
                {nonCoffeeItems.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => onSelectItem(item)}
                    className="group bg-white p-3 rounded-xl border border-slate-200 hover:border-[#0F4C81] hover:shadow-md transition-all cursor-pointer flex items-center justify-between"
                  >
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-2">
                        <span className="font-fredoka font-bold text-sm sm:text-base text-slate-800 group-hover:text-[#0F4C81] transition-colors">
                          {item.name}
                        </span>
                        {item.isPopular && (
                          <span className="bg-[#0F4C81] text-white text-[9px] font-bold px-1.5 py-0.5 rounded uppercase">
                            MUST TRY
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-500 line-clamp-1">
                        {item.description}
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-mono border border-slate-200">
                        In-Store
                      </span>
                      <button
                        onClick={(e) => toggleFavorite(item.id, e)}
                        className="p-1 rounded-full hover:bg-slate-100 text-slate-400 hover:text-red-500 transition-colors"
                      >
                        <Heart className={`w-4 h-4 ${favorites.includes(item.id) ? 'fill-red-500 text-red-500' : ''}`} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Column 3: FLAVORED SODA */}
          {(activeCategory === 'all' || activeCategory === 'flavored-soda') && (
            <div className="bg-[#FAF7F2] text-slate-800 rounded-3xl p-6 shadow-xl border-4 border-emerald-500">
              <div className="flex items-center justify-between border-b-2 border-slate-200 pb-3 mb-4">
                <div>
                  <h3 className="font-righteous text-3xl text-[#0F4C81] tracking-tight">
                    flavored soda
                  </h3>
                  <span className="font-script text-xs text-emerald-700 font-bold">
                    sparkling refreshers
                  </span>
                </div>
                <span className="bg-emerald-100 text-emerald-900 text-[10px] font-bold px-2 py-1 rounded-full border border-emerald-300">
                  Fizzy Ice
                </span>
              </div>

              <div className="space-y-3">
                {sodaItems.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => onSelectItem(item)}
                    className="group bg-white p-3 rounded-xl border border-slate-200 hover:border-emerald-500 hover:shadow-md transition-all cursor-pointer flex items-center justify-between"
                  >
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-2">
                        <span className="font-fredoka font-bold text-sm sm:text-base text-slate-800 group-hover:text-emerald-600 transition-colors">
                          {item.name}
                        </span>
                        {item.isPopular && (
                          <span className="bg-emerald-600 text-white text-[9px] font-bold px-1.5 py-0.5 rounded uppercase">
                            REFRESHING
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-500 line-clamp-1">
                        {item.description}
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-mono border border-slate-200">
                        In-Store
                      </span>
                      <button
                        onClick={(e) => toggleFavorite(item.id, e)}
                        className="p-1 rounded-full hover:bg-slate-100 text-slate-400 hover:text-red-500 transition-colors"
                      >
                        <Heart className={`w-4 h-4 ${favorites.includes(item.id) ? 'fill-red-500 text-red-500' : ''}`} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Decorative Coffee Cup Line Art Icon */}
              <div className="mt-6 pt-4 border-t border-slate-200 text-center">
                <svg className="w-16 h-16 text-slate-400 mx-auto opacity-60" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M30 40 C30 20 70 20 70 40 L65 80 C65 85 35 85 35 80 Z" />
                  <path d="M70 45 C80 45 80 65 65 65" />
                  <path d="M25 85 L75 85" />
                  <path d="M45 25 C45 15 55 15 55 5" strokeDasharray="2 2" />
                </svg>
                <p className="text-xs text-slate-400 font-script mt-1">Enjoyed by neighbors every day</p>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
};
