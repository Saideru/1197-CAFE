import React, { useState } from 'react';
import { MENU_ITEMS, CATERING_PACKAGES, CAFE_INFO } from '../data/cafeData';
import { CateringFormData } from '../types';
import { X, Calendar, Coffee, Sparkles, Check, Send, Copy, AlertCircle, FileText, MessageCircle, ExternalLink, Mail } from 'lucide-react';

interface CateringModalProps {
  initialPackage?: '50pax' | '100pax';
  onClose: () => void;
}

export const CateringModal: React.FC<CateringModalProps> = ({ initialPackage = '50pax', onClose }) => {
  const [formData, setFormData] = useState<CateringFormData>({
    name: '',
    email: '',
    phone: '',
    packageType: initialPackage,
    customPax: 75,
    eventDate: '',
    eventLocation: '',
    selectedCoffee: ['Spanish Latte', 'Ube Latte', 'Vanilla Latte', 'Americano', 'Salted Caramel'],
    selectedNonCoffee: ['Strawberry Milk', 'Ube Matcha', 'Matcha'],
    selectedSoda: ['Mixed Berries', 'Blueberry'],
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const coffeeList = MENU_ITEMS.filter(i => i.category === 'coffee');
  const nonCoffeeList = MENU_ITEMS.filter(i => i.category === 'non-coffee');
  const sodaList = MENU_ITEMS.filter(i => i.category === 'flavored-soda');

  const selectedPkg = CATERING_PACKAGES.find(p => p.id === (formData.packageType === '50pax' ? 'pkg-50' : 'pkg-100'));
  const calculatedPrice = formData.packageType === '50pax' ? 4500 : formData.packageType === '100pax' ? 8500 : formData.customPax * 90;

  const toggleCoffee = (name: string) => {
    setFormData(prev => {
      const exists = prev.selectedCoffee.includes(name);
      if (exists) {
        return { ...prev, selectedCoffee: prev.selectedCoffee.filter(c => c !== name) };
      }
      if (prev.selectedCoffee.length >= 5) return prev;
      return { ...prev, selectedCoffee: [...prev.selectedCoffee, name] };
    });
  };

  const toggleNonCoffee = (name: string) => {
    setFormData(prev => {
      const exists = prev.selectedNonCoffee.includes(name);
      if (exists) {
        return { ...prev, selectedNonCoffee: prev.selectedNonCoffee.filter(c => c !== name) };
      }
      if (prev.selectedNonCoffee.length >= 3) return prev;
      return { ...prev, selectedNonCoffee: [...prev.selectedNonCoffee, name] };
    });
  };

  const toggleSoda = (name: string) => {
    setFormData(prev => {
      const exists = prev.selectedSoda.includes(name);
      if (exists) {
        return { ...prev, selectedSoda: prev.selectedSoda.filter(s => s !== name) };
      }
      return { ...prev, selectedSoda: [...prev.selectedSoda, name] };
    });
  };

  const generateEmailBody = () => {
    return `Hello Eleven97 Cafe Team!

I would like to book a Coffee Party Catering Cart:

• Client Name: ${formData.name || '[Name]'}
• Contact Email: ${formData.email || '[Email]'}
• Phone Number: ${formData.phone || '[Phone]'}
• Package Selected: ${formData.packageType.toUpperCase()} (Estimated ₱${calculatedPrice.toLocaleString()})
• Event Date: ${formData.eventDate || '[Date]'}
• Event Location: ${formData.eventLocation || '[Location]'}

Selected Coffee Menu (Max 5):
${formData.selectedCoffee.map(c => `  - ${c}`).join('\n')}

Selected Non-Coffee Menu (Max 3):
${formData.selectedNonCoffee.map(nc => `  - ${nc}`).join('\n')}

Selected Flavored Soda Menu:
${formData.selectedSoda.map(s => `  - ${s}`).join('\n')}

Special Notes / Power Setup Info:
${formData.notes || 'None'}

Thank you!`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    
    // Copy summary to clipboard automatically
    if (navigator.clipboard) {
      navigator.clipboard.writeText(generateEmailBody());
      setCopied(true);
    }

    // Launch Messenger URL (m.me works seamlessly across Mobile & Desktop)
    window.open(CAFE_INFO.messengerUrl, '_blank', 'noopener,noreferrer');
  };

  const handleOpenMessengerDirect = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(generateEmailBody());
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
    window.open(CAFE_INFO.messengerUrl, '_blank', 'noopener,noreferrer');
  };

  const handleSendEmailFallback = () => {
    const mailtoUrl = `mailto:${CAFE_INFO.email}?subject=${encodeURIComponent(`Coffee Party Catering Request - ${formData.name}`)}&body=${encodeURIComponent(generateEmailBody())}`;
    window.location.href = mailtoUrl;
  };

  const handleCopySummary = () => {
    navigator.clipboard?.writeText(generateEmailBody());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn">
      <div 
        className="bg-[#FAF7F2] text-slate-800 rounded-3xl max-w-2xl w-full border-4 border-[#0F4C81] shadow-2xl overflow-hidden relative max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header Bar */}
        <div className="bg-[#0F4C81] text-white p-5 border-b-4 border-[#FF5B00] flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-[#FF5B00]" />
            <div>
              <h2 className="font-righteous text-2xl text-white">
                Coffee Party Catering Builder
              </h2>
              <p className="font-script text-xs text-amber-200">
                Eleven97 Neighborhood Cafe Mobile Cart
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#FF5B00] text-white flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          /* Confirmation Screen */
          <div className="p-6 text-center space-y-5 overflow-y-auto flex-1">
            <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#0084FF] to-[#A833E6] text-white flex items-center justify-center mx-auto border-4 border-white shadow-lg">
              <MessageCircle className="w-8 h-8 fill-current" />
            </div>

            <div className="space-y-1">
              <h3 className="font-fredoka text-2xl font-bold text-[#0F4C81]">
                Catering Summary Ready!
              </h3>
              <p className="text-sm text-slate-600">
                Your inquiry text has been formatted and copied! Send it directly to <strong>Eleven97 Cafe Messenger (ID: 293478050507482)</strong>.
              </p>
            </div>

            <div className="bg-white p-4 rounded-2xl border border-slate-300 text-left font-mono text-xs text-slate-700 whitespace-pre-wrap max-h-40 overflow-y-auto shadow-inner relative">
              <button
                onClick={handleCopySummary}
                className="absolute top-2 right-2 bg-slate-100 hover:bg-slate-200 text-slate-700 px-2.5 py-1 rounded-lg text-[10px] font-sans font-semibold flex items-center gap-1 border border-slate-200"
              >
                {copied ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                <span>{copied ? 'Copied!' : 'Copy'}</span>
              </button>
              {generateEmailBody()}
            </div>

            {/* Messenger Direct Action Buttons */}
            <div className="space-y-2.5 pt-1">
              <button
                onClick={handleOpenMessengerDirect}
                className="w-full bg-gradient-to-r from-[#0084FF] via-[#0099FF] to-[#A833E6] hover:opacity-95 text-white font-fredoka font-bold text-sm py-3.5 px-6 rounded-2xl shadow-lg flex items-center justify-center gap-2 transform active:scale-98 transition-all"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Open Facebook Messenger Chat</span>
                <ExternalLink className="w-4 h-4 ml-auto" />
              </button>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <button
                  onClick={handleSendEmailFallback}
                  className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-fredoka font-semibold text-xs py-2.5 px-4 rounded-xl flex items-center justify-center gap-1.5"
                >
                  <Mail className="w-4 h-4 text-slate-500" />
                  <span>Send via Email Instead</span>
                </button>

                <button
                  onClick={onClose}
                  className="bg-[#FF5B00] hover:bg-[#EE5100] text-white font-fredoka font-bold text-xs py-2.5 px-4 rounded-xl shadow"
                >
                  Close Window
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* Interactive Booking Form */
          <form onSubmit={handleSubmit} className="p-6 space-y-6 overflow-y-auto flex-1">
            
            {/* Step 1: Package Selection */}
            <div className="space-y-2">
              <label className="font-fredoka text-xs font-bold text-[#0F4C81] uppercase tracking-wider block">
                1. Select Guest Count (PAX)
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, packageType: '50pax' })}
                  className={`p-3.5 rounded-2xl border-2 text-left transition-all ${
                    formData.packageType === '50pax'
                      ? 'bg-[#0F4C81] text-white border-[#0F4C81] shadow-md'
                      : 'bg-white text-slate-800 border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="font-righteous text-xl text-[#FF5B00]">50 PAX</div>
                  <div className="font-bold text-sm">₱4,500</div>
                  <div className="text-[10px] opacity-80 mt-1">5 Coffee + 3 Non-Coffee</div>
                </button>

                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, packageType: '100pax' })}
                  className={`p-3.5 rounded-2xl border-2 text-left transition-all ${
                    formData.packageType === '100pax'
                      ? 'bg-[#0F4C81] text-white border-[#0F4C81] shadow-md'
                      : 'bg-white text-slate-800 border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="font-righteous text-xl text-[#FF5B00]">100 PAX</div>
                  <div className="font-bold text-sm">₱8,500</div>
                  <div className="text-[10px] opacity-80 mt-1">Coffee, Non-Coffee & Soda</div>
                </button>
              </div>
            </div>

            {/* Step 2: Select Coffee Drinks (Max 5) */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="font-fredoka text-xs font-bold text-[#0F4C81] uppercase tracking-wider">
                  2. Choose 5 Coffee Drinks ({formData.selectedCoffee.length}/5)
                </label>
                <span className="text-[10px] text-slate-400">Click to select/unselect</span>
              </div>

              <div className="flex flex-wrap gap-1.5 bg-white p-3 rounded-2xl border border-slate-200">
                {coffeeList.map(item => {
                  const isSelected = formData.selectedCoffee.includes(item.name);
                  return (
                    <button
                      type="button"
                      key={item.id}
                      onClick={() => toggleCoffee(item.name)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-fredoka font-semibold transition-all border ${
                        isSelected 
                          ? 'bg-[#FF5B00] text-white border-[#FF5B00] shadow-sm' 
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {isSelected ? '✓ ' : '+ '}{item.name}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Select Non-Coffee Drinks (Max 3) */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="font-fredoka text-xs font-bold text-[#0F4C81] uppercase tracking-wider">
                  3. Choose 3 Non-Coffee Drinks ({formData.selectedNonCoffee.length}/3)
                </label>
              </div>

              <div className="flex flex-wrap gap-1.5 bg-white p-3 rounded-2xl border border-slate-200">
                {nonCoffeeList.map(item => {
                  const isSelected = formData.selectedNonCoffee.includes(item.name);
                  return (
                    <button
                      type="button"
                      key={item.id}
                      onClick={() => toggleNonCoffee(item.name)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-fredoka font-semibold transition-all border ${
                        isSelected 
                          ? 'bg-[#0F4C81] text-white border-[#0F4C81] shadow-sm' 
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {isSelected ? '✓ ' : '+ '}{item.name}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 4: Event & Contact Info */}
            <div className="space-y-3 pt-2">
              <label className="font-fredoka text-xs font-bold text-[#0F4C81] uppercase tracking-wider block border-b border-slate-200 pb-1">
                4. Contact & Event Details
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-slate-600 block mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Maria Santos"
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2 text-sm focus:ring-2 focus:ring-[#FF5B00] outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-600 block mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. maria@gmail.com"
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2 text-sm focus:ring-2 focus:ring-[#FF5B00] outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-600 block mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 0917 123 4567"
                    value={formData.phone}
                    onChange={e => setFormData({...formData, phone: e.target.value})}
                    className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2 text-sm focus:ring-2 focus:ring-[#FF5B00] outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-600 block mb-1">Event Date *</label>
                  <input
                    type="date"
                    required
                    value={formData.eventDate}
                    onChange={e => setFormData({...formData, eventDate: e.target.value})}
                    className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2 text-sm focus:ring-2 focus:ring-[#FF5B00] outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-600 block mb-1">Event Location / Venue Address *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Mandaluyong City Clubhouse, Metro Manila"
                  value={formData.eventLocation}
                  onChange={e => setFormData({...formData, eventLocation: e.target.value})}
                  className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2 text-sm focus:ring-2 focus:ring-[#FF5B00] outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-600 block mb-1">Special Notes / Power Outlet Setup Info</label>
                <textarea
                  rows={2}
                  placeholder="e.g. Outdoor venue, 220V power supply available..."
                  value={formData.notes}
                  onChange={e => setFormData({...formData, notes: e.target.value})}
                  className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2 text-sm focus:ring-2 focus:ring-[#FF5B00] outline-none"
                />
              </div>
            </div>

            {/* Total Estimate Notice */}
            <div className="bg-[#0F4C81] text-white p-4 rounded-2xl flex items-center justify-between border-2 border-[#FF5B00]">
              <div>
                <span className="text-xs text-blue-200 block">Package Price Estimate</span>
                <span className="font-righteous text-2xl text-[#FF5B00]">
                  ₱{calculatedPrice.toLocaleString()}
                </span>
              </div>
              <button
                type="submit"
                className="bg-[#FF5B00] hover:bg-[#EE5100] text-white font-fredoka font-bold text-sm px-6 py-3 rounded-xl shadow-lg border border-white/20 flex items-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit Catering Request</span>
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};
