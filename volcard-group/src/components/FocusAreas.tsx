import { motion } from 'motion/react';

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

export default FocusAreas;
