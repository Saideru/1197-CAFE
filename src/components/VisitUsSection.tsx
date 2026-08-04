import React from 'react';
import { CAFE_INFO } from '../data/cafeData';
import { MapPin, Mail, Clock, Phone, Share2, CreditCard, QrCode, ExternalLink, Navigation, MessageCircle } from 'lucide-react';

export const VisitUsSection: React.FC = () => {
  return (
    <section id="visit-us" className="relative bg-[#0F4C81] text-white py-16 md:py-24 border-b-4 border-[#FF5B00] overflow-hidden">
      
      {/* Background Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#FF5B00_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-[#FF5B00] text-white text-xs font-bold font-fredoka px-3.5 py-1 rounded-full uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5" />
            <span>Find Our Shop & Connect</span>
          </div>
          <h2 className="font-fredoka text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Visit Us in <span className="text-[#FF5B00]">Mandaluyong</span>
          </h2>
          <p className="font-script text-2xl text-orange-200">
            "We can't wait to craft your fresh cup"
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Contact Details & Placeholders Panel */}
          <div className="lg:col-span-5 bg-white text-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl border-4 border-[#FF5B00] flex flex-col justify-between space-y-6">
            
            <div className="space-y-6">
              
              {/* Primary Messenger Highlight Box */}
              <div className="bg-gradient-to-r from-[#0084FF] via-[#0099FF] to-[#A833E6] text-white p-4.5 rounded-2xl shadow-md space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MessageCircle className="w-6 h-6 fill-current text-white" />
                    <span className="font-fredoka font-bold text-base text-white">Facebook Messenger</span>
                  </div>
                  <span className="bg-white/20 text-white text-[10px] font-mono px-2 py-0.5 rounded-full font-bold">
                    ID: 293478050507482
                  </span>
                </div>
                <p className="text-xs text-white/90">
                  Send us a direct message on Messenger for instant drink inquiries, catering quotes, or store directions!
                </p>
                <a
                  href={CAFE_INFO.messengerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full bg-white text-[#0084FF] hover:bg-slate-100 font-fredoka font-bold text-xs py-2.5 px-4 rounded-xl shadow transition-colors mt-1"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Chat with Eleven97 on Messenger</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-auto" />
                </a>
              </div>

              {/* Address Block */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-2xl bg-[#FF5B00] text-white flex items-center justify-center flex-shrink-0 shadow">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-0.5">
                  <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                    CAFE ADDRESS
                  </span>
                  <h3 className="font-fredoka font-bold text-base text-[#0F4C81]">
                    {CAFE_INFO.address}
                  </h3>
                  <p className="text-xs text-slate-500">
                    Located in Plainview, Mandaluyong City, Metro Manila
                  </p>
                </div>
              </div>

              {/* Email Block */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-2xl bg-[#0F4C81] text-white flex items-center justify-center flex-shrink-0 shadow">
                  <Mail className="w-5 h-5 text-[#FF5B00]" />
                </div>
                <div className="space-y-0.5">
                  <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                    EMAIL INQUIRIES
                  </span>
                  <a 
                    href={`mailto:${CAFE_INFO.email}`} 
                    className="font-fredoka font-bold text-base text-[#FF5B00] hover:underline block"
                  >
                    {CAFE_INFO.email}
                  </a>
                  <p className="text-xs text-slate-500">
                    For catering, press, or feedback
                  </p>
                </div>
              </div>

              {/* Hours Placeholder */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center flex-shrink-0 shadow border border-amber-300">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                      HOURS OF OPERATION
                    </span>
                  </div>
                  <p className="font-fredoka font-bold text-sm text-slate-800">
                    {CAFE_INFO.hoursPlaceholder}
                  </p>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="pt-3 border-t border-slate-200 space-y-2">
                <div className="flex items-center gap-2 text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                  <Share2 className="w-3.5 h-3.5 text-[#FF5B00]" />
                  <span>SOCIAL MEDIA CHANNELS</span>
                </div>
                <div className="grid grid-cols-1 gap-1.5 text-xs">
                  <a 
                    href={CAFE_INFO.facebookPageUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#FAF7F2] hover:bg-[#0084FF]/10 p-2 rounded-xl border border-slate-200 flex items-center justify-between transition-colors group"
                  >
                    <span className="font-semibold text-blue-700 group-hover:underline flex items-center gap-1.5">
                      <MessageCircle className="w-3.5 h-3.5 text-blue-600" />
                      Facebook Page:
                    </span>
                    <span className="font-mono text-slate-600 text-[11px] font-bold">id=293478050507482</span>
                  </a>
                  <div className="bg-[#FAF7F2] p-2 rounded-xl border border-slate-200 flex items-center justify-between">
                    <span className="font-semibold text-pink-600">Instagram:</span>
                    <span className="font-mono text-slate-500 text-[11px]">{CAFE_INFO.socialInstagram}</span>
                  </div>
                  <div className="bg-[#FAF7F2] p-2 rounded-xl border border-slate-200 flex items-center justify-between">
                    <span className="font-semibold text-slate-800">TikTok:</span>
                    <span className="font-mono text-slate-500 text-[11px]">{CAFE_INFO.socialTikTok}</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Payment Icons Row */}
            <div className="pt-4 border-t border-slate-200">
              <span className="text-[10px] font-bold uppercase text-slate-400 tracking-wider block mb-2 text-center">
                ACCEPTED PAYMENT METHODS (5% OFF APPLIES)
              </span>
              <div className="flex items-center justify-center gap-3">
                <div className="bg-blue-50 border border-blue-200 px-3 py-1.5 rounded-xl flex items-center gap-1.5 text-blue-900 font-bold text-xs">
                  <QrCode className="w-4 h-4 text-blue-600" />
                  <span>QR Payment</span>
                </div>
                <div className="bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-xl flex items-center gap-1.5 text-slate-800 font-extrabold text-xs">
                  <CreditCard className="w-4 h-4 text-[#FF5B00]" />
                  <span>Visa</span>
                </div>
                <div className="bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-xl flex items-center gap-1.5 text-slate-800 font-extrabold text-xs">
                  <CreditCard className="w-4 h-4 text-red-500" />
                  <span>Mastercard</span>
                </div>
              </div>
            </div>

          </div>

          {/* Embedded Google Map Column */}
          <div className="lg:col-span-7 bg-white rounded-3xl overflow-hidden border-4 border-white shadow-2xl min-h-[400px] flex flex-col justify-between relative">
            
            {/* Top Bar over map */}
            <div className="bg-[#0F4C81] text-white p-3 px-5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Navigation className="w-4 h-4 text-[#FF5B00]" />
                <span className="font-fredoka text-xs font-bold">Interactive Location Map</span>
              </div>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(CAFE_INFO.address)}`}
                target="_blank"
                rel="noreferrer"
                className="text-[11px] text-amber-200 hover:text-white flex items-center gap-1 underline font-semibold"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Google Maps iframe */}
            <div className="flex-1 w-full h-full min-h-[350px] relative">
              <iframe
                title="Eleven97 Neighborhood Cafe Location Map"
                src={CAFE_INFO.mapEmbedUrl}
                className="w-full h-full border-0 min-h-[350px]"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Bottom Bar overlay */}
            <div className="bg-[#FAF7F2] p-4 text-slate-800 text-center border-t border-slate-200">
              <p className="text-xs font-fredoka font-bold text-[#0F4C81]">
                📍 9B Lourdes St., Brgy. Plainview, Mandaluyong, Philippines
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
