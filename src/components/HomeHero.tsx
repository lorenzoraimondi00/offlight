/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ViewPage } from '../types';
import { ArrowDown } from 'lucide-react';

interface HomeHeroProps {
  onNavigate: (page: ViewPage) => void;
  onScrollToContact: () => void;
}

export default function HomeHero({ onNavigate, onScrollToContact }: HomeHeroProps) {
  return (
    <header className="relative w-full min-h-screen flex items-center justify-center pt-24 pb-16 px-6 md:px-12 bg-[#0A0A0A] overflow-hidden select-none">
      
      {/* Background cinematic imagery */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-80 transition-transform duration-[12s] hover:scale-105"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop')`
        }}
      >
        {/* Strict Readability Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/60" />
      </div>

      {/* Decorative Brand Accent Lines */}
      <div className="absolute left-6 md:left-12 bottom-1/4 w-[1px] h-32 bg-white/10 hidden lg:block" />
      <div className="absolute right-6 md:right-12 top-1/4 w-[1px] h-32 bg-white/10 hidden lg:block" />

      <div className="relative z-10 max-w-7xl mx-auto w-full text-center md:text-left">
        
        {/* Main Header typography */}
        <div className="max-w-3xl space-y-8">

          <div className="space-y-4">
            <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-black tracking-tight text-white leading-[0.95] text-shadow-lg">
              LIVE PLACES.<br />
              <span className="text-white/60">LIVE MOMENTS.</span>
            </h1>
          </div>

          <p className="font-sans text-lg sm:text-xl text-white/80 max-w-xl leading-relaxed text-shadow-sm font-light">
            Curated journeys, destination playbooks and travel design for people who want to experience the world more deeply.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
            <button
              onClick={() => { onNavigate('expeditions'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="font-display text-xs font-bold uppercase tracking-widest px-8 py-4 bg-white text-black hover:bg-neutral-200 transition-colors rounded-[2px] cursor-pointer text-center"
            >
              Explore Expeditions
            </button>
            <button
               onClick={() => { onNavigate('membership'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
               className="font-display text-xs font-bold uppercase tracking-widest px-8 py-4 bg-transparent text-white border border-white/30 hover:bg-white/10 transition-colors rounded-[2px] cursor-pointer text-center"
            >
              Become a Member
            </button>
          </div>

        </div>

      </div>

      {/* Bounce Anchor icon scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-60 hover:opacity-100 transition-opacity">
        <span className="font-sans text-[9px] font-bold uppercase tracking-[0.3em] text-white">
          Scroll path
        </span>
        <button 
          onClick={() => {
            const whySect = document.getElementById('why-different-section');
            if (whySect) whySect.scrollIntoView({ behavior: 'smooth' });
          }}
          className="p-2 cursor-pointer text-white animate-bounce"
          aria-label="Scroll Down"
        >
          <ArrowDown size={14} />
        </button>
      </div>

    </header>
  );
}
