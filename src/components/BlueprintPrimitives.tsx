import React from 'react';

export const FullBleedDivider: React.FC<{ showTicks?: boolean }> = ({ showTicks = true }) => (
  <div className="relative w-full h-0 select-none pointer-events-none z-20">
    <div className="absolute left-1/2 -translate-x-1/2 top-0 w-screen h-px bp-mask-x" />
    {showTicks && (
      <>
        <span className="bp-tick absolute left-0 -top-[1px] -translate-x-[1px]" />
        <span className="bp-tick absolute right-0 -top-[1px] translate-x-[1px]" />
      </>
    )}
  </div>
);

export const HatchDivider: React.FC = () => (
  <div className="w-full select-none">
    <FullBleedDivider />
    <div className="h-6 sm:h-7 w-full bg-dashed" />
    <FullBleedDivider />
  </div>
);

const TONE_CLASSES: Record<'blue' | 'emerald' | 'amber' | 'violet' | 'zinc', string> = {
  blue: 'bg-[#6495ED]/12 text-[#5281D6] dark:text-[#7da8f7] border-[#6495ED]/30',
  emerald: 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/25',
  amber: 'bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/25',
  violet: 'bg-violet-500/10 text-violet-700 dark:text-violet-300 border-violet-500/25',
  zinc: 'bg-zinc-500/10 text-zinc-700 dark:text-zinc-300 border-zinc-500/25',
};

export const MonogramWell: React.FC<{
  mark: string;
  tone?: 'blue' | 'emerald' | 'amber' | 'violet' | 'zinc';
}> = ({ mark, tone = 'blue' }) => (
  <div className="w-10 h-10 rounded-[10px] p-[3px] bg-zinc-100 dark:bg-[#111113] border border-black/10 dark:border-white/10 shadow-sm shrink-0">
    <div
      className={`w-full h-full rounded-[7px] border flex items-center justify-center font-mono text-[11px] font-bold tracking-tight ${TONE_CLASSES[tone]}`}
    >
      {mark}
    </div>
  </div>
);
