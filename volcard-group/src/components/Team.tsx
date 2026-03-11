import { Linkedin } from 'lucide-react';

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
            <div className="aspect-square md:aspect-auto md:h-full grayscale hover:grayscale-0 transition-all duration-1000">
              <img 
                src="/volcard.founder.jpeg"
                alt="Sanskar Srivastava" 
                className="w-full h-full object-cover block"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-12 md:p-20 flex flex-col justify-center bg-brand-bg md:border-l border-brand-border">
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

export default Team;
