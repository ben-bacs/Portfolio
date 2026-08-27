import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Mail, ShieldCheck, Terminal, Server, MapPin } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';

export const Hero: React.FC = () => {
  const { personal } = PORTFOLIO_DATA;

  return (
    <section id="home" className="relative min-h-[90vh] pt-28 sm:pt-32 pb-16 sm:pb-20 flex items-center overflow-hidden">
      {/* Background Ambient Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] gold-glow opacity-50 pointer-events-none rounded-full blur-3xl -z-10" />
      <div className="absolute top-1/3 right-4 sm:right-10 w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] gold-glow opacity-30 pointer-events-none rounded-full blur-2xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column (Content & CTAs) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start z-10 order-2 lg:order-1"
          >
            {/* Status Tag */}
            <div className="inline-flex items-center gap-2 bg-zinc-900/90 border border-zinc-700/80 rounded-full px-3.5 py-1.5 mb-5 sm:mb-6 shadow-inner backdrop-blur-md">
              <span className="text-[11px] sm:text-xs font-semibold tracking-wider text-zinc-300 uppercase">
                👋 HELLO, I'M {personal.firstName}
              </span>
            </div>

            {/* Main Headline with Serif Italic Accents */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15] sm:leading-[1.12] mb-5 sm:mb-6">
              {personal.headline.regular1}
              <span className="font-serif italic font-normal text-gold text-[1.12em] tracking-normal">
                {personal.headline.highlight1}
              </span>
              {personal.headline.regular2}
              <span className="font-serif italic font-normal text-gold text-[1.12em] tracking-normal">
                {personal.headline.highlight2}
              </span>
              {personal.headline.regular3}
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base lg:text-lg text-text-muted max-w-2xl leading-relaxed mb-6 sm:mb-8">
              {personal.heroSubtitle}
            </p>

            {/* Dual CTAs Row */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-5 w-full sm:w-auto mb-8">
              {/* Primary Gold CTA */}
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2.5 bg-gold hover:bg-gold-hover text-bg-main font-semibold px-6 py-3.5 rounded-full transition-all duration-200 shadow-xl shadow-gold/20 hover:shadow-gold/30 hover:-translate-y-0.5 active:scale-95 text-center text-sm"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Secondary Outline CTA */}
              <a
                href={personal.cvUrl}
                download
                className="inline-flex items-center justify-center gap-2.5 bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-700/70 hover:border-zinc-500 text-white font-medium px-6 py-3.5 rounded-full transition-all duration-200 backdrop-blur-sm hover:-translate-y-0.5 active:scale-95 text-center text-sm"
              >
                <span>Download CV</span>
                <Download className="w-4 h-4 text-gold" />
              </a>
            </div>

            {/* Quick Tech Badges & Location */}
            <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-zinc-800/60 w-full">
              <span className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs text-zinc-300 bg-zinc-900/70 border border-zinc-800 px-2.5 py-1 rounded-md">
                <MapPin className="w-3 h-3 text-gold flex-shrink-0" /> Iloilo & Koronadal City
              </span>
              <span className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs text-zinc-300 bg-zinc-900/70 border border-zinc-800 px-2.5 py-1 rounded-md">
                <Server className="w-3 h-3 text-gold flex-shrink-0" /> REST & Microservices
              </span>
              <span className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs text-zinc-300 bg-zinc-900/70 border border-zinc-800 px-2.5 py-1 rounded-md">
                <ShieldCheck className="w-3 h-3 text-emerald-400 flex-shrink-0" /> CCNA & Security
              </span>
              <span className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs text-zinc-300 bg-zinc-900/70 border border-zinc-800 px-2.5 py-1 rounded-md">
                <Terminal className="w-3 h-3 text-amber-400 flex-shrink-0" /> Linux Admin
              </span>
            </div>
          </motion.div>

          {/* Right Column (Stylized Portrait Showcase) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative flex justify-center items-center order-1 lg:order-2"
          >
            {/* Ambient Golden Glow Backdrop */}
            <div className="absolute inset-0 max-w-[340px] sm:max-w-[440px] max-h-[460px] m-auto rounded-full gold-glow opacity-75 blur-2xl -z-10" />
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-t from-bg-main via-transparent to-transparent opacity-90 z-10 pointer-events-none" />

            {/* Portrait Image Container */}
            <div className="relative w-full max-w-[280px] sm:max-w-[360px] lg:max-w-[400px] aspect-[4/5] rounded-3xl overflow-hidden border border-zinc-800/80 shadow-2xl bg-zinc-900/40 group">
              <img
                src={personal.profileImage}
                alt={personal.fullName}
                className="w-full h-full object-cover object-top filter grayscale contrast-105 brightness-95 group-hover:scale-105 group-hover:filter group-hover:grayscale-0 transition-all duration-700"
              />

              {/* Bottom Gradient Fade */}
              <div className="absolute inset-0 bg-gradient-to-t from-bg-main via-bg-main/25 to-transparent" />

              {/* Glassmorphism Tag on Portrait */}
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 p-3 sm:p-4 rounded-2xl glass-panel border border-zinc-700/60 flex items-center justify-between">
                <div className="min-w-0 pr-2">
                  <div className="text-[10px] sm:text-xs text-text-dim font-medium uppercase tracking-wider">Professional Identity</div>
                  <div className="text-xs sm:text-sm font-semibold text-white truncate">{personal.fullName}</div>
                </div>
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center p-0.5 flex-shrink-0">
                  <img src={personal.logoUrl} alt="Logo" className="w-full h-full object-contain" />
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Far Right Floating Rail (Scroll Down & Socials) - desktop only */}
      <div className="hidden xl:flex fixed right-8 bottom-12 flex-col items-center gap-6 z-30">
        <div className="flex flex-col items-center gap-4">
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full bg-zinc-900/80 border border-zinc-800 flex items-center justify-center text-text-muted hover:text-gold hover:border-gold/40 hover:bg-zinc-800 transition-all shadow-lg hover:-translate-y-1"
            aria-label="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full bg-zinc-900/80 border border-zinc-800 flex items-center justify-center text-text-muted hover:text-gold hover:border-gold/40 hover:bg-zinc-800 transition-all shadow-lg hover:-translate-y-1"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${personal.email}`}
            className="w-9 h-9 rounded-full bg-zinc-900/80 border border-zinc-800 flex items-center justify-center text-text-muted hover:text-gold hover:border-gold/40 hover:bg-zinc-800 transition-all shadow-lg hover:-translate-y-1"
            aria-label="Email Me"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        <div className="h-12 w-px bg-zinc-800" />

        <div className="rotate-90 origin-right translate-x-3 text-[10px] font-semibold tracking-[0.25em] text-zinc-500 uppercase flex items-center gap-2">
          <span>SCROLL DOWN</span>
          <span className="w-4 h-px bg-zinc-500"></span>
        </div>
      </div>
    </section>
  );
};
