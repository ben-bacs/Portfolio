import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Award, Shield } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';

export const About: React.FC = () => {
  const { personal, skills } = PORTFOLIO_DATA;

  return (
    <section id="about" className="py-20 sm:py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/3 right-4 sm:right-1/4 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] gold-glow-subtle pointer-events-none rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Story & Credentials */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex flex-col items-start"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-2 sm:mb-3 block">
              ABOUT ME
            </span>
            
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white leading-tight mb-5 sm:mb-6">
              {personal.aboutHeading.regular1}
              <span className="font-serif italic font-normal text-gold text-[1.08em]">
                {personal.aboutHeading.highlight1}
              </span>
              {personal.aboutHeading.regular2}
            </h2>

            <div className="space-y-4 text-xs sm:text-sm lg:text-base text-text-muted leading-relaxed mb-6 sm:mb-8">
              {personal.aboutBio.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            {/* Certification Badges List */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 sm:mb-8">
              <div className="p-3 rounded-xl bg-zinc-900/90 border border-zinc-800 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gold/10 border border-gold/30 flex items-center justify-center text-gold flex-shrink-0">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">CCNA 1-3 Certified</div>
                  <div className="text-[10px] text-text-dim">Cisco Networking Academy</div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-zinc-900/90 border border-zinc-800 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 flex-shrink-0">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">CSS NC II Certified</div>
                  <div className="text-[10px] text-text-dim">Computer Systems Servicing</div>
                </div>
              </div>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white hover:text-gold transition-colors group"
            >
              <span>More About Me</span>
              <ArrowRight className="w-4 h-4 text-gold group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Center Column: Workspace / Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-3 relative flex justify-center my-2 sm:my-0"
          >
            <div className="relative w-full max-w-[240px] sm:max-w-[280px] aspect-[3/4] rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl bg-zinc-900 group">
              <img
                src={personal.aboutImage}
                alt={personal.fullName}
                loading="lazy"
                className="w-full h-full object-cover object-top filter grayscale contrast-105 group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-main/90 via-transparent to-transparent" />

              {/* Floating Glassmorphism Badge */}
              <div className="absolute bottom-3.5 sm:bottom-4 left-3.5 sm:left-4 right-3.5 sm:right-4 p-3 sm:p-3.5 rounded-xl glass-panel border border-zinc-700/80 shadow-2xl">
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <div className="text-xl sm:text-2xl font-bold font-serif italic text-gold">Dual</div>
                  <div className="border-l border-zinc-700 pl-2.5 sm:pl-3">
                    <div className="text-xs font-bold text-white leading-tight">Certified</div>
                    <div className="text-[10px] text-text-dim">CCNA & CSS NC II</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Animated Skill Progress Meters */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-4 flex flex-col justify-center"
          >
            <div className="mb-5 sm:mb-6">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-text-dim block">
                MY SKILLS
              </span>
            </div>

            <div className="space-y-5 sm:space-y-6">
              {skills.map((skill, index) => (
                <div key={skill.name} className="space-y-1.5 sm:space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-semibold text-zinc-200">{skill.name}</span>
                    <span className="font-mono text-gold font-medium">{skill.level}%</span>
                  </div>
                  
                  {/* Progress Bar Container */}
                  <div className="h-1.5 w-full bg-zinc-900 rounded-full overflow-hidden border border-zinc-800">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 + index * 0.1, ease: 'easeOut' }}
                      className="h-full bg-gradient-to-r from-gold/80 to-gold rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Competencies */}
            <div className="mt-7 sm:mt-8 pt-5 sm:pt-6 border-t border-zinc-800/80">
              <div className="text-xs font-medium text-text-dim mb-2.5 sm:mb-3">Additional Competencies:</div>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {['Git & CI/CD', 'Docker', 'Postman API', 'Nginx Proxy', 'Supabase', 'TypeScript'].map((item) => (
                  <span key={item} className="text-[10px] sm:text-[11px] text-zinc-400 bg-zinc-900 border border-zinc-800 px-2.5 py-1 rounded-md">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
