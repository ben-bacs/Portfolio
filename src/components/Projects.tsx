import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Github, ExternalLink, X, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA, Project } from '../data/portfolio';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 sm:py-24 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-4 sm:left-10 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] gold-glow-subtle pointer-events-none rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-16 gap-4 sm:gap-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-2 sm:mb-3 block">
              SELECTED WORK
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Crafted with <span className="font-serif italic font-normal text-gold">purpose.</span>
            </h2>
          </div>

          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-xs sm:text-sm text-text-muted hover:text-white font-medium transition-colors self-start sm:self-auto"
          >
            <span>View All Projects</span>
            <ArrowUpRight className="w-4 h-4 text-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* 4-Card Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {PORTFOLIO_DATA.projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer rounded-2xl bg-bg-card border border-border-subtle hover:border-gold/40 active:border-gold/60 transition-all duration-300 overflow-hidden flex flex-col hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/60 active:scale-[0.99]"
            >
              {/* Project Image Mockup Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-top filter grayscale contrast-105 brightness-90 group-hover:scale-105 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-transparent to-transparent opacity-80" />
                
                {/* Tech tag badge on top left */}
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] sm:text-[11px] font-medium tracking-wide bg-bg-main/85 backdrop-blur-md border border-zinc-700/60 text-zinc-300 px-2.5 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>

                {/* Floating Arrow Icon Button */}
                <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-zinc-900/90 border border-zinc-700 flex items-center justify-center text-text-muted group-hover:text-bg-main group-hover:bg-gold group-hover:border-gold transition-all duration-300 shadow-md">
                  <ArrowUpRight className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                </div>
              </div>

              {/* Card Body */}
              <div className="p-4 sm:p-5 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-gold transition-colors mb-1.5 tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-xs text-text-muted line-clamp-2 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Stack Pills */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-zinc-800/60">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] text-zinc-400 bg-zinc-900/80 px-2 py-0.5 rounded border border-zinc-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-xl bg-bg-card border border-zinc-700 rounded-2xl overflow-hidden shadow-2xl z-10 max-h-[90vh] flex flex-col"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-3.5 right-3.5 z-20 w-8 h-8 rounded-full bg-zinc-900/90 border border-zinc-700 text-zinc-400 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Modal Banner Image */}
              <div className="relative h-44 sm:h-60 w-full overflow-hidden bg-zinc-900 flex-shrink-0">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-bg-card/40 to-transparent" />
                <div className="absolute bottom-3 sm:bottom-4 left-4 sm:left-6 right-12">
                  <span className="text-[10px] sm:text-xs uppercase tracking-wider text-gold font-semibold bg-bg-main/80 px-2.5 py-0.5 rounded-full border border-gold/30">
                    {selectedProject.category}
                  </span>
                  <h3 className="text-lg sm:text-2xl font-bold text-white mt-1 sm:mt-2 truncate">
                    {selectedProject.title}
                  </h3>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-4 sm:p-6 overflow-y-auto space-y-5">
                <div>
                  <h4 className="text-xs font-semibold text-text-dim uppercase tracking-wider mb-1.5">Overview</h4>
                  <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-semibold text-text-dim uppercase tracking-wider mb-2">Architecture & Tech Stack</h4>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {selectedProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center gap-1.5 text-xs text-zinc-200 bg-zinc-900 border border-zinc-700 px-2.5 py-1 rounded-lg"
                      >
                        <CheckCircle2 className="w-3 h-3 text-gold flex-shrink-0" />
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Links */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-3 border-t border-zinc-800">
                  {selectedProject.demoUrl && (
                    <a
                      href={selectedProject.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-hover text-bg-main text-xs font-semibold px-4 py-2.5 rounded-full transition-colors"
                    >
                      <span>Live Preview</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-white text-xs font-medium px-4 py-2.5 rounded-full transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Source Repository</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
