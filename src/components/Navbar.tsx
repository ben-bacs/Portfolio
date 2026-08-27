import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Sparkles, Mail, Phone } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';

interface NavbarProps {
  onOpenContact?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'projects', 'services', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'py-2.5 sm:py-3 bg-bg-main/90 backdrop-blur-xl border-b border-border-subtle/60 shadow-lg shadow-black/40'
            : 'py-4 sm:py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Left: Branding & Status */}
          <a href="#home" className="flex items-center gap-2.5 sm:gap-3 group max-w-[70%] sm:max-w-none">
            <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden border border-gold/40 p-0.5 bg-zinc-900 group-hover:border-gold transition-colors flex-shrink-0">
              <img
                src={PORTFOLIO_DATA.personal.logoUrl}
                alt="BNB Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col min-w-0">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="font-bold text-xs sm:text-base text-text-main tracking-tight group-hover:text-gold transition-colors truncate">
                  {PORTFOLIO_DATA.personal.name}
                </span>
                <span className="inline-flex items-center justify-center relative flex-shrink-0 w-2 h-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                </span>
              </div>
              <span className="text-[9.5px] sm:text-[10.5px] text-text-dim tracking-wide font-medium truncate">
                {PORTFOLIO_DATA.personal.title}
              </span>
            </div>
          </a>

          {/* Center: Desktop Floating Pill Menu */}
          <nav className="hidden md:flex items-center bg-zinc-900/70 border border-zinc-800/80 backdrop-blur-md rounded-full px-3.5 py-1.5 shadow-2xl">
            {PORTFOLIO_DATA.navigation.map((item) => {
              const targetId = item.href.replace('#', '');
              const isActive = activeSection === targetId;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? 'text-white'
                      : 'text-text-muted hover:text-white hover:bg-zinc-800/40'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavPill"
                      className="absolute inset-0 bg-zinc-800 border border-zinc-700/60 rounded-full -z-10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Right: Desktop CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => {
                if (onOpenContact) {
                  e.preventDefault();
                  onOpenContact();
                }
              }}
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold-hover text-bg-main text-xs font-semibold px-4 py-2.5 rounded-full transition-all duration-200 shadow-lg shadow-gold/10 hover:shadow-gold/25 hover:-translate-y-0.5 active:scale-95"
            >
              <span>Let's Work Together</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-zinc-900/90 border border-zinc-800 text-text-muted hover:text-white focus:outline-none active:scale-95 transition-transform"
            aria-label="Toggle mobile navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu Modal */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-40 md:hidden flex flex-col justify-start">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md -z-10"
            />

            {/* Menu Container */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="pt-20 px-4 pb-6 w-full"
            >
              <div className="bg-zinc-950/95 border border-zinc-800/90 rounded-2xl p-5 backdrop-blur-2xl shadow-2xl flex flex-col gap-4 max-h-[calc(100vh-100px)] overflow-y-auto">
                {/* Header info in drawer */}
                <div className="flex items-center justify-between pb-3 border-b border-zinc-800/80">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-text-dim uppercase tracking-wider font-semibold">Navigation</span>
                  </div>
                  <span className="flex items-center gap-1.5 text-[11px] text-emerald-400 bg-emerald-950/60 border border-emerald-800/40 px-2.5 py-0.5 rounded-full font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    Available for Work
                  </span>
                </div>

                {/* Nav Links */}
                <div className="flex flex-col gap-1">
                  {PORTFOLIO_DATA.navigation.map((item) => {
                    const targetId = item.href.replace('#', '');
                    const isActive = activeSection === targetId;

                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`flex items-center justify-between text-sm font-medium px-3.5 py-3 rounded-xl transition-all ${
                          isActive
                            ? 'bg-zinc-800/80 text-gold border border-zinc-700/60'
                            : 'text-text-muted hover:text-white hover:bg-zinc-900'
                        }`}
                      >
                        <span>{item.label}</span>
                        <ArrowUpRight className={`w-4 h-4 ${isActive ? 'text-gold' : 'text-text-dim'}`} />
                      </a>
                    );
                  })}
                </div>

                {/* Quick Mobile Contact details */}
                <div className="pt-3 border-t border-zinc-800/80 space-y-2">
                  <a
                    href={`tel:${PORTFOLIO_DATA.personal.phones[0].replace(/\s+/g, '')}`}
                    className="flex items-center gap-2 text-xs text-text-muted hover:text-gold px-3 py-1.5 rounded-lg bg-zinc-900/50"
                  >
                    <Phone className="w-3.5 h-3.5 text-gold" />
                    <span>{PORTFOLIO_DATA.personal.phones[0]}</span>
                  </a>
                  <a
                    href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                    className="flex items-center gap-2 text-xs text-text-muted hover:text-gold px-3 py-1.5 rounded-lg bg-zinc-900/50 truncate"
                  >
                    <Mail className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                    <span className="truncate">{PORTFOLIO_DATA.personal.email}</span>
                  </a>
                </div>

                {/* CTA Button */}
                <div className="pt-2">
                  <a
                    href="#contact"
                    onClick={(e) => {
                      setMobileMenuOpen(false);
                      if (onOpenContact) {
                        e.preventDefault();
                        onOpenContact();
                      }
                    }}
                    className="w-full flex items-center justify-center gap-2 bg-gold hover:bg-gold-hover active:bg-gold-dark text-bg-main text-sm font-semibold py-3 rounded-xl transition-colors shadow-lg shadow-gold/20"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>Let's Work Together</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
