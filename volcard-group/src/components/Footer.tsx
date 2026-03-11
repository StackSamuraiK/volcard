import { Globe, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-20 bg-brand-bg border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-white flex items-center justify-center">
                <img src="/volcard.logo.jpeg" alt="Volcard Logo" className="w-10 h-10 object-contain mix-blend-multiply" />
              </div>
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

export default Footer;
