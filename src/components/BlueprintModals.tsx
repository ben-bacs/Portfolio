import React, { useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Search,
  Briefcase,
  GraduationCap,
  Code2,
  Layers,
  User,
  SunMoon,
  FileText,
  Mail,
  Github,
  X,
  ExternalLink,
  Send,
  Check,
  Copy,
  LayoutGrid,
} from 'lucide-react';
import { PORTFOLIO_DATA, BlueprintProject } from '../data/portfolio';
import { playTick } from '../utils/sound';

interface CommandAction {
  id: string;
  group: 'Sections' | 'General';
  label: string;
  shortcut?: string;
  icon: React.FC<{ className?: string }>;
  run: () => void;
}

export const CommandPaletteModal: React.FC<{
  open: boolean;
  onClose: () => void;
  onToggleTheme: () => void;
  onOpenContact: () => void;
  soundEnabled: boolean;
}> = ({ open, onClose, onToggleTheme, onOpenContact, soundEnabled }) => {
  const [query, setQuery] = useState('');
  const [activeIdx, setActiveIdx] = useState(0);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const jumpTo = (id: string) => {
    onClose();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const actions = useMemo<CommandAction[]>(
    () => [
      {
        id: 'sec-exp',
        group: 'Sections',
        label: 'Experience & Leadership',
        shortcut: 'shift + E',
        icon: Briefcase,
        run: () => jumpTo('experience'),
      },
      {
        id: 'sec-edu',
        group: 'Sections',
        label: 'Education & Certifications',
        shortcut: 'shift + U',
        icon: GraduationCap,
        run: () => jumpTo('education'),
      },
      {
        id: 'sec-proj',
        group: 'Sections',
        label: 'Projects',
        shortcut: 'shift + P',
        icon: Code2,
        run: () => jumpTo('projects'),
      },
      {
        id: 'sec-stack',
        group: 'Sections',
        label: 'Stack',
        shortcut: 'shift + S',
        icon: Layers,
        run: () => jumpTo('stack'),
      },
      {
        id: 'sec-about',
        group: 'Sections',
        label: 'About',
        shortcut: 'shift + A',
        icon: User,
        run: () => jumpTo('about'),
      },
      {
        id: 'act-theme',
        group: 'General',
        label: 'Toggle Dark / Light Mode',
        shortcut: 'shift + T',
        icon: SunMoon,
        run: () => {
          onToggleTheme();
          onClose();
        },
      },
      {
        id: 'act-cv',
        group: 'General',
        label: 'Open Finalized CV (PDF)',
        icon: FileText,
        run: () => {
          window.open(PORTFOLIO_DATA.personal.cvUrl, '_blank', 'noopener,noreferrer');
          onClose();
        },
      },
      {
        id: 'act-contact',
        group: 'General',
        label: 'Send a Message',
        icon: Mail,
        run: () => {
          onClose();
          onOpenContact();
        },
      },
      {
        id: 'act-gh',
        group: 'General',
        label: 'GitHub (@ben-bacs)',
        icon: Github,
        run: () => {
          window.open(PORTFOLIO_DATA.personal.github, '_blank', 'noopener,noreferrer');
          onClose();
        },
      },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [onToggleTheme, onOpenContact]
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return actions;
    return actions.filter((a) => a.label.toLowerCase().includes(q));
  }, [actions, query]);

  useEffect(() => {
    if (open) {
      setQuery('');
      setActiveIdx(0);
      window.setTimeout(() => inputRef.current?.focus(), 40);
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setActiveIdx((i) => (filtered.length ? (i + 1) % filtered.length : 0));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setActiveIdx((i) => (filtered.length ? (i - 1 + filtered.length) % filtered.length : 0));
      } else if (e.key === 'Enter' && filtered[activeIdx]) {
        e.preventDefault();
        playTick(soundEnabled, 940);
        filtered[activeIdx].run();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, filtered, activeIdx, onClose, soundEnabled]);

  const sections = filtered.filter((a) => a.group === 'Sections');
  const general = filtered.filter((a) => a.group === 'General');

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overscroll-contain">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 10 }}
            transition={{ duration: 0.16 }}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation Menu"
            className="relative z-10 w-full max-w-[480px] rounded-[14px] bg-white dark:bg-[#111114] border border-black/10 dark:border-white/10 shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="px-4 py-3.5 border-b border-black/[0.07] dark:border-white/[0.07] flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-[9px] bg-zinc-100 dark:bg-zinc-900 border border-black/[0.08] dark:border-white/[0.08] flex items-center justify-center text-zinc-700 dark:text-zinc-300">
                  <LayoutGrid className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[14px] font-bold text-zinc-900 dark:text-zinc-100">
                    Navigation Menu
                  </div>
                  <div className="text-[11.5px] text-zinc-500 dark:text-zinc-400">
                    Quickly jump to sections or actions
                  </div>
                </div>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="w-7 h-7 rounded-[6px] text-zinc-400 hover:text-zinc-900 dark:hover:text-white flex items-center justify-center"
                aria-label="Close navigation menu"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Search Input */}
            <div className="px-4 py-2.5 border-b border-black/[0.07] dark:border-white/[0.07] flex items-center gap-2.5">
              <Search className="w-4 h-4 text-zinc-400 shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setActiveIdx(0);
                }}
                placeholder="Search sections or actions..."
                className="w-full bg-transparent text-[13px] text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none"
              />
            </div>

            {/* Results */}
            <div className="max-h-[310px] overflow-y-auto p-2 space-y-2">
              {sections.length > 0 && (
                <div>
                  <div className="px-2.5 py-1 font-mono text-[10.5px] text-zinc-400 dark:text-zinc-500">
                    Sections
                  </div>
                  {sections.map((item) => {
                    const globalIndex = filtered.indexOf(item);
                    const active = globalIndex === activeIdx;
                    const Icon = item.icon;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onMouseEnter={() => setActiveIdx(globalIndex)}
                        onClick={() => {
                          playTick(soundEnabled, 920);
                          item.run();
                        }}
                        className={`w-full px-2.5 py-2 rounded-[8px] flex items-center justify-between text-[13px] transition-colors ${
                          active
                            ? 'bg-zinc-100 dark:bg-zinc-800/80 text-zinc-950 dark:text-white font-medium'
                            : 'text-zinc-600 dark:text-zinc-300'
                        }`}
                      >
                        <span className="inline-flex items-center gap-2.5">
                          <Icon className="w-4 h-4 text-zinc-400" />
                          <span>{item.label}</span>
                        </span>
                        {item.shortcut && (
                          <kbd className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-white dark:bg-zinc-900 border border-black/10 dark:border-white/10 text-zinc-500 dark:text-zinc-400">
                            {item.shortcut}
                          </kbd>
                        )}
                      </button>
                    );
                  })}
                </div>
              )}

              {general.length > 0 && (
                <div>
                  <div className="px-2.5 py-1 font-mono text-[10.5px] text-zinc-400 dark:text-zinc-500">
                    General
                  </div>
                  {general.map((item) => {
                    const globalIndex = filtered.indexOf(item);
                    const active = globalIndex === activeIdx;
                    const Icon = item.icon;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onMouseEnter={() => setActiveIdx(globalIndex)}
                        onClick={() => {
                          playTick(soundEnabled, 920);
                          item.run();
                        }}
                        className={`w-full px-2.5 py-2 rounded-[8px] flex items-center justify-between text-[13px] transition-colors ${
                          active
                            ? 'bg-zinc-100 dark:bg-zinc-800/80 text-zinc-950 dark:text-white font-medium'
                            : 'text-zinc-600 dark:text-zinc-300'
                        }`}
                      >
                        <span className="inline-flex items-center gap-2.5">
                          <Icon className="w-4 h-4 text-zinc-400" />
                          <span>{item.label}</span>
                        </span>
                        {item.shortcut && (
                          <kbd className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-white dark:bg-zinc-900 border border-black/10 dark:border-white/10 text-zinc-500 dark:text-zinc-400">
                            {item.shortcut}
                          </kbd>
                        )}
                      </button>
                    );
                  })}
                </div>
              )}

              {filtered.length === 0 && (
                <div className="py-8 text-center font-mono text-[12px] text-zinc-400">
                  No matching actions.
                </div>
              )}
            </div>

            {/* Footer Hints */}
            <div className="px-4 py-2.5 border-t border-black/[0.07] dark:border-white/[0.07] flex items-center justify-between font-mono text-[10.5px] text-zinc-400">
              <div className="flex items-center gap-3">
                <span>↑ ↓ navigate</span>
                <span>↵ select</span>
              </div>
              <span>esc to close</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export const ProjectDetailModal: React.FC<{
  project: BlueprintProject | null;
  onClose: () => void;
}> = ({ project, onClose }) => {
  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overscroll-contain">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.18 }}
            role="dialog"
            aria-modal="true"
            aria-label={project.title}
            className="relative z-10 w-full max-w-[560px] max-h-[88vh] overflow-y-auto rounded-[14px] bg-white dark:bg-[#0f1014] border border-black/15 dark:border-white/10 shadow-2xl p-5 sm:p-6 space-y-4"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="inline-flex items-center gap-2 font-mono text-[10.5px] text-[#4172cc] dark:text-[#8ab2ff]">
                  <span>{project.domain}</span>
                  <span>·</span>
                  <span>{project.statusLabel}</span>
                </div>
                <h3 className="text-[18px] sm:text-[20px] font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mt-1">
                  {project.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close project details"
                className="w-8 h-8 rounded-[7px] border border-black/10 dark:border-white/10 flex items-center justify-center text-zinc-400 hover:text-zinc-900 dark:hover:text-white shrink-0"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Technical Preview Block */}
            <div className="rounded-[10px] bg-[#08090d] border border-white/10 p-3.5 font-mono text-[11px] space-y-1">
              <div className="text-zinc-500 pb-1.5 mb-1.5 border-b border-white/[0.07] flex justify-between">
                <span>{project.preview.header}</span>
                <span>{project.preview.tag}</span>
              </div>
              {project.preview.lines.map((ln, idx) => (
                <div key={idx} className="flex items-baseline gap-2 text-zinc-300">
                  <span className="text-zinc-600 w-6 shrink-0 text-right">{ln.prefix || '·'}</span>
                  <span className="break-all">{ln.text}</span>
                </div>
              ))}
            </div>

            <p className="text-[13.5px] leading-[1.65] text-zinc-700 dark:text-zinc-300">
              {project.summary}
            </p>

            <div>
              <div className="font-mono text-[10.5px] uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-2">
                Implementation Notes
              </div>
              <ul className="space-y-1.5">
                {project.bullets.map((b) => (
                  <li
                    key={b}
                    className="text-[12.5px] leading-[1.6] text-zinc-600 dark:text-zinc-300 flex items-start gap-2"
                  >
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#6495ED] shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-1">
              {project.featureChips.map((c) => (
                <span
                  key={c}
                  className="font-mono text-[11px] px-2.5 py-0.5 rounded-[5px] bg-zinc-100 dark:bg-zinc-900 border border-black/10 dark:border-white/10 text-zinc-700 dark:text-zinc-300"
                >
                  {c}
                </span>
              ))}
            </div>

            <div className="pt-3 border-t border-black/10 dark:border-white/10 flex flex-wrap items-center gap-2.5">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-bp-primary h-9 px-4 rounded-[6px] text-white text-[12.5px] font-semibold inline-flex items-center gap-1.5"
                >
                  <span>{project.liveLabel || 'Open Live / PR'}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-9 px-3.5 rounded-[6px] bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-800 border border-black/10 dark:border-white/10 text-zinc-800 dark:text-zinc-200 text-[12.5px] font-medium inline-flex items-center gap-1.5 transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>Source Code</span>
                </a>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export const BlueprintContactModal: React.FC<{
  open: boolean;
  onClose: () => void;
}> = ({ open, onClose }) => {
  const [name, setName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [message, setMessage] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Inquiry from ${name || 'Visitor'}`);
    const body = encodeURIComponent(
      `Name: ${name}\nReply-To: ${senderEmail}\n\n${message}`
    );
    window.location.href = `mailto:${PORTFOLIO_DATA.personal.email}?subject=${subject}&body=${body}`;
    onClose();
  };

  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Ignore clipboard failure
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overscroll-contain">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 10 }}
            transition={{ duration: 0.16 }}
            role="dialog"
            aria-modal="true"
            aria-label="Send a message"
            className="relative z-10 w-full max-w-[460px] rounded-[14px] bg-white dark:bg-[#101115] border border-black/15 dark:border-white/10 shadow-2xl p-5 sm:p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-[17px] font-bold text-zinc-900 dark:text-zinc-100">
                  Direct Message
                </h3>
                <p className="font-mono text-[11px] text-zinc-500 dark:text-zinc-400">
                  Opens your mail client addressed to Benedict
                </p>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close contact dialog"
                className="w-8 h-8 rounded-[7px] border border-black/10 dark:border-white/10 flex items-center justify-center text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="mb-4 p-2.5 rounded-[8px] bg-zinc-50 dark:bg-zinc-900/90 border border-black/[0.07] dark:border-white/[0.07] flex items-center justify-between gap-2">
              <span className="font-mono text-[11.5px] text-zinc-700 dark:text-zinc-300 truncate">
                {PORTFOLIO_DATA.personal.email}
              </span>
              <button
                type="button"
                onClick={copyAddress}
                className="shrink-0 inline-flex items-center gap-1 font-mono text-[11px] px-2 py-1 rounded bg-white dark:bg-zinc-800 border border-black/10 dark:border-white/10 text-zinc-700 dark:text-zinc-200"
              >
                {copied ? <Check className="w-3 h-3 text-emerald-500" /> : <Copy className="w-3 h-3" />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label className="block font-mono text-[10.5px] uppercase text-zinc-500 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Juan Dela Cruz"
                  className="w-full h-9 px-3 rounded-[7px] bg-zinc-50 dark:bg-zinc-900 border border-black/10 dark:border-white/10 text-[13px] text-zinc-900 dark:text-zinc-100 focus:outline-none focus:border-[#6495ED]"
                />
              </div>
              <div>
                <label className="block font-mono text-[10.5px] uppercase text-zinc-500 mb-1">
                  Your Email
                </label>
                <input
                  type="email"
                  required
                  value={senderEmail}
                  onChange={(e) => setSenderEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="w-full h-9 px-3 rounded-[7px] bg-zinc-50 dark:bg-zinc-900 border border-black/10 dark:border-white/10 text-[13px] text-zinc-900 dark:text-zinc-100 focus:outline-none focus:border-[#6495ED]"
                />
              </div>
              <div>
                <label className="block font-mono text-[10.5px] uppercase text-zinc-500 mb-1">
                  Message
                </label>
                <textarea
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Role, OJT coordination, or project details..."
                  className="w-full p-3 rounded-[7px] bg-zinc-50 dark:bg-zinc-900 border border-black/10 dark:border-white/10 text-[13px] text-zinc-900 dark:text-zinc-100 focus:outline-none focus:border-[#6495ED] resize-none"
                />
              </div>
              <button
                type="submit"
                className="btn-bp-primary w-full h-9 rounded-[6px] text-white text-[13px] font-semibold inline-flex items-center justify-center gap-2"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Compose Email</span>
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
