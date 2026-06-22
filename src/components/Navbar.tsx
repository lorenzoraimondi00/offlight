/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { ViewPage } from '../types';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  currentPage: ViewPage;
  onNavigate: (page: ViewPage) => void;
  onScrollToContact: () => void;
}

export default function Navbar({ currentPage, onNavigate, onScrollToContact }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page: ViewPage) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleContactClick = () => {
    setIsMobileMenuOpen(false);
    onScrollToContact();
  };

  const links: { label: string; page: ViewPage }[] = [
    { label: 'Expeditions', page: 'expeditions' },
    { label: 'Playbooks', page: 'playbooks' },
    { label: 'Studio', page: 'studio' },
    { label: 'Membership', page: 'membership' },
  ];

  return (
    <>
      <nav
        id="offlight-navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-[72px] flex items-center border-b border-white/10 ${
          isScrolled 
            ? 'bg-[#0A0A0A]/90 backdrop-blur-md shadow-lg shadow-black/30' 
            : 'bg-[#0A0A0A]/80 backdrop-blur-md'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between w-full">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="font-display text-2xl font-black tracking-tight transition-colors select-none cursor-pointer text-white hover:text-white/90"
          >
            OFFLIGHT
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {links.map((link) => (
              <button
                key={link.page}
                onClick={() => handleNavClick(link.page)}
                className={`font-sans text-[11px] font-semibold uppercase tracking-widest transition-opacity cursor-pointer relative py-1 ${
                  currentPage === link.page
                    ? 'opacity-100 text-white font-extrabold'
                    : 'opacity-60 text-white/90 hover:opacity-100'
                }`}
              >
                {link.label}
                {currentPage === link.page && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-white rounded-full" />
                )}
              </button>
            ))}
          </div>

          {/* Right Action Button */}
          <div className="hidden md:flex items-center">
            <button
              onClick={handleContactClick}
              className="font-display text-[11px] font-extrabold h-11 uppercase tracking-widest px-6 bg-white text-black hover:bg-neutral-200 hover:text-black transition-colors duration-200 flex items-center gap-1.5 rounded-[2px] cursor-pointer"
            >
              Tell Us About You
              <ArrowUpRight size={13} className="stroke-[2.5]" />
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-md transition-colors cursor-pointer text-white"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/80 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-y-0 right-0 z-40 w-full max-w-sm bg-[#0E0E0E] border-l border-white/5 p-8 shadow-2xl flex flex-col justify-between transition-transform duration-500 md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="pt-20">
          <p className="font-display text-xs text-white/40 font-bold uppercase tracking-widest mb-8 border-b border-white/10 pb-2">
            Navigation Menu
          </p>
          <div className="flex flex-col space-y-6">
            <button
               onClick={() => handleNavClick('home')}
               className={`font-display text-3xl font-extrabold tracking-tight text-left cursor-pointer ${
                 currentPage === 'home' ? 'text-white' : 'text-white/60'
               }`}
            >
              Home
            </button>
            {links.map((link) => (
              <button
                key={link.page}
                onClick={() => handleNavClick(link.page)}
                className={`font-display text-3xl font-extrabold tracking-tight text-left cursor-pointer ${
                  currentPage === link.page ? 'text-white' : 'text-white/60'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <button
            onClick={handleContactClick}
            className="w-full font-display text-center text-xs font-bold uppercase tracking-widest bg-white text-black py-4 rounded-[2px] hover:bg-neutral-200 transition-colors cursor-pointer flex items-center justify-center gap-2"
          >
            Tell Us About You
            <ArrowUpRight size={16} />
          </button>
          
          <div className="border-t border-white/10 pt-6 text-center">
            <p className="font-sans text-xs text-white/40 uppercase tracking-widest mb-2">
              Get in touch
            </p>
            <a
              href="mailto:hello@weareofflight.com"
              className="font-sans text-sm text-white/80 font-medium hover:underline hover:text-white"
            >
              hello@weareofflight.com
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
