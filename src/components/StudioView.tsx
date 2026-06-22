/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Mail, Compass, HelpCircle, Gift } from 'lucide-react';

export default function StudioView() {
  const processSteps = [
    {
      step: 'STEP 01',
      icon: Compass,
      title: 'Discovery Call',
      description: 'A private video call to understand your destination ideas, travel style, interests, budget, timing and expectations. The goal is to understand exactly what kind of journey you want to create.'
    },
    {
      step: 'STEP 02',
      icon: HelpCircle,
      title: 'Playbook Review & Alignment',
      description: 'Once the custom playbook has been created, we schedule a second video call to walk through the itinerary together. We explain every recommendation, answer questions and make sure everything is clear before departure.'
    },
    {
      step: 'STEP 03',
      icon: Gift,
      title: 'Physical Playbook Delivery',
      description: 'After the final alignment, your personalized Offlight Playbook is prepared and shipped to you in physical format. A travel companion built specifically for your journey.'
    }
  ];

  const emailDraftUrl = () => {
    const subject = encodeURIComponent('Private Travel Design Inquiry');
    const body = encodeURIComponent(
      `Hello Offlight Studio,

I am interested in booking a private consultation to design and plan a customized journey with Offlight.

Destination (required):
[Please specify]

General travel idea:
[Please specify]

Number of travelers:
[Please specify]

Preferred time of year:
[Please specify]

Additional details:
[Please specify]

Please let me know how to proceed.

Warm regards,

[Your Name]`
    );
    return `mailto:hello@weareofflight.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="py-24 bg-[#0A0A0A] min-h-screen text-white select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-20">
        
        {/* Banner Column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-12">
          
          <div className="space-y-6 text-left animate-fade-in">
            <h1 className="font-display text-4xl sm:text-5xl font-black tracking-tight text-white leading-none">
              Private Travel Design
            </h1>

            <p className="font-sans text-xs text-white/50 leading-relaxed">
              Instead of generic automated itineraries, we invest our firsthand scouting, deep local relationships, and logistical expertise into crafting an elegant custom publication built solely for your journey.
            </p>

            <div className="pt-4">
              <a
                href={emailDraftUrl()}
                className="inline-flex items-center gap-2 font-display text-xs font-bold uppercase tracking-widest px-8 py-4 bg-white text-black hover:bg-[#E5D5B0] rounded-[2px] transition-colors cursor-pointer shadow-md"
              >
                <Mail size={13} />
                Book Private Consultation
              </a>
            </div>
          </div>

          <div className="relative aspect-video lg:aspect-square overflow-hidden rounded-[2px] border border-white/10 bg-[#0D0D0D]">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBucW9U0Kc3WS1UKpb6iE50YNN4dorxTioHHLDICllZAtPQxRpooreZeenWsfHXmuYxV39jD2OJ9cFwaSD6VbB2mkEQXMtGMSEzJhZRGIKVqXHqWexcWr2qpizUuaFoewn4BPQdD3N4_sUjbVtK58rLl08LrdDCsQc_2Oe1T-bjopLWw8ejqtmcZF48rRDFvddvVMYNG2smBudetJLKSzTGYmnEdQEd8sQuYTO-dac8g1vlegJyyRAlG2Mi6gTzrhjzv4Zx8CttOQ"
              alt="Studio topographic design session"
              className="w-full h-full object-cover opacity-80"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          </div>

        </div>

        {/* The design process flow */}
        <div className="space-y-12 pt-8 border-t border-white/10">
          <div className="text-left max-w-xl space-y-2">
            <span className="font-mono text-[#E5D5B0] text-[9px] font-bold uppercase tracking-widest block">OUR PROCESS</span>
            <h3 className="font-display text-2xl md:text-3xl font-black text-white tracking-tight">
              A Tailored Journey
            </h3>
            <p className="font-sans text-xs text-white/50 leading-relaxed">
              We guide you through three simple steps to formulate, design, and deliver your direct consultation companion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {processSteps.map((step) => {
              const IconComp = step.icon;
              return (
                <div key={step.step} className="p-8 bg-[#0D0D0D] border border-white/10 rounded-[2px] space-y-6 text-left shadow-sm hover:border-white/30 transition-colors flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="font-mono text-[10px] text-[#E5D5B0] font-bold uppercase tracking-widest">
                        {step.step}
                      </span>
                      <div className="text-white/20">
                        <IconComp size={16} />
                      </div>
                    </div>
                    
                    <h4 className="font-display text-lg font-bold text-white tracking-tight">
                      {step.title}
                    </h4>
                    
                    <p className="font-sans text-xs text-white/60 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
