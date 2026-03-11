import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

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
          <div className="relative w-14 h-14 flex items-center justify-center">
            <div className="absolute inset-0 bg-white transition-transform duration-500 group-hover:rotate-90" />
            <img src="/volcard.logo.jpeg" alt="Volcard Logo" className="relative z-10 w-12 h-12 object-contain mix-blend-multiply" />
          </div>
          <span className="text-xl font-bold pl-2 tracking-[0.2em] text-white font-display">VOLCARD GROUP</span>
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
          <a href="#contact" className="px-6 py-2.5 bg-white text-black text-xs font-bold uppercase tracking-widest rounded-none hover:bg-brand-muted transition-colors">
            Inquire
          </a>
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
              <a 
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-center w-full py-4 bg-white text-black font-bold uppercase tracking-widest"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
