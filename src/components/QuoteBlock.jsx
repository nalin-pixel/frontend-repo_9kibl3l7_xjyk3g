import React, { useMemo } from 'react';

const QUOTES = [
  'Take a breath. The world can wait.',
  'Small pauses create big clarity.',
  'You are not your feed. Return to yourself.',
  'Look up. Your life is happening off-screen.',
  'Breathe in. Breathe out. Begin again.',
  'Protect your attention like it protects you.',
];

function QuoteBlock() {
  const quote = useMemo(() => {
    const idx = Math.floor(Math.random() * QUOTES.length);
    return QUOTES[idx];
  }, []);

  return (
    <blockquote className="relative rounded-xl bg-white/5 p-6 border border-white/10">
      <p className="text-lg leading-relaxed text-white/90">“{quote}”</p>
      <span className="mt-3 block text-xs uppercase tracking-widest text-white/50">Mindful reminder</span>
    </blockquote>
  );
}

export default QuoteBlock;
