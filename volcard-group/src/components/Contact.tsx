import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, Send, Linkedin } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      text: "sanskar@kimbocorp.com",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      text: "+91 9250161235",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      text: "Sanskar Srivastava",
    }
  ];

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setStatus('loading');
    
    try {
      const response = await fetch('http://localhost:5001/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 3000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 3000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <section id="contact" className="py-32 bg-brand-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-20">
          <span className="text-[10px] font-bold tracking-[0.4em] text-brand-muted uppercase mb-6 block">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-white font-display">
            Let's Connect.
          </h2>
          <div className="w-12 h-1 bg-white mt-8" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info Card */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-10 md:p-12 border border-brand-border bg-brand-card/50 backdrop-blur-sm"
          >
            <h3 className="text-2xl font-bold text-white mb-10 font-display">Contact Information</h3>
            <div className="flex flex-col gap-8">
              {contactInfo.map((info, idx) => (
                <div key={idx} className="flex items-center gap-6 group">
                  <div className="w-12 h-12 flex items-center justify-center border border-brand-border bg-brand-bg text-brand-muted group-hover:text-white group-hover:border-white transition-colors duration-300">
                    {info.icon}
                  </div>
                  <span className="text-brand-muted group-hover:text-white transition-colors text-lg font-light">
                    {info.text}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form Card */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-10 md:p-12 border border-brand-border bg-brand-card/50 backdrop-blur-sm"
          >
            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
              <div>
                <input 
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                  placeholder="Your Name" 
                  className="w-full bg-brand-bg border border-brand-border px-6 py-4 text-white placeholder:text-brand-muted focus:outline-none focus:border-white transition-colors font-light text-sm"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                  placeholder="Your Email" 
                  className="w-full bg-brand-bg border border-brand-border px-6 py-4 text-white placeholder:text-brand-muted focus:outline-none focus:border-white transition-colors font-light text-sm"
                />
              </div>
              <div>
                <textarea 
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                  placeholder="Your Message" 
                  rows={4}
                  className="w-full bg-brand-bg border border-brand-border px-6 py-4 text-white placeholder:text-brand-muted focus:outline-none focus:border-white transition-colors font-light text-sm resize-none"
                />
              </div>
              <button 
                type="submit"
                disabled={status === 'loading'}
                className="group w-full py-5 mt-2 bg-white text-black font-bold uppercase tracking-widest text-xs rounded-none flex items-center justify-center gap-3 hover:bg-brand-muted transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? 'Sending...' : status === 'success' ? 'Message Sent!' : status === 'error' ? 'Failed to Send' : 'Send Message'}
                {status === 'idle' && <Send className="w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
