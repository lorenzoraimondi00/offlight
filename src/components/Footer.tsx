/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Instagram, Youtube, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { ViewPage } from '../types';

interface FooterProps {
  onNavigate: (page: ViewPage) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'YouTube', icon: Youtube, href: '#' },
    { name: 'TikTok', icon: null, label: 'TikTok', href: '#' }, // Using label for safety with Lucide imports
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
  ];

  return (
    <footer className="bg-brand-charcoal text-white pt-24 pb-16 border-t border-white/5 font-sans relative overflow-hidden">
      {/* Background visual texture */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(194,178,128,0.05),transparent)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Brand block */}
          <div className="md:col-span-7 space-y-6">
            <button
              onClick={() => {
                onNavigate('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="font-display text-3xl font-extrabold tracking-tighter text-white hover:text-brand-sand transition-colors block text-left cursor-pointer"
            >
              OFFLIGHT.
            </button>
            <p className="font-sans text-sm text-brand-stone max-w-sm leading-relaxed">
              We are not a travel agency. We are not a luxury travel company. 
              We curate real, firsthand journeys to the earth's quietest places for those seeking presence, nature, and true memories.
            </p>
            
            {/* Socials & Email Horizontal Area */}
            <div className="flex flex-wrap items-center gap-x-2.5 gap-y-2 pt-2 text-xs font-semibold uppercase tracking-wider text-brand-stone">
              <a href="#" className="hover:text-white transition-colors" referrerPolicy="no-referrer">Instagram</a>
              <span className="text-white/20 select-none">•</span>
              <a href="#" className="hover:text-white transition-colors" referrerPolicy="no-referrer">YouTube</a>
              <span className="text-white/20 select-none">•</span>
              <a href="#" className="hover:text-white transition-colors" referrerPolicy="no-referrer">TikTok</a>
              <span className="text-white/20 select-none">•</span>
              <a href="#" className="hover:text-white transition-colors" referrerPolicy="no-referrer">LinkedIn</a>
              <span className="text-white/20 select-none">•</span>
              <a
                href="mailto:hello@weareofflight.com"
                className="text-white hover:text-brand-sand transition-colors lowercase font-sans text-sm tracking-normal font-semibold whitespace-nowrap"
              >
                hello@weareofflight.com
              </a>
            </div>
          </div>

          {/* Quick links block */}
          <div className="md:col-span-3 space-y-6">
            <h4 className="font-display text-xs font-bold uppercase tracking-widest text-brand-sand">
              EXPLORE PATHS
            </h4>
            <div className="flex flex-col space-y-3">
              <button
                onClick={() => { onNavigate('expeditions'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="text-sm text-brand-[#C0C0C0] hover:text-white text-left transition-colors cursor-pointer"
              >
                Expeditions
              </button>
              <button
                onClick={() => { onNavigate('playbooks'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="text-sm text-brand-[#C0C0C0] hover:text-white text-left transition-colors cursor-pointer"
              >
                Playbooks
              </button>
              <button
                onClick={() => { onNavigate('studio'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="text-sm text-brand-[#C0C0C0] hover:text-white text-left transition-colors cursor-pointer"
              >
                Private Studio Consulting
              </button>
              <button
                onClick={() => { onNavigate('membership'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="text-sm text-brand-[#C0C0C0] hover:text-white text-left transition-colors cursor-pointer"
              >
                Exclusive Membership
              </button>
            </div>
          </div>

          {/* Philosophy links block with back to top */}
          <div className="md:col-span-2 space-y-6 flex flex-col justify-between">
            <div className="space-y-6">
              <h4 className="font-display text-xs font-bold uppercase tracking-widest text-brand-sand">
                OUR BELIEFS
              </h4>
              <div className="flex flex-col space-y-3">
                <button
                  onClick={() => { onNavigate('field-tested'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="text-sm text-brand-[#C0C0C0] hover:text-white text-left transition-colors cursor-pointer"
                >
                  Field Tested
                </button>
                <button
                  onClick={() => { onNavigate('local-knowledge'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="text-sm text-brand-[#C0C0C0] hover:text-white text-left transition-colors cursor-pointer"
                >
                  Local Knowledge
                </button>
                <button
                  onClick={() => { onNavigate('offlight-mode'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="text-sm text-brand-[#C0C0C0] hover:text-white text-left transition-colors cursor-pointer"
                >
                  Offlight Mode
                </button>
                <button
                  onClick={() => { onNavigate('curated-memories'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="text-sm text-brand-[#C0C0C0] hover:text-white text-left transition-colors cursor-pointer"
                >
                  Curated Memories
                </button>
              </div>
            </div>

            <button
              onClick={handleBackToTop}
              className="mt-8 p-3 rounded-full bg-white/5 border border-white/10 text-brand-stone hover:text-white hover:bg-white/10 transition-all cursor-pointer w-10 h-10 flex items-center justify-center self-start"
              title="Back to Top"
            >
              <ArrowUp size={16} />
            </button>
          </div>

        </div>

        {/* Copy footnote */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-brand-stone uppercase tracking-widest font-semibold">
          <p>© {new Date().getFullYear()} OFFLIGHT. ALL RIGHTS RESERVED.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
