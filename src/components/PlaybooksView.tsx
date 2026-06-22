/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from 'react';
import { PLAYBOOKS } from '../data';
import { Playbook } from '../types';
import { BookOpen, Check, FileDown, Lock, ShieldCheck, X } from 'lucide-react';

export default function PlaybooksView() {
  const [selectedPlaybook, setSelectedPlaybook] = useState<Playbook | null>(null);
  const [checkoutEmail, setCheckoutEmail] = useState('');
  const [checkoutName, setCheckoutName] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const handleAcquire = (pb: Playbook) => {
    setSelectedPlaybook(pb);
    setCheckoutEmail('');
    setCheckoutName('');
    setIsCompleted(false);
    setIsProcessing(false);
  };

  const handleProcessSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!checkoutEmail || !checkoutName) return;

    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsCompleted(true);
    }, 1800);
  };

  return (
    <section id="playbooks-section" className="py-24 px-6 md:px-12 bg-[#0A0A0A] text-white min-h-screen">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Title block */}
        <div className="text-left border-b border-white/10 pb-10 pt-12">
          <h1 id="playbooks-heading" className="font-display text-5xl md:text-6xl font-black text-white tracking-tight">
            Playbooks
          </h1>
        </div>

        {/* New Introduction Section */}
        <div id="playbooks-introduction" className="grid grid-cols-1 lg:grid-cols-12 gap-12 py-4 border-b border-white/10 text-left">
          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-display text-2xl md:text-3xl font-black text-white leading-tight tracking-tight">
              Everything we wish someone had told us before we went.
            </h3>
            <p className="font-sans text-sm text-white/70 leading-relaxed">
              Every Offlight Playbook is built from firsthand exploration, local relationships and countless hours spent on the ground.
            </p>
            <div className="pt-4 font-display text-sm tracking-wide text-[#E5D5B0] italic font-medium">
              "Spend less time researching and more time experiencing."
            </div>
          </div>
          
          <div className="lg:col-span-1 border-r border-white/5 hidden lg:block" />

          <div className="lg:col-span-6 space-y-4">
            <h4 className="font-mono text-[10px] text-white/50 font-bold uppercase tracking-widest block">
              Inside you'll find:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3.5">
              {[
                "What to pack and what to leave at home",
                "The best periods of the year to visit",
                "How to reach every location efficiently",
                "Distances, driving times and logistics",
                "Recommended and trusted accommodations",
                "Recommended restaurants and local food spots",
                "Hidden gems most travelers never discover",
                "Destination-specific tips and practical insights",
                "A complete recommended itinerary",
                "Recommended activities and excursions with trusted partners",
                "Estimated travel costs and budgeting guidance"
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-white/80 leading-normal">
                  <span className="text-[#E5D5B0] mt-1 shrink-0 font-display text-[10px] select-none">•</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Playbooks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-6">
          {PLAYBOOKS.map((pb) => (
            <div 
              key={pb.id}
              className="group bg-[#0D0D0D] border border-white/10 rounded-[2px] overflow-hidden flex flex-col justify-between hover:border-white/35 hover:shadow-2xl transition-all duration-300"
            >
              <div>
                {/* Visual Cover */}
                <div className="aspect-[4/3] w-full relative overflow-hidden bg-neutral-900">
                  <img
                    src={pb.image}
                    alt={pb.title}
                    className="w-full h-full object-cover opacity-90 transition-transform duration-[6s] group-hover:scale-103"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Subtle dark layout for price alignment */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />

                  {/* Price Tag badge */}
                  <div className="absolute top-4 right-4 bg-[#0A0A0A]/95 backdrop-blur-md px-3.5 py-1.5 rounded-sm border border-white/10 flex items-center justify-center">
                    <span className="font-display text-xs font-bold tracking-wide text-[#E5D5B0]">
                      {pb.price === 0 ? 'Free' : `€${pb.price}`}
                    </span>
                  </div>
                </div>

                {/* Details layout - Keep only Title & Price */}
                <div className="p-6 text-left space-y-1.5">
                  <h3 className="font-display text-xl font-bold text-white tracking-tight group-hover:text-[#E5D5B0] transition-colors">
                    {pb.title}
                  </h3>
                  <p className="font-mono text-sm font-medium text-[#E5D5B0]">
                    {pb.price === 0 ? 'Free' : `€${pb.price}`}
                  </p>
                </div>
              </div>

              {/* Action - Get instead of Purvey */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => handleAcquire(pb)}
                  className="w-full font-display text-xs font-bold uppercase tracking-widest py-3.5 bg-white text-black hover:bg-[#E5D5B0] rounded-[2px] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  {pb.price === 0 ? <FileDown size={14} /> : <Lock size={12} />}
                  {pb.price === 0 ? 'Get (Free)' : `Get — €${pb.price}`}
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Modal checkout layer */}
        {selectedPlaybook && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in">
            {/* Backdrop click close */}
            <div 
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
              onClick={() => setSelectedPlaybook(null)}
            />

            {/* Content drawer */}
            <div className="bg-[#0D0D0D] p-8 max-w-lg w-full relative z-10 border border-white/10 rounded-[2px] shadow-2xl overflow-hidden text-left text-white">
              <button
                onClick={() => setSelectedPlaybook(null)}
                className="absolute top-4 right-4 p-2 text-white/40 hover:text-white transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X size={20} />
              </button>

              {isCompleted ? (
                <div className="space-y-6 text-center py-6 text-white w-full">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white/5 border border-white/10 text-[#E5D5B0] rounded-full">
                    <ShieldCheck size={36} className="stroke-[1.5]" />
                  </div>
                  
                  <div className="space-y-1">
                    <span className="font-mono text-[9px] text-[#E5D5B0] font-bold uppercase tracking-wider block">
                      TRANSACTION SUCCESSFUL
                    </span>
                    <h4 className="font-display text-2xl font-black text-white">
                      Manual unlocked successfully.
                    </h4>
                  </div>

                  <p className="font-sans text-xs text-white/70 leading-relaxed max-w-sm mx-auto">
                    We have dispatched the master GPX coordinate package and the complete custom PDF guide to <span className="font-semibold text-[#E5D5B0]">{checkoutEmail}</span>. Check your inbox to begin calibration.
                  </p>

                  <div className="pt-4">
                    <button
                      onClick={() => setSelectedPlaybook(null)}
                      className="font-display text-xs font-bold uppercase tracking-widest px-8 py-3.5 bg-white text-black hover:bg-neutral-200 transition-colors rounded-[2px] cursor-pointer"
                    >
                      Complete & Return
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleProcessSubmit} className="space-y-6 w-full">
                  
                  {/* Playbook Header Details */}
                  <div className="space-y-2 border-b border-white/10 pb-4">
                    <span className="font-mono text-[9px] text-[#E5D5B0] font-bold uppercase tracking-widest block">
                      COORDINATING PLAYBOOK REGISTRY
                    </span>
                    <h4 className="font-display text-2xl font-bold text-white tracking-tight">
                      {selectedPlaybook.title}
                    </h4>
                    <p className="font-sans text-xs text-white/50 leading-relaxed">
                      {selectedPlaybook.price === 0 
                        ? 'This handbook is shared voluntarily as a brand entry tool. Fill your details to unlock download keys immediately.' 
                        : `This manual requires a processing contribution of €${selectedPlaybook.price} to cover physical scouting hours and route coordination.`}
                    </p>
                  </div>

                  {/* Input Fields */}
                  <div className="space-y-4">
                    <div className="space-y-1.5">
                      <label htmlFor="checkoutName" className="font-sans text-[10px] font-bold uppercase tracking-widest text-[#E5D5B0] block">
                        Explorer Name
                      </label>
                      <input
                        id="checkoutName"
                        type="text"
                        required
                        value={checkoutName}
                        onChange={(e) => setCheckoutName(e.target.value)}
                        placeholder="e.g. Erik Söderberg"
                        className="w-full px-4 py-2.5 rounded-[2px] border border-white/10 focus:border-white text-sm outline-none bg-white/5 text-white placeholder:text-white/20"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="checkoutEmail" className="font-sans text-[10px] font-bold uppercase tracking-widest text-[#E5D5B0] block">
                        Dispatch Email
                      </label>
                      <input
                        id="checkoutEmail"
                        type="email"
                        required
                        value={checkoutEmail}
                        onChange={(e) => setCheckoutEmail(e.target.value)}
                        placeholder="e.g. erik.soderberg@offlight.com"
                        className="w-full px-4 py-2.5 rounded-[2px] border border-white/10 focus:border-white text-sm outline-none bg-white/5 text-white placeholder:text-white/20"
                      />
                    </div>

                    {/* Paid simulated credit fields */}
                    {selectedPlaybook.price > 0 && (
                      <div className="pt-2 border-t border-white/10 space-y-4">
                        <span className="font-mono text-[9px] text-[#E5D5B0] font-bold uppercase tracking-wider block">
                          SIMULATED PAYMENT PORT (ENCRYPTED)
                        </span>

                        <div className="grid grid-cols-3 gap-3">
                          <div className="col-span-3 space-y-1.5">
                            <label className="font-sans text-[10px] font-medium tracking-wide text-white/50 block">
                              Card Number
                            </label>
                            <input
                              type="text"
                              required
                              placeholder="•••• •••• •••• 4242"
                              className="w-full px-4 py-2.5 rounded-[2px] border border-white/10 text-sm outline-none bg-black/40 text-white placeholder:text-white/20"
                            />
                          </div>
                          
                          <div className="col-span-2 space-y-1.5">
                            <label className="font-sans text-[10px] font-medium tracking-wide text-white/50 block">
                              Expiry Date
                            </label>
                            <input
                              type="text"
                              required
                              placeholder="MM/YY"
                              className="w-full px-4 py-2.5 rounded-[2px] border border-white/10 text-sm outline-none bg-black/40 text-white text-center placeholder:text-white/20"
                            />
                          </div>

                          <div className="col-span-1 space-y-1.5">
                            <label className="font-sans text-[10px] font-medium tracking-wide text-white/50 block">
                              CVV
                            </label>
                            <input
                              type="text"
                              required
                              placeholder="•••"
                              className="w-full px-4 py-2.5 rounded-[2px] border border-white/10 text-sm outline-none bg-black/40 text-white text-center placeholder:text-white/20"
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="pt-4 flex items-center justify-between border-t border-white/10">
                    <span className="font-mono font-extrabold text-white text-sm">
                      TOTAL DUE: {selectedPlaybook.price === 0 ? '€0.00' : `€${selectedPlaybook.price}.00`}
                    </span>

                    <button
                      type="submit"
                      disabled={isProcessing}
                      className={`font-display text-xs font-bold uppercase tracking-widest px-6 py-3.5 rounded-[2px] transition-all cursor-pointer ${
                        isProcessing 
                          ? 'bg-white/10 text-white/40 cursor-not-allowed' 
                          : 'bg-white text-black hover:bg-neutral-200'
                      }`}
                    >
                      {isProcessing 
                        ? 'Verifying bank coords...' 
                        : selectedPlaybook.price === 0 
                          ? 'Unlock & Download' 
                          : `Charge & Get — €${selectedPlaybook.price}`}
                    </button>
                  </div>

                </form>
              )}

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
