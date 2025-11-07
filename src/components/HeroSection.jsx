import React from 'react';
import Spline from '@splinetool/react-spline';

function HeroSection() {
  return (
    <header className="relative h-[60vh] sm:h-[70vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/qMOKV671Z1CM9yS7/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Overlay for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/70" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <p className="uppercase tracking-widest text-xs sm:text-sm text-yellow-300/80">ScrollBreak</p>
        <h1 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight">
          Scroll less. Live more.
        </h1>
        <p className="mt-4 max-w-2xl text-white/70">
          A calm space to pause the doomscroll and return to what matters.
        </p>
      </div>
    </header>
  );
}

export default HeroSection;
