import { motion } from 'motion/react';

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
            <a href="#contact" className="inline-block px-10 py-5 bg-white text-black font-bold uppercase tracking-widest text-xs rounded-none hover:bg-brand-muted transition-all">
              Inquire About Partnership
            </a>
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

export default Partnership;
