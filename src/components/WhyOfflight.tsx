/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ViewPage } from '../types';
import { ArrowRight, Sparkles, Map, ShieldAlert, Camera } from 'lucide-react';

interface WhyOfflightProps {
  onNavigate: (page: ViewPage) => void;
}

export default function WhyOfflight({ onNavigate }: WhyOfflightProps) {
  const cards: {
    id: ViewPage;
    title: string;
    description: string;
    image: string;
    icon: any;
    accent: string;
  }[] = [
    {
      id: 'field-tested',
      title: 'Field Tested',
      description: 'Every destination is personally explored before being recommended.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC1--X2HwNhv_8kFnVvtv9K55YC4pAoUnOwBIaEY20ophTMJuYLVZX8urRXavVsYASO8H7JsY7xkPQF4bwETlmW9Im87Uxmlb6n8b6y-re-NkozLt32uXQ3sdejrK997PM0ccDlHGZxTOhxLg4X9nBAMgoHYurcaNZq1bAS9ZeNOIhMtTTyYmweb1-LsAkSdI_LG_rGlcm6LyB5d-BxVYqwid-Fjl4XE6ITU_J2VkJbvTz-AmXaWVCBPouycHFb2kRxNj7cykiG1ahC',
      icon: Sparkles,
      accent: 'text-brand-sand'
    },
    {
      id: 'local-knowledge',
      title: 'Local Knowledge',
      description: 'Real local relationships, not internet research.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBDNVs-lCtFgFRj2ELajqszhJPsXZqo6hJtUXyq9oymhV_K4arxqaApFi61EhIH7T_I6iqBage3U-gphHxrR4gnFGf65qSQ5z0EjAz4eCHpw6sd6RdJCWW_iFxq_-O55CR315rjAvrEuxI9RCyRN8RphPp2SPklijqBQ33Z7KnSZhqhQ-tiMZxWHVwQNxQ5XStOvjS5dXlK6Nt4DVOBHwSf3YaRbcRjOIv99cU_JYuUYzl7BOpzrHd7rqCWpWindLkoXOLBy9yw7gqu',
      icon: Map,
      accent: 'text-brand-stone'
    },
    {
      id: 'offlight-mode',
      title: 'Offlight Mode',
      description: 'Phones are collected and safely stored during the experience. The goal is to be fully present.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC6CeCxlJd6GZ8cFWJWgjT5mV6vkLsuDsEAkJY5aHHPz5SKqfg5On9TjsImqYvAKtURxSGWjeM5gBdSlii0Ss7iNRnoJCgzcbr245IHEmmOT_r6RlD-dGwU9po-wmJbFS5W5NbQ6Yzw4bAZGQmOzgaY_xQ9EHc-s3Lm0nRFHtQoMuRmkemcEteBH0b1afZeq0-n34mQ9hPfhD4fvVhi_8qpUAa3ZspSdq3j6EYFRKgs6nPJnZNtjNIN9O_DDSL6cUD24uKyzhZ8GdGh',
      icon: ShieldAlert,
      accent: 'text-brand-green'
    },
    {
      id: 'curated-memories',
      title: 'Curated Memories',
      description: 'Professional photographer included. Vintage cameras and camcorders distributed to participants. All photos shared afterwards.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDC9Rh1owdOcJTtei3MBmhIhWtdF48N4OJFg8OcGBBm7AClkJ2AcK0AQM3c_wJ8ioBBNeY5Qg79geB_Wfh8JzN0j3tPcxKkvcnATNkOhPg3Pmk5UNmBg4ht5jJ_G_WAPAv3O7giSTqPcBCoQb2ZscuXjKYoDAYHwFIpHAyzY7FLkcL8gKhpp99sBpkCWTFrl55DnfFXfVcS4dwl7T3RAVGCyFQnAOAPQC1rHVVgpIUJlUgWO3k_Uzp9jGbRPJJX19WYQfABlehazT5Y',
      icon: Camera,
      accent: 'text-brand-sand'
    }
  ];

  const handleCardClick = (targetPage: ViewPage) => {
    onNavigate(targetPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="why-different-section" className="py-24 px-6 md:px-12 bg-[#0A0A0A] border-t border-white/5">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Why Offlight Is Different
          </h2>
        </div>

        {/* 4 Cards Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => {
            const IconComp = card.icon;
            return (
              <div 
                key={card.id} 
                className="group flex flex-col justify-between bg-[#0D0D0D] border border-white/10 rounded-[2px] overflow-hidden hover:border-white/35 transition-all duration-300"
              >
                <div>
                  {/* Aspect Ratio 3:4 for cinematic photography */}
                  <div className="aspect-[3/4] relative overflow-hidden bg-neutral-900">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover opacity-90 transition-transform duration-[6s] group-hover:scale-105"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                    
                    {/* Floating mini icon badge */}
                    <div className="absolute top-4 right-4 bg-[#0A0A0A]/85 backdrop-blur-md p-2.5 rounded-sm border border-white/10 text-white">
                      <IconComp size={16} />
                    </div>
                  </div>

                  {/* Body description */}
                  <div className="p-6 space-y-3">
                    <h3 className="font-display text-lg font-bold text-white tracking-tight select-none">
                      {card.title}
                    </h3>
                    <p className="font-sans text-xs text-white/60 leading-relaxed min-h-[48px]">
                      {card.description}
                    </p>
                  </div>
                </div>

                {/* Footer action button */}
                <div className="p-6 pt-0">
                  <button
                    onClick={() => handleCardClick(card.id)}
                    className="w-full font-display text-[10px] font-bold uppercase tracking-widest py-3 border border-white/25 rounded-[2px] text-white hover:bg-white hover:text-black hover:border-white transition-all duration-200 flex items-center justify-center gap-1 cursor-pointer"
                  >
                    Learn More
                    <ArrowRight size={12} />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
