import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Strategy from './components/Strategy';
import FocusAreas from './components/FocusAreas';
import Partnership from './components/Partnership';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-brand-bg text-white font-sans selection:bg-white selection:text-black relative">
      {/* Background Text Overlay */}
      <div className="fixed inset-0 pointer-events-none flex items-center justify-center z-40 overflow-hidden w-full">
        <div className="w-full text-center text-[14vw] sm:text-[16vw] xl:text-[22vw] font-display font-black text-white/5 blur-[6px] md:blur-[12px] whitespace-nowrap select-none tracking-tighter leading-none">
          VOLCARD
        </div>
      </div>

      <Navbar />
      <main>
        <Hero />
        <About />
        <Strategy />
        <FocusAreas />
        <Partnership />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
