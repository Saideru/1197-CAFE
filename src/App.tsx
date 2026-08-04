import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { MenuSection } from './components/MenuSection';
import { SignatureDrinksSection } from './components/SignatureDrinksSection';
import { MacAndCheeseSection } from './components/MacAndCheeseSection';
import { PromosSection } from './components/PromosSection';
import { CateringSection } from './components/CateringSection';
import { VisitUsSection } from './components/VisitUsSection';
import { Footer } from './components/Footer';
import { DrinkModal } from './components/DrinkModal';
import { CateringModal } from './components/CateringModal';
import { MessengerFloat } from './components/MessengerFloat';
import { MenuItem } from './types';

export default function App() {
  const [selectedDrinkIdOrItem, setSelectedDrinkIdOrItem] = useState<string | MenuItem | null>(null);
  const [cateringModalOpen, setCateringModalOpen] = useState(false);
  const [cateringPackage, setCateringPackage] = useState<'50pax' | '100pax'>('50pax');

  const handleOpenCatering = (pkg?: '50pax' | '100pax') => {
    if (pkg) setCateringPackage(pkg);
    setCateringModalOpen(true);
  };

  const handleSelectDrink = (drinkId: string) => {
    setSelectedDrinkIdOrItem(drinkId);
  };

  const handleSelectItem = (item: MenuItem) => {
    setSelectedDrinkIdOrItem(item);
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] font-sans text-slate-800 flex flex-col selection:bg-[#FF5B00] selection:text-white">
      {/* Sticky Top Navbar */}
      <Navbar onOpenCatering={() => handleOpenCatering('50pax')} />

      {/* Main Page Content */}
      <main className="flex-1">
        {/* Section 1: Hero */}
        <Hero 
          onOpenCatering={() => handleOpenCatering('50pax')} 
          onSelectDrink={handleSelectDrink} 
        />

        {/* Section 2: About / Intro Strip */}
        <AboutSection />

        {/* Section 3: Full Cafe Menu */}
        <MenuSection onSelectItem={handleSelectItem} />

        {/* Section 4: 5 Signature Drinks Spotlight */}
        <SignatureDrinksSection 
          onSelectDrink={handleSelectDrink} 
          onOpenCatering={() => handleOpenCatering('50pax')} 
        />

        {/* Section 5: Heavy Hitter's Mac & Cheese */}
        <MacAndCheeseSection />

        {/* Section 6: Promos */}
        <PromosSection />

        {/* Section 7: Coffee Party Catering */}
        <CateringSection onOpenBookingModal={handleOpenCatering} />

        {/* Section 8: Visit Us / Location & Contact */}
        <VisitUsSection />
      </main>

      {/* Site Footer */}
      <Footer />

      {/* Interactive Modals */}
      {selectedDrinkIdOrItem && (
        <DrinkModal
          drinkIdOrItem={selectedDrinkIdOrItem}
          onClose={() => setSelectedDrinkIdOrItem(null)}
          onOpenCatering={() => handleOpenCatering('50pax')}
        />
      )}

      {cateringModalOpen && (
        <CateringModal
          initialPackage={cateringPackage}
          onClose={() => setCateringModalOpen(false)}
        />
      )}

      {/* Persistent Floating Messenger CTA Widget */}
      <MessengerFloat />
    </div>
  );
}
