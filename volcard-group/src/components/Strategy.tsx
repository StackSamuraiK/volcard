import { motion } from 'motion/react';
import { Target, Briefcase, TrendingUp } from 'lucide-react';

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

export default Strategy;
