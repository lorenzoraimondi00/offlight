/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ViewPage } from '../types';
import { ArrowRight, Compass, ShieldAlert, Award, Calendar, CheckSquare } from 'lucide-react';

interface ChoosePathProps {
  onNavigate: (page: ViewPage) => void;
}

export default function ChoosePath({ onNavigate }: ChoosePathProps) {
  
  const paths: {
    id: ViewPage;
    title: string;
    description: string;
    image: string;
  }[] = [
    {
      id: 'expeditions',
      title: 'Expeditions',
      description: 'Upcoming Offlight journeys to remote corners.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB5JVsG1M_TCT5PHq0kldmpza500HHUEyTQn_1AfPX1aPXdJ1GpaLLutR-OLuNZm2oOLYoRgCTvnwE56c668BjB0M5AEMMk6_CwTOC-vpLtWXnDiXTTSQm_zRf60koEptcJAXo8PR5XHUQba_2imfmqygX6KYkhxs57MHNlNmJ-wWdEvEPIsTuzcFjgph_KAKXEvfNI0IzE5qaTkTdfMGH7yyrBguu3ygoVLAijBoOwXNSJHvwCd3ZbcPLaRbQZrwyFYKEEV4MJZA'
    },
    {
      id: 'playbooks',
      title: 'Playbooks',
      description: 'Detailed itineraries, maps, and insider tips to help you travel independently.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAigSq1X8NDzDbTPnxDnpYzD-VYgqJrYjoSJI1gISwHn6Ec008oF3eK2_lfma87RQt3nlKWuJeu-oPHj_TNhrj8VHW0B_v18zxmA-tfeUaacXoqSLdHF1DudLrIgkV3bLyXXj-7HwlIIuf13T4IzlWmwGuRLXmnsUp2ShyC4S0xyVh90NMdS5RJYSvcGYkmWirZi_LcGtb_p4dOjXTK5UmvLwrqxLLJ7bC8xm94Y1-aRZfi6fy6y56C9HYapUy6nQiloV1uTqqYMA'
    },
    {
      id: 'studio',
      title: 'Studio',
      description: 'Partner directly with our travel designers. We draft, plan, and create bespoke journeys tailored to your timeline.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBucW9U0Kc3WS1UKpb6iE50YNN4dorxTioHHLDICllZAtPQxRpooreZeenWsfHXmuYxV39jD2OJ9cFwaSD6VbB2mkEQXMtGMSEzJhZRGIKVqXHqWexcWr2qpizUuaFoewn4BPQdD3N4_sUjbVtK58rLl08LrdDCsQc_2Oe1T-bjopLWw8ejqtmcZF48rRDFvddvVMYNG2smBudetJLKSzTGYmnEdQEd8sQuYTO-dac8g1vlegJyyRAlG2Mi6gTzrhjzv4Zx8CttOQ'
    }
  ];

  const handleExplore = (target: ViewPage) => {
    onNavigate(target);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="bg-[#0A0A0A] py-24 px-6 md:px-12 border-t border-white/5 border-b border-white/5 select-none">
      <div className="max-w-7xl mx-auto space-y-24">
        
        {/* Three Cards Path Grid */}
        <div className="space-y-12">
          <div className="max-w-xl space-y-3">
            <h2 className="font-display text-3xl sm:text-4xl font-black text-white tracking-tight">
              Choose Your Path
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {paths.map((p) => (
              <div 
                key={p.id}
                className="group relative bg-[#0D0D0D] text-white rounded-[2px] aspect-[3/4] overflow-hidden shadow-xl flex flex-col justify-end p-8 border border-white/10 cursor-pointer"
                onClick={() => handleExplore(p.id)}
              >
                {/* Image underlays with opacity for cinematic layout */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-[8s] group-hover:scale-105 opacity-55"
                  style={{ backgroundImage: `url('${p.image}')` }}
                />
                
                {/* Multiple dark overlays to meet high-contrast accessibility requirement */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black to-transparent opacity-95" />

                {/* Card text content */}
                <div className="relative z-10 space-y-4 text-left">
                  <div className="space-y-1">
                    <h3 className="font-display text-2xl font-bold text-white tracking-tight group-hover:text-white/80 transition-colors">
                      {p.title}
                    </h3>
                  </div>

                  <p className="font-sans text-xs text-white/60 leading-relaxed min-h-[48px] group-hover:text-white/80 transition-colors">
                    {p.description}
                  </p>

                  <div className="pt-2 flex items-center gap-1.5 text-xs text-[#E5D5B0] font-bold uppercase tracking-widest border-t border-white/10 group-hover:gap-3 transition-all">
                    Explore
                    <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Membership Section (not a fourth card) */}
        <div className="bg-[#0D0D0D] text-white rounded-[2px] p-8 md:p-14 relative overflow-hidden border border-white/10 shadow-2xl flex flex-col lg:flex-row gap-12 items-center">
          {/* Subtle atmospheric backdrop */}
          <div 
            className="absolute inset-0 opacity-10 bg-cover bg-center mix-blend-overlay pointer-events-none"
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#0D0D0D] via-[#0D0D0D]/95 to-transparent pointer-events-none" />

          {/* Benefit Content */}
          <div className="flex-1 space-y-6 relative z-10 text-left">
            <h2 className="font-display text-3xl sm:text-4xl font-black tracking-tight text-white">
              Become an Offlight Member
            </h2>
            <p className="font-sans text-sm text-white/50 leading-relaxed max-w-xl">
              For those who want to unlock the full potential of Offlight.
            </p>

            <div className="pt-4">
              <button
                onClick={() => handleExplore('membership')}
                className="font-display text-xs font-bold uppercase tracking-widest px-8 py-4 bg-white text-black hover:bg-neutral-200 rounded-[2px] transition-colors cursor-pointer inline-flex items-center gap-2"
              >
                Explore Membership
                <ArrowRight size={13} />
              </button>
            </div>
          </div>

          {/* Benefit Quick-look Cards Grid - Simple List */}
          <div className="flex-1 w-full relative z-10 space-y-4 text-left md:max-w-md">
            
            {/* Benefit Row 1 */}
            <div className="p-4 rounded-[2px] bg-white/5 border border-white/10 flex items-center gap-3">
              <div className="p-1 rounded-sm bg-white/15 text-white/90">
                <Compass size={14} />
              </div>
              <h4 className="font-display text-xs font-bold uppercase tracking-wide text-white">
                Early Access & Priority Booking
              </h4>
            </div>

            {/* Benefit Row 2 */}
            <div className="p-4 rounded-[2px] bg-white/5 border border-white/10 flex items-center gap-3">
              <div className="p-1 rounded-sm bg-white/15 text-white/90">
                <CheckSquare size={14} />
              </div>
              <h4 className="font-display text-xs font-bold uppercase tracking-wide text-white">
                Playbooks Included
              </h4>
            </div>

            {/* Benefit Row 3 */}
            <div className="p-4 rounded-[2px] bg-white/5 border border-white/10 flex items-center gap-3">
              <div className="p-1 rounded-sm bg-white/15 text-white/90">
                <Award size={14} />
              </div>
              <h4 className="font-display text-xs font-bold uppercase tracking-wide text-white">
                Annual Gala Dinner
              </h4>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
