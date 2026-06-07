import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Sparkles, 
  MapPin, 
  Compass, 
  Calendar, 
  ArrowRight, 
  ArrowDown, 
  Check, 
  Shield, 
  Crown, 
  Camera, 
  X, 
  Users, 
  Award, 
  FileText, 
  Share2, 
  Plane, 
  Clock, 
  User, 
  Globe,
  Instagram
} from "lucide-react";
import { categoriesData, allEventsData } from "./data";
import { PassionDetails } from "./types";

export default function App() {
  // Navigation & Page State (Exploring realms)
  const [selectedCategory, setSelectedCategory] = useState<PassionDetails | null>(null);
  const [experienceSearch, setExperienceSearch] = useState("");

  // Premium Founding Member Application State
  const [isApplicationOpen, setIsApplicationOpen] = useState(false);
  const [applicationForm, setApplicationForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    dialingCode: "+1",
    phoneNumber: "",
    ageRange: "25-34",
    hearOption: "Instagram",
    experienceInterests: [] as string[]
  });
  const [submittingApplication, setSubmittingApplication] = useState(false);
  const [applicationSubmitted, setApplicationSubmitted] = useState(false);
  const [applicationError, setApplicationError] = useState("");

  const handleApplicationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !applicationForm.firstName ||
      !applicationForm.lastName ||
      !applicationForm.email ||
      !applicationForm.country ||
      !applicationForm.dialingCode ||
      !applicationForm.phoneNumber ||
      !applicationForm.ageRange ||
      !applicationForm.hearOption
    ) {
      setApplicationError("Please fill out all personal credentials.");
      return;
    }
    if (applicationForm.experienceInterests.length === 0) {
      setApplicationError("Please select at least one experience interest.");
      return;
    }
    setApplicationError("");
    setSubmittingApplication(true);

    try {
      const res = await fetch("/api/applications/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(applicationForm)
      });

      if (res.ok) {
        const data = await res.json();
        if (data.success) {
          setApplicationSubmitted(true);
        } else {
          setApplicationError(data.error || "Enrollment encountered a slight variance.");
        }
      } else {
        setApplicationError("Connection to our registry is momentarily blurred.");
      }
    } catch (error) {
      setApplicationError("Server interface failure. Verification on-standby.");
    } finally {
      setSubmittingApplication(false);
    }
  };

  const toggleInterest = (interest: string) => {
    setApplicationForm(prev => {
      const current = prev.experienceInterests;
      if (current.includes(interest)) {
        return {
          ...prev,
          experienceInterests: current.filter(i => i !== interest)
        };
      } else {
        return {
          ...prev,
          experienceInterests: [...current, interest]
        };
      }
    });
  };

  // Luxury Event Name display mapper
  const getDisplayName = (eventName: string) => {
    if (eventName === "Siberian Tiger Sanctuary") return "Siberian Tiger and Amur Leopard";
    if (eventName === "Snow Leopard Pursuit") return "Snow Leopard";
    if (eventName === "Black Panther Safari") return "Black Panther";
    if (eventName === "Manta Rays Night") return "Manta Rays";
    if (eventName === "Golden Eagle Festival") return "Golden Eagle";
    if (eventName === "Vermont Autumn Foliage") return "Foliage";
    if (eventName === "Andean Condor Flight") return "Andean Condor Peru";
    if (eventName === "Sea Turtle Hatching") return "Sea Turtle Hatching Mexico";
    if (eventName === "Jaguar Hunting Pantanal") return "Jaguar Pantanal";
    if (eventName === "Bald Eagle Gathering") return "Bald Eagle";
    if (eventName === "Sperm Whales") return "Sperm Whales Dominica";
    if (eventName === "Humpback Migration Australia") return "Whale Watching Australia";
    if (eventName === "Whale Sharks Australia") return "Whale Sharks Australia";
    if (eventName === "Momijigari Autumn Maps") return "Momijigari";
    if (eventName === "Sanremo Festival") return "Sanremo";
    if (eventName === "Miami Spring Break Music") return "Miami Spring Break";
    return eventName;
  };

  // Get active events for the selected sphere (category)
  const activeEvents = selectedCategory
    ? allEventsData.filter(event => event.category === selectedCategory.id)
    : [];

  // Filter those active events based on search query
  const filteredEventsOfCategory = activeEvents.filter(event => {
    if (!experienceSearch) return true;
    const term = experienceSearch.toLowerCase();
    const displayName = getDisplayName(event.name).toLowerCase();
    return (
      displayName.includes(term) ||
      event.location.toLowerCase().includes(term) ||
      event.vibe.toLowerCase().includes(term) ||
      event.description.toLowerCase().includes(term)
    );
  });

  // Scroll to active experiences list on select
  useEffect(() => {
    if (selectedCategory) {
      setTimeout(() => {
        const el = document.getElementById("events-section-anchor");
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  }, [selectedCategory]);

  // Filter categories based on search query
  const filteredCategories = categoriesData.filter(category => {
    if (!experienceSearch) return true;
    const term = experienceSearch.toLowerCase();
    return (
      category.title.toLowerCase().includes(term) ||
      category.tagline.toLowerCase().includes(term) ||
      category.description.toLowerCase().includes(term)
    );
  });

  return (
    <div className="bg-background text-on-background font-sans min-h-screen relative flex flex-col antialiased selection:bg-tertiary selection:text-on-tertiary overflow-x-hidden">
      
      {/* Dynamic Animated Atmospheric Golden Orbs */}
      <div className="absolute top-20 right-1/4 w-96 h-96 bg-tertiary/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/2 left-10 w-80 h-80 bg-tertiary/3 rounded-full blur-[140px] pointer-events-none" />

      {/* Top Luxe Navigation Bar */}
      <nav className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur-xl border-b border-white/5 transition-all duration-300">
        <div className="flex justify-between items-center px-6 md:px-12 py-5 max-w-7xl mx-auto w-full">
          
          <div className="flex items-center gap-3">
            <Compass className="w-5 h-5 text-tertiary" />
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); setSelectedCategory(null); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              className="font-serif text-2xl tracking-widest text-on-background hover:text-tertiary transition-colors"
            >
              OFFLIGHT
            </a>
          </div>

          {/* Core Navigation Items */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#spheres-section"
              onClick={(e) => {
                e.preventDefault();
                setSelectedCategory(null);
                document.getElementById("spheres-section")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-[10px] uppercase font-semibold tracking-widest text-on-background/60 hover:text-tertiary transition-colors"
            >
              Spheres
            </a>
            <a
              href="#promise-section"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("promise-section")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-[10px] uppercase font-semibold tracking-widest text-on-background/60 hover:text-tertiary transition-colors"
            >
              Promise
            </a>
            <a
              href="#membership-section"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("membership-section")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-[10px] uppercase font-semibold tracking-widest text-on-background/60 hover:text-tertiary transition-colors"
            >
              Privileges
            </a>
          </div>

          {/* Call-to-Action Bar Trigger */}
          <div>
            <button
              onClick={() => setIsApplicationOpen(true)}
              className="px-5 py-2.5 bg-tertiary text-black font-semibold text-xs tracking-widest uppercase rounded-sm hover:bg-white transition-colors duration-300"
            >
              Become a Founding Member
            </button>
          </div>

        </div>
      </nav>

      {/* Main Content Sections */}
      <main className="flex-grow pt-20">
        <AnimatePresence>
          
          {/* TAB 1: CURATED REALMS EXPLORER */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            {/* Cinematic Hero */}
            <header className="relative h-[85vh] w-full flex items-end justify-center overflow-hidden">
              <div className="absolute inset-0 z-0">
                <img 
                  alt="Cinematic hero landscape" 
                  className="w-full h-full object-cover scale-105 transform origin-center brightness-75 select-none" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAy13vvmmtqTkAVjX_1b-tMrsLsyhMe3lFcgQUVDPKHyceckIOcpf3D1KPTnE29JGMPQ7Bl7334oUrs1fdbNN4n9YeEoQ31Y_mAuuPXWJOcJ6UrYpLtOCWBhWrTu7souIFS6EHe84MOWPOEdCiQGW0tZqjJ3i99I3vin1N7KaPFHmvpbitSIGeVQQSTCeh9cl32-wE-5wzyfQONetjFe9fJLwSR2Nhw2YIBamKmcItlCR4qtTSrD9ocgzpW59DTBPN98UjK81p46CW8WCQ"
                />
                <div className="absolute inset-0 hero-gradient"></div>
              </div>
              
              <div className="relative z-10 w-full max-w-5xl px-6 pb-20 text-center flex flex-col items-center">
                
                <h1 className="font-serif text-4xl md:text-7xl text-on-background mb-4 leading-[1.1] tracking-tight">
                  The world's most <br />
                  <span className="italic text-tertiary font-serif font-light">iconic experiences.</span>
                </h1>
                
                <p className="font-sans text-sm md:text-lg text-on-background/70 font-light max-w-2xl mb-10">
                  Life is measured in moments. Collect the best ones.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={() => setIsApplicationOpen(true)}
                    className="px-8 py-4 bg-tertiary text-black text-xs font-semibold uppercase tracking-widest hover:bg-white transition-colors duration-300"
                  >
                    Become a Founding Member
                  </button>
                  <a
                    href="#spheres-section"
                    onClick={(e) => { e.preventDefault(); document.getElementById("spheres-section")?.scrollIntoView({ behavior: "smooth" }); }}
                    className="px-8 py-4 bg-white/5 border border-white/15 text-xs text-on-background hover:bg-white/10 transition-colors duration-300 flex items-center gap-2 uppercase tracking-wider font-semibold"
                  >
                    Explore Spheres <ArrowDown className="w-3.5 h-3.5 text-tertiary" />
                  </a>
                </div>
              </div>
            </header>

            {/* Curated Grid of Spheres Section & Search */}
            <section id="spheres-section" className="max-w-7xl mx-auto px-6 md:px-12 py-24">
              
              <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-16">
                <div>
                  <span className="text-xs font-bold tracking-[0.2em] text-tertiary uppercase mb-2 block">Spheres</span>
                  <h2 className="font-serif text-3xl md:text-5xl text-on-background leading-tight">Choose Your Passion</h2>
                  <p className="text-xs md:text-sm text-on-background/50 font-light mt-2 max-w-xl">
                    Displaying six premium categories. Select a card to open a dedicated section showing the requested luxury events inside that category.
                  </p>
                </div>

                {/* Micro Search widget */}
                <div className="w-full md:w-80 relative">
                  <input 
                    type="text" 
                    placeholder="Search premium events..." 
                    value={experienceSearch}
                    onChange={(e) => setExperienceSearch(e.target.value)}
                    className="w-full bg-surface-container-low text-xs border border-white/5 px-4 py-3 pl-10 text-on-background focus:outline-none focus:border-tertiary rounded-none focus:ring-0"
                  />
                  <div className="absolute top-3.5 left-3.5 text-on-background/30">
                    <Compass className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Six Categories Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredCategories.map((category) => (
                  <motion.div 
                    key={category.id}
                    className="group relative h-96 border border-white/5 bg-surface-container-low overflow-hidden flex flex-col justify-end p-6 cursor-pointer"
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => setSelectedCategory(category)}
                  >
                    <div className="absolute inset-0">
                      <img 
                        src={category.imageUrl} 
                        alt={category.title} 
                        className="w-full h-full object-cover brightness-[0.4] group-hover:scale-105 group-hover:brightness-[0.25] transition-all duration-700 select-none"
                      />
                      <div className="absolute inset-y-0 left-0 w-2.5 bg-gradient-to-b from-tertiary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    <div className="relative z-10 space-y-3">
                      <span className="text-[10px] font-mono tracking-widest text-tertiary uppercase font-bold block">{category.tagline}</span>
                      <h3 className="font-serif text-2xl text-on-background group-hover:text-tertiary transition-colors duration-300">{category.title}</h3>
                      <p className="text-xs text-on-background/60 font-light line-clamp-2 md:group-hover:text-on-background/90 transition-colors">{category.description}</p>
                      
                      <div className="pt-2 flex items-center gap-1.5 text-[11px] font-semibold text-tertiary tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0">
                        Explore Collection <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Dedicated Sphere Events Area */}
            <AnimatePresence>
              {selectedCategory && (
                <div id="events-section-anchor" className="scroll-mt-24 max-w-7xl mx-auto px-6 md:px-12 pb-24 pt-10 border-t border-white/5">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 30 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-10"
                  >
                    {/* Active Sphere Info Header */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pb-6 border-b border-white/5">
                      <div>
                        <span className="text-xs font-mono tracking-widest text-tertiary uppercase font-bold block mb-2">{selectedCategory.title} Sphere</span>
                        <h3 className="font-serif text-3xl md:text-5xl text-on-background animate-fade-in">
                          {selectedCategory.title} Experiences
                        </h3>
                        <p className="text-xs md:text-sm text-on-background/50 font-light mt-2 max-w-xl">
                          {selectedCategory.description}
                        </p>
                      </div>

                      <button
                        onClick={() => setSelectedCategory(null)}
                        className="px-4 py-2 border border-white/10 hover:border-tertiary hover:text-tertiary transition-all text-xs flex items-center gap-2 text-on-background/70 font-semibold uppercase tracking-wider bg-transparent rounded-sm"
                      >
                        <X className="w-4 h-4" /> Close Sphere
                      </button>
                    </div>

                    {/* Events Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {filteredEventsOfCategory.map((event) => {
                        const eventName = getDisplayName(event.name);
                        const subject = `Offlight Experience Inquiry — ${eventName}`;
                        const mailtoUrl = `mailto:hello@weareofflight.com?subject=${encodeURIComponent(subject)}&body=I%20am%20interested%20in%20requesting%20information%252520and%252520exclusive%252520access%252520details%252520for%252520the%252520${encodeURIComponent(eventName)}%252520experience.`;
                        return (
                          <motion.div
                            key={event.id}
                            className="border border-white/5 bg-neutral-950 p-6 flex flex-col justify-between hover:border-white/15 transition-all text-left relative group rounded-none"
                            whileHover={{ y: -2 }}
                            transition={{ duration: 0.2 }}
                          >
                            <div className="space-y-4">
                              {/* Card Top Pill tags */}
                              <div className="flex justify-between items-start gap-4">
                                <span className="text-[10px] font-mono tracking-wide text-tertiary uppercase bg-tertiary/10 border border-tertiary/20 px-2.5 py-1 rounded-sm">
                                  {event.vibe}
                                </span>
                                <span className="text-[10px] font-mono text-on-background/40 uppercase select-none">
                                  {event.season}
                                </span>
                              </div>

                              {/* Card Header */}
                              <h4 className="font-serif text-xl font-bold text-on-background tracking-tight">
                                {eventName}
                              </h4>

                              {/* Card Description */}
                              <p className="text-xs font-light text-on-background/60 leading-relaxed min-h-[60px]">
                                {event.description}
                              </p>
                            </div>

                            <div className="pt-6 mt-6 border-t border-white/5 space-y-4">
                              <div className="flex items-center gap-1.5 text-[10px] text-on-background/50 font-mono">
                                <MapPin className="w-3.5 h-3.5 text-tertiary shrink-0" /> {event.location}
                              </div>

                              {/* Request Information CTA button */}
                              <a
                                href={mailtoUrl}
                                className="w-full bg-transparent border border-tertiary text-tertiary hover:bg-tertiary hover:text-black font-semibold text-[10px] tracking-widest uppercase py-3 px-4 transition-all duration-300 text-center block rounded-none font-mono"
                              >
                                Request Information
                              </a>
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>

                    {filteredEventsOfCategory.length === 0 && (
                      <div className="py-12 text-center text-on-background/40 text-sm font-light">
                        No experiences found matching "{experienceSearch}" inside {selectedCategory.title}.
                      </div>
                    )}

                  </motion.div>
                </div>
              )}
            </AnimatePresence>

            {/* OFFLIGHT STANDARD PROMISE */}
            <section id="promise-section" className="w-full bg-surface-container-lowest border-y border-white/5 py-24 relative overflow-hidden">
              <div className="max-w-5xl mx-auto px-6 text-center space-y-12">
                <div className="space-y-3">
                  <span className="text-[10px] font-bold tracking-[0.3em] text-tertiary uppercase">Curator Statues</span>
                  <h3 className="font-serif text-3xl md:text-5xl text-on-background">The Offlight Promise</h3>
                  <div className="w-12 h-[1px] bg-tertiary mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left pt-6">
                  
                  {/* Promise Card 1 */}
                  <div className="space-y-4 border border-white/5 bg-surface-container p-6 relative">
                    <Crown className="w-6 h-6 text-tertiary" />
                    <h4 className="font-serif text-lg font-medium text-on-background">Maximum Exclusivity</h4>
                    <p className="text-xs text-on-background/60 font-light leading-relaxed">
                      Small curated cohort groups of elite minds, limit-tested to guarantee seamless camaraderie and safety. We reject mass tourism cliques in absolute favor of true privacy.
                    </p>
                  </div>

                  {/* Promise Card 2 */}
                  <div className="space-y-4 border border-white/5 bg-surface-container p-6 relative">
                    <Shield className="w-6 h-6 text-tertiary" />
                    <h4 className="font-serif text-lg font-medium text-on-background">Professional Media Team</h4>
                    <p className="text-xs text-on-background/60 font-light leading-relaxed">
                      Accompanied by award-winning cinematographers and aerial coordinates units to document every iconic millisecond quietly, leaving you to focus cleanly on standard immersion.
                    </p>
                  </div>

                  {/* Promise Card 3 */}
                  <div className="space-y-4 border border-white/5 bg-surface-container p-6 relative">
                    <Award className="w-6 h-6 text-tertiary" />
                    <h4 className="font-serif text-lg font-medium text-on-background">Ultimate Comfort</h4>
                    <p className="text-xs text-on-background/60 font-light leading-relaxed">
                      Luxury lodging and high-class local culinary pairings curated manually by Michelin inspectors and localized private travel experts. No standard agents or checklists.
                    </p>
                  </div>

                </div>
              </div>
            </section>

            {/* MEMBERSHIP SECTION */}
            <section id="membership-section" className="max-w-4xl mx-auto px-6 md:px-12 py-24 text-center space-y-12 border-t border-white/5">
              <div className="space-y-4">
                <span className="text-[10px] font-mono tracking-widest text-tertiary uppercase font-semibold block">Prerogative</span>
                <h3 className="font-serif text-4xl md:text-5xl text-on-background tracking-tight">
                  Membership Coming Soon
                </h3>
                <div className="w-12 h-[1px] bg-tertiary mx-auto"></div>
              </div>

              <div className="bg-neutral-950 border border-white/5 p-10 md:p-16 space-y-8 max-w-2xl mx-auto">
                <h4 className="font-serif text-2xl font-light text-tertiary italic">
                  Membership Privileges
                </h4>
                
                <ul className="space-y-4 text-left inline-block text-sm font-light text-on-background/80 font-sans tracking-wide">
                  <li className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-tertiary shrink-0" /> Priority booking
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-tertiary shrink-0" /> Early access to experiences
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-tertiary shrink-0" /> Exclusive community events
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-tertiary shrink-0" /> Annual Offlight Gala
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-tertiary shrink-0" /> Founding Member status
                  </li>
                </ul>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => setIsApplicationOpen(true)}
                  className="px-10 py-5 bg-tertiary text-black font-semibold text-xs tracking-widest uppercase hover:bg-white transition-colors duration-300 rounded-none font-sans"
                >
                  Become a Founding Member
                </button>
              </div>
            </section>

          </motion.div>

        </AnimatePresence>
      </main>

      {/* Premium Founding Member Application Modal */}
      <AnimatePresence>
        {isApplicationOpen && (
          <div className="fixed inset-0 bg-black/95 backdrop-blur-md z-[100] flex items-center justify-center p-4 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -30 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="bg-neutral-950 border border-white/10 w-full max-w-3xl relative my-8 p-8 md:p-12 overflow-y-auto max-h-[90vh] shadow-2xl text-on-background flex flex-col rounded-none"
            >
              <button
                onClick={() => {
                  setIsApplicationOpen(false);
                  setApplicationSubmitted(false);
                  setApplicationError("");
                }}
                className="absolute top-6 right-6 text-on-background/60 hover:text-tertiary transition-colors"
                aria-label="Close application"
              >
                <X className="w-6 h-6 font-light" />
              </button>

              {!applicationSubmitted ? (
                <form onSubmit={handleApplicationSubmit} className="space-y-8">
                  {/* Modal Header */}
                  <div className="text-center md:text-left">
                    <span className="text-[10px] font-bold tracking-[0.3em] text-tertiary uppercase mb-2 block">Founding Member Invitation</span>
                    <h2 className="font-serif text-3xl md:text-4xl text-on-background leading-tight">Become a Founding Member</h2>
                    <p className="text-xs md:text-sm text-on-background/60 font-light mt-3 max-w-2xl">
                      Join the first generation of Offlight members and help shape the future of the world's most iconic experiences.
                    </p>
                    <div className="w-12 h-[1px] bg-tertiary mt-4 hidden md:block"></div>
                  </div>

                  {applicationError && (
                    <div className="p-4 bg-red-950/20 border border-red-900/30 text-red-400 text-xs tracking-wide">
                      {applicationError}
                    </div>
                  )}

                  {/* personal information header */}
                  <div>
                    <h3 className="text-xs uppercase font-semibold tracking-widest text-on-background/90 md:mb-6 mb-4 border-b border-white/5 pb-2">1. Personal Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-[10px] uppercase tracking-wider text-on-background/50 font-bold mb-2">First Name</label>
                        <input
                          type="text"
                          required
                          value={applicationForm.firstName}
                          onChange={(e) => setApplicationForm({ ...applicationForm, firstName: e.target.value })}
                          placeholder="e.g. Alessandro"
                          className="w-full bg-neutral-900 border border-white/10 px-4 py-3 text-sm focus:border-tertiary focus:outline-none transition-colors text-on-background rounded-none placeholder:text-white/20"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] uppercase tracking-wider text-on-background/50 font-bold mb-2">Last Name</label>
                        <input
                          type="text"
                          required
                          value={applicationForm.lastName}
                          onChange={(e) => setApplicationForm({ ...applicationForm, lastName: e.target.value })}
                          placeholder="e.g. Medici"
                          className="w-full bg-neutral-900 border border-white/10 px-4 py-3 text-sm focus:border-tertiary focus:outline-none transition-colors text-on-background rounded-none placeholder:text-white/20"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-[10px] uppercase tracking-wider text-on-background/50 font-bold mb-2">Email Address</label>
                        <input
                          type="email"
                          required
                          value={applicationForm.email}
                          onChange={(e) => setApplicationForm({ ...applicationForm, email: e.target.value })}
                          placeholder="e.g. alessandro@medici-estate.luxury"
                          className="w-full bg-neutral-900 border border-white/10 px-4 py-3 text-sm focus:border-tertiary focus:outline-none transition-colors text-on-background rounded-none placeholder:text-white/20"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] uppercase tracking-wider text-on-background/50 font-bold mb-2">Country of Residence</label>
                        <input
                          type="text"
                          required
                          value={applicationForm.country}
                          onChange={(e) => setApplicationForm({ ...applicationForm, country: e.target.value })}
                          placeholder="e.g. Italy"
                          className="w-full bg-neutral-900 border border-white/10 px-4 py-3 text-sm focus:border-tertiary focus:outline-none transition-colors text-on-background rounded-none placeholder:text-white/20"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] uppercase tracking-wider text-on-background/50 font-bold mb-2">Phone Number</label>
                        <div className="flex gap-2">
                          <select
                            value={applicationForm.dialingCode}
                            onChange={(e) => setApplicationForm({ ...applicationForm, dialingCode: e.target.value })}
                            className="bg-neutral-900 border border-white/10 px-3 py-3 text-sm text-on-background focus:border-tertiary focus:outline-none rounded-none w-24"
                          >
                            <option value="+1">+1 (US)</option>
                            <option value="+44">+44 (UK)</option>
                            <option value="+33">+33 (FR)</option>
                            <option value="+39">+39 (IT)</option>
                            <option value="+41">+41 (CH)</option>
                            <option value="+81">+81 (JP)</option>
                            <option value="+49">+49 (DE)</option>
                            <option value="+86">+86 (CN)</option>
                            <option value="+971">+971 (AE)</option>
                            <option value="+61">+61 (AU)</option>
                          </select>
                          <input
                            type="tel"
                            required
                            value={applicationForm.phoneNumber}
                            onChange={(e) => setApplicationForm({ ...applicationForm, phoneNumber: e.target.value })}
                            placeholder="392 123 4567"
                            className="flex-grow bg-neutral-900 border border-white/10 px-4 py-3 text-sm focus:border-tertiary focus:outline-none transition-colors text-on-background rounded-none placeholder:text-white/20"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* demographics selection */}
                  <div>
                    <h3 className="text-xs uppercase font-semibold tracking-widest text-on-background/90 md:mb-6 mb-4 border-b border-white/5 pb-2">2. Additional Profiling</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <label className="block text-[10px] uppercase tracking-wider text-on-background/50 font-bold mb-3">Age Range</label>
                        <div className="flex flex-wrap gap-2">
                          {["18-24", "25-34", "35-44", "45-54", "55+"].map((age) => (
                            <button
                              key={age}
                              type="button"
                              onClick={() => setApplicationForm({ ...applicationForm, ageRange: age })}
                              className={`px-4 py-2 text-xs uppercase font-mono tracking-wider transition-all duration-300 ${
                                applicationForm.ageRange === age
                                  ? "bg-tertiary text-black border border-tertiary font-bold"
                                  : "bg-neutral-900/50 text-on-background/60 border border-white/5 hover:border-white/20"
                              }`}
                            >
                              {age}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-[10px] uppercase tracking-wider text-on-background/50 font-bold mb-3">How did you hear about Offlight?</label>
                        <select
                          value={applicationForm.hearOption}
                          onChange={(e) => setApplicationForm({ ...applicationForm, hearOption: e.target.value })}
                          className="w-full bg-neutral-900 border border-white/10 px-4 py-3 text-sm focus:border-tertiary focus:outline-none text-on-background rounded-none"
                        >
                          <option value="Instagram">Instagram</option>
                          <option value="TikTok">TikTok</option>
                          <option value="YouTube">YouTube</option>
                          <option value="Google Search">Google Search</option>
                          <option value="Friend Referral">Friend Referral</option>
                          <option value="Event">Event</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* experience interests selection */}
                  <div>
                    <h3 className="text-xs uppercase font-semibold tracking-widest text-on-background/90 mb-2 border-b border-white/5 pb-2">3. Primary Intent</h3>
                    <p className="text-[10px] text-on-background/50 font-light mb-6 uppercase tracking-wider">Which experiences are you most interested in? <span className="text-tertiary font-bold">(Select one or multiple)</span></p>
                    
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {["Sport", "Culture", "Music", "Nature", "Competitions", "Gala"].map((category) => {
                        const isSelected = applicationForm.experienceInterests.includes(category);
                        return (
                          <button
                            key={category}
                            type="button"
                            onClick={() => toggleInterest(category)}
                            className={`p-4 text-left border relative transition-all duration-300 select-none flex flex-col justify-between h-28 ${
                              isSelected
                                ? "bg-tertiary/10 border-tertiary text-on-background"
                                : "bg-neutral-900/50 border-white/5 hover:border-white/20 text-on-background/70"
                            }`}
                          >
                            <div className="flex justify-between items-center w-full">
                              <span className="font-serif text-lg font-medium">{category}</span>
                              {isSelected && <Check className="w-4 h-4 text-tertiary" />}
                            </div>
                            <span className="text-[9px] uppercase tracking-wider text-on-background/50">
                              {category === "Sport" && "Monaco GP, Wimbledon"}
                              {category === "Culture" && "Carnival, Kyoto walks"}
                              {category === "Music" && "Opera, Boutique events"}
                              {category === "Nature" && "Solar Eclipse, Safaris"}
                              {category === "Competitions" && "Vintage rally, Yacht races"}
                              {category === "Gala" && "Cannes, sponsor invitations"}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* submit button block */}
                  <div className="pt-4 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-[10px] text-on-background/40 font-light leading-relaxed max-w-md text-center md:text-left">
                      By submitting, you accept our membership terms and privacy guidelines.
                    </p>
                    <button
                      type="submit"
                      disabled={submittingApplication}
                      className="w-full md:w-auto px-10 py-4 bg-tertiary text-black text-xs font-semibold uppercase tracking-widest hover:bg-white transition-colors duration-300 disabled:opacity-50 flex items-center justify-center gap-2"
                    >
                      {submittingApplication ? (
                        <>
                          <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                          Processing...
                        </>
                      ) : (
                        "Submit Application"
                      )}
                    </button>
                  </div>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col items-center justify-center py-16 text-center space-y-6"
                >
                  <div className="w-16 h-16 bg-tertiary/10 border border-tertiary/30 rounded-full flex items-center justify-center">
                    <Crown className="w-8 h-8 text-tertiary" />
                  </div>
                  <h3 className="font-serif text-2xl md:text-3xl text-on-background">Application Submitted</h3>
                  <div className="w-8 h-[1px] bg-tertiary"></div>
                  
                  <p className="text-sm text-on-background/80 font-light max-w-lg leading-relaxed">
                    Thank you for your application. Our team will review your submission and contact selected Founding Members regarding future Offlight experiences and membership opportunities.
                  </p>
                  
                  <button
                    onClick={() => {
                      setIsApplicationOpen(false);
                      setApplicationSubmitted(false);
                    }}
                    className="px-8 py-3.5 border border-white/20 text-on-background text-xs font-semibold uppercase tracking-widest hover:bg-white/5 transition-colors duration-300"
                  >
                    Return to Spheres
                  </button>
                </motion.div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Styled Luxury Editorial Footer */}
      <footer className="w-full bg-surface-container-lowest border-t border-white/5 mt-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 flex flex-col md:flex-row justify-between items-center gap-8">
          
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2 mb-2">
              <Compass className="w-5 h-5 text-tertiary" />
              <span className="font-serif text-2xl tracking-widest text-on-background">OFFLIGHT</span>
            </div>
            <p className="text-[10px] uppercase tracking-wider text-on-background/30 font-semibold italic">Curating The World's Most Iconic Experiences</p>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            <a 
              href="https://www.instagram.com/weareofflight?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] font-bold tracking-[0.15em] uppercase text-on-background/60 hover:text-tertiary transition-colors flex items-center gap-1.5"
            >
              <Instagram className="w-4 h-4 text-tertiary" />
              @weareofflight
            </a>
            <a 
              href="mailto:curator@offlight.com" 
              className="text-[10px] font-bold tracking-[0.15em] uppercase text-on-background/60 hover:text-tertiary transition-colors"
            >
              EMAIL
            </a>
            <span className="text-on-background/15 hidden md:inline">|</span>
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); }}
              className="text-[10px] font-bold tracking-[0.15em] uppercase text-on-background/40 hover:text-tertiary transition-colors"
            >
              PRIVACY POLICY
            </a>
          </div>

          <div className="text-center md:text-right text-[11px] text-on-background/40 font-light">
            © {new Date().getFullYear()} OFFLIGHT. All rights reserved.
          </div>

        </div>
      </footer>

    </div>
  );
}
