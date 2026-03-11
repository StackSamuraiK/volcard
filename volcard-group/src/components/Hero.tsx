import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

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

export default Hero;
