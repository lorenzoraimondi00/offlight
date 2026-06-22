/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Mail, Compass, Layers } from 'lucide-react';

export default function MembershipView() {
  
  const benefits = [
    {
      title: 'Early Access & Priority Booking',
      desc: 'Members are informed about upcoming journeys before they are publicly released, giving them the opportunity to secure their place before trips sell out.'
    },
    {
      title: 'All Playbooks Included',
      desc: 'Members can request any standard Offlight Playbook at no additional cost.'
    },
    {
      title: 'Annual Offlight Gala Dinner',
      desc: 'Members are invited to attend Offlight\'s annual gala dinner alongside founders, fellow members and selected partners.'
    }
  ];

  const emailDraftUrl = () => {
    const subject = encodeURIComponent('Offlight Membership Application / Inquiry');
    const body = encodeURIComponent(
      `Hello Offlight Membership Committee,\n\nI am writing to request more detailed information on becoming an Offlight Member.\n\nPlease find my information below:\n- Full Name:\n- Profession/Bio:\n- Location:\n- Why do you feel drawn to the Offlight philosophy?\n\nWarm regards,\n`
    );
    return `mailto:hello@weareofflight.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="membership-section" className="py-24 bg-[#0A0A0A] min-h-screen text-white select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-20">
        
        {/* Masthead */}
        <div className="text-center max-w-3xl mx-auto space-y-4 pt-12 animate-fade-in">
          <h2 className="font-display text-4xl md:text-5xl font-black text-white tracking-tight">
            Offlight Membership
          </h2>
        </div>

        {/* Cohesive Panel layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Detailed benefits Cards list */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <h3 className="font-display text-xl font-bold text-white tracking-tight">
              Consolidated Benefit
            </h3>

            <div className="grid grid-cols-1 gap-4">
              {benefits.map((b) => (
                <div key={b.title} className="p-6 bg-[#0D0D0D] border border-white/10 rounded-[2px] text-left space-y-2">
                  <h4 className="font-display text-base font-bold text-white">
                    {b.title}
                  </h4>
                  <p className="font-sans text-xs text-white/60 leading-relaxed">
                    {b.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Vetting Criteria & CTA Box */}
          <div className="lg:col-span-5 bg-[#0E0E0E] text-white rounded-[2px] p-8 md:p-10 flex flex-col justify-between space-y-8 border border-white/10 relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 opacity-10 bg-cover bg-center pointer-events-none" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida/AP1WRLu4ZPMH3i3gI-vaCCn1XzOIhqAxUXpIKYe1l-ps0RAAPa-8GSujhKrFPNROORacXcjFmVjr0GYNnQZ3sE-NgaKgawO74QDT-77qOPK7UPw3RWDLj1U57aEmronWsKgGgOf0s_Ct3UIK5Nl-yxC_G12Z57U1ky1bxRrkCsljQzSQ0tPwD2Zaip6E6ntQv1eXtP5dwhkDSPfHHlcSMMnyf6tpjzmCFMdUTNF-eIH_y-ErFa1TtmqNRo-F')` }} />
            
            <div className="space-y-6 relative z-10 text-left">
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#E5D5B0] block">
                ANNUAL RECOGNITION KEYS
              </span>
              <h3 className="font-display text-3xl font-black text-white leading-tight">
                Request Member Status
              </h3>
              <p className="font-sans text-xs text-white/60 leading-relaxed">
                We assess applicant compatibility before processing enrollment. Vetting is completed entirely by our field directors to maintain intimate, respect-focused group dynamics.
              </p>

              <div className="border-t border-white/10 pt-4 space-y-3 font-mono text-[11px] text-white/60">
                <div className="flex items-start gap-2.5">
                  <Compass size={14} className="text-[#E5D5B0] shrink-0 mt-0.5" />
                  <span>Contribution sustains our global trail-scouting and analog film libraries.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Layers size={14} className="text-[#E5D5B0] shrink-0 mt-0.5" />
                  <span>Only 100 member keys released globally per year.</span>
                </div>
              </div>
            </div>

            <div className="pt-2 relative z-10 w-full">
              <a
                href={emailDraftUrl()}
                className="w-full inline-flex items-center justify-center gap-2 font-display text-xs font-bold uppercase tracking-widest py-4 bg-white text-black hover:bg-[#E5D5B0] transition-colors rounded-[2px]"
              >
                <Mail size={13} />
                Send Membership Request
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
