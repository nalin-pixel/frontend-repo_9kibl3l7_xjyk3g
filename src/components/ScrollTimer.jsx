import React, { useEffect, useState } from 'react';

// Simulated scrolling time for today using localStorage
function ScrollTimer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const key = `scrollbreak-seconds-${new Date().toDateString()}`;
    const saved = Number(localStorage.getItem(key) || 0);
    const simulatedStart = Math.min(saved || Math.floor(10 * 60 + Math.random() * 40 * 60), 3 * 60 * 60); // 10-50 min, capped 3h
    setSeconds(simulatedStart);

    const interval = setInterval(() => {
      setSeconds((s) => {
        const next = s + 1;
        localStorage.setItem(key, String(next));
        return next;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const hours = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  const parts = [
    hours > 0 ? `${hours}h` : null,
    mins > 0 ? `${mins}m` : '0m',
    `${secs}s`,
  ].filter(Boolean);

  return (
    <div className="text-center sm:text-left">
      <h2 className="text-xl text-white/70">You've been scrolling today</h2>
      <div className="mt-2 text-4xl sm:text-5xl font-semibold tracking-tight">
        {parts.join(' ')}
      </div>
      <p className="mt-2 text-sm text-white/60">Gentle reminder: attention is precious.</p>
    </div>
  );
}

export default ScrollTimer;
