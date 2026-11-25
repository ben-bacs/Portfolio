import React, { useEffect, useRef, useState } from 'react';
import {
  Sun,
  Moon,
  Volume2,
  VolumeX,
  Command,
  Mail,
  Check,
  FileText,
  Github,
  GitPullRequest,
  Sparkles,
  Code2,
  MapPin,
  Clock,
  Terminal,
  GraduationCap,
  Volume1,
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';
import { FullBleedDivider } from './BlueprintPrimitives';
import { playTick, useScrambleText } from '../utils/sound';

interface BlueprintHeroProps {
  isDark: boolean;
  onToggleTheme: () => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
  onOpenCommand: () => void;
  onOpenContact: () => void;
}

const ASCII_MATRIX_LINES = [
  '01000010 01001110 01000010 :: AUTH_RLS_OK :: TCP/443',
  'SHA256:9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822',
  'NESSUS_SCAN // CVSS_V3.1 // SUBNET 10.24.0.0/16 PASS',
  'PR#8984 MERGED -> mealie/repos/recipe_query.py [OK]',
  'PR#30158 GUARD -> ssrfProtection.ts [127.0.0.1 DENY]',
  'WASAPI_FFT_64 :: HANN_WIN :: 60FPS WEBGL2_PIPELINE',
];

function formatManilaClock(date: Date) {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Asia/Manila',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  }).formatToParts(date);

  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? '';
  return {
    hh: get('hour'),
    mm: get('minute'),
    ss: get('second'),
    dayPeriod: get('dayPeriod').toUpperCase(),
    short: `${get('hour')}:${get('minute')} ${get('dayPeriod').toUpperCase()}`,
  };
}

const AtmosphericHorizonBanner: React.FC<{ isDark: boolean; clock: ReturnType<typeof formatManilaClock> }> = ({
  isDark,
  clock,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId = 0;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const stars = Array.from({ length: 68 }, (_, i) => ({
      x: ((i * 97 + 31) % 1000) / 1000,
      y: ((i * 53 + 17) % 620) / 1000,
      r: (i % 3 === 0 ? 1.35 : 0.85),
      phase: i * 0.7,
    }));

    const render = (time: number) => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      if (canvas.width !== Math.floor(w * dpr) || canvas.height !== Math.floor(h * dpr)) {
        canvas.width = Math.floor(w * dpr);
        canvas.height = Math.floor(h * dpr);
      }
      ctx.save();
      ctx.scale(dpr, dpr);

      // Sky gradient
      const sky = ctx.createLinearGradient(0, 0, 0, h);
      if (isDark) {
        sky.addColorStop(0, '#02040a');
        sky.addColorStop(0.52, '#0c1833');
        sky.addColorStop(0.86, '#172b56');
        sky.addColorStop(1, '#05070d');
      } else {
        sky.addColorStop(0, '#f8fbff');
        sky.addColorStop(0.55, '#e4eeff');
        sky.addColorStop(0.88, '#cfe0ff');
        sky.addColorStop(1, '#ffffff');
      }
      ctx.fillStyle = sky;
      ctx.fillRect(0, 0, w, h);

      // Subtle blueprint coordinate grid in sky
      ctx.strokeStyle = isDark ? 'rgba(100, 149, 237, 0.065)' : 'rgba(100, 149, 237, 0.11)';
      ctx.lineWidth = 1;
      for (let gx = 48; gx < w; gx += 48) {
        ctx.beginPath();
        ctx.moveTo(gx, 0);
        ctx.lineTo(gx, h);
        ctx.stroke();
      }
      for (let gy = 36; gy < h; gy += 36) {
        ctx.beginPath();
        ctx.moveTo(0, gy);
        ctx.lineTo(w, gy);
        ctx.stroke();
      }

      // Atmospheric moon/sun glow behind central signal gate
      const cx = w * 0.5;
      const cy = h * 0.54;
      const glow = ctx.createRadialGradient(cx, cy, 6, cx, cy, w * 0.34);
      if (isDark) {
        glow.addColorStop(0, 'rgba(130, 173, 255, 0.34)');
        glow.addColorStop(0.45, 'rgba(100, 149, 237, 0.12)');
        glow.addColorStop(1, 'rgba(0, 0, 0, 0)');
      } else {
        glow.addColorStop(0, 'rgba(255, 255, 255, 0.92)');
        glow.addColorStop(0.5, 'rgba(100, 149, 237, 0.16)');
        glow.addColorStop(1, 'rgba(255, 255, 255, 0)');
      }
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, w, h);

      // Stars (dark) or drifting light motes (light)
      const t = time * 0.0012;
      stars.forEach((s) => {
        const alpha = isDark
          ? 0.25 + 0.55 * (0.5 + 0.5 * Math.sin(t + s.phase))
          : 0.16 + 0.2 * (0.5 + 0.5 * Math.cos(t + s.phase));
        ctx.fillStyle = isDark ? `rgba(219, 234, 254, ${alpha})` : `rgba(82, 129, 214, ${alpha})`;
        ctx.beginPath();
        ctx.arc(s.x * w, s.y * h, s.r, 0, Math.PI * 2);
        ctx.fill();
      });

      // Soft horizon clouds / mist band
      for (let c = 0; c < 3; c += 1) {
        const drift = reduced ? 0 : Math.sin(t * 0.35 + c * 1.8) * 14;
        const cloudGrad = ctx.createRadialGradient(
          w * (0.24 + c * 0.26) + drift,
          h * (0.62 + (c % 2) * 0.05),
          8,
          w * (0.24 + c * 0.26) + drift,
          h * (0.62 + (c % 2) * 0.05),
          w * 0.22
        );
        if (isDark) {
          cloudGrad.addColorStop(0, 'rgba(147, 197, 253, 0.12)');
          cloudGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        } else {
          cloudGrad.addColorStop(0, 'rgba(255, 255, 255, 0.85)');
          cloudGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');
        }
        ctx.fillStyle = cloudGrad;
        ctx.fillRect(0, 0, w, h);
      }

      // Far ridge
      ctx.beginPath();
      ctx.moveTo(0, h);
      for (let x = 0; x <= w; x += 12) {
        const nx = x / w;
        const ridge =
          h * 0.74 -
          Math.sin(nx * Math.PI) * 18 -
          Math.sin(nx * 9.5 + 0.6) * 6 -
          Math.cos(nx * 19.0) * 2.5;
        ctx.lineTo(x, ridge);
      }
      ctx.lineTo(w, h);
      ctx.closePath();
      ctx.fillStyle = isDark ? '#080f1f' : '#cadbfb';
      ctx.fill();

      // Architectural Relay / Observatory Frame at Center Horizon
      const towerBaseY = h * 0.79;
      const towerTopY = h * 0.30;
      ctx.strokeStyle = isDark ? 'rgba(148, 187, 255, 0.55)' : 'rgba(59, 102, 180, 0.52)';
      ctx.lineWidth = 1.4;

      // Twin tapered pylons + crossbeams (minimalist architectural monument)
      ctx.beginPath();
      ctx.moveTo(cx - 26, towerBaseY);
      ctx.lineTo(cx - 18, towerTopY);
      ctx.moveTo(cx + 26, towerBaseY);
      ctx.lineTo(cx + 18, towerTopY);
      // Upper lintels
      ctx.moveTo(cx - 38, towerTopY + 5);
      ctx.lineTo(cx + 38, towerTopY + 5);
      ctx.moveTo(cx - 31, towerTopY + 15);
      ctx.lineTo(cx + 31, towerTopY + 15);
      // Central spire
      ctx.moveTo(cx, towerTopY - 12);
      ctx.lineTo(cx, towerTopY + 26);
      ctx.stroke();

      // Subtle pulsing beacon at spire tip
      const pulse = 0.45 + 0.45 * Math.sin(t * 2.2);
      ctx.fillStyle = `rgba(100, 149, 237, ${pulse})`;
      ctx.beginPath();
      ctx.arc(cx, towerTopY - 13, 2.2, 0, Math.PI * 2);
      ctx.fill();

      // Foreground silhouette ridge
      ctx.beginPath();
      ctx.moveTo(0, h);
      for (let x = 0; x <= w; x += 10) {
        const nx = x / w;
        const fg =
          h * 0.85 -
          Math.sin(nx * Math.PI * 1.15 + 0.2) * 11 -
          Math.cos(nx * 14.0) * 3.5;
        ctx.lineTo(x, fg);
      }
      ctx.lineTo(w, h);
      ctx.closePath();
      ctx.fillStyle = isDark ? '#020306' : '#dce7fc';
      ctx.fill();

      // Soft edge vignette so banner blends cleanly into black/white rails
      const edgeLeft = ctx.createLinearGradient(0, 0, w * 0.16, 0);
      edgeLeft.addColorStop(0, isDark ? 'rgba(0,0,0,0.88)' : 'rgba(255,255,255,0.92)');
      edgeLeft.addColorStop(1, isDark ? 'rgba(0,0,0,0)' : 'rgba(255,255,255,0)');
      ctx.fillStyle = edgeLeft;
      ctx.fillRect(0, 0, w * 0.16, h);

      const edgeRight = ctx.createLinearGradient(w * 0.84, 0, w, 0);
      edgeRight.addColorStop(0, isDark ? 'rgba(0,0,0,0)' : 'rgba(255,255,255,0)');
      edgeRight.addColorStop(1, isDark ? 'rgba(0,0,0,0.88)' : 'rgba(255,255,255,0.92)');
      ctx.fillStyle = edgeRight;
      ctx.fillRect(w * 0.84, 0, w * 0.16, h);

      const edgeBottom = ctx.createLinearGradient(0, h * 0.72, 0, h);
      edgeBottom.addColorStop(0, isDark ? 'rgba(0,0,0,0)' : 'rgba(255,255,255,0)');
      edgeBottom.addColorStop(1, isDark ? 'rgba(0,0,0,0.95)' : 'rgba(255,255,255,0.96)');
      ctx.fillStyle = edgeBottom;
      ctx.fillRect(0, h * 0.72, w, h * 0.28);

      ctx.restore();

      if (!reduced) {
        animId = window.requestAnimationFrame(render);
      }
    };

    animId = window.requestAnimationFrame(render);
    return () => window.cancelAnimationFrame(animId);
  }, [isDark]);

  return (
    <div className="relative w-full h-[156px] sm:h-[196px] overflow-hidden select-none">
      <canvas ref={canvasRef} className="w-full h-full block" />

      {/* Top-left subtle coordinate telemetry */}
      <div className="absolute top-3 left-3.5 font-mono text-[10px] tracking-wider text-zinc-500/80 dark:text-zinc-400/60 hidden sm:flex items-center gap-2">
        <span>10.7202° N, 122.5621° E</span>
        <span>·</span>
        <span>ILOILO / PHT</span>
      </div>

      {/* Bottom-right Doto dot-matrix live clock pill */}
      <div className="absolute bottom-3 right-3 sm:right-4 px-2.5 py-1 rounded-[6px] bg-white/80 dark:bg-black/65 backdrop-blur-md border border-black/10 dark:border-white/10 shadow-sm">
        <div className="font-doto font-bold text-[15px] sm:text-[17px] tracking-[0.08em] text-[#4172cc] dark:text-[#8ab2ff] tabular-nums leading-none flex items-baseline gap-1">
          <span>
            {clock.hh}:{clock.mm}:{clock.ss}
          </span>
          <span className="text-[11px] font-mono font-semibold opacity-80">{clock.dayPeriod}</span>
        </div>
      </div>
    </div>
  );
};

export const BlueprintHero: React.FC<BlueprintHeroProps> = ({
  isDark,
  onToggleTheme,
  soundEnabled,
  onToggleSound,
  onOpenCommand,
  onOpenContact,
}) => {
  const { personal, telemetry } = PORTFOLIO_DATA;
  const [now, setNow] = useState(() => new Date());
  const [taglineIdx, setTaglineIdx] = useState(0);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [showPronounce, setShowPronounce] = useState(false);

  useEffect(() => {
    const t = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(t);
  }, []);

  useEffect(() => {
    const rot = window.setInterval(() => {
      setTaglineIdx((prev) => (prev + 1) % personal.taglines.length);
    }, 4600);
    return () => window.clearInterval(rot);
  }, [personal.taglines.length]);

  const activeTagline = useScrambleText(personal.taglines[taglineIdx], 340);
  const clock = formatManilaClock(now);

  const handleSpeakName = () => {
    playTick(soundEnabled, 980);
    setShowPronounce(true);
    window.setTimeout(() => setShowPronounce(false), 2600);
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      try {
        window.speechSynthesis.cancel();
        const utter = new SpeechSynthesisUtterance('Benedict Neil Bacud');
        utter.rate = 0.95;
        window.speechSynthesis.speak(utter);
      } catch {
        // Ignore speech synthesis errors
      }
    }
  };

  const handleCopyEmail = async () => {
    playTick(soundEnabled, 1040);
    try {
      await navigator.clipboard.writeText(personal.email);
      setCopiedEmail(true);
      window.setTimeout(() => setCopiedEmail(false), 2200);
    } catch {
      window.location.href = `mailto:${personal.email}`;
    }
  };

  const telemetryIcons = [Sparkles, Code2, MapPin, Clock, Terminal, GraduationCap];

  return (
    <header id="top" className="w-full">
      {/* 1. Atmospheric Horizon Banner */}
      <AtmosphericHorizonBanner isDark={isDark} clock={clock} />

      <FullBleedDivider />

      {/* 2. Identity Strip */}
      <div className="relative flex items-stretch">
        {/* Desktop Margin Handwritten Callout (outside right rail on wide screens) */}
        <div className="hidden min-[1160px]:flex flex-col items-start absolute -right-[184px] top-2 pointer-events-none select-none opacity-85">
          <span className="font-caveat italic text-[20px] leading-tight text-zinc-500 dark:text-zinc-400">
            press ⌘K to jump
          </span>
          <span className="font-caveat italic text-[17px] leading-tight text-[#6495ED]">
            ← sections &amp; actions
          </span>
        </div>

        {/* Left Avatar Cell with Diagonal Blueprint Hatch */}
        <div className="w-[92px] sm:w-[116px] shrink-0 bg-dashed bp-r flex items-center justify-center p-2.5 sm:p-3">
          <div className="w-[68px] h-[68px] sm:w-[86px] sm:h-[86px] rounded-full border border-black/25 dark:border-white/20 p-[3px] bg-white dark:bg-black shadow-sm overflow-hidden">
            <img
              src={personal.avatar}
              alt={personal.fullName}
              {...({ fetchpriority: 'high' } as React.ImgHTMLAttributes<HTMLImageElement>)}
              width={86}
              height={86}
              className="w-full h-full rounded-full object-cover object-[50%_48%]"
            />
          </div>
        </div>

        {/* Right Utility Bar + Name + Cycling Scramble Tagline */}
        <div className="flex-1 min-w-0 flex flex-col justify-between relative overflow-hidden">
          {/* Subtle Right-Aligned ASCII Telemetry Watermark */}
          <div
            aria-hidden="true"
            className="pointer-events-none select-none absolute right-2 bottom-1 top-10 w-[56%] overflow-hidden opacity-[0.07] dark:opacity-[0.09] font-mono text-[9px] leading-[13px] text-right text-[#6495ED] hidden sm:block"
            style={{
              WebkitMaskImage: 'linear-gradient(to left, black 25%, transparent 100%)',
              maskImage: 'linear-gradient(to left, black 25%, transparent 100%)',
            }}
          >
            {ASCII_MATRIX_LINES.map((line, i) => (
              <div key={i} className="truncate">
                {line}
              </div>
            ))}
          </div>

          {/* Top Utility Controls Row */}
          <div className="bp-b px-3 sm:px-4 py-2 flex items-center justify-between gap-2 relative z-10">
            <span className="font-mono text-[10px] text-zinc-500 dark:text-zinc-500 tracking-tight truncate">
              {personal.handle}
            </span>

            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => {
                  playTick(soundEnabled, 760);
                  onToggleTheme();
                }}
                className="h-7 w-7 rounded-[6px] border border-black/10 dark:border-white/10 bg-zinc-50 hover:bg-zinc-100 dark:bg-[#0d0d10] dark:hover:bg-zinc-900 flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
                aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
                title={isDark ? 'Light mode' : 'Dark mode'}
              >
                {isDark ? <Moon className="w-3.5 h-3.5" /> : <Sun className="w-3.5 h-3.5" />}
              </button>

              <button
                type="button"
                onClick={() => {
                  const next = !soundEnabled;
                  onToggleSound();
                  if (next) playTick(true, 920);
                }}
                className="h-7 w-7 rounded-[6px] border border-black/10 dark:border-white/10 bg-zinc-50 hover:bg-zinc-100 dark:bg-[#0d0d10] dark:hover:bg-zinc-900 flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
                aria-label={soundEnabled ? 'Mute UI sounds' : 'Enable UI sounds'}
                title={soundEnabled ? 'Mute UI clicks' : 'Unmute UI clicks'}
              >
                {soundEnabled ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
              </button>

              <button
                type="button"
                onClick={() => {
                  playTick(soundEnabled, 880);
                  onOpenCommand();
                }}
                className="h-7 px-2 rounded-[6px] border border-black/10 dark:border-white/10 bg-zinc-50 hover:bg-zinc-100 dark:bg-[#0d0d10] dark:hover:bg-zinc-900 inline-flex items-center gap-1 font-mono text-[11px] text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors"
                aria-label="Open command menu"
              >
                <Command className="w-3 h-3" />
                <span>K</span>
              </button>

              <a
                href={personal.cvUrl}
                download="Benedict_Neil_Bacud_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playTick(soundEnabled, 980)}
                className="h-7 px-2.5 rounded-[6px] border border-[#6495ED]/35 bg-[#6495ED]/10 hover:bg-[#6495ED]/20 font-mono text-[11px] font-semibold text-[#4172cc] dark:text-[#8ab2ff] inline-flex items-center gap-1 transition-colors"
              >
                <span>CV.pdf</span>
              </a>
            </div>
          </div>

          {/* Name + Verified Badge + Pronunciation + Scramble Tagline */}
          <div className="px-3.5 sm:px-4 py-3 sm:py-3.5 relative z-10">
            <div className="flex items-center gap-2 flex-wrap">
              <h1 className="text-[18px] sm:text-[23px] font-bold tracking-[-0.025em] text-zinc-900 dark:text-zinc-100 leading-none">
                {personal.name}
              </h1>

              {/* Verified Cornflower Badge */}
              <svg
                viewBox="0 0 20 20"
                aria-label="Verified identity"
                className="w-[17px] h-[17px] text-[#6495ED] shrink-0 fill-current"
              >
                <path d="M10 1.5l2.1 1.4 2.5-.3 1 2.3 2.1 1.3-.6 2.4 1 2.3-1.8 1.8.1 2.5-2.4.6-1.3 2.1-2.5-.5-2.2 1.1-1.9-1.7-2.5.1-.8-2.4-2.1-1.4.8-2.4-.8-2.4 2.1-1.4.8-2.4 2.5.1L10 1.5zm-1.1 10.6l4.6-4.6-1.1-1.1-3.5 3.5-1.7-1.7-1.1 1.1 2.8 2.8z" />
              </svg>

              {/* Pronunciation Audio Trigger */}
              <button
                type="button"
                onClick={handleSpeakName}
                className="text-zinc-400 hover:text-[#6495ED] transition-colors p-0.5 rounded"
                aria-label="Hear name pronunciation"
                title={`Pronounced: ${personal.pronunciation}`}
              >
                <Volume1 className="w-4 h-4" />
              </button>

              {showPronounce && (
                <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-900 border border-black/10 dark:border-white/10 text-zinc-500 dark:text-zinc-400">
                  /{personal.pronunciation}/
                </span>
              )}
            </div>

            <p className="mt-2 font-mono text-[11.5px] sm:text-[12.5px] text-zinc-600 dark:text-zinc-400 leading-snug truncate">
              {activeTagline}
            </p>
          </div>
        </div>
      </div>

      <FullBleedDivider />

      {/* 3. 6-Cell Blueprint Telemetry Grid (3x2 on desktop, 2x3 on mobile) */}
      <div className="grid grid-cols-2 sm:grid-cols-3">
        {telemetry.map((cell, idx) => {
          const Icon = telemetryIcons[idx] || Terminal;
          const isRightEdgeSm = (idx + 1) % 3 === 0;
          const isBottomRowSm = idx >= 3;

          return (
            <div
              key={cell.label}
              className={`p-3.5 sm:p-4 flex flex-col justify-between min-h-[96px] sm:min-h-[104px] ${
                idx % 2 === 0 ? 'max-sm:bp-r' : ''
              } ${!isRightEdgeSm ? 'sm:bp-r' : ''} ${idx < 4 ? 'max-sm:bp-b' : ''} ${
                !isBottomRowSm ? 'sm:bp-b' : ''
              }`}
            >
              <div className="flex items-center justify-between gap-2 mb-2.5">
                <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-zinc-500 dark:text-zinc-400">
                  <Icon className="w-3.5 h-3.5 text-zinc-400 dark:text-zinc-500 shrink-0" />
                  <span className="truncate">{cell.label}</span>
                </span>

                {cell.pill && (
                  <span
                    className={`font-mono text-[10px] px-1.5 py-0.5 rounded font-medium shrink-0 ${
                      cell.pillTone === 'emerald'
                        ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20'
                        : 'bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border border-black/5 dark:border-white/10'
                    }`}
                  >
                    {cell.pill}
                  </span>
                )}
              </div>

              <div>
                <div className="flex items-center gap-1.5 text-[13px] sm:text-[14px] font-bold tracking-tight text-zinc-900 dark:text-zinc-100 tabular-nums truncate">
                  {cell.dot && (
                    <span className="relative flex h-2 w-2 shrink-0">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                    </span>
                  )}
                  <span className="truncate">{cell.isClock ? clock.short : cell.value}</span>
                </div>
                <div className="font-mono text-[10.5px] sm:text-[11px] text-zinc-500 dark:text-zinc-400 mt-0.5 truncate">
                  {cell.sub}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <FullBleedDivider />

      {/* 4. Let's Connect Action Bar */}
      <div className="relative px-4 sm:px-5 py-4 sm:py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        {/* Desktop Margin Handwritten Callout (outside left rail on wide screens) */}
        <div className="hidden min-[1160px]:flex flex-col items-end absolute -left-[188px] top-4 pointer-events-none select-none opacity-85">
          <span className="font-caveat italic text-[20px] leading-tight text-zinc-500 dark:text-zinc-400">
            open for OJT &amp; roles
          </span>
          <span className="font-caveat italic text-[17px] leading-tight text-[#6495ED]">
            say hi or grab my CV →
          </span>
        </div>

        <div>
          <h2 className="text-[15px] sm:text-[16px] font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            Let&apos;s Connect
          </h2>
          <p className="text-[12px] sm:text-[13px] text-zinc-500 dark:text-zinc-400 mt-0.5">
            Available for internships, contract backend work, and security audits.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <button
            type="button"
            onClick={() => {
              playTick(soundEnabled, 920);
              onOpenContact();
            }}
            className="btn-bp-primary h-9 px-4 rounded-[5px] text-white text-[12.5px] font-semibold inline-flex items-center gap-2 transition-transform duration-150 hover:scale-[1.02] active:scale-[0.99]"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Send a message</span>
          </button>

          <button
            type="button"
            onClick={handleCopyEmail}
            className="btn-bp-secondary h-9 px-3.5 rounded-[5px] bg-zinc-50 hover:bg-zinc-100 dark:bg-[#0d0d10] dark:hover:bg-[#15151a] border border-black/10 dark:border-white/10 text-zinc-800 dark:text-zinc-200 text-[12.5px] font-medium inline-flex items-center gap-2 transition-colors"
          >
            {copiedEmail ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-500" />
                <span className="font-mono text-[11.5px]">Copied email</span>
              </>
            ) : (
              <>
                <Mail className="w-3.5 h-3.5 text-zinc-500 dark:text-zinc-400" />
                <span>Copy email</span>
              </>
            )}
          </button>
        </div>
      </div>

      <FullBleedDivider />

      {/* 5. 5-Column Social & Proof Bar */}
      <nav aria-label="Quick links" className="grid grid-cols-2 sm:grid-cols-5">
        {[
          {
            label: 'GitHub',
            href: personal.github,
            icon: Github,
            external: true,
          },
          {
            label: 'PR #8984',
            href: 'https://github.com/mealie-recipes/mealie/pull/8984',
            icon: GitPullRequest,
            external: true,
          },
          {
            label: 'PR #30158',
            href: 'https://github.com/calcom/cal.diy/pull/30158',
            icon: GitPullRequest,
            external: true,
          },
          {
            label: 'Email',
            href: `mailto:${personal.email}`,
            icon: Mail,
            external: false,
          },
          {
            label: 'Resume',
            href: personal.cvUrl,
            icon: FileText,
            external: true,
          },
        ].map((item, idx) => {
          const Icon = item.icon;
          return (
            <a
              key={item.label}
              href={item.href}
              target={item.external ? '_blank' : undefined}
              rel={item.external ? 'noopener noreferrer' : undefined}
              onClick={() => playTick(soundEnabled, 840)}
              className={`h-11 px-3 flex items-center justify-center gap-2 font-mono text-[12px] font-medium text-zinc-600 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-50 dark:hover:bg-white/[0.03] transition-colors ${
                idx < 4 ? 'sm:bp-r' : ''
              } ${idx % 2 === 0 && idx < 4 ? 'max-sm:bp-r' : ''} ${idx < 4 ? 'max-sm:bp-b' : ''}`}
            >
              <Icon className="w-3.5 h-3.5 text-zinc-400 dark:text-zinc-400 shrink-0" />
              <span>{item.label}</span>
            </a>
          );
        })}
      </nav>
    </header>
  );
};
