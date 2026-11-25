import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Shield, Award, CheckCircle2, MapPin, Calendar, Users } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';

export const Experience: React.FC = () => {
  const { experiences, certifications } = PORTFOLIO_DATA;

  const getIcon = (type: string) => {
    switch (type) {
      case 'Contract Experience':
        return Briefcase;
      case 'Education':
        return GraduationCap;
      default:
        return Users;
    }
  };

  return (
    <section id="experience" className="py-20 sm:py-24 relative overflow-hidden border-t border-border-subtle/50 bg-bg-dark/30">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/4 right-10 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] gold-glow-subtle pointer-events-none rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6 pb-6 border-b border-zinc-800/80">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-2 sm:mb-3 block">
              EXPERIENCE, EDUCATION & CREDENTIALS
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Proven in <span className="font-serif italic font-normal text-gold">production</span> & academia.
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-text-muted max-w-md leading-relaxed">
            A structured record of contract backend engineering, Network & Information Security academic specialization, leadership roles, and verified national & Cisco certifications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left 7 Columns: Experience, Education & Leadership Timeline */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-400">
                Career, Academic & Leadership Timeline
              </h3>
              <span className="text-[11px] text-gold font-mono bg-gold/10 border border-gold/25 px-2.5 py-0.5 rounded-full">
                2023 — 2027
              </span>
            </div>

            <div className="relative pl-6 sm:pl-8 border-l border-zinc-800 space-y-8">
              {experiences.map((exp, index) => {
                const IconComponent = getIcon(exp.type);
                const isContract = exp.type === 'Contract Experience';

                return (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    className="relative group"
                  >
                    {/* Timeline Node Dot */}
                    <div
                      className={`absolute -left-[37px] sm:-left-[45px] top-1.5 w-6 h-6 rounded-full flex items-center justify-center border transition-all duration-300 ${
                        isContract
                          ? 'bg-gold text-bg-main border-gold shadow-lg shadow-gold/30'
                          : 'bg-zinc-900 text-gold border-zinc-700 group-hover:border-gold'
                      }`}
                    >
                      <IconComponent className="w-3 h-3" />
                    </div>

                    {/* Timeline Card */}
                    <div
                      className={`p-5 sm:p-6 rounded-2xl bg-bg-card border transition-all duration-300 ${
                        isContract
                          ? 'border-gold/40 shadow-xl shadow-black/50'
                          : 'border-border-subtle hover:border-zinc-700'
                      }`}
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span
                          className={`text-[10px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${
                            isContract
                              ? 'bg-gold/15 text-gold border-gold/30'
                              : 'bg-zinc-900 text-zinc-300 border-zinc-800'
                          }`}
                        >
                          {exp.type}
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-text-dim">
                          <Calendar className="w-3 h-3 text-gold" />
                          {exp.period}
                        </span>
                      </div>

                      <h4 className="text-base sm:text-lg font-bold text-white tracking-tight">
                        {exp.role}
                      </h4>

                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-gold font-medium mt-0.5 mb-3">
                        <span>{exp.organization}</span>
                        <span className="text-zinc-600">•</span>
                        <span className="inline-flex items-center gap-1 text-text-dim font-normal">
                          <MapPin className="w-3 h-3 text-zinc-400" />
                          {exp.location}
                        </span>
                      </div>

                      <p className="text-xs text-text-muted leading-relaxed mb-4">
                        {exp.summary}
                      </p>

                      {/* Bullet Highlights */}
                      <ul className="space-y-1.5 mb-4">
                        {exp.highlights.map((item) => (
                          <li key={item} className="text-xs text-zinc-300 flex items-start gap-2 leading-relaxed">
                            <span className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech Stack Tags */}
                      {exp.techStack && (
                        <div className="flex flex-wrap gap-1.5 pt-3 border-t border-zinc-800/80">
                          {exp.techStack.map((tag) => (
                            <span
                              key={tag}
                              className="text-[10px] text-zinc-300 bg-zinc-900/90 border border-zinc-800 px-2.5 py-0.5 rounded-md"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right 5 Columns: Verified Certifications & Completed Training */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-400">
                Certifications & Completed Training
              </h3>
              <span className="text-[11px] text-emerald-400 font-mono bg-emerald-950/60 border border-emerald-800/50 px-2.5 py-0.5 rounded-full">
                {certifications.length} Verified
              </span>
            </div>

            <div className="p-6 sm:p-7 rounded-2xl bg-bg-card border border-border-subtle space-y-5 shadow-xl">
              <div className="flex items-center gap-3 pb-4 border-b border-zinc-800/80">
                <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold flex-shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-white">
                    TESDA & Cisco Networking Academy
                  </h4>
                  <p className="text-xs text-text-dim">
                    National Qualification & Verified Course Completions
                  </p>
                </div>
              </div>

              <div className="divide-y divide-zinc-800/80">
                {certifications.map((cert, idx) => {
                  const isNational = cert.category === 'National Certification';

                  return (
                    <motion.div
                      key={cert.id}
                      initial={{ opacity: 0, x: 15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.07 }}
                      className="py-3.5 first:pt-0 last:pb-0 flex items-start justify-between gap-3"
                    >
                      <div className="flex items-start gap-3 min-w-0">
                        <div
                          className={`mt-0.5 w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 border ${
                            isNational
                              ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
                              : 'bg-gold/10 border-gold/30 text-gold'
                          }`}
                        >
                          {isNational ? <Award className="w-3.5 h-3.5" /> : <Shield className="w-3.5 h-3.5" />}
                        </div>
                        <div className="min-w-0">
                          <div className="text-xs sm:text-sm font-bold text-white leading-snug">
                            {cert.title}
                          </div>
                          <div className="text-[11px] text-text-muted mt-0.5">
                            {cert.issuer}
                          </div>
                          <div className="inline-flex items-center gap-1.5 mt-1.5">
                            <span
                              className={`text-[10px] font-medium px-2 py-0.5 rounded border ${
                                isNational
                                  ? 'bg-emerald-950/60 text-emerald-300 border-emerald-800/50'
                                  : 'bg-zinc-900 text-zinc-300 border-zinc-800'
                              }`}
                            >
                              {cert.badge}
                            </span>
                            <span className="text-[10px] font-mono text-text-dim">
                              • {cert.date}
                            </span>
                          </div>
                        </div>
                      </div>

                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-1" />
                    </motion.div>
                  );
                })}
              </div>

              {/* Direct CV Download Callout Box */}
              <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between gap-3">
                <div className="text-xs text-text-muted">
                  Full project evidence & academic record available in CV.
                </div>
                <a
                  href={PORTFOLIO_DATA.personal.cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-gold hover:text-gold-light underline underline-offset-4 flex-shrink-0"
                >
                  Open CV (PDF)
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
