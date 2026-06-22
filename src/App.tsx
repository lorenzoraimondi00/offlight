/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { ViewPage } from './types';

// Importing Custom Views & Sub-components
import Navbar from './components/Navbar';
import HomeHero from './components/HomeHero';
import WhyOfflight from './components/WhyOfflight';
import ChoosePath from './components/ChoosePath';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

import ExpeditionsView from './components/ExpeditionsView';
import PlaybooksView from './components/PlaybooksView';
import StudioView from './components/StudioView';
import MembershipView from './components/MembershipView';
import EditorialPages from './components/EditorialPages';

export default function App() {
  const [page, setPage] = useState<ViewPage>('home');
  const [transitioning, setTransitioning] = useState(false);

  // Hash-based simple reactive routing
  useEffect(() => {
    const handleHashChange = () => {
      const rawHash = window.location.hash.slice(2); // remove #/
      
      const validPages: ViewPage[] = [
        'home', 
        'expeditions', 
        'playbooks', 
        'studio', 
        'membership', 
        'field-tested', 
        'local-knowledge', 
        'offlight-mode', 
        'curated-memories'
      ];
      
      const targetPage = validPages.includes(rawHash as ViewPage) 
        ? (rawHash as ViewPage) 
        : 'home';

      setTransitioning(true);
      setTimeout(() => {
        setPage(targetPage);
        setTransitioning(false);
        window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
      }, 150);
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Run first routing match

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (targetPage: ViewPage) => {
    window.location.hash = targetPage === 'home' ? '#/' : `#/${targetPage}`;
  };

  const handleScrollToContact = () => {
    if (page === 'home') {
      const contactElem = document.getElementById('contact-section');
      if (contactElem) {
        contactElem.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to homepage first
      handleNavigate('home');
      // Wait for paint sequence then scroll
      setTimeout(() => {
        const contactElem = document.getElementById('contact-section');
        if (contactElem) {
          contactElem.scrollIntoView({ behavior: 'smooth' });
        }
      }, 400);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#0A0A0A] text-white overflow-x-hidden font-sans antialiased">
      {/* Primary Sticky Header */}
      <Navbar 
        currentPage={page} 
        onNavigate={handleNavigate} 
        onScrollToContact={handleScrollToContact} 
      />

      {/* Main Content Router with elegant transition layer */}
      <main className={`flex-grow transition-opacity duration-300 ${transitioning ? 'opacity-0' : 'opacity-100'}`}>
        
        {page === 'home' && (
          <div className="space-y-0">
            {/* Immersive cinematic introductory hero banner */}
            <HomeHero 
              onNavigate={handleNavigate} 
              onScrollToContact={handleScrollToContact} 
            />

            {/* Why Offlight is different (4 cards illustrating the manifesto) */}
            <WhyOfflight onNavigate={handleNavigate} />

            {/* Choose your path (Expeditions, Playbooks, Studio + Membership below) */}
            <ChoosePath onNavigate={handleNavigate} />

            {/* Comprehensive Contact Form section */}
            <section className="py-24 px-6 md:px-12 bg-[#0E0E0E] border-t border-white/5">
              <div className="max-w-4xl mx-auto">
                <ContactForm />
              </div>
            </section>
          </div>
        )}

        {page === 'expeditions' && (
          <ExpeditionsView onScrollToContact={handleScrollToContact} />
        )}

        {page === 'playbooks' && (
          <PlaybooksView />
        )}

        {page === 'studio' && (
          <StudioView />
        )}

        {page === 'membership' && (
          <MembershipView />
        )}

        {/* Editorial Pages: Field Tested, Local Knowledge, Offlight Mode, Curated Memories */}
        {page === 'field-tested' && (
          <EditorialPages pageType="field-tested" onNavigate={handleNavigate} />
        )}

        {page === 'local-knowledge' && (
          <EditorialPages pageType="local-knowledge" onNavigate={handleNavigate} />
        )}

        {page === 'offlight-mode' && (
          <EditorialPages pageType="offlight-mode" onNavigate={handleNavigate} />
        )}

        {page === 'curated-memories' && (
          <EditorialPages pageType="curated-memories" onNavigate={handleNavigate} />
        )}

      </main>

      {/* Primary Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
