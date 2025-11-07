import React, { useEffect, useMemo, useRef, useState } from 'react';

const NEXT_STEPS = [
  'Go stretch for 2 minutes',
  'Drink a glass of water',
  'Step outside for fresh air',
  'Send a kind message to a friend',
  'Tidy a small area of your space',
];

function CircleBreath({ progress }) {
  // progress: 0..1 over one minute
  const phase = useMemo(() => {
    const total = 4 + 7 + 8; // box breathing variant 4-7-8
    const t = (progress * total) % total;
    if (t < 4) return { label: 'Inhale', p: t / 4 };
    if (t < 11) return { label: 'Hold', p: (t - 4) / 7 };
    return { label: 'Exhale', p: (t - 11) / 8 };
  }, [progress]);

  const scale = 0.8 + 0.4 * (phase.label === 'Inhale' ? phase.p : phase.label === 'Hold' ? 1 : 1 - phase.p);

  return (
    <div className="flex flex-col items-center justify-center">
      <div
        className="transition-transform duration-300 ease-out rounded-full bg-gradient-to-br from-yellow-300/80 to-amber-400/70 shadow-[0_0_60px_rgba(250,204,21,0.25)]"
        style={{ width: 160, height: 160, transform: `scale(${scale})` }}
        aria-hidden
      />
      <div className="mt-4 text-white/80 tracking-wide">{phase.label}</div>
    </div>
  );
}

function BreakPanel() {
  const [running, setRunning] = useState(false);
  const [progress, setProgress] = useState(0); // 0..1 over 60s
  const [done, setDone] = useState(false);
  const [suggestion, setSuggestion] = useState('');
  const rafRef = useRef(0);
  const startRef = useRef(0);

  useEffect(() => {
    if (!running) return;
    setDone(false);
    setSuggestion('');
    startRef.current = performance.now();

    const step = (now) => {
      const elapsed = (now - startRef.current) / 1000; // s
      const p = Math.min(elapsed / 60, 1);
      setProgress(p);
      if (p < 1) {
        rafRef.current = requestAnimationFrame(step);
      } else {
        setDone(true);
        setRunning(false);
        const idx = Math.floor(Math.random() * NEXT_STEPS.length);
        setSuggestion(NEXT_STEPS[idx]);
      }
    };

    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, [running]);

  return (
    <section className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 sm:p-8 shadow-xl">
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-10">
        <div className="flex-1">
          <h3 className="text-2xl font-semibold">Take a Break</h3>
          <p className="mt-2 text-white/70 max-w-prose">
            Press the button to begin a 1-minute guided breathing reset. Follow the gentle pulse.
          </p>

          <button
            className="mt-5 inline-flex items-center justify-center rounded-full bg-yellow-300 text-black px-6 py-3 font-medium shadow hover:brightness-95 active:translate-y-px transition"
            onClick={() => setRunning(true)}
            disabled={running}
          >
            {running ? 'In progress…' : 'Start 1‑minute Breathing'}
          </button>

          {done && (
            <div className="mt-6 text-green-200/90">
              Nice work. Next step: <span className="font-medium text-white">{suggestion}</span>
            </div>
          )}
        </div>

        <div className="w-full sm:w-auto">
          <CircleBreath progress={running ? progress : 0} />
          {running && (
            <div className="mt-3 text-center text-sm text-white/60">{Math.round((1 - progress) * 60)}s remaining</div>
          )}
        </div>
      </div>
    </section>
  );
}

export default BreakPanel;
