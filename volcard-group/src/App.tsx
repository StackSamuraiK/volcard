/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  TrendingUp, 
  Briefcase, 
  Users, 
  ShieldCheck, 
  Globe, 
  Linkedin,
  Menu,
  X,
  ChevronDown,
  BarChart3,
  PieChart,
  Target
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Strategy', href: '#strategy' },
    { name: 'Focus', href: '#focus' },
    { name: 'Partnership', href: '#partnership' },
    { name: 'Team', href: '#team' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-brand-bg/80 backdrop-blur-xl py-4 border-b border-brand-border' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="relative w-10 h-10 flex items-center justify-center">
            <div className="absolute inset-0 bg-white rotate-45 group-hover:rotate-90 transition-transform duration-500" />
            <span className="relative z-10 text-black font-bold text-xl font-display">V</span>
          </div>
          <span className="text-xl font-bold tracking-[0.2em] text-white font-display">VOLCARD</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-xs font-semibold uppercase tracking-widest text-brand-muted hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button className="px-6 py-2.5 bg-white text-black text-xs font-bold uppercase tracking-widest rounded-none hover:bg-brand-muted transition-colors">
            Inquire
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full bg-brand-bg border-b border-brand-border overflow-y-auto max-h-[80vh] md:hidden"
          >
            <div className="p-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-display font-bold text-white"
                >
                  {link.name}
                </a>
              ))}
              <button className="w-full py-4 bg-white text-black font-bold uppercase tracking-widest">
                Contact Us
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-brand-bg">
      {/* Subtle Background Animation */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-10%] w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,_var(--color-brand-card)_0%,_transparent_70%)] opacity-30"
        />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')] opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-4 mb-8 justify-center">
              <div className="h-[1px] w-12 bg-brand-muted" />
              <span className="text-[10px] font-bold tracking-[0.4em] text-brand-muted uppercase">
                Private Investment Holding
              </span>
              <div className="h-[1px] w-12 bg-brand-muted" />
            </div>
            
            <h1 className="text-6xl md:text-[120px] font-bold text-white mb-10 tracking-[-0.04em] leading-[0.9] font-display text-balance">
              Precision in <br />
              <span className="text-gradient">Micro Horizons.</span>
            </h1>
            
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-brand-muted mb-12 leading-relaxed font-light">
              Volcard Group is an elite holding entity specializing in micro-investments and strategic acquisitions of businesses within the $1M–$10M market capitalization range.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="group px-10 py-5 bg-white text-black font-bold uppercase tracking-widest text-xs rounded-none flex items-center gap-3 hover:bg-brand-muted transition-all duration-500">
                View Strategy
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-10 py-5 bg-transparent text-white font-bold uppercase tracking-widest text-xs rounded-none border border-brand-border hover:bg-white/5 transition-all duration-500">
                Our Focus
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-[10px] font-bold tracking-[0.3em] text-brand-muted uppercase">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-brand-muted to-transparent" />
      </motion.div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-32 bg-brand-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-20 items-start">
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[10px] font-bold tracking-[0.4em] text-brand-muted uppercase mb-6 block">
                The Philosophy
              </span>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-[1.1] font-display">
                Unlocking <br /> Overlooked <br /> Potential.
              </h2>
              <div className="w-20 h-1 bg-white mb-10" />
            </motion.div>
          </div>
          
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <p className="text-xl md:text-2xl text-white font-light leading-relaxed">
                We identify significant value in the micro-cap space that institutional giants often overlook. Our approach combines rigorous analysis with a long-term reinstatement strategy.
              </p>
              <p className="text-lg text-brand-muted leading-relaxed">
                Volcard Group operates with the agility of a boutique firm and the discipline of a global institution. We don't just provide capital; we provide the strategic framework necessary to scale businesses from $1M to their next major milestone.
              </p>
              
              <div className="grid grid-cols-2 gap-12 pt-10 border-t border-brand-border">
                <div>
                  <div className="text-5xl font-bold text-white mb-2 font-display">$10M</div>
                  <div className="text-[10px] font-bold text-brand-muted uppercase tracking-[0.2em]">Upper Cap Limit</div>
                </div>
                <div>
                  <div className="text-5xl font-bold text-white mb-2 font-display">∞</div>
                  <div className="text-[10px] font-bold text-brand-muted uppercase tracking-[0.2em]">Investment Horizon</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Strategy = () => {
  const pillars = [
    {
      id: "01",
      title: "Micro Investments",
      desc: "Precision-targeted capital deployment into high-potential ventures with established product-market fit.",
      icon: <Target className="w-6 h-6" />
    },
    {
      id: "02",
      title: "Strategic Acquisitions",
      desc: "Full or majority acquisitions of businesses within the $1M–$10M range, focusing on operational synergy.",
      icon: <Briefcase className="w-6 h-6" />
    },
    {
      id: "03",
      title: "Value Reinstatement",
      desc: "Comprehensive restructuring and optimization to unlock latent value and ensure sustainable growth.",
      icon: <TrendingUp className="w-6 h-6" />
    }
  ];

  return (
    <section id="strategy" className="py-32 bg-brand-card">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-[10px] font-bold tracking-[0.4em] text-brand-muted uppercase mb-6 block">
              Our Methodology
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-white font-display">
              The Volcard Framework
            </h2>
          </div>
          <div className="text-brand-muted text-sm max-w-xs text-right">
            A systematic approach to identifying and scaling micro-cap excellence.
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 border-t border-brand-border">
          {pillars.map((p, idx) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="p-12 border-r last:border-r-0 border-brand-border group hover:bg-white/[0.02] transition-colors"
            >
              <div className="text-brand-muted font-display text-sm mb-12 font-bold tracking-widest">{p.id}</div>
              <div className="mb-8 text-white group-hover:scale-110 transition-transform duration-500 origin-left">
                {p.icon}
              </div>
              <h4 className="text-2xl font-bold text-white mb-6 font-display">{p.title}</h4>
              <p className="text-brand-muted leading-relaxed font-light">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FocusAreas = () => {
  const areas = [
    "FinTech Infrastructure",
    "B2B SaaS Solutions",
    "Specialized Manufacturing",
    "Digital Marketplaces",
    "HealthTech Services",
    "Sustainable Logistics"
  ];

  return (
    <section id="focus" className="py-32 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative aspect-[4/5] overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000">
            <img 
              src="https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&q=80&w=1000" 
              alt="Modern Office" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-brand-bg/20" />
          </div>
          
          <div>
            <span className="text-[10px] font-bold tracking-[0.4em] text-brand-muted uppercase mb-6 block">
              Sector Focus
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-12 font-display">
              Where We Invest.
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {areas.map((area, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-4 group cursor-default"
                >
                  <div className="w-2 h-2 bg-white group-hover:w-4 transition-all duration-300" />
                  <span className="text-lg text-brand-muted group-hover:text-white transition-colors">{area}</span>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-16 p-8 glass-card">
              <p className="text-white font-light italic leading-relaxed">
                "We look for businesses with resilient cash flows, defensible market positions, and clear paths to operational improvement."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Team = () => {
  return (
    <section id="team" className="py-32 bg-brand-card">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-20">
          <span className="text-[10px] font-bold tracking-[0.4em] text-brand-muted uppercase mb-6">
            Leadership
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-white font-display">
            The Visionary.
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-0 border border-brand-border overflow-hidden">
            <div className="aspect-square grayscale hover:grayscale-0 transition-all duration-1000">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=1000" 
                alt="Sanskar Srivastava" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-12 md:p-20 flex flex-col justify-center bg-brand-bg">
              <h4 className="text-4xl font-bold text-white mb-2 font-display">Sanskar Srivastava</h4>
              <p className="text-brand-muted font-bold uppercase tracking-[0.2em] text-[10px] mb-10">Managing Director & Group CEO</p>
              
              <div className="space-y-6 text-brand-muted font-light leading-relaxed mb-12">
                <p>
                  Sanskar Srivastava leads Volcard Group with a focus on institutionalizing the micro-cap investment landscape.
                </p>
                <p>
                  His vision is to bridge the gap between small-scale business potential and high-level strategic execution, creating a new standard for reinstatement value in the industry.
                </p>
              </div>
              
              <a 
                href="https://www.linkedin.com/in/sanskar-srivastava-551748348/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center gap-4 text-white font-bold uppercase tracking-widest text-[10px] hover:gap-6 transition-all"
              >
                <Linkedin className="w-5 h-5" />
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-20 bg-brand-bg border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 bg-white flex items-center justify-center font-bold text-black text-sm font-display">V</div>
              <span className="text-xl font-bold tracking-[0.2em] text-white font-display uppercase">Volcard</span>
            </div>
            <p className="max-w-xs text-brand-muted text-sm leading-relaxed font-light">
              A premier private investment holding entity focused on micro-cap acquisitions and value reinstatement.
            </p>
          </div>
          
          <div>
            <h5 className="text-white font-bold uppercase tracking-widest text-[10px] mb-8">Navigation</h5>
            <ul className="space-y-4 text-sm text-brand-muted">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#strategy" className="hover:text-white transition-colors">Strategy</a></li>
              <li><a href="#focus" className="hover:text-white transition-colors">Focus Areas</a></li>
              <li><a href="#team" className="hover:text-white transition-colors">Leadership</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="text-white font-bold uppercase tracking-widest text-[10px] mb-8">Legal</h5>
            <ul className="space-y-4 text-sm text-brand-muted">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Investor Portal</a></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-brand-border gap-6">
          <div className="text-[10px] font-bold text-brand-muted uppercase tracking-widest">
            © {new Date().getFullYear()} Volcard Group. All rights reserved.
          </div>
          <div className="flex gap-8">
            <a href="#" className="text-brand-muted hover:text-white transition-colors"><Linkedin className="w-4 h-4" /></a>
            <a href="#" className="text-brand-muted hover:text-white transition-colors"><Globe className="w-4 h-4" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const Partnership = () => {
  const benefits = [
    {
      title: "Strategic Capital",
      desc: "More than just funding. We provide the institutional framework to navigate complex growth stages."
    },
    {
      id: "02",
      title: "Operational Alpha",
      desc: "Direct access to our network of specialists in finance, operations, and technology."
    },
    {
      id: "03",
      title: "Long-term Alignment",
      desc: "Our horizons are measured in decades. We prioritize sustainable value over short-term exits."
    },
    {
      id: "04",
      title: "Global Reach",
      desc: "Leveraging international insights to scale micro-cap businesses across borders."
    }
  ];

  return (
    <section id="partnership" className="py-32 bg-brand-card relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <span className="text-[10px] font-bold tracking-[0.4em] text-brand-muted uppercase mb-6 block">
              The Value Proposition
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 font-display">
              Partnering for <br /> Excellence.
            </h2>
            <p className="text-xl text-brand-muted font-light leading-relaxed mb-12">
              Joining the Volcard ecosystem means gaining a partner committed to the long-term integrity and growth of your business.
            </p>
            <button className="px-10 py-5 bg-white text-black font-bold uppercase tracking-widest text-xs rounded-none hover:bg-brand-muted transition-all">
              Inquire About Partnership
            </button>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-12">
            {benefits.map((b, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="space-y-4"
              >
                <div className="w-8 h-[1px] bg-white mb-6" />
                <h4 className="text-lg font-bold text-white font-display">{b.title}</h4>
                <p className="text-sm text-brand-muted leading-relaxed font-light">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-brand-bg text-white font-sans selection:bg-white selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Strategy />
        <FocusAreas />
        <Partnership />
        <Team />
      </main>
      <Footer />
    </div>
  );
}
