import React, { useState } from 'react';
import { ArrowUpRight, Github, Mail, FileText, ArrowUp } from 'lucide-react';
import { PORTFOLIO_DATA, BlueprintProject } from '../data/portfolio';
import { FullBleedDivider, HatchDivider } from './BlueprintPrimitives';
import { playTick } from '../utils/sound';

const DOMAINS = ['All', 'Backend & Systems', 'Security & Edge', 'Apps & Tooling'] as const;
type DomainFilter = (typeof DOMAINS)[number];

const LINE_TONE_CLASS: Record<string, string> = {
  add: 'text-emerald-400',
  del: 'text-rose-400/90',
  accent: 'text-[#8ab2ff]',
  ok: 'text-emerald-300',
  muted: 'text-zinc-400',
};

export const BlueprintProjectsAndColophon: React.FC<{
  soundEnabled: boolean;
  onSelectProject: (project: BlueprintProject) => void;
}> = ({ soundEnabled, onSelectProject }) => {
  const [filter, setFilter] = useState<DomainFilter>('All');
  const [showAll, setShowAll] = useState(false);

  const filtered =
    filter === 'All'
      ? PORTFOLIO_DATA.projects
      : PORTFOLIO_DATA.projects.filter((p) => p.domain === filter);

  const visibleProjects = showAll ? filtered : filtered.slice(0, 6);

  return (
    <div>
      <HatchDivider />

      {/* 1. 2-Column Blueprint Projects Grid */}
      <section id="projects" className="w-full">
        <div className="px-4 sm:px-5 py-3.5 bp-b flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-baseline gap-2.5">
            <h2 className="text-[16px] sm:text-[18px] font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
              Projects
            </h2>
            <span className="font-mono text-[11px] text-zinc-400 dark:text-zinc-500 tabular-nums">
              ({filtered.length})
            </span>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1">
            {DOMAINS.map((dom) => {
              const active = filter === dom;
              return (
                <button
                  key={dom}
                  type="button"
                  onClick={() => {
                    playTick(soundEnabled, 860);
                    setFilter(dom);
                  }}
                  className={`px-2.5 py-1 rounded-[6px] font-mono text-[10.5px] transition-colors border ${
                    active
                      ? 'bg-zinc-900 text-white border-zinc-900 dark:bg-zinc-100 dark:text-zinc-950 dark:border-zinc-100 font-semibold'
                      : 'bg-transparent text-zinc-500 dark:text-zinc-400 border-black/[0.08] dark:border-white/[0.08] hover:text-zinc-900 dark:hover:text-white'
                  }`}
                >
                  {dom}
                </button>
              );
            })}
          </div>
        </div>

        {/* 2-Column Grid Divided by Blueprint Dashed Lines */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          {visibleProjects.map((project, idx) => {
            const isLeftCol = idx % 2 === 0;
            const totalRows = Math.ceil(visibleProjects.length / 2);
            const currentRow = Math.floor(idx / 2) + 1;
            const hasBottomMobile = idx < visibleProjects.length - 1;
            const hasBottomDesktop = currentRow < totalRows;

            return (
              <article
                key={project.id}
                onClick={() => {
                  playTick(soundEnabled, 900);
                  onSelectProject(project);
                }}
                className={`group p-4 sm:p-5 flex flex-col justify-between cursor-pointer hover:bg-zinc-50/70 dark:hover:bg-white/[0.015] transition-colors ${
                  isLeftCol ? 'md:bp-r' : ''
                } ${hasBottomMobile ? 'max-md:bp-b' : ''} ${hasBottomDesktop ? 'md:bp-b' : ''}`}
              >
                <div>
                  {/* Raised Technical Artifact / Code Preview Stage (zero stock photos) */}
                  <div className="rounded-[10px] bg-[#0a0b0f] border border-black/15 dark:border-white/[0.09] p-3 mb-4 shadow-sm group-hover:border-[#6495ED]/45 transition-colors">
                    {/* Floating Status Pill */}
                    <div className="flex items-center justify-between gap-2 pb-2 mb-2 border-b border-white/[0.07]">
                      <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-white/[0.05] border border-white/[0.08] font-mono text-[10px] text-zinc-200 truncate">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                        <span className="truncate">{project.statusLabel}</span>
                      </span>
                      <span className="font-mono text-[9px] uppercase tracking-wider text-zinc-500 shrink-0">
                        {project.preview.tag}
                      </span>
                    </div>

                    {/* File Path Header */}
                    <div className="font-mono text-[10px] text-zinc-500 mb-1.5 truncate">
                      {project.preview.header}
                    </div>

                    {/* Code / Telemetry Lines */}
                    <div className="space-y-1 font-mono text-[10.5px] leading-[1.45]">
                      {project.preview.lines.map((ln, lIdx) => (
                        <div key={lIdx} className="flex items-baseline gap-2 truncate">
                          <span className="text-zinc-600 select-none w-5 shrink-0 text-right">
                            {ln.prefix || '·'}
                          </span>
                          <span className={`truncate ${LINE_TONE_CLASS[ln.tone || 'muted']}`}>
                            {ln.text}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-[15px] sm:text-[16px] font-bold tracking-tight text-zinc-900 dark:text-zinc-100 group-hover:text-[#5281D6] dark:group-hover:text-[#8ab2ff] transition-colors">
                    {project.title}
                  </h3>

                  {/* Summary */}
                  <p className="mt-2 text-[12.5px] sm:text-[13px] leading-[1.62] text-zinc-600 dark:text-zinc-400">
                    <strong className="font-semibold text-zinc-900 dark:text-zinc-200">Summary: </strong>
                    {project.summary}
                  </p>
                </div>

                {/* Stack Monograms + Feature Chips + View Link */}
                <div className="mt-4 pt-3 border-t border-black/[0.05] dark:border-white/[0.05] space-y-2.5">
                  <div className="flex items-center gap-1.5">
                    {project.stackIcons.map((code) => (
                      <span
                        key={code}
                        className="w-6 h-6 rounded-[5px] bg-zinc-100 dark:bg-[#141418] border border-black/[0.08] dark:border-white/[0.08] font-mono text-[9.5px] font-bold text-zinc-600 dark:text-zinc-400 flex items-center justify-center"
                      >
                        {code}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-end justify-between gap-2">
                    <div className="flex flex-wrap gap-1.5">
                      {project.featureChips.slice(0, 3).map((chip) => (
                        <span
                          key={chip}
                          className="font-mono text-[10.5px] px-2 py-0.5 rounded-[5px] border border-black/10 dark:border-white/10 text-zinc-600 dark:text-zinc-300"
                        >
                          {chip}
                        </span>
                      ))}
                    </div>

                    <span className="inline-flex items-center gap-1 font-mono text-[11.5px] font-medium text-zinc-700 dark:text-zinc-300 group-hover:text-[#6495ED] shrink-0">
                      <span>View Project</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* View All / Collapse Toggle Row */}
        {filtered.length > 6 && (
          <div className="bp-t py-4 flex justify-center">
            <button
              type="button"
              onClick={() => {
                playTick(soundEnabled, 880);
                setShowAll((prev) => !prev);
              }}
              className="h-9 px-4 rounded-[7px] bg-zinc-50 hover:bg-zinc-100 dark:bg-[#0e0e11] dark:hover:bg-zinc-900 border border-black/10 dark:border-white/10 font-mono text-[12px] font-medium text-zinc-800 dark:text-zinc-200 inline-flex items-center gap-1.5 transition-colors"
            >
              <span>{showAll ? 'Show Featured (6)' : `View All (${filtered.length})`}</span>
              <ArrowUpRight className={`w-3.5 h-3.5 transition-transform ${showAll ? 'rotate-180' : ''}`} />
            </button>
          </div>
        )}
      </section>

      <HatchDivider />

      {/* 2. Blueprint Colophon & Direct Contact Footer */}
      <footer id="contact" className="w-full">
        {/* Colophon Top Intro */}
        <div className="px-4 sm:px-5 py-4 bp-b flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <div className="font-mono text-[13px] font-bold text-zinc-900 dark:text-zinc-100">
              ben-bacs.github.io/Portfolio
            </div>
            <div className="font-mono text-[11px] text-zinc-500 dark:text-zinc-400">
              Engineering dossier, open-source patches, and verified credentials.
            </div>
          </div>
          <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
            COLOPHON · METADATA
          </span>
        </div>

        {/* Row 1: 4-Cell Blueprint Metadata */}
        <div className="grid grid-cols-2 sm:grid-cols-4 bp-b">
          {[
            { label: 'CRAFTED BY', value: PORTFOLIO_DATA.colophon.craftedBy },
            { label: 'BUILD', value: PORTFOLIO_DATA.colophon.build },
            { label: 'UPDATED', value: PORTFOLIO_DATA.colophon.date },
            { label: 'LOCATION', value: 'Iloilo City, PH' },
          ].map((cell, idx) => (
            <div
              key={cell.label}
              className={`p-3.5 sm:p-4 ${idx % 2 === 0 ? 'max-sm:bp-r' : ''} ${
                idx < 3 ? 'sm:bp-r' : ''
              } ${idx < 2 ? 'max-sm:bp-b' : ''}`}
            >
              <div className="font-mono text-[9.5px] uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-1">
                {cell.label}
              </div>
              <div className="font-mono text-[12.5px] font-semibold text-zinc-900 dark:text-zinc-100">
                {cell.value}
              </div>
            </div>
          ))}
        </div>

        {/* Row 2: 4-Cell Hosting & License Metadata */}
        <div className="grid grid-cols-2 sm:grid-cols-4 bp-b">
          {[
            { label: 'DEPLOYED ON', value: PORTFOLIO_DATA.colophon.deployedOn },
            {
              label: 'SOURCE CODE',
              value: 'GitHub',
              href: PORTFOLIO_DATA.colophon.sourceRepo,
            },
            { label: 'LICENSE', value: PORTFOLIO_DATA.colophon.license },
            { label: 'AESTHETIC', value: PORTFOLIO_DATA.colophon.aesthetic },
          ].map((cell, idx) => (
            <div
              key={cell.label}
              className={`p-3.5 sm:p-4 ${idx % 2 === 0 ? 'max-sm:bp-r' : ''} ${
                idx < 3 ? 'sm:bp-r' : ''
              } ${idx < 2 ? 'max-sm:bp-b' : ''}`}
            >
              <div className="font-mono text-[9.5px] uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-1">
                {cell.label}
              </div>
              {cell.href ? (
                <a
                  href={cell.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[12.5px] font-semibold text-zinc-900 dark:text-zinc-100 hover:text-[#6495ED] underline decoration-zinc-500/40 underline-offset-4"
                >
                  {cell.value}
                </a>
              ) : (
                <div className="font-mono text-[12.5px] font-semibold text-zinc-900 dark:text-zinc-100">
                  {cell.value}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Row 3: Direct Contact & Runtime Stack */}
        <div className="grid grid-cols-1 sm:grid-cols-2 bp-b">
          <div className="p-4 sm:p-5 max-sm:bp-b sm:bp-r space-y-2">
            <div className="font-mono text-[9.5px] uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
              DIRECT CONTACT
            </div>
            <div className="space-y-1 font-mono text-[12px]">
              <a
                href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                className="block text-zinc-800 dark:text-zinc-200 hover:text-[#6495ED] break-all"
              >
                {PORTFOLIO_DATA.personal.email}
              </a>
              <div className="text-zinc-600 dark:text-zinc-400">
                {PORTFOLIO_DATA.personal.phones.join(' · ')}
              </div>
              <div className="text-zinc-500 dark:text-zinc-500 text-[11px] pt-1">
                Iloilo City, Iloilo · Koronadal City, South Cotabato
              </div>
            </div>
          </div>

          <div className="p-4 sm:p-5 space-y-2">
            <div className="font-mono text-[9.5px] uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
              STACK
            </div>
            <div className="space-y-1 font-mono text-[12px] text-zinc-800 dark:text-zinc-200">
              {PORTFOLIO_DATA.colophon.stackList.map((pkg) => (
                <div key={pkg}>{pkg}</div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Monogram & Icon Strip */}
        <div className="px-4 sm:px-5 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-[7px] border border-black/15 dark:border-white/15 bg-zinc-100 dark:bg-[#111114] p-1 flex items-center justify-center">
              <img
                src={PORTFOLIO_DATA.personal.logo}
                alt="BNB Monogram"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="font-mono text-[11px] text-zinc-500 dark:text-zinc-400">
              © {new Date().getFullYear()} {PORTFOLIO_DATA.personal.name}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={PORTFOLIO_DATA.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-8 h-8 rounded-[6px] border border-black/10 dark:border-white/10 flex items-center justify-center text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PORTFOLIO_DATA.personal.email}`}
              aria-label="Email"
              className="w-8 h-8 rounded-[6px] border border-black/10 dark:border-white/10 flex items-center justify-center text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={PORTFOLIO_DATA.personal.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download CV PDF"
              className="w-8 h-8 rounded-[6px] border border-black/10 dark:border-white/10 flex items-center justify-center text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              <FileText className="w-4 h-4" />
            </a>
            <a
              href="#top"
              onClick={() => playTick(soundEnabled, 960)}
              aria-label="Scroll to top"
              className="w-8 h-8 rounded-[6px] border border-black/10 dark:border-white/10 flex items-center justify-center text-zinc-500 hover:text-[#6495ED] transition-colors"
            >
              <ArrowUp className="w-4 h-4" />
            </a>
          </div>
        </div>

        <FullBleedDivider />
        <div className="h-10 bg-dashed" />
      </footer>
    </div>
  );
};
