import React, { useEffect, useState } from 'react';
import { BlueprintHero } from './components/BlueprintHero';
import { BlueprintAboutAndStack } from './components/BlueprintAboutAndStack';
import { BlueprintExperienceAndEdu } from './components/BlueprintExperienceAndEdu';
import { BlueprintProjectsAndColophon } from './components/BlueprintProjectsAndColophon';
import {
  BlueprintContactModal,
  CommandPaletteModal,
  ProjectDetailModal,
} from './components/BlueprintModals';
import { BlueprintProject } from './data/portfolio';

export const App: React.FC = () => {
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window === 'undefined') return true;
    const saved = window.localStorage.getItem('bnb-theme');
    return saved ? saved === 'dark' : true;
  });
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [commandOpen, setCommandOpen] = useState<boolean>(false);
  const [contactOpen, setContactOpen] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<BlueprintProject | null>(null);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      window.localStorage.setItem('bnb-theme', 'dark');
    } else {
      root.classList.remove('dark');
      window.localStorage.setItem('bnb-theme', 'light');
    }
  }, [isDark]);

  // Global keyboard shortcuts (Cmd/Ctrl + K and Shift + Section Key)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      const isTyping =
        target &&
        (target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.isContentEditable);

      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setCommandOpen((prev) => !prev);
        return;
      }

      if (isTyping || commandOpen || contactOpen || selectedProject) return;

      if (e.shiftKey && !e.metaKey && !e.ctrlKey && !e.altKey) {
        const key = e.key.toUpperCase();
        const sectionMap: Record<string, string> = {
          E: 'experience',
          U: 'education',
          P: 'projects',
          S: 'stack',
          A: 'about',
        };
        if (sectionMap[key]) {
          e.preventDefault();
          document.getElementById(sectionMap[key])?.scrollIntoView({ behavior: 'smooth' });
        } else if (key === 'T') {
          e.preventDefault();
          setIsDark((d) => !d);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [commandOpen, contactOpen, selectedProject]);

  return (
    <div className="min-h-screen w-full bg-white dark:bg-black text-zinc-900 dark:text-zinc-100 relative overflow-x-hidden selection:bg-[#6495ED] selection:text-white transition-colors duration-300">
      {/* Centered Technical Blueprint Column (~51% on 1440px desktop, bounded by continuous 1px micro-dashed vertical rails) */}
      <div className="relative mx-auto w-full max-w-[748px] px-3 sm:px-0">
        <div className="relative w-full">
          {/* Continuous Left & Right Vertical Blueprint Rails */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-0 bottom-0 left-0 w-px bp-mask-y z-30"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-0 bottom-0 right-0 w-px bp-mask-y z-30"
          />

          <BlueprintHero
            isDark={isDark}
            onToggleTheme={() => setIsDark((d) => !d)}
            soundEnabled={soundEnabled}
            onToggleSound={() => setSoundEnabled((s) => !s)}
            onOpenCommand={() => setCommandOpen(true)}
            onOpenContact={() => setContactOpen(true)}
          />

          <main>
            <BlueprintAboutAndStack soundEnabled={soundEnabled} />
            <BlueprintExperienceAndEdu soundEnabled={soundEnabled} />
            <BlueprintProjectsAndColophon
              soundEnabled={soundEnabled}
              onSelectProject={(p) => setSelectedProject(p)}
            />
          </main>
        </div>
      </div>

      {/* Global Modals */}
      <CommandPaletteModal
        open={commandOpen}
        onClose={() => setCommandOpen(false)}
        onToggleTheme={() => setIsDark((d) => !d)}
        onOpenContact={() => setContactOpen(true)}
        soundEnabled={soundEnabled}
      />

      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <BlueprintContactModal
        open={contactOpen}
        onClose={() => setContactOpen(false)}
      />
    </div>
  );
};

export default App;
