import React, { useMemo, useState } from 'react';
import { Gamepad2, ExternalLink } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';
import { FullBleedDivider, HatchDivider } from './BlueprintPrimitives';
import { playTick } from '../utils/sound';

// 5x7 pixel font for spelling "BEN BACS" across the 52x7 GitHub Contribution Matrix
const GLYPHS: Record<string, string[]> = {
  B: ['1110', '1001', '1110', '1001', '1110'],
  E: ['1111', '1000', '1110', '1000', '1111'],
  N: ['1001', '1101', '1011', '1001', '1001'],
  A: ['0110', '1001', '1111', '1001', '1001'],
  C: ['0111', '1000', '1000', '1000', '0111'],
  S: ['0111', '1000', '0110', '0001', '1110'],
  ' ': ['00', '00', '00', '00', '00'],
};

const MONTHS = ['Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'];

function buildMatrix(mode: 'pattern' | 'activity'): number[][] {
  const cols = 50;
  const rows = 7;
  const grid = Array.from({ length: cols }, () => Array(rows).fill(0));

  if (mode === 'pattern') {
    const word = 'BEN BACS';
    const bitRows: number[][] = [[], [], [], [], []];
    for (const ch of word) {
      const g = GLYPHS[ch] || GLYPHS[' '];
      for (let r = 0; r < 5; r += 1) {
        for (const bit of g[r]) {
          bitRows[r].push(bit === '1' ? 4 : 0);
        }
        bitRows[r].push(0);
      }
    }
    const width = bitRows[0].length;
    const startCol = Math.max(1, Math.floor((cols - width) / 2));

    for (let c = 0; c < cols; c += 1) {
      for (let r = 0; r < rows; r += 1) {
        // Subtle ambient commits around edges
        const hash = (c * 17 + r * 31 + 11) % 29;
        grid[c][r] = hash === 0 ? 2 : hash < 4 ? 1 : 0;
      }
    }

    for (let r = 0; r < 5; r += 1) {
      for (let i = 0; i < width && startCol + i < cols; i += 1) {
        if (bitRows[r][i] > 0) {
          grid[startCol + i][r + 1] = 4;
        } else if (startCol + i > 0) {
          grid[startCol + i][r + 1] = 0;
        }
      }
    }
    return grid;
  }

  // Deterministic realistic engineering commit cadence
  for (let c = 0; c < cols; c += 1) {
    for (let r = 0; r < rows; r += 1) {
      const seed = (c * 37 + r * 19 + (c % 7) * 13) % 23;
      const burst = c > 28 ? 3 : 0;
      if (seed + burst >= 20) grid[c][r] = 4;
      else if (seed + burst >= 16) grid[c][r] = 3;
      else if (seed + burst >= 12) grid[c][r] = 2;
      else if (seed >= 8) grid[c][r] = 1;
      else grid[c][r] = 0;
    }
  }
  return grid;
}

function getManilaGreeting(): string {
  const hourStr = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Asia/Manila',
    hour: 'numeric',
    hour12: false,
  }).format(new Date());
  const h = Number(hourStr);
  if (h >= 5 && h < 12) return 'Good morning';
  if (h >= 12 && h < 18) return 'Good afternoon';
  return 'Good evening';
}

const CELL_LEVEL_CLASS: Record<number, string> = {
  0: 'bg-zinc-100 dark:bg-[#111318] border-black/[0.04] dark:border-white/[0.04]',
  1: 'bg-[#6495ED]/25 dark:bg-[#232c43] border-[#6495ED]/20',
  2: 'bg-[#6495ED]/50 dark:bg-[#354872] border-[#6495ED]/30',
  3: 'bg-[#6495ED]/75 dark:bg-[#4c6eb1] border-[#6495ED]/40',
  4: 'bg-[#6495ED] dark:bg-[#6495ED] border-[#6495ED]/70 shadow-[0_0_6px_rgba(100,149,237,0.35)]',
};

export const BlueprintAboutAndStack: React.FC<{ soundEnabled: boolean }> = ({ soundEnabled }) => {
  const [matrixMode, setMatrixMode] = useState<'activity' | 'pattern'>('pattern');
  const [customCells, setCustomCells] = useState<Record<string, number>>({});
  const [focusedBullet, setFocusedBullet] = useState<string>('code');

  const baseMatrix = useMemo(() => buildMatrix(matrixMode), [matrixMode]);
  const greeting = useMemo(() => getManilaGreeting(), []);

  const toggleCell = (c: number, r: number, current: number) => {
    playTick(soundEnabled, 720 + r * 60);
    const key = `${c}-${r}`;
    setCustomCells((prev) => ({
      ...prev,
      [key]: (current + 1) % 5,
    }));
  };

  return (
    <div>
      <FullBleedDivider />

      {/* 1. Interactive GitHub Contribution Matrix */}
      <section aria-label="GitHub contribution matrix" className="px-4 sm:px-5 py-5">
        <div className="overflow-x-auto pb-1">
          <div className="min-w-[560px]">
            {/* Month Labels */}
            <div className="grid grid-cols-12 pl-5 mb-1.5 font-mono text-[9.5px] text-zinc-400 dark:text-zinc-500">
              {MONTHS.map((m) => (
                <span key={m}>{m}</span>
              ))}
            </div>

            <div className="flex items-center gap-1.5">
              {/* Day labels */}
              <div className="flex flex-col justify-between h-[86px] py-1 font-mono text-[9px] text-zinc-400 dark:text-zinc-500 pr-1">
                <span>M</span>
                <span>W</span>
                <span>F</span>
              </div>

              {/* 50x7 Grid */}
              <div className="grid grid-flow-col auto-cols-fr gap-[3px] flex-1">
                {baseMatrix.map((col, cIdx) => (
                  <div key={cIdx} className="grid grid-rows-7 gap-[3px]">
                    {col.map((lvl, rIdx) => {
                      const key = `${cIdx}-${rIdx}`;
                      const effective = customCells[key] !== undefined ? customCells[key] : lvl;
                      return (
                        <button
                          key={key}
                          type="button"
                          onClick={() => toggleCell(cIdx, rIdx, effective)}
                          aria-label={`Week ${cIdx + 1}, day ${rIdx + 1}`}
                          className={`w-[9.5px] h-[9.5px] sm:w-[10.5px] sm:h-[10.5px] rounded-[2px] border transition-transform hover:scale-125 ${CELL_LEVEL_CLASS[effective]}`}
                        />
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Matrix Footer Legend + Mode Toggle */}
        <div className="mt-3 pt-2.5 border-t border-black/[0.06] dark:border-white/[0.06] flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-zinc-500 dark:text-zinc-400">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <span>Less</span>
              {[0, 1, 2, 3, 4].map((lvl) => (
                <span
                  key={lvl}
                  className={`inline-block w-2.5 h-2.5 rounded-[2px] border ${CELL_LEVEL_CLASS[lvl]}`}
                />
              ))}
              <span>More</span>
            </div>

            <span className="text-zinc-300 dark:text-zinc-700">|</span>

            <button
              type="button"
              onClick={() => {
                playTick(soundEnabled, 940);
                setCustomCells({});
                setMatrixMode((m) => (m === 'activity' ? 'pattern' : 'activity'));
              }}
              className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded border transition-colors ${
                matrixMode === 'pattern'
                  ? 'border-[#6495ED]/50 bg-[#6495ED]/12 text-[#4172cc] dark:text-[#8ab2ff]'
                  : 'border-black/10 dark:border-white/10 hover:text-zinc-900 dark:hover:text-white'
              }`}
            >
              <Gamepad2 className="w-3 h-3" />
              <span>{matrixMode === 'pattern' ? 'Banner: BEN BACS' : 'Spell Mode'}</span>
            </button>
          </div>

          <a
            href={PORTFOLIO_DATA.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-zinc-600 dark:text-zinc-300 hover:text-[#6495ED] dark:hover:text-[#8ab2ff] transition-colors"
          >
            <span className="text-[#5281D6] dark:text-[#7da8f7] font-semibold">ben-bacs</span>
            <span>open-source &amp; project commits on</span>
            <span className="font-semibold text-zinc-900 dark:text-white">GitHub</span>
            <ExternalLink className="w-3 h-3 ml-0.5" />
          </a>
        </div>
      </section>

      <FullBleedDivider />

      {/* 2. About Section with Dynamic Caveat Greeting & Spotlight Bullets */}
      <section id="about" className="w-full">
        <div className="px-4 sm:px-5 py-3 bp-b flex items-center justify-between">
          <h2 className="font-caveat italic font-semibold text-[26px] sm:text-[30px] leading-none tracking-wide text-violet-600 dark:text-violet-300">
            {greeting}
          </h2>
          <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
            ABOUT · PROFILE
          </span>
        </div>

        <div className="px-4 sm:px-6 py-5 space-y-4">
          {PORTFOLIO_DATA.aboutBullets.map((item) => {
            const isFocused = focusedBullet === item.id;

            return (
              <div
                key={item.id}
                onMouseEnter={() => setFocusedBullet(item.id)}
                onClick={() => {
                  playTick(soundEnabled, 800);
                  setFocusedBullet(item.id);
                }}
                className={`flex items-start gap-3 cursor-default transition-opacity duration-200 ${
                  isFocused ? 'opacity-100' : 'opacity-55 hover:opacity-90'
                }`}
              >
                <span
                  className={`mt-2 w-1.5 h-1.5 rounded-full shrink-0 transition-colors ${
                    isFocused ? 'bg-zinc-900 dark:bg-white' : 'bg-zinc-400 dark:bg-zinc-600'
                  }`}
                />

                {item.id === 'code' ? (
                  <p className="text-[13.5px] sm:text-[14px] leading-[1.68] text-zinc-700 dark:text-zinc-300">
                    Recent engineering work includes upstream open-source fixes in{' '}
                    <a
                      href="https://github.com/mealie-recipes/mealie/pull/8984"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-zinc-900 dark:text-white underline decoration-[#6495ED]/60 underline-offset-4 hover:text-[#6495ED]"
                    >
                      Mealie PR #8984
                    </a>{' '}
                    (household recipe filter isolation in Python and SQLAlchemy) and{' '}
                    <a
                      href="https://github.com/calcom/cal.diy/pull/30158"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-zinc-900 dark:text-white underline decoration-[#6495ED]/60 underline-offset-4 hover:text-[#6495ED]"
                    >
                      Cal.com PR #30158
                    </a>{' '}
                    (SSRF redirect validation), alongside our Flutter and FastAPI thesis platform{' '}
                    <strong className="font-semibold text-zinc-900 dark:text-zinc-100">Voice Voyage</strong>,{' '}
                    <strong className="font-semibold text-zinc-900 dark:text-zinc-100">PCMS v2</strong>, and{' '}
                    <strong className="font-semibold text-zinc-900 dark:text-zinc-100">IJWKMS Next</strong>.
                  </p>
                ) : (
                  <p className="text-[13.5px] sm:text-[14px] leading-[1.68] text-zinc-700 dark:text-zinc-300">
                    <strong className="font-semibold text-zinc-900 dark:text-zinc-100">{item.lead}</strong>
                    {item.body}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>

      <HatchDivider />

      {/* 3. Indexed Stack Rows (01 - 04) */}
      <section id="stack" className="w-full">
        <div className="px-4 sm:px-5 py-3 bp-b flex items-center justify-between">
          <h2 className="text-[16px] sm:text-[18px] font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            Stack
          </h2>
          <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
            01 — 04 · CORE TOOLING
          </span>
        </div>

        <div>
          {PORTFOLIO_DATA.stack.map((group, gIdx) => (
            <div
              key={group.index}
              className={`flex flex-col sm:flex-row sm:items-start ${
                gIdx < PORTFOLIO_DATA.stack.length - 1 ? 'bp-b' : ''
              }`}
            >
              {/* Left Index & Category */}
              <div className="sm:w-[190px] shrink-0 px-4 sm:px-5 pt-3.5 sm:py-4 sm:bp-r flex items-baseline gap-2.5">
                <span className="font-mono text-[11px] text-zinc-400 dark:text-zinc-500 tabular-nums">
                  {group.index}
                </span>
                <span className="text-[13px] font-semibold text-zinc-900 dark:text-zinc-200">
                  {group.label}
                </span>
              </div>

              {/* Right Tech Chips */}
              <div className="flex-1 px-4 sm:px-5 py-3.5 sm:py-4 flex flex-wrap gap-2">
                {group.items.map((tech) => (
                  <span
                    key={tech.name}
                    className="inline-flex items-center gap-1.5 rounded-[6px] bg-zinc-100/90 dark:bg-[#141417] border border-black/[0.07] dark:border-white/[0.08] px-2.5 py-1 text-[12px] font-medium text-zinc-800 dark:text-zinc-200 hover:border-[#6495ED]/50 transition-colors"
                  >
                    <span className="font-mono text-[9.5px] font-bold px-1 py-0.2 rounded bg-black/[0.06] dark:bg-white/[0.08] text-zinc-600 dark:text-zinc-300">
                      {tech.tag}
                    </span>
                    <span>{tech.name}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
