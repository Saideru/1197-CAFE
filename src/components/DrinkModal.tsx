import React, { useState } from 'react';
import { SIGNATURE_DRINKS, MENU_ITEMS, CAFE_INFO } from '../data/cafeData';
import { MenuItem, SignatureDrink } from '../types';
import { X, Coffee, Check, Heart, Sparkles, MapPin, Share2, MessageCircle, ExternalLink } from 'lucide-react';

interface DrinkModalProps {
  drinkIdOrItem: string | MenuItem | null;
  onClose: () => void;
  onOpenCatering: () => void;
}

export const DrinkModal: React.FC<DrinkModalProps> = ({ drinkIdOrItem, onClose, onOpenCatering }) => {
  if (!drinkIdOrItem) return null;

  let sigDrink: SignatureDrink | undefined;
  let menuItem: MenuItem | undefined;

  if (typeof drinkIdOrItem === 'string') {
    sigDrink = SIGNATURE_DRINKS.find(d => d.id === drinkIdOrItem);
  } else {
    menuItem = drinkIdOrItem;
    // Check if menuItem matches signature drink
    sigDrink = SIGNATURE_DRINKS.find(d => d.name.toLowerCase() === menuItem?.name.toLowerCase());
  }

  const [selectedTemp, setSelectedTemp] = useState<'Iced' | 'Hot'>('Iced');
  const [copied, setCopied] = useState(false);

  const title = sigDrink ? sigDrink.name : menuItem?.name || 'Beverage Details';
  const scriptTitle = sigDrink ? sigDrink.scriptTitle : title;
  const description = sigDrink 
    ? sigDrink.description 
    : menuItem?.description || 'Handcrafted daily at Eleven97 Neighborhood Cafe using premium espresso and fresh ingredients.';
  const image = sigDrink ? sigDrink.imagePath : null;
  const ingredients = sigDrink 
    ? sigDrink.ingredients 
    : ['Fresh Milk / Water', 'Handcrafted Espresso', 'Flavoring Syrup / Sauce'];

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div 
        className="bg-[#FAF7F2] text-slate-800 rounded-3xl max-w-xl w-full border-4 border-[#0F4C81] shadow-2xl overflow-hidden relative max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-20 w-9 h-9 rounded-full bg-white text-slate-800 shadow-md flex items-center justify-center hover:bg-[#FF5B00] hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Image Header */}
        {image ? (
          <div className="relative h-56 sm:h-64 overflow-hidden bg-slate-900 flex-shrink-0">
            <img 
              src={image} 
              alt={title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-6 right-6">
              <span className="bg-[#FF5B00] text-white font-fredoka text-xs font-bold px-3 py-1 rounded-full uppercase shadow">
                SIGNATURE DRINK SPOTLIGHT
              </span>
              <h2 className="font-script text-3xl sm:text-4xl text-amber-200 mt-1">
                {scriptTitle}
              </h2>
            </div>
          </div>
        ) : (
          <div className="bg-[#0F4C81] text-white p-6 pb-8 border-b-4 border-[#FF5B00] flex-shrink-0">
            <span className="bg-[#FF5B00] text-white font-fredoka text-xs font-bold px-3 py-1 rounded-full uppercase">
              BEVERAGE SELECTION
            </span>
            <h2 className="font-fredoka text-3xl font-extrabold text-white mt-2">
              {title}
            </h2>
          </div>
        )}

        {/* Modal Content Body */}
        <div className="p-6 space-y-5 overflow-y-auto flex-1">
          
          <div className="space-y-1">
            <h3 className="font-fredoka font-bold text-[#0F4C81] text-lg">
              Flavor Description
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed bg-white p-3.5 rounded-2xl border border-slate-200">
              "{description}"
            </p>
          </div>

          {/* Temperature Options */}
          <div className="space-y-2">
            <label className="font-fredoka text-xs font-bold text-slate-400 uppercase tracking-wider block">
              Temperature Preference
            </label>
            <div className="grid grid-cols-2 gap-2">
              {['Iced', 'Hot'].map((temp) => (
                <button
                  key={temp}
                  onClick={() => setSelectedTemp(temp as any)}
                  className={`py-2.5 px-4 rounded-xl font-fredoka font-bold text-xs flex items-center justify-center gap-2 border-2 transition-all ${
                    selectedTemp === temp
                      ? 'bg-[#0F4C81] text-white border-[#0F4C81] shadow'
                      : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <Coffee className="w-4 h-4" />
                  <span>{temp} Preparation</span>
                </button>
              ))}
            </div>
          </div>

          {/* Ingredients List */}
          <div className="space-y-2">
            <label className="font-fredoka text-xs font-bold text-slate-400 uppercase tracking-wider block">
              Ingredients & Composition
            </label>
            <div className="flex flex-wrap gap-2">
              {ingredients.map((ing, i) => (
                <span 
                  key={i} 
                  className="bg-white text-slate-700 font-medium text-xs px-3 py-1.5 rounded-xl border border-slate-200 shadow-sm flex items-center gap-1.5"
                >
                  <Check className="w-3.5 h-3.5 text-[#FF5B00]" />
                  {ing}
                </span>
              ))}
            </div>
          </div>

          {/* Pricing Notice */}
          <div className="bg-amber-50 p-3 rounded-xl border border-amber-200 text-xs text-amber-900 flex items-center justify-between">
            <span>In-store price available at counter</span>
            <span className="font-bold text-[#FF5B00] font-fredoka">Mandaluyong, PH</span>
          </div>

        </div>

        {/* Modal Actions */}
        <div className="p-4 bg-white border-t border-slate-200 flex flex-col sm:flex-row gap-2 flex-shrink-0">
          <a
            href={CAFE_INFO.messengerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-gradient-to-r from-[#0084FF] to-[#0099FF] hover:opacity-95 text-white font-fredoka font-bold text-xs py-3 px-3 rounded-xl text-center shadow flex items-center justify-center gap-1.5"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Inquire on Messenger</span>
          </a>

          <button
            onClick={() => {
              onClose();
              onOpenCatering();
            }}
            className="flex-1 bg-[#0F4C81] hover:bg-[#003893] text-white font-fredoka font-bold text-xs py-3 px-3 rounded-xl text-center shadow flex items-center justify-center gap-1.5"
          >
            <Sparkles className="w-4 h-4 text-[#FF5B00]" />
            <span>Add to Catering Party</span>
          </button>
        </div>

      </div>
    </div>
  );
};
