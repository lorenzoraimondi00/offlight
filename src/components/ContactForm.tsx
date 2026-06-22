/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, ChangeEvent, FormEvent } from 'react';
import { ContactSubmission } from '../types';
import { Check, CheckCircle2, MapPin, ChevronRight, Send } from 'lucide-react';

interface ContactFormProps {
  initialInterest?: string;
}

export default function ContactForm({ initialInterest }: ContactFormProps) {
  const [formData, setFormData] = useState<ContactSubmission>({
    firstName: '',
    lastName: '',
    age: '',
    nationality: '',
    email: '',
    countryCode: '',
    phone: '',
    interests: initialInterest ? [initialInterest] : [],
    reference: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const interestOptions = [
    { value: 'Ice', label: 'Ice', desc: 'Arctic landscapes & glaciers' },
    { value: 'Sand', label: 'Sand', desc: 'Deserts & dunes' },
    { value: 'Corals', label: 'Corals', desc: 'Reef, Snorkeling & Diving' },
    { value: 'Wildlife', label: 'Wildlife', desc: 'Animal Kingdom' },
    { value: 'Islands', label: 'Islands', desc: 'Beaches & Panoramic Point' },
    { value: 'Peaks', label: 'Peaks', desc: 'Hiking & Heights' },
    { value: 'Foliage', label: 'Foliage', desc: 'Forests & Jungles' },
    { value: 'Mirrors', label: 'Mirrors', desc: 'Lakes and Waterfalls' },
    { value: 'Waves', label: 'Waves', desc: 'Sea, Ocean and Adventure' },
  ];

  const handleTextChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const toggleInterest = (val: string) => {
    setFormData((prev) => {
      const interests = prev.interests.includes(val)
        ? prev.interests.filter((i) => i !== val)
        : [...prev.interests, val];
      return { ...prev, interests };
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    // Field validations
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
      setErrorMsg('Please, fill out all required coordinates before sending.');
      return;
    }

    if (formData.interests.length === 0) {
      setErrorMsg('Choose at least one terrain of interest to begin travel design.');
      return;
    }

    setIsSubmitting(true);

    // Simulate backend submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      window.scrollTo({
        top: (document.getElementById('contact-section')?.offsetTop || 0) - 80,
        behavior: 'smooth'
      });
    }, 1500);
  };

  const handleReset = () => {
    setFormData({
      firstName: '',
      lastName: '',
      age: '',
      nationality: '',
      email: '',
      countryCode: '',
      phone: '',
      interests: [],
      reference: ''
    });
    setIsSuccess(false);
  };

  return (
    <div id="contact-section" className="bg-[#0D0D0D] border border-white/10 rounded-[2px] p-8 md:p-12 shadow-2xl relative overflow-hidden text-white text-left">
      {/* Visual Header Accents */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-white/20" />

      {isSuccess ? (
        <div className="text-center py-12 space-y-6">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/5 text-white rounded-full mb-4 border border-white/10 animate-pulse">
            <CheckCircle2 size={44} className="stroke-[1.5]" />
          </div>
          <p className="font-display text-xs font-bold uppercase tracking-widest text-[#E5D5B0]">
            Application Registered
          </p>
          <h3 className="font-display text-3xl font-black text-white tracking-tight leading-tight">
            Welcome to the scouting phase, {formData.firstName}.
          </h3>
          <p className="font-sans text-sm text-white/70 max-w-lg mx-auto leading-relaxed">
            We have locked in your interests in <span className="font-bold text-[#E5D5B0]">{formData.interests.join(', ')}</span>. 
            One of our travel designers will review your bio and reach out to schedule an offline compatibility review within 48 hours.
          </p>

          <div className="pt-6 border-t border-white/10 max-w-md mx-auto">
            <p className="font-sans text-xs text-white/40 uppercase tracking-wide mb-3">
              Application Details
            </p>
            <div className="bg-white/5 border border-white/10 rounded-sm p-4 text-left space-y-2 text-xs font-mono text-white/90">
              <div><span className="text-white/40">APPLICANT:</span> {formData.firstName} {formData.lastName} ({formData.nationality || 'N/A'})</div>
              <div><span className="text-white/40">AGE REGISTERED:</span> {formData.age || 'N/A'}</div>
              <div><span className="text-white/40">CONTACT EMAIL:</span> {formData.email}</div>
              <div><span className="text-white/40">TELEPHONE:</span> {formData.countryCode} {formData.phone}</div>
              <div><span className="text-white/40">TERRAINS SELECTED:</span> {formData.interests.join(' | ')}</div>
            </div>
          </div>

          <div className="pt-6">
            <button
              onClick={handleReset}
              className="font-sans text-xs font-bold uppercase tracking-widest text-white/50 hover:text-white underline cursor-pointer"
            >
              Submit another application
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-10">
          <div className="space-y-4">
            <h3 className="font-display text-2xl sm:text-3xl font-black text-white tracking-tight">
              Tell Us About You
            </h3>
          </div>

          {/* Grid fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            
            {/* First Name */}
            <div className="space-y-2">
              <label htmlFor="firstName" className="font-sans text-[11px] font-bold uppercase tracking-wider text-white/80 block">
                First Name <span className="text-[#E5D5B0]">*</span>
              </label>
              <input
                id="firstName"
                type="text"
                name="firstName"
                required
                value={formData.firstName}
                onChange={handleTextChange}
                placeholder="e.g. Erik"
                className="w-full px-4 py-3 rounded-[2px] border border-white/10 focus:border-white focus:ring-0 bg-white/5 text-white text-sm outline-none transition-all placeholder:text-white/30"
              />
            </div>

            {/* Last Name */}
            <div className="space-y-2">
              <label htmlFor="lastName" className="font-sans text-[11px] font-bold uppercase tracking-wider text-white/80 block">
                Last Name <span className="text-[#E5D5B0]">*</span>
              </label>
              <input
                id="lastName"
                type="text"
                name="lastName"
                required
                value={formData.lastName}
                onChange={handleTextChange}
                placeholder="e.g. Söderberg"
                className="w-full px-4 py-3 rounded-[2px] border border-white/10 focus:border-white focus:ring-0 bg-white/5 text-white text-sm outline-none transition-all placeholder:text-white/30"
              />
            </div>

            {/* Age */}
            <div className="space-y-2">
              <label htmlFor="age" className="font-sans text-[11px] font-bold uppercase tracking-wider text-white/80 block">
                Age
              </label>
              <input
                id="age"
                type="number"
                name="age"
                min="18"
                max="100"
                value={formData.age}
                onChange={handleTextChange}
                placeholder="e.g. 34"
                className="w-full px-4 py-3 rounded-[2px] border border-white/10 focus:border-white focus:ring-0 bg-white/5 text-white text-sm outline-none transition-all placeholder:text-white/30"
              />
            </div>

            {/* Nationality */}
            <div className="space-y-2">
              <label htmlFor="nationality" className="font-sans text-[11px] font-bold uppercase tracking-wider text-white/80 block">
                Nationality
              </label>
              <input
                id="nationality"
                type="text"
                name="nationality"
                value={formData.nationality}
                onChange={handleTextChange}
                placeholder="e.g. Swedish"
                className="w-full px-4 py-3 rounded-[2px] border border-white/10 focus:border-white focus:ring-0 bg-white/5 text-white text-sm outline-none transition-all placeholder:text-white/30"
              />
            </div>

            {/* Email */}
            <div className="space-y-2 md:col-span-2">
              <label htmlFor="email" className="font-sans text-[11px] font-bold uppercase tracking-wider text-white/80 block">
                Email Address <span className="text-[#E5D5B0]">*</span>
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleTextChange}
                placeholder="e.g. erik.soderberg@offlight.com"
                className="w-full px-4 py-3 rounded-[2px] border border-white/10 focus:border-white focus:ring-0 bg-white/5 text-white text-sm outline-none transition-all placeholder:text-white/30"
              />
            </div>

            {/* Phone Container */}
            <div className="space-y-2 md:col-span-2">
              <label htmlFor="phone" className="font-sans text-[11px] font-bold uppercase tracking-wider text-white/80 block">
                Phone Number <span className="text-[#E5D5B0]">*</span>
              </label>
              <div className="flex gap-2">
                <input
                  id="countryCode"
                  type="text"
                  name="countryCode"
                  required
                  value={formData.countryCode}
                  onChange={handleTextChange}
                  placeholder="+39"
                  className="w-20 px-3 py-3 rounded-[2px] border border-white/10 focus:border-white focus:ring-0 bg-white/5 text-white text-sm outline-none transition-all placeholder:text-white/30 text-center"
                />
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleTextChange}
                  placeholder="070 123 4567"
                  className="flex-1 px-4 py-3 rounded-[2px] border border-white/10 focus:border-white focus:ring-0 bg-white/5 text-white text-sm outline-none transition-all placeholder:text-white/30"
                />
              </div>
            </div>

          </div>

          {/* Multi-Select Journey Interests */}
          <div className="space-y-4 pt-4 border-t border-white/10">
            <div className="space-y-1">
              <span className="font-sans text-[11px] font-bold uppercase tracking-wider text-white/80 block">
                Journey Terrains of Interest <span className="text-[#E5D5B0]">*</span>
              </span>
              <p className="font-sans text-xs text-white/40">
                Select one or more landscapes you feel drawn toward reconnecting with.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {interestOptions.map((opt) => {
                const isSelected = formData.interests.includes(opt.value);
                return (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => toggleInterest(opt.value)}
                    className={`p-4 rounded-[2px] border text-left flex items-start gap-3 transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? 'border-white bg-white text-black shadow-sm font-semibold'
                        : 'border-white/10 bg-white/5 hover:border-white/20 text-white/90'
                    }`}
                  >
                    <div className={`mt-0.5 w-4.5 h-4.5 rounded-sm border flex items-center justify-center transition-colors ${
                      isSelected ? 'bg-black border-black text-white' : 'border-white/20 bg-neutral-800'
                    }`}>
                      {isSelected && <Check size={12} className="stroke-[3]" />}
                    </div>
                    <div>
                      <span className="font-display text-sm font-extrabold block">{opt.label}</span>
                      <span className={`font-sans text-xs hidden sm:block ${isSelected ? 'text-black/60' : 'text-white/40'}`}>{opt.desc}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Reference channel */}
          <div className="space-y-2 pt-4 border-t border-white/10">
            <label htmlFor="reference" className="font-sans text-[11px] font-bold uppercase tracking-wider text-white/80 block">
              How did you hear about Offlight?
            </label>
            <input
              id="reference"
              type="text"
              name="reference"
              value={formData.reference}
              onChange={handleTextChange}
              placeholder="e.g. National Geographic, Word of mouth, Another explorer..."
              className="w-full px-4 py-3 rounded-[2px] border border-white/10 focus:border-white focus:ring-0 bg-white/5 text-white text-sm outline-none transition-all placeholder:text-white/30"
            />
          </div>

          {/* Error banner */}
          {errorMsg && (
            <div className="p-4 bg-red-950/40 border border-red-900/50 text-red-300 text-xs rounded-sm">
              {errorMsg}
            </div>
          )}

          {/* Actions */}
          <div className="pt-4 flex items-center justify-end">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`font-display text-xs font-bold uppercase tracking-widest px-8 py-4.5 rounded-[2px] transition-all flex items-center gap-2 cursor-pointer ${
                isSubmitting 
                  ? 'bg-white/10 text-white/40 cursor-not-allowed' 
                  : 'bg-white text-black hover:bg-neutral-200 shadow-md'
              }`}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
              <Send size={14} className="ml-1" />
            </button>
          </div>

        </form>
      )}
    </div>
  );
}
