/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { EXPEDITIONS } from '../data';
import { Expedition } from '../types';
import { Compass, Mail, Calendar, MapPin, Tag } from 'lucide-react';

interface ExpeditionsViewProps {
  onScrollToContact: () => void;
}

export default function ExpeditionsView({ onScrollToContact }: ExpeditionsViewProps) {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const categories = [
    'All',
    'Ice',
    'Sand',
    'Islands',
    'Waves',
    'Mirrors',
    'Corals',
    'Peaks',
    'Wildlife',
    'Foliage',
  ];

  const filteredExpeditions = activeFilter === 'All'
    ? EXPEDITIONS
    : EXPEDITIONS.filter((e) => e.category === activeFilter);

  const getEmailDraftUrl = (exp: Expedition) => {
    const subject = encodeURIComponent(`Offlight Inquiry: ${exp.title} Expedition (${exp.date})`);
    const body = encodeURIComponent(
      `Hello Offlight Team,\n\nI am writing to request more details and check reservation availability for the upcoming ${exp.title} Expedition (${exp.location}) scheduled for ${exp.date}.\n\nPlease find my information below:\n- Full Name:\n- Location:\n- Phone Number:\n\nLooking forward to disconnecting.\n\nWarm regards,\n`
    );
    return `mailto:hello@weareofflight.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="py-24 px-6 md:px-12 bg-[#0A0A0A] text-white min-h-screen">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4 pt-12">
          <h1 className="font-display text-4xl md:text-5xl font-black text-white tracking-tight">
            Expeditions
          </h1>
        </div>

        {/* Category Filters scroll bar for mobile and bento style on desktop */}
        <div className="flex flex-wrap justify-center gap-2 border-b border-white/10 pb-6">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActiveFilter(c)}
              className={`px-5 py-2.5 rounded-sm font-display text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeFilter === c
                  ? 'bg-white text-black border border-white'
                  : 'bg-white/5 text-white/70 hover:bg-white/10 border border-white/5'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Expeditions Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredExpeditions.map((exp) => (
            <div 
              key={exp.id} 
              className={`bg-[#0D0D0D] border rounded-[2px] overflow-hidden flex flex-col justify-between transition-all duration-300 ${
                exp.isComingSoon 
                  ? 'border-white/10 opacity-90' 
                  : 'border-white/10 hover:border-white/35 shadow-2xl'
              }`}
            >
              {/* Media element with robust landscape sizing */}
              <div>
                <div className="aspect-[16/10] relative overflow-hidden bg-neutral-900">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="w-full h-full object-cover opacity-90 transition-transform duration-700 hover:scale-103"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="p-6 space-y-2 text-left">
                  <h3 className="font-display text-2xl font-bold text-white tracking-tight">
                    {exp.title}
                  </h3>
                  <p className="font-sans text-xs text-brand-sand uppercase tracking-wider font-semibold">
                    {exp.date}
                  </p>
                </div>
              </div>

              {/* Action buttons */}
              <div className="p-6 pt-0">
                {exp.isComingSoon ? (
                  <button
                    onClick={onScrollToContact}
                    className="w-full font-display text-xs font-bold uppercase tracking-widest py-3.5 bg-transparent border border-white/30 text-white hover:bg-white/10 transition-colors text-center rounded-[2px] cursor-pointer"
                  >
                    Join Waitlist
                  </button>
                ) : (
                  <a
                    href={getEmailDraftUrl(exp)}
                    className="w-full font-display text-xs font-bold uppercase tracking-widest py-3.5 bg-white text-black hover:bg-neutral-200 transition-colors text-center rounded-[2px] cursor-pointer flex items-center justify-center gap-2 shadow-sm"
                  >
                    <Mail size={12} />
                    Request Information
                  </a>
                )}
              </div>

            </div>
          ))}
        </div>

        {/* Dynamic empty filter response */}
        {filteredExpeditions.length === 0 && (
          <div className="text-center py-20 bg-[#0D0D0D] rounded-[2px] border border-dashed border-white/15 space-y-4">
            <Compass size={40} className="mx-auto text-white/40 animate-pulse" />
            <div className="space-y-1">
              <h4 className="font-display text-lg font-bold text-white">No Expeditions Available</h4>
              <p className="font-sans text-xs text-white/50 max-w-md mx-auto">
                We are currently pioneering routes for the <span className="font-bold text-white">{activeFilter}</span> category. Join our updates catalog to receive the initial dispatches.
              </p>
            </div>
            <button
               onClick={onScrollToContact}
               className="font-display text-xs font-bold uppercase tracking-widest px-6 py-3 bg-white text-black hover:bg-neutral-200 transition-colors rounded-[2px] cursor-pointer"
            >
              Get Notified
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
