import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Phone, MessageCircle, MapPin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

// Image imports
import heroGraveyard from "@/assets/images/hero-graveyard.png";
import roomChainsaw from "@/assets/images/room-chainsaw.png";
import roomMorgue from "@/assets/images/room-morgue.png";
import roomCemetery from "@/assets/images/room-cemetery.png";

const PHONE_NUMBER = "04 520 233";
const WHATSAPP_NUMBER = "76 055 228";
const TEL_LINK = "tel:+96104520233";
const WA_LINK = "https://wa.me/96176055228";

const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="bg-background min-h-screen text-foreground selection:bg-primary selection:text-white">
      {/* Sticky Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-black/90 backdrop-blur-md py-4 shadow-lg border-b border-white/5" : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <div className="font-serif font-bold text-xl tracking-widest text-white cursor-pointer" onClick={() => scrollTo("hero")}>
            GRAVEYARD
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {["About", "Rooms", "Experience", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className="text-sm font-medium text-white/70 hover:text-primary transition-colors tracking-wide uppercase"
              >
                {item}
              </button>
            ))}
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-primary/80 text-white px-6 py-2 uppercase text-sm font-bold tracking-wider transition-all hover:scale-105"
            >
              Book Now
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black border-b border-white/10 px-4 py-6 flex flex-col gap-4"
          >
            {["About", "Rooms", "Experience", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className="text-left text-lg font-serif text-white hover:text-primary transition-colors uppercase tracking-widest"
              >
                {item}
              </button>
            ))}
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white text-center px-6 py-3 uppercase text-sm font-bold tracking-wider mt-4"
            >
              Book Now via WhatsApp
            </a>
          </motion.div>
        )}
      </header>

      {/* HERO SECTION */}
      <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden vignette">
        <div className="absolute inset-0 z-0">
          <img
            src={heroGraveyard}
            alt="Graveyard Escape Room"
            className="w-full h-full object-cover object-center opacity-40 scale-105 animate-[pulse_10s_ease-in-out_infinite]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-transparent" />
        </div>
        
        {/* Fog Elements */}
        <div className="fog-container">
          <div className="fog-layer"></div>
          <div className="fog-layer-2"></div>
        </div>

        <div className="container relative z-10 px-4 text-center mt-20">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 uppercase tracking-tighter blood-text-shadow leading-none"
          >
            Can You Escape<br className="hidden md:block"/> The Graveyard?
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-lg md:text-2xl text-white/80 max-w-2xl mx-auto mb-12 font-light tracking-wide"
          >
            Lebanon's Most Terrifying Escape Room Experience
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <a
              href={TEL_LINK}
              className="group relative px-8 py-4 bg-transparent border border-white hover:border-primary overflow-hidden w-full sm:w-auto text-center"
            >
              <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
              <span className="relative flex items-center justify-center gap-3 text-white font-bold tracking-widest uppercase">
                <Phone size={20} /> Call Now
              </span>
            </a>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 bg-primary hover:bg-primary/90 w-full sm:w-auto text-center transition-colors"
            >
              <span className="relative flex items-center justify-center gap-3 text-white font-bold tracking-widest uppercase">
                <MessageCircle size={20} /> Book on WhatsApp
              </span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-24 md:py-32 relative z-10 bg-background">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <FadeIn>
            <h2 className="text-primary font-serif text-3xl md:text-5xl font-bold mb-8 uppercase tracking-widest">Welcome to Hell</h2>
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed font-light">
              Step into a world of fear, puzzles, and adrenaline. Graveyard Escape Room is one of the most intense horror experiences in Lebanon, combining live actors, cinematic sets, and mind-bending challenges.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ROOMS SECTION */}
      <section id="rooms" className="py-24 md:py-32 bg-black relative border-y border-white/5">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-white font-serif text-4xl md:text-5xl font-bold mb-4 uppercase tracking-widest">Choose Your Nightmare</h2>
              <p className="text-white/50 text-lg">Three distinct rooms. One way out.</p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {
                title: "Chainsaw Massacre",
                desc: "Enter a nightmare where survival is your only goal. The sound of the chainsaw is closer than you think...",
                diff: "Hard",
                dur: "60 min",
                img: roomChainsaw
              },
              {
                title: "Morgue",
                desc: "Cold. Silent. Dead. Or is it? Solve the mystery before you become part of it.",
                diff: "Hard",
                dur: "60 min",
                img: roomMorgue
              },
              {
                title: "Cemetery",
                desc: "Among the graves, something is watching. Escape before you join the dead.",
                diff: "Medium",
                dur: "60 min",
                img: roomCemetery
              }
            ].map((room, i) => (
              <FadeIn key={i} delay={i * 0.2}>
                <div className="group relative bg-zinc-950 overflow-hidden cursor-pointer h-full flex flex-col border border-white/5 hover:border-primary/50 transition-colors duration-500">
                  <div className="relative h-64 md:h-80 overflow-hidden">
                    <img
                      src={room.img}
                      alt={room.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent"></div>
                    {/* Hover Glow */}
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay"></div>
                  </div>
                  <div className="p-8 flex-grow flex flex-col">
                    <h3 className="text-2xl font-serif font-bold text-white mb-4 uppercase tracking-wider group-hover:text-primary transition-colors">{room.title}</h3>
                    <p className="text-white/60 mb-6 flex-grow">{room.desc}</p>
                    <div className="flex items-center justify-between text-sm uppercase tracking-widest font-bold text-white/40 border-t border-white/10 pt-4">
                      <span>Diff: <span className="text-white">{room.diff}</span></span>
                      <span>{room.dur}</span>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.6}>
            <div className="mt-16 flex justify-center">
               <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-10 py-4 bg-primary hover:bg-primary/90 text-center transition-all hover:scale-105"
              >
                <span className="relative flex items-center justify-center gap-3 text-white font-bold tracking-widest uppercase">
                  Book A Room <MessageCircle size={18} />
                </span>
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section id="experience" className="relative py-32 md:py-48 overflow-hidden border-t border-white/5">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroGraveyard}
            alt="Experience background"
            className="w-full h-full object-cover object-center opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/80" />
        </div>

        <div className="relative z-10 container mx-auto px-4 max-w-5xl">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
            <div className="md:w-1/2">
              <FadeIn>
                <h2 className="text-white font-serif text-4xl md:text-5xl font-bold mb-4 uppercase tracking-widest">What to Expect</h2>
                <p className="text-white/50 mb-10 text-lg">Gather your bravest friends — and maybe a spare pair of socks.</p>
                <ul className="space-y-6">
                  {[
                    { text: "Live actors — toggle the horror mode if you dare", sub: null },
                    { text: "60 minutes of puzzles, screams, and adrenaline", sub: null },
                    { text: "Perfect for groups of 2 to 9 players", sub: null },
                    { text: "A genuinely fun (and terrifying) night out", sub: null },
                    { text: "Minimum age: 12 years old", sub: "Players under 18 must be accompanied by an adult" },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span className="text-primary mt-1 text-lg font-bold">—</span>
                      <div>
                        <span className="text-xl text-white/85 font-light">{item.text}</span>
                        {item.sub && <p className="text-sm text-white/40 mt-1">{item.sub}</p>}
                      </div>
                    </li>
                  ))}
                </ul>
              </FadeIn>
            </div>
            <div className="md:w-1/2 w-full">
              <FadeIn delay={0.3}>
                <div className="text-center p-12 border border-white/15 bg-black/70 backdrop-blur-sm">
                  <h3 className="text-2xl font-serif text-white mb-3 uppercase tracking-wider">Ready for a Night to Remember?</h3>
                  <p className="text-white/50 mb-8">No online booking — call or message us to lock in your slot.</p>
                  <div className="flex flex-col gap-4">
                    <a href={TEL_LINK} className="flex items-center justify-center gap-3 w-full py-4 border border-white text-white font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-colors">
                      <Phone size={18} /> Call Now
                    </a>
                    <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 w-full py-4 bg-primary text-white font-bold tracking-widest uppercase hover:bg-primary/90 transition-colors">
                      <MessageCircle size={18} /> WhatsApp Us
                    </a>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT & FOOTER */}
      <footer id="contact" className="pt-24 pb-12 bg-background relative border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <FadeIn>
              <h2 className="text-primary font-serif text-4xl font-bold mb-12 uppercase tracking-widest">Contact & Location</h2>
              
              <div className="grid md:grid-cols-3 gap-8 text-white/70">
                <div className="flex flex-col items-center gap-4">
                  <Phone size={32} className="text-primary" />
                  <div>
                    <div className="font-bold uppercase tracking-widest text-white mb-2">Call Us</div>
                    <a href={TEL_LINK} className="text-xl hover:text-primary transition-colors">{PHONE_NUMBER}</a>
                  </div>
                </div>
                
                <div className="flex flex-col items-center gap-4">
                  <MessageCircle size={32} className="text-primary" />
                  <div>
                    <div className="font-bold uppercase tracking-widest text-white mb-2">WhatsApp</div>
                    <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="text-xl hover:text-primary transition-colors">{WHATSAPP_NUMBER}</a>
                  </div>
                </div>
                
                <div className="flex flex-col items-center gap-4">
                  <MapPin size={32} className="text-primary" />
                  <div>
                    <div className="font-bold uppercase tracking-widest text-white mb-2">Location</div>
                    <a
                      href="https://www.google.com/maps/search/graveyard+escape+room+antelias"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xl hover:text-primary transition-colors"
                    >
                      Antelias, Lebanon
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-white/40 text-sm tracking-widest uppercase">
              © {new Date().getFullYear()} Graveyard Escape Room.
            </div>
            <a href="https://www.instagram.com/graveyard_escaperoom/" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors">
              <Instagram size={24} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
