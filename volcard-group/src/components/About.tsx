import { motion } from 'motion/react';

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

export default About;
