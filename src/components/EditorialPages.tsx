/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ViewPage } from '../types';
import { MapPin, Camera, ShieldX, Hammer, UserCheck, Mail, Instagram, Compass } from 'lucide-react';

interface EditorialPagesProps {
  pageType: 'field-tested' | 'local-knowledge' | 'offlight-mode' | 'curated-memories';
  onNavigate: (page: ViewPage) => void;
}

export default function EditorialPages({ pageType, onNavigate }: EditorialPagesProps) {
  
  const content = {
    'field-tested': {
      title: 'Field Tested',
      tagline: 'EVERY DESTINATION PERSONALLY SCOUTED',
      intro: 'We do not sell coordinates we have not walked in our own boots.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC1--X2HwNhv_8kFnVvtv9K55YC4pAoUnOwBIaEY20ophTMJuYLVZX8urRXavVsYASO8H7JsY7xkPQF4bwETlmW9Im87Uxmlb6n8b6y-re-NkozLt32uXQ3sdejrK997PM0ccDlHGZxTOhxLg4X9nBAMgoHYurcaNZq1bAS9ZeNOIhMtTTyYmweb1-LsAkSdI_LG_rGlcm6LyB5d-BxVYqwid-Fjl4XE6ITU_J2VkJbvTz-AmXaWVCBPouycHFb2kRxNj7cykiG1ahC',
      icon: Hammer,
      paragraphs: [
        'Offlight was founded on a simple, uncompromising truth: you cannot design a deep travel experience from a web browser. Most modern travel packages are assembled via algorithm crawls, Instagram trends, and wholesale lodging agreements. The result is tourism without texture.',
        'We work differently. Before a single explorer enters a valley with Offlight, our founders and design scouts spend weeks on the ground. We sleep in the local cabins, map the secondary forest pathways, track local wind patterns, and meet the farmers who maintain the boundaries of the terrain.',
        'We measure our scouting by days spent off-network. We test gear durability, evaluate physical route strain factors, assess microclimate changes, and ensure the local guides we partner with align completely with our values of environmental respect and slow exploration. Firsthand exploration is not a luxury option—it is our absolute floor.',
      ]
    },
    'local-knowledge': {
      title: 'Local Knowledge',
      tagline: 'NOT RESEARCH. RELATIONSHIPS.',
      intro: 'We partner directly with the custodians of the landscape.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBDNVs-lCtFgFRj2ELajqszhJPsXZqo6hJtUXyq9oymhV_K4arxqaApFi61EhIH7T_I6iqBage3U-gphHxrR4gnFGf65qSQ5z0EjAz4eCHpw6sd6RdJCWW_iFxq_-O55CR315rjAvrEuxI9RCyRN8RphPp2SPklijqBQ33Z7KnSZhqhQ-tiMZxWHVwQNxQ5XStOvjS5dXlK6Nt4DVOBHwSf3YaRbcRjOIv99cU_JYuUYzl7BOpzrHd7rqCWpWindLkoXOLBy9yw7gqu',
      icon: UserCheck,
      paragraphs: [
        'A map can tell you where a river is. Only local knowledge can tell you which week the glacial melt turns the current sapphire blue, or which shelter offers dry wood during an unexpected north-easter wind.',
        'We do not hire standard tourist agencies. We build direct, mutual relationships with third-generation mountain farmers, sub-tropical lighthouse keepers, desert nomad families, and remote marine surveyors. These key partners are not service providers to us; they are the true authors of the travel experience.',
        'This direct relationship ensures that your presence supports the real local economy, respects cultural boundaries, and avoids shallow tourist loops. From eating fresh sheep-cheese inside alpine barns to boarding classic wooden boats with the craftsmen who built them, we invite you into the world as a respected peer, never a simple spectator.',
      ]
    },
    'offlight-mode': {
      title: 'Offlight Mode',
      tagline: 'DISCONNECT TO RECONNECT',
      intro: 'We collect your digital inputs so you can give your eyes back to the horizon.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC6CeCxlJd6GZ8cFWJWgjT5mV6vkLsuDsEAkJY5aHHPz5SKqfg5On9TjsImqYvAKtURxSGWjeM5gBdSlii0Ss7iNRnoJCgzcbr245IHEmmOT_r6RlD-dGwU9po-wmJbFS5W5NbQ6Yzw4bAZGQmOzgaY_xQ9EHc-s3Lm0nRFHtQoMuRmkemcEteBH0b1afZeq0-n34mQ9hPfhD4fvVhi_8qpUAa3ZspSdq3j6EYFRKgs6nPJnZNtjNIN9O_DDSL6cUD24uKyzhZ8GdGh',
      icon: ShieldX,
      paragraphs: [
        'The modern traveler does not see the world. They see a frame through which they can show the world they are there. When every peak is valued for its pixel output or social reach, we trade depth for status. We are here to reclaim presence.',
        'At the initial gate of every Offlight expedition, participants are invited to power down their mobile devices. They are safely enclosed inside a tailored vault at basecamp, managed securely by our field surveyors. Extreme contact emergency numbers are shared with family members before launch to keep your mind completely secure.',
        'Removing the constant ping of notifications, work feeds, and feed timelines creates an initial physical decompression. For the first 24 hours, you may feel an phantom reach toward your pocket. By day three, you will find your hearing is sharper, your focus is deep, and your connection with your travel companions has transitioned from light-talk to genuine memory integration.',
      ]
    },
    'curated-memories': {
      title: 'Curated Memories',
      tagline: 'ANALOG CHRONICLES, REAL PRESENCE',
      intro: 'A dedicated photographer documents the expedition so you don’t have to.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDC9Rh1owdOcJTtei3MBmhIhWtdF48N4OJFg8OcGBBm7AClkJ2AcK0AQM3c_wJ8ioBBNeY5Qg79geB_Wfh8JzN0j3tPcxKkvcnATNkOhPg3Pmk5UNmBg4ht5jJ_G_WAPAv3O7giSTqPcBCoQb2ZscuXjKYoDAYHwFIpHAyzY7FLkcL8gKhpp99sBpkCWTFrl55DnfFXfVcS4dwl7T3RAVGCyFQnAOAPQC1rHVVgpIUJlUgWO3k_Uzp9jGbRPJJX19WYQfABlehazT5Y',
      icon: Camera,
      paragraphs: [
        'By locking away the phone, we do not lock away the record. We believe beautiful landscapes deserve beautiful preservation. However, we believe that documentation should never interrupt the raw feeling of standing in front of a canyon at dawn.',
        'Every Offlight journey includes a professional editorial photographer. Traveling as a member of the group, they document the exploration on organic medium-format film, focusing on candid human presence, authentic geological textures, and physical action. All physical film is developed, scanned, and delivered directly to you after the journey at no additional cost.',
        'Furthermore, we distribute vintage mechanical cameras (35mm point-and-shoots and VHS handy-cams) directly to our travelers. Clicking a heavy shutter or zooming a vintage lens invites a playful, physical engagement with framing. There are no screens to review, no filters to tune. You hold the camera, press the mechanical switch, and return your body to the wind.',
      ]
    }
  };

  if (pageType === 'field-tested') {
    return (
      <div id="field-tested-detail" className="bg-[#0A0A0A] min-h-screen text-white select-none relative pb-28">
        
        {/* 1. Large Cinematic Hero Header */}
        <header className="relative pt-32 pb-24 md:pt-40 md:pb-32 px-6 md:px-12 bg-[#0A0A0A] overflow-hidden border-b border-white/5 animate-fade-in">
          {/* Underlay with deep parallax opacity */}
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-luminosity"
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&q=80&w=1600')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/85 to-[#0A0A0A]/40" />

          <div className="relative z-10 max-w-4xl mx-auto space-y-6 text-left">
            <button 
              id="back-to-compass-btn"
              onClick={() => { onNavigate('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="font-mono text-[10px] text-[#E5D5B0] font-bold uppercase tracking-[0.2em] hover:underline cursor-pointer flex items-center gap-1.5"
            >
              ← BACK TO COMPASS
            </button>
            
            <div className="space-y-4">
              <h1 id="field-tested-title" className="font-display text-5xl sm:text-6xl md:text-8xl font-black tracking-tighter leading-none text-white pt-4">
                Field Tested
              </h1>
              <p id="field-tested-subtitle" className="font-sans text-lg sm:text-xl md:text-2xl text-white/90 font-light !leading-relaxed max-w-3xl pt-2 border-l border-[#E5D5B0]/30 pl-5">
                We don't recommend places because they look good online. <br className="hidden md:inline" />We recommend them because we've been there.
              </p>
            </div>
          </div>
        </header>

        {/* 2. Introduction Section: Disappointment and the Reality Check */}
        <section id="field-tested-intro-section" className="py-24 px-6 md:px-12 max-w-4xl mx-auto space-y-12">
          <div className="text-left space-y-6">
            <h2 className="font-display text-2xl md:text-3xl font-black text-[#E5D5B0] tracking-tight">
              How many times have you been disappointed by a place?
            </h2>
            
            <div className="space-y-4 font-sans text-sm text-white/80 leading-relaxed pl-4 border-l-2 border-[#E5D5B0]/10">
              <p>Maybe it was far more crowded than expected.</p>
              <p>Maybe it wasn't worth the money you spent to get there.</p>
              <p>Maybe it looked incredible in photos but felt completely ordinary in real life.</p>
              <p>Maybe you followed a list of "Top 10 Things To Do" and ended up having the exact same experience as everyone else.</p>
            </div>
            
            <div className="pt-8 text-left">
              <p className="font-sans text-base md:text-lg font-bold text-white leading-relaxed bg-white/5 border border-white/10 px-6 py-5 rounded-[2px]">
                The problem is that once you're there, it's too late. You've already spent your time, money and energy.
              </p>
            </div>
          </div>
        </section>

        {/* 3. Comparative Section: Research vs Approach */}
        <section id="comparison-analysis-section" className="py-20 bg-[#0D0D0D] border-y border-white/5 px-6 md:px-12">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
            
            {/* The problem column */}
            <div className="space-y-6">
              <h3 className="font-display text-2xl font-black text-white tracking-tight">
                The Problem with Modern Travel Research
              </h3>
              <p className="font-sans text-sm text-white/70 leading-relaxed">
                Most people now plan trips through social media, short-form videos, generic travel blogs, AI-generated itineraries, and "Best Things To Do In..." articles.
              </p>
              <p className="font-sans text-sm text-white/70 leading-relaxed">
                These sources are useful for inspiration but often fail to answer the most important question:
              </p>
              <div className="pt-4 border-t border-white/10 space-y-4">
                <div className="flex items-start gap-4">
                  <span className="font-mono text-sm text-[#E5D5B0] font-bold line-through shrink-0 opacity-60">Not:</span>
                  <span className="font-sans text-sm text-white/50 italic">Is it famous?</span>
                </div>
                <div className="flex items-start gap-4">
                  <span className="font-mono text-sm text-[#E5D5B0] font-bold line-through shrink-0 opacity-60">Not:</span>
                  <span className="font-sans text-sm text-white/50 italic">Is it photogenic?</span>
                </div>
                <div className="flex items-start gap-4">
                  <span className="font-mono text-sm text-[#E5D5B0] font-bold shrink-0">But:</span>
                  <span className="font-sans text-sm text-white font-bold tracking-tight">
                    Why should that be worth it? Why should I go there?
                  </span>
                </div>
              </div>
            </div>

            {/* The Offlight approach column */}
            <div className="space-y-6 border-t md:border-t-0 md:border-l border-white/10 pt-10 md:pt-0 md:pl-10">
              <h3 className="font-display text-2xl font-black text-white tracking-tight">
                The Offlight Approach
              </h3>
              <p className="font-sans text-sm text-white/70 leading-relaxed">
                Meet our founder, <strong className="text-[#E5D5B0] font-bold font-display">Lorenzo Raimondi</strong>. Every destination, route, accommodation, activity and recommendation is personally explored before being included in an Offlight journey or playbook.
              </p>
              <p className="font-sans text-sm text-white/70 leading-relaxed">
                The goal is not to create a checklist. The goal is to understand:
              </p>
              <ul className="grid grid-cols-1 gap-2.5 font-sans text-xs text-white/80">
                {[
                  "What is actually worth doing and why",
                  "What is overrated",
                  "What season works best",
                  "What mistakes to avoid",
                  "Where to stay",
                  "Where to eat",
                  "How to move around efficiently",
                  "Which experiences create lasting memories",
                  "Which experiences only look good online"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 leading-normal">
                    <span className="text-[#E5D5B0] mt-1 shrink-0 select-none">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="font-sans text-xs text-white/50 leading-relaxed pt-2">
                We make it clear that recommendations are never influenced by sponsorships, commissions or hidden incentives. We recommend places because we genuinely believe they deserve a place in someone's journey. Nothing else.
              </p>
            </div>

          </div>
        </section>

        {/* 4. Follow the Journey (Instagram focus) Section */}
        <section id="follow-journey-section" className="py-24 px-6 md:px-12 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-[#0D0D0D] border border-white/10 rounded-[2px] overflow-hidden">
            
            {/* Visual element */}
            <div className="md:col-span-5 h-64 md:h-full relative overflow-hidden min-h-[320px]">
              <img 
                src="https://images.unsplash.com/photo-1486916856992-e4db22c8df33?auto=format&fit=crop&q=80&w=800" 
                alt="Lorenzo Raimondi - Exploration scouting" 
                className="w-full h-full object-cover grayscale opacity-85 hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/95 via-transparent to-transparent" />
            </div>

            {/* Text element */}
            <div className="md:col-span-7 p-8 md:p-10 space-y-6 text-left">
              <h3 id="follow-exploration-heading" className="font-display text-2xl md:text-3xl font-black text-white tracking-tight">
                Follow The Exploration
              </h3>
              <p className="font-sans text-sm text-white/70 leading-relaxed">
                Every recommendation begins with real-world exploration. Follow Lorenzo Raimondi's journeys around the world as he scouts destinations, tests routes, discovers local businesses and evaluates experiences before they ever appear inside an Offlight journey or playbook.
              </p>
              
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-6">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-[#0A0A0A] border border-white/5 rounded-sm">
                  <Instagram size={14} className="text-[#E5D5B0] shrink-0" />
                  <span className="font-mono text-xs font-bold text-white tracking-wide">@weareofflight</span>
                </div>
                
                <a 
                  id="follow-lorenzo-btn"
                  href="https://www.instagram.com/weareofflight" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-display text-xs font-bold uppercase tracking-widest px-6 py-3.5 bg-white text-black hover:bg-[#E5D5B0] transition-colors rounded-[2px] text-center"
                >
                  Follow The Exploration
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* 5. Closing Message with Deep Premium Aesthetic */}
        <section id="closing-manifest-section" className="py-20 bg-[#070707] border-t border-white/5 px-6 md:px-12 text-center">
          <div className="max-w-2xl mx-auto space-y-8">
            <div className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-white/95 leading-relaxed space-y-6">
              <p>We don't test destinations to create content.</p>
              <p>We test destinations to understand whether they're worth your time.</p>
              <p>Because time is the one thing no traveler ever gets back.</p>
            </div>
            <div className="pt-4">
              <button 
                id="ft-return-home-btn"
                onClick={() => { onNavigate('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="font-display text-xs font-bold uppercase tracking-widest px-8 py-4 bg-white/5 border border-white/10 text-white hover:bg-white/15 transition-colors cursor-pointer rounded-[2px]"
              >
                Return to Compass
              </button>
            </div>
          </div>
        </section>

      </div>
    );
  }

  if (pageType === 'local-knowledge') {
    return (
      <div id="local-knowledge-detail" className="bg-[#0A0A0A] min-h-screen text-white select-none relative pb-28 animate-fade-in">
        
        {/* 1. Large Cinematic Hero Header */}
        <header className="relative pt-32 pb-24 md:pt-40 md:pb-32 px-6 md:px-12 bg-[#0A0A0A] overflow-hidden border-b border-white/5">
          {/* Underlay with deep parallax opacity (Misty mountain landscape, no technical maps or text) */}
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-luminosity"
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1600')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/85 to-[#0A0A0A]/40" />

          <div className="relative z-10 max-w-4xl mx-auto space-y-6 text-left">
            <button 
              id="back-to-compass-btn-lk"
              onClick={() => { onNavigate('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="font-mono text-[10px] text-[#E5D5B0] font-bold uppercase tracking-[0.2em] hover:underline cursor-pointer flex items-center gap-1.5"
            >
              ← BACK TO COMPASS
            </button>
            
            <div className="space-y-4">
              <h1 id="local-knowledge-title" className="font-display text-5xl sm:text-6xl md:text-8xl font-black tracking-tighter leading-none text-white pt-4">
                Local Knowledge
              </h1>
              <p id="local-knowledge-subtitle" className="font-sans text-lg sm:text-xl md:text-2xl text-white/90 font-light !leading-relaxed max-w-3xl pt-2 border-l border-[#E5D5B0]/30 pl-5">
                The best part of a destination is rarely the first thing you find online.
              </p>
            </div>
          </div>
        </header>

        {/* 2. Introduction Section */}
        <section id="local-knowledge-intro-section" className="py-24 px-6 md:px-12 max-w-4xl mx-auto space-y-12 bg-[#0A0A0A]">
          <div className="text-left space-y-6">
            <h2 className="font-display text-2xl md:text-3xl font-black text-[#E5D5B0] tracking-tight">
              How many times have you searched:
            </h2>
            
            <ul className="space-y-3 font-mono text-sm text-[#E5D5B0] pl-4 border-l-2 border-[#E5D5B0]/30">
              <li>• Best restaurant in...</li>
              <li>• Best things to do in...</li>
              <li>• Best tour in...</li>
              <li>• Best viewpoint in...</li>
            </ul>

            <p className="font-sans text-base text-white/80 leading-relaxed pt-4">
              Only to discover later that the top results were designed more for tourists than for travelers?
            </p>
            
            <div className="space-y-4 font-sans text-sm text-white/70 leading-relaxed pl-4 border-l-2 border-white/10">
              <p>Maybe it was a 30-minute panoramic tour sold at an absurd price when the same route could have been experienced using normal public transport.</p>
              <p>Maybe it was a restaurant promising authenticity that ended up serving one of the most generic meals of the entire trip.</p>
            </div>
            
            <div className="pt-8 text-left">
              <p className="font-sans text-base md:text-lg font-bold text-white leading-relaxed bg-white/5 border border-white/10 px-6 py-5 rounded-[2px]">
                The problem is not that these places are necessarily bad. <br className="hidden sm:inline" />
                The problem is that they are often optimized for visibility rather than quality.
              </p>
            </div>
          </div>
        </section>

        {/* 3. Think About Where You Live Section */}
        <section id="think-where-you-live-section" className="py-20 bg-[#0A0A0A] px-6 md:px-12 text-left">
          <div className="max-w-4xl mx-auto space-y-10">
            <div className="space-y-4">
              <h3 className="font-display text-2xl md:text-3xl font-black text-white tracking-tight">
                Think about where you live.
              </h3>
              <p className="font-sans text-sm text-white/70">
                You probably know:
              </p>
            </div>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 font-sans text-sm text-white/80">
              {[
                "Where to eat well",
                "Which cafés are actually worth visiting",
                "Which places locals genuinely love",
                "Where to go for a beautiful walk",
                "Which viewpoints are worth the detour",
                "Where to spend an evening with friends",
                "Which places tourists rarely discover"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 bg-white/5 border border-white/5 px-5 py-4 rounded-[2px]">
                  <span className="text-[#E5D5B0] font-bold select-none">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-8 space-y-4 border-t border-white/10 max-w-2xl">
              <p className="font-sans text-sm text-white/70 leading-relaxed">
                Now imagine someone planning a trip to your city entirely through search engines and social media.
              </p>
              <p className="font-sans text-base font-bold text-[#E5D5B0]">
                Would they end up experiencing the best version of it? Probably not.
              </p>
            </div>
          </div>
        </section>

        {/* 4. The Offlight Approach (Relationships with Locals) */}
        <section id="offlight-approach-relationships" className="py-24 px-6 md:px-12 max-w-4xl mx-auto space-y-12 text-left bg-[#0A0A0A]">
          <div className="space-y-6">
            <h3 className="font-display text-2xl md:text-3xl font-black text-white tracking-tight">
              The Offlight Approach
            </h3>
            <p className="font-sans text-sm text-white/70 leading-relaxed">
              One of the biggest advantages of exploring destinations personally is the opportunity to build relationships with local people. Throughout our travels we meet:
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              {[
                "Local guides",
                "Restaurant owners",
                "Hotel operators",
                "Outdoor professionals",
                "Drivers",
                "Explorers",
                "Small business owners",
                "Residents"
              ].map((partner, idx) => (
                <div key={idx} className="p-4 bg-white/5 border border-white/10 rounded-[2px] text-center">
                  <span className="font-mono text-xs text-[#E5D5B0] font-bold block">{partner}</span>
                </div>
              ))}
            </div>

            <p className="font-sans text-xs text-white/50 text-center leading-relaxed">
              ...and residents who know the area better than any guidebook ever could.
            </p>

            <div className="pt-8 space-y-4 border-l-2 border-[#E5D5B0]/35 pl-6 max-w-2xl">
              <p className="font-sans text-sm text-white/70 leading-relaxed">
                These relationships often become the difference between a good trip and an unforgettable one.
              </p>
              <p className="font-sans text-sm text-white/80 leading-relaxed font-semibold">
                Not because they provide exclusive access.
              </p>
              <p className="font-sans text-sm text-white/70 leading-relaxed">
                But because they provide context, perspective and recommendations that only come from living a place every day.
              </p>
            </div>
          </div>
        </section>

        {/* 5. How Offlight uses Local Knowledge Segment with photo */}
        <section id="how-offlight-uses-knowledge" className="py-20 bg-[#0A0A0A] px-6 md:px-12 text-left">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-white/5 border border-white/10 rounded-[2px] overflow-hidden">
            
            {/* Visual element */}
            <div className="md:col-span-5 h-64 md:h-full relative overflow-hidden min-h-[300px]">
              <img 
                src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800" 
                alt="Local workshop dinner table" 
                className="w-full h-full object-cover grayscale opacity-80 hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/95 via-transparent to-transparent" />
            </div>

            {/* Content element */}
            <div className="md:col-span-7 p-8 md:p-10 space-y-6">
              <h3 className="font-display text-2xl md:text-3xl font-black text-white tracking-tight">
                How Offlight Uses Local Knowledge
              </h3>
              <p className="font-sans text-sm text-white/70 leading-relaxed">
                Offlight combines firsthand exploration with trusted local relationships to build:
              </p>
              
              <ul className="space-y-2 font-mono text-xs text-[#E5D5B0] font-bold">
                <li className="flex items-center gap-2"><span>•</span> BETTER JOURNEYS</li>
                <li className="flex items-center gap-2"><span>•</span> BETTER PLAYBOOKS</li>
                <li className="flex items-center gap-2"><span>•</span> BETTER RECOMMENDATIONS</li>
              </ul>

              <p className="font-sans text-sm text-white/80 leading-relaxed pt-2 border-t border-white/5">
                The goal is simple: To help travelers spend less time navigating tourist traps and more time experiencing places as they truly are.
              </p>
            </div>

          </div>
        </section>

        {/* 6. Closing reflective block with Same typography */}
        <section id="closing-local-knowledge-message" className="py-20 bg-[#0A0A0A] px-6 md:px-12 text-center">
          <div className="max-w-2xl mx-auto space-y-8">
            <div className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-white/95 leading-relaxed space-y-6">
              <p>The internet can tell you what is popular.</p>
              <p>Locals can tell you what is worth your time.</p>
              <p>The best journeys usually begin where search results end.</p>
            </div>
            
            <div className="pt-4">
              <button 
                id="ft-return-home-btn"
                onClick={() => { onNavigate('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="font-display text-xs font-bold uppercase tracking-widest px-8 py-4 bg-white/5 border border-white/10 text-white hover:bg-white/15 transition-colors cursor-pointer rounded-[2px]"
              >
                Return to Compass
              </button>
            </div>
          </div>
        </section>

      </div>
    );
  }

  if (pageType === 'offlight-mode') {
    return (
      <div id="offlight-mode-detail" className="bg-[#0A0A0A] min-h-screen text-white select-none relative pb-28 animate-fade-in">
        
        {/* 1. Large Cinematic Hero Header */}
        <header className="relative pt-32 pb-24 md:pt-40 md:pb-32 px-6 md:px-12 bg-[#0A0A0A] overflow-hidden border-b border-white/5">
          {/* Underlay with deep parallax opacity */}
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-luminosity"
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1600')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/85 to-[#0A0A0A]/40" />

          <div className="relative z-10 max-w-4xl mx-auto space-y-6 text-left">
            <button 
              id="back-to-compass-btn-om"
              onClick={() => { onNavigate('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="font-mono text-[10px] text-[#E5D5B0] font-bold uppercase tracking-[0.2em] hover:underline cursor-pointer flex items-center gap-1.5"
            >
              ← BACK TO COMPASS
            </button>
            
            <div className="space-y-4">
              <h1 id="offlight-mode-title" className="font-display text-5xl sm:text-6xl md:text-8xl font-black tracking-tighter leading-none text-white pt-4">
                Offlight Mode
              </h1>
              <p id="offlight-mode-subtitle" className="font-sans text-lg sm:text-xl md:text-2xl text-white/95 font-light !leading-relaxed max-w-3xl pt-2 border-l border-[#E5D5B0]/30 pl-5">
                A different way of traveling. <br className="hidden sm:inline" />Or perhaps the way it was always meant to be.
              </p>
            </div>
          </div>
        </header>

        {/* 2. Opening Reflection Section */}
        <section id="offlight-mode-reflection-section" className="py-24 px-6 md:px-12 max-w-4xl mx-auto space-y-12">
          <div className="text-left space-y-8">
            <h2 className="font-display text-2xl md:text-3.5xl font-black text-white tracking-tight leading-snug">
              When was the last time you experienced something beautiful without reaching for your phone?
            </h2>

            <div className="space-y-6 font-sans text-base text-white/80 leading-relaxed">
              <p>For many people, the first instinct is no longer to experience the moment.</p>
              <p className="font-bold text-white text-lg">It's to document it.</p>
              
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 pt-4 text-center font-mono text-[10px] text-white/60 font-semibold tracking-wider">
                <div className="p-3 bg-white/5 border border-white/5 rounded-sm">WE PULL OUT PHONES</div>
                <div className="p-3 bg-white/5 border border-white/5 rounded-sm">WE TAKE PHOTOS</div>
                <div className="p-3 bg-white/5 border border-white/5 rounded-sm">WE RECORD VIDEOS</div>
                <div className="p-3 bg-white/5 border border-white/5 rounded-sm">WE SAVE TO GALLERY</div>
                <div className="col-span-2 sm:col-span-1 p-3 bg-white/5 border border-white/5 rounded-sm">WE POST THEM ONLINE</div>
              </div>

              <p className="pt-4 text-white/70">
                And without realizing it, we often stop fully experiencing the very thing we wanted to remember.
              </p>
            </div>
          </div>
        </section>

        {/* 3. The Modern Travel Paradox Section */}
        <section id="modern-travel-paradox-section" className="py-20 bg-[#0D0D0D] border-y border-white/5 px-6 md:px-12 text-left">
          <div className="max-w-4xl mx-auto space-y-10">
            <div className="space-y-4">
              <h3 className="font-display text-2xl md:text-3xl font-black text-white tracking-tight">
                The Modern Travel Paradox
              </h3>
              <p className="font-sans text-base text-white/80 leading-relaxed">
                We spend thousands to travel somewhere extraordinary. Then we arrive and spend half the trip looking at the destination through a screen.
              </p>
            </div>

            <div className="space-y-4 max-w-2xl">
              <p className="font-sans text-sm text-[#E5D5B0] font-semibold">
                We search for adventure. Yet we travel with:
              </p>
              
              <ul className="space-y-2 font-mono text-xs text-white/70 pl-2">
                <li className="flex items-center gap-2">
                  <span className="text-red-500 font-bold">✕</span> GPS telling us exactly where to go
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-red-500 font-bold">✕</span> Translators instantly converting every conversation into our own language
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-red-500 font-bold">✕</span> Spotify playing the same playlists we listen to at home
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-red-500 font-bold">✕</span> Social media feeding us the same content we see every day
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-red-500 font-bold">✕</span> Emails, notifications and messages following us everywhere
                </li>
              </ul>
            </div>

            <p className="font-display text-lg font-bold text-[#E5D5B0] pt-6 border-t border-white/5">
              There is not much adventure in that.
            </p>
          </div>
        </section>

        {/* 4. What Is Offlight Mode Section */}
        <section id="what-is-offlight-mode" className="pt-24 pb-8 px-6 md:px-12 max-w-4xl mx-auto space-y-8 text-left">
          <div className="space-y-6">
            <h3 className="font-display text-2xl md:text-4xl font-black text-white tracking-tight leading-tight">
              What is Offlight Mode?
            </h3>
            <p className="font-sans text-base text-white/80 leading-relaxed max-w-2xl">
              Offlight Mode is not a new way of traveling. In many ways, it is the old way of traveling.
            </p>
            <p className="font-sans text-sm text-white/60 leading-relaxed max-w-xl">
              The way people explored before they were permanently connected.
            </p>
          </div>
        </section>

        {/* 5. How It Works & What Changes Layout */}
        <section id="how-it-works-changes" className="pt-12 pb-20 bg-[#0D0D0D] border-y border-white/5 px-6 md:px-12 text-left">
          <div className="max-w-4xl mx-auto space-y-14">
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-[#0A0A0A] border border-white/10 rounded-[2px] overflow-hidden">
              <div className="md:col-span-5 h-64 md:h-full relative overflow-hidden min-h-[300px]">
                <img 
                  src="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&q=80&w=800" 
                  alt="Campfire under mountain range" 
                  className="w-full h-full object-cover grayscale opacity-75 hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/95 via-transparent to-transparent" />
              </div>

              <div className="md:col-span-7 p-8 md:p-10 space-y-6">
                <h3 className="font-display text-2xl md:text-3xl font-black text-white tracking-tight">
                  How It Works
                </h3>
                <p className="font-sans text-xs text-white/70 leading-relaxed">
                  During Offlight Expeditions, participants enter Offlight Mode. Upon arrival, phones are collected and stored securely.
                </p>
                <p className="font-sans text-xs text-white/70 leading-relaxed">
                  Except for emergencies and a few optional moments specifically designated for phone use, devices remain stored until the end of the journey.
                </p>
                <div className="pt-2 flex flex-wrap gap-2 font-mono text-[9px] text-[#E5D5B0] font-bold">
                  <span className="bg-white/5 px-2.5 py-1 rounded-[1px] border border-white/5">NO SOCIAL MEDIA</span>
                  <span className="bg-white/5 px-2.5 py-1 rounded-[1px] border border-white/5">NO EMAILS</span>
                  <span className="bg-white/5 px-2.5 py-1 rounded-[1px] border border-white/5">NO GOOGLE MAPS</span>
                  <span className="bg-white/5 px-2.5 py-1 rounded-[1px] border border-white/5">NO SPOTIFY</span>
                  <span className="bg-white/5 px-2.5 py-1 rounded-[1px] border border-white/5">NO MESSAGES</span>
                </div>
              </div>
            </div>

            {/* What Changes Text Segment */}
            <div className="space-y-6 pt-6">
              <h3 className="font-display text-2xl md:text-3xl font-black text-white tracking-tight">
                What Changes?
              </h3>
              <p className="font-sans text-base text-white/80 leading-relaxed max-w-2xl">
                Without a phone, something unexpected happens. You begin to notice things again.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-left">
                {[
                  "The music of a street performer.",
                  "A conversation with a local.",
                  "The sound of the ocean.",
                  "The landscape outside the car window.",
                  "The people traveling beside you.",
                  "The small moments that usually disappear behind notifications."
                ].map((notice, idx) => (
                  <div key={idx} className="p-4 border-l border-[#E5D5B0]/40 bg-[#0A0A0A]">
                    <p className="font-sans text-xs text-white/80 leading-relaxed">{notice}</p>
                  </div>
                ))}
              </div>

              <p className="font-sans text-base text-[#E5D5B0] font-bold md:text-lg text-left pt-4">
                You stop documenting every experience. And start living it.
              </p>
            </div>

          </div>
        </section>

        {/* 6. No Photos. No Videos. No Memories? Transition Section */}
        <section id="no-memories-transition-section" className="py-24 px-6 md:px-12 max-w-4xl mx-auto text-left space-y-8">
          <div className="space-y-4">
            <h3 className="font-display text-2xl md:text-3xl font-black text-white tracking-tight">
              No Photos. No Videos. No Memories?
            </h3>
            <p className="font-sans text-base text-white/85 leading-relaxed max-w-2xl">
              Not exactly.
            </p>
            <p className="font-sans text-sm text-white/70 leading-relaxed max-w-2xl">
              We know how important it is to return home with meaningful memories from a journey.
            </p>
            <p className="font-sans text-sm text-white/70 leading-relaxed max-w-2xl">
              That's why we've built a dedicated approach to documenting Offlight Expeditions without taking participants out of the moment.
            </p>
          </div>

          <div className="pt-6 border-t border-white/10 max-w-2xl flex flex-wrap items-center gap-3">
            <span className="font-sans text-sm text-[#E5D5B0] font-medium flex items-center gap-2">
              Learn more in →
            </span>
            <button 
              id="explore-memories-btn-om"
              onClick={() => { onNavigate('curated-memories'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="font-display text-[10px] sm:text-xs font-bold uppercase tracking-widest px-5 py-3.5 bg-white/5 border border-white/10 text-white hover:bg-white/15 transition-colors cursor-pointer rounded-[2px]"
            >
              Curated Memories
            </button>
          </div>
        </section>

        {/* 7. Closing message exactly mimicking editorial guidelines */}
        <section id="closing-offlight-mode-message" className="py-20 bg-[#070707] border-t border-white/5 px-6 md:px-12 text-center">
          <div className="max-w-2xl mx-auto space-y-8">
            <div className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-white/95 leading-relaxed space-y-6">
              <p>You can always check your notifications later.</p>
              <p>You cannot relive a moment you never truly experienced.</p>
              <p>Offlight Mode exists to help travelers disconnect from the everyday.</p>
              <p>And reconnect with the world.</p>
            </div>
            
            <div className="pt-4">
              <button 
                id="ft-return-home-btn"
                onClick={() => { onNavigate('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="font-display text-xs font-bold uppercase tracking-widest px-8 py-4 bg-white/5 border border-white/10 text-white hover:bg-white/15 transition-colors cursor-pointer rounded-[2px]"
              >
                Return to Compass
              </button>
            </div>
          </div>
        </section>

      </div>
    );
  }

  if (pageType === 'curated-memories') {
    return (
      <div id="curated-memories-detail" className="bg-[#0A0A0A] min-h-screen text-white select-none relative pb-28 animate-fade-in">
        
        {/* 1. Large Cinematic Hero Header */}
        <header className="relative pt-32 pb-24 md:pt-40 md:pb-32 px-6 md:px-12 bg-[#0A0A0A] overflow-hidden border-b border-white/5">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-luminosity"
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1542401886-65d6c61db217?auto=format&fit=crop&q=80&w=1600')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/85 to-[#0A0A0A]/40" />

          <div className="relative z-10 max-w-4xl mx-auto space-y-6 text-left">
            <button 
              id="back-to-compass-btn-mi"
              onClick={() => { onNavigate('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="font-mono text-[10px] text-[#E5D5B0] font-bold uppercase tracking-[0.2em] hover:underline cursor-pointer flex items-center gap-1.5"
            >
              ← BACK TO COMPASS
            </button>
            
            <div className="space-y-4">
              <h1 id="curated-memories-title" className="font-display text-5xl sm:text-6xl md:text-8xl font-black tracking-tighter leading-none text-white pt-4">
                Curated Memories
              </h1>
              <p id="curated-memories-subtitle" className="font-sans text-lg sm:text-xl md:text-2xl text-white/95 font-light !leading-relaxed max-w-3xl pt-2 border-l border-[#E5D5B0]/30 pl-5">
                Be present now. <br className="hidden sm:inline" />We'll take care of the memories.
              </p>
            </div>
          </div>
        </header>

        {/* 2. Opening Reflection Section */}
        <section id="curated-memories-intro-section" className="py-24 px-6 md:px-12 max-w-4xl mx-auto space-y-8 text-left">
          <div className="space-y-6 font-sans text-base sm:text-lg text-white/90 leading-relaxed max-w-2xl font-light">
            <p>We know how special it is to come home from a journey with meaningful memories.</p>
            <p className="text-[#E5D5B0]">A beautiful photograph.</p>
            <p className="text-[#E5D5B0]">A video of a special moment.</p>
            <p className="text-[#E5D5B0]">A smile you had forgotten about.</p>
            <p className="text-[#E5D5B0]">A sunset shared with people who started the trip as strangers and ended it as friends.</p>
            <p className="font-semibold text-white text-lg sm:text-xl pt-4">Memories matter.</p>
            <p className="text-white/80">That's why we take care of them into every Offlight Expedition.</p>
          </div>
        </section>

        {/* 3. Professional Photography Section */}
        <section id="professional-photography-section" className="py-20 bg-[#0D0D0D] border-y border-white/5 px-6 md:px-12 text-left">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            <div className="md:col-span-5 h-64 md:h-full relative overflow-hidden min-h-[300px] border border-white/10 rounded-[2px]">
              <img 
                src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=800" 
                alt="Grainy scenery" 
                className="w-full h-full object-cover grayscale opacity-75"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="md:col-span-7 p-2 md:p-6 space-y-6">
              <span className="font-mono text-[9px] text-[#E5D5B0] font-bold tracking-widest block font-sans">AUTHENTIC EXPEDITIONS</span>
              <h3 className="font-display text-2xl md:text-3xl font-black text-white tracking-tight">
                Professional Photography
              </h3>
              <div className="space-y-4 font-sans text-xs sm:text-sm text-white/80 leading-relaxed">
                <p>Every Offlight Expedition includes a professional photographer traveling alongside the group.</p>
                <p>This allows participants to remain fully present throughout the journey while still returning home with beautiful photographs and videos.</p>
                <p>The result is a collection of memories that genuinely reflects the experience rather than a camera roll full of rushed snapshots.</p>
                <p>These images become part of the story of the journey. A reminder of places explored, people met and moments truly lived.</p>
              </div>
            </div>

          </div>
        </section>

        {/* 4. Why It Matters Section */}
        <section id="why-it-matters-section" className="py-24 px-6 md:px-12 max-w-4xl mx-auto text-left space-y-8">
          <h3 className="font-display text-2xl md:text-3.5xl font-black text-white tracking-tight leading-snug">
            Why It Matters
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-sans text-xs sm:text-sm leading-relaxed">
            <div className="space-y-4 text-white/70">
              <p>Most travelers return home with hundreds or even thousands of photos.</p>
              <p>Many are duplicates.</p>
              <p>Many are forgotten.</p>
              <p>Many are never looked at again.</p>
              <p>And too often, part of the journey is spent worrying about capturing the perfect shot instead of experiencing the moment itself.</p>
            </div>
            <div className="space-y-4 p-6 bg-white/5 border border-white/5 rounded-[2px] text-[#E5D5B0] flex flex-col justify-center">
              <p className="font-bold text-white text-base">Offlight removes that.</p>
              <p>• No time spent editing.</p>
              <p>• No endless photo selection.</p>
              <p>• No gallery filled with nearly identical images.</p>
              <p className="text-white pt-2 font-medium">Just a collection of meaningful photographs that tell the story of the journey.</p>
            </div>
          </div>
        </section>

        {/* 5. Meet Our Photographers Section */}
        <section id="meet-our-photographers-section" className="py-20 bg-[#0D0D0D] border-y border-white/5 px-6 md:px-12 text-left">
          <div className="max-w-4xl mx-auto space-y-10">
            <div className="space-y-4">
              <span className="font-mono text-[9px] text-[#E5D5B0] font-bold tracking-widest block font-sans">BEHIND THE LENS</span>
              <h3 className="font-display text-2xl md:text-3.5xl font-black text-white tracking-tight leading-snug">
                Meet Our Photographers
              </h3>
              <p className="font-sans text-sm text-white/80 leading-relaxed max-w-2xl">
                We collaborate with photographers whose work reflects the spirit of Offlight: authentic, human and deeply connected to place.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pt-4">
              <div className="md:col-span-12 lg:col-span-5 relative aspect-[4/5] overflow-hidden rounded-[2px] border border-white/10 w-full max-w-sm">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600"
                  alt="Ginevra Imbimbo"
                  className="w-full h-full object-cover grayscale opacity-90"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-85" />
                <div className="absolute bottom-6 left-6">
                  <h4 className="font-display text-base font-bold text-white">Ginevra Imbimbo</h4>
                  <p className="font-sans text-[10px] text-[#E5D5B0] uppercase tracking-wider font-semibold">Independent Visual Artist</p>
                </div>
              </div>

              <div className="md:col-span-12 lg:col-span-7 space-y-6">
                <div className="space-y-2 font-sans text-sm text-white/90 leading-relaxed">
                  <p className="font-semibold text-[#E5D5B0]">Current collaborator:</p>
                  <p className="text-xl font-display font-medium text-white">@ginevraimbimbo.photography</p>
                </div>

                <p className="font-sans text-xs text-white/70 leading-relaxed">
                  Ginevra's work focuses on raw, unposed beauty, slow travel moments, and capturing human warmth in natural light. Her photographic essay highlights the simple, unhurried breath of remote coastal and alpine communities.
                </p>

                {/* Selected photographs cluster (warm travel photography) */}
                <div className="grid grid-cols-3 gap-2 pt-2">
                  <div className="aspect-[3/4] bg-white/5 rounded-[1px] overflow-hidden border border-white/10">
                    <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=300" className="w-full h-full object-cover grayscale opacity-80" referrerPolicy="no-referrer" />
                  </div>
                  <div className="aspect-[3/4] bg-white/5 rounded-[1px] overflow-hidden border border-white/10">
                    <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=300" className="w-full h-full object-cover grayscale opacity-80" referrerPolicy="no-referrer" />
                  </div>
                  <div className="aspect-[3/4] bg-white/5 rounded-[1px] overflow-hidden border border-white/10">
                    <img src="https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&q=80&w=300" className="w-full h-full object-cover grayscale opacity-80" referrerPolicy="no-referrer" />
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    id="view-portfolio-btn"
                    href="https://instagram.com/ginevraimbimbo.photography"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-display inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-6 py-3 bg-white/5 border border-white/10 text-white hover:bg-white/15 rounded-[2px] transition-colors cursor-pointer"
                  >
                    <Instagram size={13} strokeWidth={2} />
                    View Portfolio
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Analog Cameras & Vintage Camcorders Section */}
        <section id="analog-vintage-section" className="py-24 px-6 md:px-12 max-w-4xl mx-auto text-left space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="font-mono text-[9px] text-[#E5D5B0] font-bold tracking-widest block font-sans">THE JOY OF CAPTURING A MOMENT</span>
              <h3 className="font-display text-2xl md:text-3.5xl font-black text-white tracking-tight leading-snug">
                Analog Cameras & Camcorders
              </h3>
              <div className="space-y-3 font-sans text-xs sm:text-sm text-white/80 leading-relaxed font-light">
                <p>We also understand that taking a photo can be part of the experience itself.</p>
                <p>That's why Offlight provides a selection of analog cameras and vintage camcorders during expeditions.</p>
                <p className="font-semibold text-white pt-2">Not to create content. <br />Not to chase perfection. <br />Simply to have fun.</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-[2px] overflow-hidden border border-white/10 relative h-60">
                <img 
                  src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=800" 
                  alt="Vintage camera" 
                  className="w-full h-full object-cover grayscale opacity-85"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="space-y-2 font-sans text-xs sm:text-sm text-[#E5D5B0]/95 pl-4 border-l-2 border-[#E5D5B0]/30 font-light">
                <p>• Capture spontaneous moments.</p>
                <p>• Document friendships.</p>
                <p>• Create imperfect memories that often become the most meaningful ones.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Own Camera Welcome Segment */}
        <section id="own-camera-welcome-section" className="py-20 bg-[#0D0D0D] border-t border-white/5 px-6 md:px-12 text-left">
          <div className="max-w-4xl mx-auto space-y-6">
            <h3 className="font-display text-2xl md:text-3xl font-black text-white tracking-tight">
              Your Own Camera Is Always Welcome
            </h3>
            <p className="font-sans text-sm text-white/80 leading-relaxed max-w-2xl">
              Participants who own a camera are always welcome to bring and use it during the journey.
            </p>
            <p className="font-sans text-xs text-white/60 leading-relaxed max-w-xl">
              The goal is not to prohibit photography. The goal is to remove the pressure of constantly documenting everything through our phones.
            </p>
          </div>
        </section>

        {/* 8. Closing message Section */}
        <section id="closing-curated-memories-message" className="py-24 bg-[#070707] border-t border-white/5 px-6 md:px-12 text-center">
          <div className="max-w-2xl mx-auto space-y-8">
            <div className="font-display text-xl sm:text-2xl md:text-3.5xl font-bold text-white/95 leading-relaxed space-y-6">
              <p>The best memories are often the ones you were fully present for.</p>
              <p className="text-[#E5D5B0]">Offlight exists to make sure you can have both:</p>
              <div className="space-y-2 font-sans text-base sm:text-lg text-white/80 max-w-md mx-auto pt-4 border-t border-white/10">
                <p>The experience itself.</p>
                <p>And something beautiful to remember it by.</p>
              </div>
            </div>
            
            <div className="pt-6">
              <button 
                id="ft-return-home-btn-mi"
                onClick={() => { onNavigate('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="font-display text-xs font-bold uppercase tracking-widest px-8 py-4 bg-white/5 border border-white/10 text-white hover:bg-white/15 transition-colors cursor-pointer rounded-[2px]"
              >
                Return to Compass
              </button>
            </div>
          </div>
        </section>

      </div>
    );
  }

  return null;
}
