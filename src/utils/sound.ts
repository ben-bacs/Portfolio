import { useEffect, useState } from 'react';

let sharedAudioCtx: AudioContext | null = null;

export function playTick(enabled: boolean, pitch = 880) {
  if (!enabled || typeof window === 'undefined') return;
  try {
    const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioCtx) return;
    if (!sharedAudioCtx) {
      sharedAudioCtx = new AudioCtx();
    }
    if (sharedAudioCtx.state === 'suspended') {
      sharedAudioCtx.resume();
    }
    const osc = sharedAudioCtx.createOscillator();
    const gain = sharedAudioCtx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(pitch, sharedAudioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(pitch * 0.45, sharedAudioCtx.currentTime + 0.024);

    gain.gain.setValueAtTime(0.035, sharedAudioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, sharedAudioCtx.currentTime + 0.025);

    osc.connect(gain);
    gain.connect(sharedAudioCtx.destination);
    osc.start();
    osc.stop(sharedAudioCtx.currentTime + 0.026);
  } catch {
    // Ignore audio context autoplay restrictions
  }
}

const SCRAMBLE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/#*+-';

export function useScrambleText(target: string, durationMs = 320): string {
  const [display, setDisplay] = useState(target);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplay(target);
      return;
    }

    let frame = 0;
    const totalFrames = Math.max(8, Math.round(durationMs / 24));
    const timer = window.setInterval(() => {
      frame += 1;
      const progress = frame / totalFrames;
      const locked = Math.floor(progress * target.length);
      let next = '';
      for (let i = 0; i < target.length; i += 1) {
        const ch = target[i];
        if (ch === ' ' || i < locked) {
          next += ch;
        } else {
          next += SCRAMBLE_CHARS[(i * 7 + frame * 3) % SCRAMBLE_CHARS.length];
        }
      }
      setDisplay(next);
      if (frame >= totalFrames) {
        window.clearInterval(timer);
        setDisplay(target);
      }
    }, 24);

    return () => window.clearInterval(timer);
  }, [target, durationMs]);

  return display;
}
