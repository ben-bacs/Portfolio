import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = PORTFOLIO_DATA.testimonials;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="py-20 sm:py-24 relative overflow-hidden bg-bg-dark/40 border-t border-border-subtle/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-16 gap-4 sm:gap-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-2 sm:mb-3 block">
              TESTIMONIALS
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              What clients say about my <span className="font-serif italic font-normal text-gold">work.</span>
            </h2>
          </div>

          {/* Navigation arrow buttons */}
          <div className="flex items-center gap-2.5 self-start sm:self-auto">
            <button
              onClick={handlePrev}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-zinc-700 bg-zinc-900 hover:bg-zinc-800 hover:border-gold/50 active:scale-95 text-text-muted hover:text-white flex items-center justify-center transition-all shadow-md"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-zinc-700 bg-zinc-900 hover:bg-zinc-800 hover:border-gold/50 active:scale-95 text-text-muted hover:text-white flex items-center justify-center transition-all shadow-md"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {items.map((testimonial, idx) => {
            const isHighlight = idx === currentIndex;

            return (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`group p-6 sm:p-8 rounded-2xl bg-bg-card border transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 ${
                  isHighlight
                    ? 'border-gold/50 shadow-xl shadow-gold/5 bg-gradient-to-b from-zinc-900 to-bg-card'
                    : 'border-border-subtle hover:border-zinc-700'
                }`}
              >
                <div>
                  {/* Quote Icon */}
                  <div className="text-gold mb-4 sm:mb-6 opacity-80">
                    <Quote className="w-6 h-6 sm:w-7 sm:h-7 fill-current opacity-30" />
                  </div>

                  {/* Testimonial Quote */}
                  <p className="text-xs sm:text-sm text-text-muted leading-relaxed mb-6 sm:mb-8">
                    "{testimonial.quote}"
                  </p>
                </div>

                {/* Author Info with Local Profile Picture */}
                <div className="flex items-center gap-3 pt-4 border-t border-zinc-800/80">
                  <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden border border-zinc-700 group-hover:border-gold/60 transition-colors flex-shrink-0 bg-zinc-900">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      loading="lazy"
                      className="w-full h-full object-cover object-center filter grayscale contrast-105 group-hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-xs font-bold text-white tracking-wide group-hover:text-gold transition-colors truncate">
                      {testimonial.name}
                    </h4>
                    <p className="text-[10px] sm:text-[11px] text-text-dim truncate">
                      {testimonial.role} • {testimonial.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
