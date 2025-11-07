import React from 'react';
import HeroSection from './components/HeroSection.jsx';
import ScrollTimer from './components/ScrollTimer.jsx';
import QuoteBlock from './components/QuoteBlock.jsx';
import BreakPanel from './components/BreakPanel.jsx';

function App() {
  return (
    <div className="min-h-screen w-full text-white bg-neutral-950 selection:bg-yellow-300/30 selection:text-yellow-100">
      <HeroSection />

      <main className="mx-auto max-w-4xl px-4 sm:px-6 md:px-8 -mt-16 space-y-10">
        <section className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 sm:p-8 shadow-xl">
          <div className="grid gap-8 sm:grid-cols-2 items-center">
            <ScrollTimer />
            <QuoteBlock />
          </div>
        </section>

        <BreakPanel />
      </main>

      <footer className="mt-16 py-10 text-center text-sm text-white/60">
        Built to help you pause, breathe, and reset.
      </footer>
    </div>
  );
}

export default App;
