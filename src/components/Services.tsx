import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Layers, ShieldCheck, Cpu } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';

const iconMap = {
  Code2,
  Layers,
  ShieldCheck,
  Cpu,
};

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 sm:py-24 relative overflow-hidden bg-bg-dark/40 border-y border-border-subtle/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 sm:mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-2 sm:mb-3 block">
            WHAT I DO
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Architect. <span className="font-serif italic font-normal text-gold">Develop.</span> Secure.
          </h2>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {PORTFOLIO_DATA.services.map((service, index) => {
            const IconComponent = iconMap[service.icon];

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative p-6 sm:p-8 rounded-2xl bg-bg-card border border-border-subtle hover:border-gold/40 active:border-gold/60 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 hover:shadow-xl hover:shadow-black/50"
              >
                {/* Subtle Hover Gradient Glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div>
                  {/* Circular Bordered Icon Container */}
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-zinc-700 bg-zinc-900 flex items-center justify-center text-text-muted group-hover:text-gold group-hover:border-gold/60 transition-all duration-300 mb-5 sm:mb-6 shadow-inner">
                    <IconComponent className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-gold transition-colors mb-2.5 sm:mb-3 tracking-tight">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-text-muted leading-relaxed mb-5 sm:mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Highlights List */}
                <div className="pt-4 border-t border-zinc-800/80 space-y-1.5">
                  {service.highlights.map((highlight) => (
                    <div key={highlight} className="flex items-center gap-2 text-[11px] text-zinc-400">
                      <span className="w-1 h-1 rounded-full bg-gold/70 flex-shrink-0" />
                      <span className="truncate">{highlight}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
