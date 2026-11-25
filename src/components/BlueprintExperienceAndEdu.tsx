import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Briefcase,
  Users,
  GraduationCap,
  Award,
  ChevronDown,
  ArrowUpRight,
  Link2,
} from 'lucide-react';
import { PORTFOLIO_DATA, ExperienceEntry, EducationEntry } from '../data/portfolio';
import { FullBleedDivider, HatchDivider, MonogramWell } from './BlueprintPrimitives';
import { playTick, useScrambleText } from '../utils/sound';

const STATUS_STYLES: Record<string, string> = {
  MERGED:
    'border-emerald-500/35 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300',
  ACTIVE:
    'border-[#6495ED]/40 bg-[#6495ED]/12 text-[#4172cc] dark:text-[#8ab2ff]',
  CERTIFIED:
    'border-amber-500/35 bg-amber-500/10 text-amber-700 dark:text-amber-300',
  SHIPPED:
    'border-zinc-500/35 bg-zinc-500/10 text-zinc-700 dark:text-zinc-300',
};

const ExperienceRow: React.FC<{
  item: ExperienceEntry;
  expanded: boolean;
  onToggle: () => void;
  isLast: boolean;
}> = ({ item, expanded, onToggle, isLast }) => (
  <div className={!isLast ? 'bp-b' : ''}>
    <button
      type="button"
      onClick={onToggle}
      aria-expanded={expanded}
      className="w-full px-4 sm:px-5 py-4 flex items-start sm:items-center justify-between gap-3 text-left hover:bg-zinc-50/80 dark:hover:bg-white/[0.02] transition-colors"
    >
      <div className="flex items-start sm:items-center gap-3.5 min-w-0">
        <MonogramWell mark={item.mark} tone={item.markTone} />
        <div className="min-w-0">
          <div className="text-[14px] sm:text-[15px] font-bold tracking-tight text-zinc-900 dark:text-zinc-100 truncate">
            {item.title}
          </div>
          <div className="flex flex-wrap items-center gap-2 mt-1">
            <span className="text-[12.5px] text-zinc-600 dark:text-zinc-400 truncate">
              {item.role}
            </span>
            <span className="font-mono text-[10px] font-medium px-2 py-0.5 rounded-[5px] bg-zinc-100 dark:bg-zinc-900 border border-black/[0.08] dark:border-white/[0.08] text-zinc-600 dark:text-zinc-300">
              {item.badge}
            </span>
          </div>
        </div>
      </div>

      <div className="shrink-0 text-right flex flex-col items-end">
        <div className="inline-flex items-center gap-1.5 font-mono text-[12px] font-semibold text-zinc-800 dark:text-zinc-200 tabular-nums">
          <span>{item.period}</span>
          <ChevronDown
            className={`w-3.5 h-3.5 text-zinc-400 transition-transform duration-200 ${
              expanded ? 'rotate-180 text-[#6495ED]' : ''
            }`}
          />
        </div>
        <span className="font-mono text-[11px] text-zinc-500 dark:text-zinc-500 mt-0.5 hidden sm:inline">
          {item.location}
        </span>
      </div>
    </button>

    <AnimatePresence initial={false}>
      {expanded && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.22, ease: 'easeOut' }}
          className="overflow-hidden"
        >
          <div className="px-4 sm:px-5 pb-4 pt-1 sm:pl-[74px] space-y-3">
            {item.metrics && item.metrics.length > 0 && (
              <div className="flex flex-wrap gap-1.5">
                {item.metrics.map((kpi) => (
                  <span
                    key={kpi}
                    className="font-mono text-[10.5px] font-medium px-2 py-0.5 rounded bg-[#6495ED]/10 border border-[#6495ED]/25 text-[#4172cc] dark:text-[#8ab2ff]"
                  >
                    {kpi}
                  </span>
                ))}
              </div>
            )}

            <p className="text-[13px] leading-[1.65] text-zinc-600 dark:text-zinc-300">
              {item.summary}
            </p>

            <ul className="space-y-1.5">
              {item.bullets.map((b) => (
                <li
                  key={b}
                  className="text-[12.5px] leading-[1.6] text-zinc-600 dark:text-zinc-400 flex items-start gap-2"
                >
                  <span className="mt-2 w-1 h-1 rounded-full bg-[#6495ED] shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
              <div className="flex flex-wrap gap-1.5">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[10.5px] px-2 py-0.5 rounded bg-zinc-100 dark:bg-[#141417] border border-black/[0.07] dark:border-white/[0.07] text-zinc-600 dark:text-zinc-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {item.linkUrl && (
                <a
                  href={item.linkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-mono text-[11.5px] font-semibold text-[#4172cc] dark:text-[#8ab2ff] hover:underline"
                >
                  <span>{item.linkLabel || 'Open link'}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const EducationRow: React.FC<{
  item: EducationEntry;
  expanded: boolean;
  onToggle: () => void;
  isLast: boolean;
}> = ({ item, expanded, onToggle, isLast }) => (
  <div className={!isLast ? 'bp-b' : ''}>
    <div className="w-full px-4 sm:px-5 py-4 flex items-start sm:items-center justify-between gap-3 hover:bg-zinc-50/80 dark:hover:bg-white/[0.02] transition-colors">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={expanded}
        className="flex items-start sm:items-center gap-3.5 min-w-0 flex-1 text-left"
      >
        <MonogramWell mark={item.mark} tone={item.markTone} />
        <div className="min-w-0">
          <div className="text-[14px] sm:text-[15px] font-bold tracking-tight text-zinc-900 dark:text-zinc-100 truncate">
            {item.program}
          </div>
          <div className="flex flex-wrap items-center gap-2 mt-1">
            <span className="text-[12.5px] text-zinc-600 dark:text-zinc-400 truncate">
              {item.institution}
            </span>
            <span className="font-mono text-[10px] font-medium px-2 py-0.5 rounded-[5px] bg-zinc-100 dark:bg-zinc-900 border border-black/[0.08] dark:border-white/[0.08] text-zinc-600 dark:text-zinc-300">
              {item.badge}
            </span>
          </div>
        </div>
      </button>

      <div className="shrink-0 flex items-center gap-2.5">
        {item.linkUrl && (
          <a
            href={item.linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open credential reference for ${item.program}`}
            title="Verified in CV PDF"
            className="w-7 h-7 rounded-[6px] bg-zinc-100 dark:bg-zinc-900 border border-black/[0.08] dark:border-white/[0.08] flex items-center justify-center text-zinc-500 hover:text-[#6495ED] transition-colors"
          >
            <Link2 className="w-3.5 h-3.5" />
          </a>
        )}

        <button
          type="button"
          onClick={onToggle}
          className="text-right flex flex-col items-end"
        >
          <div className="inline-flex items-center gap-1.5 font-mono text-[12px] font-semibold text-zinc-800 dark:text-zinc-200 tabular-nums">
            <span>{item.period}</span>
            <ChevronDown
              className={`w-3.5 h-3.5 text-zinc-400 transition-transform duration-200 ${
                expanded ? 'rotate-180 text-[#6495ED]' : ''
              }`}
            />
          </div>
          <span className="font-mono text-[11px] text-zinc-500 dark:text-zinc-500 mt-0.5 hidden sm:inline">
            {item.location}
          </span>
        </button>
      </div>
    </div>

    <AnimatePresence initial={false}>
      {expanded && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="overflow-hidden"
        >
          <div className="px-4 sm:px-5 pb-4 pt-0.5 sm:pl-[74px] space-y-1.5">
            {item.details.map((d) => (
              <p
                key={d}
                className="text-[12.5px] leading-[1.6] text-zinc-600 dark:text-zinc-400 flex items-start gap-2"
              >
                <span className="mt-2 w-1 h-1 rounded-full bg-[#6495ED] shrink-0" />
                <span>{d}</span>
              </p>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

export const BlueprintExperienceAndEdu: React.FC<{ soundEnabled: boolean }> = ({ soundEnabled }) => {
  const [expTab, setExpTab] = useState<'work' | 'leadership'>('work');
  const [eduTab, setEduTab] = useState<'edu' | 'certs'>('edu');
  const [openExpId, setOpenExpId] = useState<string | null>('alex-dealership');
  const [openEduId, setOpenEduId] = useState<string | null>('wvsu-bsit');
  const [openMilestoneId, setOpenMilestoneId] = useState<string | null>(null);

  const expTitle = useScrambleText(expTab === 'work' ? 'Experiences' : 'Leadership', 260);
  const eduTitle = useScrambleText(eduTab === 'edu' ? 'Education' : 'Certifications', 260);

  const expItems = expTab === 'work' ? PORTFOLIO_DATA.experiences : PORTFOLIO_DATA.leadership;
  const eduItems = eduTab === 'edu' ? PORTFOLIO_DATA.education : PORTFOLIO_DATA.certifications;

  return (
    <div>
      <HatchDivider />

      {/* 1. Tabbed Experiences / Leadership */}
      <section id="experience" className="w-full">
        <div className="px-4 sm:px-5 py-3 bp-b flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-[16px] sm:text-[18px] font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            {expTitle}
          </h2>

          {/* Segmented Blueprint Switcher */}
          <div className="inline-flex items-center p-1 rounded-[8px] bg-zinc-100 dark:bg-[#0e0e11] border border-black/[0.08] dark:border-white/[0.08]">
            <button
              type="button"
              onClick={() => {
                playTick(soundEnabled, 880);
                setExpTab('work');
                setOpenExpId('alex-dealership');
              }}
              className={`px-2.5 py-1 rounded-[6px] text-[11.5px] font-medium inline-flex items-center gap-1.5 transition-all ${
                expTab === 'work'
                  ? 'bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white shadow-sm'
                  : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200'
              }`}
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>Experiences</span>
            </button>
            <button
              type="button"
              onClick={() => {
                playTick(soundEnabled, 920);
                setExpTab('leadership');
                setOpenExpId('wvsu-cyberobotics');
              }}
              className={`px-2.5 py-1 rounded-[6px] text-[11.5px] font-medium inline-flex items-center gap-1.5 transition-all ${
                expTab === 'leadership'
                  ? 'bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white shadow-sm'
                  : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200'
              }`}
            >
              <Users className="w-3.5 h-3.5" />
              <span>Leadership</span>
            </button>
          </div>
        </div>

        <div>
          {expItems.map((item, idx) => (
            <ExperienceRow
              key={item.id}
              item={item}
              expanded={openExpId === item.id}
              onToggle={() => {
                playTick(soundEnabled, 820);
                setOpenExpId((prev) => (prev === item.id ? null : item.id));
              }}
              isLast={idx === expItems.length - 1}
            />
          ))}
        </div>
      </section>

      <HatchDivider />

      {/* 2. Tabbed Education / Certifications */}
      <section id="education" className="w-full">
        <div className="px-4 sm:px-5 py-3 bp-b flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-[16px] sm:text-[18px] font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            {eduTitle}
          </h2>

          <div className="inline-flex items-center p-1 rounded-[8px] bg-zinc-100 dark:bg-[#0e0e11] border border-black/[0.08] dark:border-white/[0.08]">
            <button
              type="button"
              onClick={() => {
                playTick(soundEnabled, 880);
                setEduTab('edu');
                setOpenEduId('wvsu-bsit');
              }}
              className={`px-2.5 py-1 rounded-[6px] text-[11.5px] font-medium inline-flex items-center gap-1.5 transition-all ${
                eduTab === 'edu'
                  ? 'bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white shadow-sm'
                  : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200'
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Education</span>
            </button>
            <button
              type="button"
              onClick={() => {
                playTick(soundEnabled, 940);
                setEduTab('certs');
                setOpenEduId('tesda-css');
              }}
              className={`px-2.5 py-1 rounded-[6px] text-[11.5px] font-medium inline-flex items-center gap-1.5 transition-all ${
                eduTab === 'certs'
                  ? 'bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white shadow-sm'
                  : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200'
              }`}
            >
              <Award className="w-3.5 h-3.5" />
              <span>Certifications ({PORTFOLIO_DATA.certifications.length})</span>
            </button>
          </div>
        </div>

        <div>
          {eduItems.map((item, idx) => (
            <EducationRow
              key={item.id}
              item={item}
              expanded={openEduId === item.id}
              onToggle={() => {
                playTick(soundEnabled, 820);
                setOpenEduId((prev) => (prev === item.id ? null : item.id));
              }}
              isLast={idx === eduItems.length - 1}
            />
          ))}
        </div>
      </section>

      <FullBleedDivider />

      {/* 3. Milestones Ledger */}
      <section id="milestones" className="w-full">
        <div className="px-4 sm:px-5 py-3 bp-b flex items-center justify-between">
          <h2 className="text-[16px] sm:text-[18px] font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            Milestones
          </h2>
          <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
            VERIFIED CHECKPOINTS
          </span>
        </div>

        <div>
          {PORTFOLIO_DATA.milestones.map((ms, idx) => {
            const isOpen = openMilestoneId === ms.id;
            return (
              <div key={ms.id} className={idx < PORTFOLIO_DATA.milestones.length - 1 ? 'bp-b' : ''}>
                <button
                  type="button"
                  onClick={() => {
                    playTick(soundEnabled, 860);
                    setOpenMilestoneId((prev) => (prev === ms.id ? null : ms.id));
                  }}
                  className="w-full px-4 sm:px-5 py-3.5 flex items-center justify-between gap-3 text-left hover:bg-zinc-50/80 dark:hover:bg-white/[0.02] transition-colors"
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <MonogramWell mark={ms.mark} tone={ms.markTone} />
                    <div className="min-w-0">
                      <div className="text-[13.5px] sm:text-[14.5px] font-bold text-zinc-900 dark:text-zinc-100 truncate">
                        {ms.title}
                      </div>
                      <div className="text-[12px] text-zinc-500 dark:text-zinc-400 truncate mt-0.5">
                        {ms.subtitle}
                      </div>
                    </div>
                  </div>

                  <div className="shrink-0 flex items-center gap-3">
                    <div className="hidden sm:flex flex-col items-end">
                      <span className="text-[12px] font-medium text-zinc-700 dark:text-zinc-300">
                        {ms.category}
                      </span>
                      <span className="font-mono text-[10.5px] text-zinc-400 dark:text-zinc-500">
                        {ms.timeframe}
                      </span>
                    </div>

                    <span
                      className={`font-mono text-[10px] font-bold tracking-wider px-2.5 py-1 rounded-[6px] border ${STATUS_STYLES[ms.status]}`}
                    >
                      {ms.status}
                    </span>

                    <ChevronDown
                      className={`w-3.5 h-3.5 text-zinc-400 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#6495ED]' : ''
                      }`}
                    />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.18 }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 sm:px-5 pb-3.5 sm:pl-[74px] flex flex-wrap items-center justify-between gap-2 text-[12.5px] text-zinc-600 dark:text-zinc-400">
                        <span>{ms.note}</span>
                        {ms.href && (
                          <a
                            href={ms.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 font-mono text-[11.5px] font-semibold text-[#4172cc] dark:text-[#8ab2ff] hover:underline"
                          >
                            <span>Inspect PR</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
