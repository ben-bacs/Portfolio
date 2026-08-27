import React, { useState } from 'react';
import { ArrowRight, Github, Linkedin, Mail, Phone, MapPin, Check } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';

interface FooterProps {
  onOpenContact?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const currentYear = new Date().getFullYear();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setSubscribed(false);
      }, 3000);
    }
  };

  return (
    <footer id="contact" className="pt-16 sm:pt-20 pb-10 sm:pb-12 bg-bg-dark border-t border-border-subtle relative overflow-hidden">
      {/* Subtle Ambient Glow */}
      <div className="absolute bottom-0 left-1/4 w-[350px] sm:w-[500px] h-[200px] sm:h-[300px] gold-glow-subtle pointer-events-none rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Callout & Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 sm:gap-12 pb-12 sm:pb-16 border-b border-zinc-800">
          
          {/* Left: Call to Action & Branding */}
          <div className="md:col-span-5 flex flex-col justify-between items-start">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full border border-gold/40 p-0.5 bg-zinc-900 flex-shrink-0">
                  <img
                    src={PORTFOLIO_DATA.personal.logoUrl}
                    alt="BNB Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="min-w-0">
                  <h4 className="font-bold text-white text-base tracking-tight leading-tight truncate">
                    {PORTFOLIO_DATA.personal.fullName}
                  </h4>
                  <span className="text-[10px] sm:text-[10.5px] text-text-dim tracking-wider uppercase font-semibold">
                    Professional Identity
                  </span>
                </div>
              </div>

              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-text-dim mb-2 block">
                LET'S WORK TOGETHER
              </span>
              <h3 className="text-2xl sm:text-4xl font-bold tracking-tight text-white mb-3">
                Have a project <span className="font-serif italic font-normal text-gold">in mind?</span>
              </h3>
              <p className="text-xs sm:text-sm text-text-muted leading-relaxed max-w-sm mb-6">
                {PORTFOLIO_DATA.footer.ctaSubtext}
              </p>
            </div>

            <button
              onClick={onOpenContact}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-hover active:scale-95 text-bg-main text-xs font-semibold px-6 py-3.5 rounded-full transition-all shadow-xl shadow-gold/20 hover:-translate-y-0.5"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Center Columns: Direct Contact & Offices */}
          <div className="md:col-span-4 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {/* Column 1: Contact Details */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-gold mb-3 sm:mb-4">
                Contact
              </h4>
              <ul className="space-y-2.5 sm:space-y-3">
                <li>
                  <a
                    href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                    className="text-xs text-text-muted hover:text-white transition-colors flex items-start gap-2 group"
                  >
                    <Mail className="w-3.5 h-3.5 text-gold mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="break-all">{PORTFOLIO_DATA.personal.email}</span>
                  </a>
                </li>
                {PORTFOLIO_DATA.personal.phones.map((phone) => (
                  <li key={phone}>
                    <a
                      href={`tel:${phone.replace(/\s+/g, '')}`}
                      className="text-xs text-text-muted hover:text-white transition-colors flex items-center gap-2 group"
                    >
                      <Phone className="w-3.5 h-3.5 text-gold flex-shrink-0 group-hover:scale-110 transition-transform" />
                      <span>{phone}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Offices */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-gold mb-3 sm:mb-4">
                Offices
              </h4>
              <ul className="space-y-2.5 sm:space-y-3">
                {PORTFOLIO_DATA.personal.offices.map((office) => (
                  <li key={office.label} className="text-xs text-text-muted flex items-start gap-2">
                    <MapPin className="w-3.5 h-3.5 text-gold mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-zinc-200 font-medium">{office.city}</div>
                      <div className="text-[10px] sm:text-[11px] text-text-dim">{office.province}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Quick Newsletter / Reach out */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3 sm:mb-4">
              Stay Updated
            </h4>
            <p className="text-xs text-text-muted leading-relaxed mb-4">
              Subscribe to stay in touch for tech updates, architecture notes, and case studies.
            </p>

            <form onSubmit={handleSubscribe} className="relative">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full bg-zinc-900/90 border border-zinc-800 rounded-full pl-4 pr-12 py-3 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-gold transition-colors"
              />
              <button
                type="submit"
                aria-label="Submit email"
                className="absolute right-1.5 top-1.5 bottom-1.5 w-9 rounded-full bg-gold hover:bg-gold-hover text-bg-main flex items-center justify-center transition-colors active:scale-90"
              >
                {subscribed ? <Check className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
              </button>
            </form>
            {subscribed && (
              <span className="text-[11px] text-emerald-400 mt-2 block">
                Thanks for connecting!
              </span>
            )}

            {/* Social Icons Bar */}
            <div className="flex items-center gap-3 mt-5 sm:mt-6">
              <a
                href={PORTFOLIO_DATA.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-text-muted hover:text-gold hover:border-gold/40 transition-colors active:scale-95"
                aria-label="GitHub"
              >
                <Github className="w-3.5 h-3.5" />
              </a>
              <a
                href={PORTFOLIO_DATA.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-text-muted hover:text-gold hover:border-gold/40 transition-colors active:scale-95"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
              <a
                href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-text-muted hover:text-gold hover:border-gold/40 transition-colors active:scale-95"
                aria-label="Email"
              >
                <Mail className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] sm:text-xs text-text-dim gap-3 text-center sm:text-left">
          <p>© {currentYear} {PORTFOLIO_DATA.personal.fullName}. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Designed & Developed with modern React & Tailwind CSS</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
